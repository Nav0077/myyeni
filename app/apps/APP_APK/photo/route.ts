import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'app', 'apps', 'APPS_APK', 'automute_logo.png');
    const data = fs.readFileSync(filePath);
    return new Response(data, {
      headers: {
        'Content-Type': 'image/png',
        'Content-Length': data.length.toString(),
        'Content-Disposition': 'attachment; filename="photo.png"',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (e) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
