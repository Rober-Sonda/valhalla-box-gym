const sharp = require('sharp');
const fs = require('fs');

// We group the images as discussed
const groups = [
  { prefix: 'real_epic_comedor', ids: [1, 2, 3, 4] },
  { prefix: 'real_epic_thor', ids: [6, 12, 17] }, // punch bags
  { prefix: 'real_epic_plates', ids: [21] },
  { prefix: 'real_epic_bifrost', ids: [23] }
];

async function createVignette(width, height) {
  // Create an SVG vignette mask
  const svg = `
    <svg width="${width}" height="${height}">
      <defs>
        <radialGradient id="vignette" cx="50%" cy="50%" r="50%">
          <stop offset="50%" stop-color="black" stop-opacity="0" />
          <stop offset="100%" stop-color="black" stop-opacity="0.8" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#vignette)" />
    </svg>
  `;
  return Buffer.from(svg);
}

async function enhanceImages() {
  for (const group of groups) {
    let index = 1;
    for (const id of group.ids) {
      const inputPath = `public/assets/images/facilities/img_${id}.jpg`;
      const outputPath = `public/assets/images/facilities/${group.prefix}_${index}.jpg`;
      
      if (!fs.existsSync(inputPath)) {
        console.log(`Skipping img_${id}.jpg - not found`);
        continue;
      }

      console.log(`Enhancing img_${id}.jpg -> ${group.prefix}_${index}.jpg`);
      
      try {
        const metadata = await sharp(inputPath).metadata();
        const vignetteBuffer = await createVignette(metadata.width, metadata.height);

        await sharp(inputPath)
          // 1. Color Grading: more contrast, lower brightness, slightly desaturated, epic gamma 
          .modulate({
            brightness: 0.95,
            saturation: 0.85
          })
          .linear(1.15, -5)
          .gamma(1.1)
          .tint({ r: 20, g: 25, b: 35 }) // subtle blueish Nordic tint to shadows
          // 2. Composite the vignette to emulate dramatic / smoky lighting edges
          .composite([{ input: vignetteBuffer, blend: 'multiply' }])
          .jpeg({ quality: 95 })
          .toFile(outputPath);
          
      } catch (e) {
        console.error(`Failed to process img_${id}.jpg:`, e.message);
      }
      index++;
    }
  }
}

enhanceImages();
