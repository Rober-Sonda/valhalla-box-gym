import sharp from 'sharp';
import fs from 'fs';

async function convert() {
  const file = 'public/assets/images/facilities/img_1.jpg';
  try {
    await sharp(file).jpeg().toFile('public/assets/images/facilities/img_1_new.jpg');
    console.log("Success");
  } catch (e) {
    console.error(e);
  }
}

convert();
