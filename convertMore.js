import fs from 'fs';
import heicDecode from 'heic-decode';
import jpegJs from 'jpeg-js';

const imgs = [2, 3, 4];

async function convertAll() {
  for (const i of imgs) {
    const file = `public/assets/images/facilities/img_${i}.jpg`;
    console.log(`Converting ${file}...`);
    try {
      const buffer = fs.readFileSync(file);
      // Ensure it is actually an HEIC first by checking magic bytes
      const isHeic = buffer.subarray(4, 8).toString() === 'ftyp';
      if (!isHeic) {
        console.log(`File ${file} does not look like HEIC, skipping...`);
        // continue;
      }

      const { width, height, data } = await heicDecode({ buffer });
      
      const rawImageData = { data, width, height };
      const jpegImageData = jpegJs.encode(rawImageData, 80); // 80% quality
      
      fs.writeFileSync(`public/assets/images/facilities/img_${i}_new.jpg`, jpegImageData.data);
      fs.rmSync(file);
      fs.renameSync(`public/assets/images/facilities/img_${i}_new.jpg`, file);
      
      console.log(`Converted ${file} to JPEG successfully.`);
    } catch (e) {
      console.error(`Error with ${file}:`, e.message);
    }
  }
}

convertAll();
