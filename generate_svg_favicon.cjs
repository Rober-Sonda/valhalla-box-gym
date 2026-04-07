const fs = require('fs');
const path = require('path');

try {
    // 1. Get the latest PNG from the artifact directory
    const dir = 'C:\\Users\\ROBER\\.gemini\\antigravity\\brain\\9122f8dc-82c4-4f93-b077-3fc2857cc71c';
    const files = fs.readdirSync(dir)
        .filter(f => f.endsWith('.png'))
        .map(f => ({ name: f, time: fs.statSync(path.join(dir, f)).mtime.getTime() }))
        .sort((a, b) => b.time - a.time);

    if (files.length === 0) {
        throw new Error("No artifact PNG found");
    }

    const latestPngPath = path.join(dir, files[0].name);
    console.log("Usando imagen:", latestPngPath);

    const pngData = fs.readFileSync(latestPngPath);

    // 2. Read PNG Width and Height from IHDR chunk (starts at offset 16 in a standard PNG)
    let width = 0, height = 0;
    // signature is 8 bytes, IHDR length is 4 bytes, chunk type is 4 bytes -> index 16
    if (pngData.toString('ascii', 12, 16) === 'IHDR') {
        width = pngData.readUInt32BE(16);
        height = pngData.readUInt32BE(20);
    } else {
        // fallback generic values if somehow it's not a standard PNG
        width = 1920; 
        height = 1080;
    }
    
    console.log(`Dimensiones de imagen: ${width}x${height}`);

    // 3. Compute 1:1 ViewBox centered
    const size = Math.min(width, height);
    const offsetX = Math.floor((width - size) / 2);
    const offsetY = Math.floor((height - size) / 2);

    const base64Data = pngData.toString('base64');
    
    // We add a subtle white glow/drop-shadow for dark themes, and apply 1:1 viewbox cropping
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${offsetX} ${offsetY} ${size} ${size}">
  <style>
    @media (prefers-color-scheme: dark) {
      .logo {
        filter: drop-shadow(0px 0px ${Math.floor(size * 0.05)}px rgba(255, 255, 255, 0.5)) drop-shadow(0px 0px ${Math.floor(size * 0.02)}px rgba(255, 255, 255, 1));
      }
    }
  </style>
  <image class="logo" href="data:image/png;base64,${base64Data}" width="${width}" height="${height}" />
</svg>`;

    const svgDst = 'c:\\src\\valhalla-box-gym\\public\\favicon.svg';
    fs.writeFileSync(svgDst, svgContent);
    console.log('SVG Favicon generado en:', svgDst);
} catch (err) {
    console.error(err);
}
