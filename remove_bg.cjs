const { Jimp } = require('jimp');
const fs = require('fs');

const files = [
  'supp_on.jpg', 'supp_ena.jpg', 'supp_c4.jpg', 'supp_animal.jpg', 
  'supp_syntha.jpg', 'supp_iso100.jpg', 'supp_star.jpg', 
  'supp_glutamina.jpg', 'supp_aminox.jpg'
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
      
      const newPath = path.replace('.jpg', '.png');
      await image.write(newPath); // Note: Jimp 1.6 removes writeAsync, using write or writeAsync depends on version. If write returns promise, use it.
      console.log(`Saved ${newPath}`);
      
    } catch(err) {
      console.log(`Failed on ${file}:`, err.message);
    }
  }
}

processImages();
