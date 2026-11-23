import fs from 'node:fs';
import path from 'node:path';

/**
 * Reads image dimensions from local files in `public/` at build time
 * without external dependencies. Returns true if naturalHeight > naturalWidth.
 */
export function isPortraitImage(imageUrl?: string, fallbackAspectRatio?: string): boolean {
  if (imageUrl && imageUrl.startsWith('/')) {
    try {
      const filePath = path.join(process.cwd(), 'public', imageUrl.replace(/^\/+/, ''));
      if (fs.existsSync(filePath)) {
        const buf = fs.readFileSync(filePath);
        const size = readImageDimensions(buf);
        if (size && size.w > 0 && size.h > 0) {
          return size.h > size.w;
        }
      }
    } catch {
      // Fall through to aspectRatio fallback
    }
  }

  if (fallbackAspectRatio === '9:16' || fallbackAspectRatio === '2:3') {
    return true;
  }
  return false;
}

function readImageDimensions(buf: Buffer): { w: number; h: number } | null {
  if (buf.length < 24) return null;

  // PNG
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) {
    return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  }

  // WebP
  if (buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') {
    const chunk = buf.toString('ascii', 12, 16);
    if (chunk === 'VP8X' && buf.length >= 30) {
      return { w: 1 + buf.readUIntLE(24, 3), h: 1 + buf.readUIntLE(27, 3) };
    }
    if (chunk === 'VP8 ' && buf.length >= 30) {
      return { w: buf.readUInt16LE(26) & 0x3fff, h: buf.readUInt16LE(28) & 0x3fff };
    }
    if (chunk === 'VP8L' && buf.length >= 25) {
      const b = buf.readUInt32LE(21);
      return { w: (b & 0x3fff) + 1, h: ((b >> 14) & 0x3fff) + 1 };
    }
  }

  // JPEG
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i + 9 < buf.length) {
      if (buf[i] !== 0xff) {
        i++;
        continue;
      }
      const marker = buf[i + 1];
      if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2) {
        return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
      }
      if (marker === 0xd9 || marker === 0xda) break;
      const segLen = buf.readUInt16BE(i + 2);
      if (segLen < 2) break;
      i += 2 + segLen;
    }
  }

  return null;
}
