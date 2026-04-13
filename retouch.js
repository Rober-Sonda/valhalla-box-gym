import sharp from 'sharp';
import fs from 'fs';

const images = [1, 2, 3, 4, 6, 12, 17, 21, 23];

async function processImages() {
  for (const idx of images) {
    const inputPath = `public/assets/images/facilities/img_${idx}.jpg`;
    const outputPath = `public/assets/images/facilities/retocada_${idx}.jpg`;
    
    if (!fs.existsSync(inputPath)) {
      console.log(`Passeing index ${idx}, not found`);
      continue;
    }

    try {
      await sharp(inputPath)
        .modulate({
          brightness: 0.9,     // slightly darker
          saturation: 0.85     // slightly desaturated
        })
        .linear(1.2, -15)      // increase contrast
        .gamma(1.2)            // rich dark tones
        .tint({ r: 24, g: 30, b: 40 }) // slight Nordic steel blue tint in shadows
        .jpeg({ quality: 90 })
        .toFile(outputPath);
      console.log(`Retocada: ${idx}`);
    } catch (e) {
      console.error(`Error en ${idx}:`, e.message);
    }
  }
}

processImages();
