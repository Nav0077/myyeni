import fs from 'fs';
import path from 'path';

type AppMeta = {
  title: string;
  description?: string;
};

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function safeJSONParse<T>(content: string, fallback: T): T {
  try {
    return JSON.parse(content) as T;
  } catch {
    return fallback;
  }
}

export default async function AppsPage() {
  const appsDir = path.join(process.cwd(), 'public', 'apps');
  const manifestPath = path.join(appsDir, 'manifest.json');

  let manifest: Record<string, AppMeta> = {};
  if (fs.existsSync(manifestPath)) {
    const raw = fs.readFileSync(manifestPath, 'utf8');
    manifest = safeJSONParse<Record<string, AppMeta>>(raw, {});
  }

  type FileEntry = { name: string; size: number; mtime: Date };
  let files: FileEntry[] = [];
  try {
    if (fs.existsSync(appsDir)) {
      const names = fs
        .readdirSync(appsDir)
        .filter((n) => !n.startsWith('.') && n !== 'manifest.json');
      files = names
        .map((name) => {
          const stat = fs.statSync(path.join(appsDir, name));
          return { name, size: stat.size, mtime: stat.mtime };
        })
        .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());
    }
  } catch (err) {
    console.error('Failed to read apps directory:', err);
  }

  const cards = files.map(({ name, size, mtime }) => {
    const meta = manifest[name];
    const title = meta?.title || name.replace(/\.[^/.]+$/, '');
    const description = meta?.description || 'No description provided.';
    const href = `/apps/${encodeURIComponent(name)}`;
    return { name, title, description, href, size, mtime };
  });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-600 dark:text-blue-400">MYYENI Apps</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Upload applications and share them for users to download securely.
        </p>

        {/* Upload Card */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Upload a new app</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Accepted files: any type. Files are served from the public/apps directory.
          </p>
          <form action="/api/upload" method="POST" encType="multipart/form-data" className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm mb-1">Title</label>
              <input name="title" placeholder="My App" className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2" />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm mb-1">Description</label>
              <textarea name="description" placeholder="Short description about the app" className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2" rows={3} />
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <input
                type="file"
                name="file"
                required
                className="block w-full text-sm text-gray-900 dark:text-gray-100 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-gray-100"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
              >
                Upload
              </button>
            </div>
          </form>
        </div>

        {/* Apps List */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Available Downloads</h2>
          {cards.length === 0 ? (
            <div className="text-gray-600 dark:text-gray-400">No apps uploaded yet. Be the first to upload.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map(({ name, title, description, href, size, mtime }) => (
                <div key={name} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col">
                  <h3 className="text-lg font-semibold mb-1 break-words">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 break-words">{description}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{formatBytes(size)} • {new Date(mtime).toLocaleString()}</p>
                  <div className="mt-4 flex gap-3">
                    <a
                      href={`${href}`}
                      download
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                    >
                      Download
                    </a>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                      Open
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
