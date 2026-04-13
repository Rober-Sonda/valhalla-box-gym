const { Jimp } = require('jimp');

async function checkImage() {
  const image = await Jimp.read('C:\\Users\\ROBER\\.gemini\\antigravity\\brain\\f596ce76-378c-4016-bf56-4c22f72e144d\\media__1776116850726.png');
  console.log(`Has alpha: ${image.hasAlpha()}`);
  let opaqueCount = 0;
  let semiCount = 0;
  let transparentCount = 0;
  
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const a = this.bitmap.data[idx + 3];
    if (a === 255) opaqueCount++;
    else if (a === 0) transparentCount++;
    else semiCount++;
  });
  
  console.log(`Opaque: ${opaqueCount}, Transparent: ${transparentCount}, Semi: ${semiCount}`);
}

checkImage();
