const { Jimp } = require('jimp');
const fs = require('fs');

const files = [
  'new_ena.png',
  'new_protein.png',
  'new_performax.png',
  'new_nitro.png'
];

async function processImages() {
  for (let file of files) {
    const path = `public/assets/images/products/${file}`;
    console.log(`Processing ${path}...`);
    try {
      if (!fs.existsSync(path)) {
         console.log(`File missing: ${path}`);
         continue;
      }
      const image = await Jimp.read(path);
      
      image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];
        
        // Define white threshold
        if (r > 240 && g > 240 && b > 240) {
          this.bitmap.data[idx + 3] = 0; // Transparent
        }
      });
      
      await image.write(path);
      console.log(`Saved ${path} without background`);
      
    } catch(err) {
      console.log(`Failed on ${file}:`, err.message);
    }
  }
}

processImages();
