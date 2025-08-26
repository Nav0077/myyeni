import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
    }

    const formData = await req.formData();
    const file = formData.get('file');
    const titleRaw = formData.get('title');
    const descriptionRaw = formData.get('description');
    const title = typeof titleRaw === 'string' ? titleRaw.trim() : '';
    const description = typeof descriptionRaw === 'string' ? descriptionRaw.trim() : '';

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // @ts-ignore - File in Next edge/node has arrayBuffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = path.join(process.cwd(), 'public', 'apps');
    fs.mkdirSync(uploadDir, { recursive: true });

    const safeName = (file as any).name?.replace(/[^a-zA-Z0-9._-]/g, '_') || `upload_${Date.now()}`;
    const filePath = path.join(uploadDir, safeName);

    fs.writeFileSync(filePath, buffer);

    // Update manifest.json with metadata
    const manifestPath = path.join(uploadDir, 'manifest.json');
    let manifest: Record<string, { title: string; description?: string }> = {};
    if (fs.existsSync(manifestPath)) {
      try {
        const raw = fs.readFileSync(manifestPath, 'utf8');
        manifest = JSON.parse(raw);
      } catch {
        manifest = {};
      }
    }
    const defaultTitle = (title && title.length > 0) ? title : safeName.replace(/\.[^/.]+$/, '');
    manifest[safeName] = { title: defaultTitle, description };
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

    // Redirect back to the Apps page
    return NextResponse.redirect(new URL('/apps', req.url));
  } catch (err: any) {
    console.error('Upload error:', err);
    return NextResponse.json({ error: 'Upload failed', detail: err?.message }, { status: 500 });
  }
}
