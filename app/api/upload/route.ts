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

    return NextResponse.json({ success: true, path: `/apps/${safeName}` });
  } catch (err: any) {
    console.error('Upload error:', err);
    return NextResponse.json({ error: 'Upload failed', detail: err?.message }, { status: 500 });
  }
}
