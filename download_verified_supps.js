import fs from 'fs';

const supplies = {
  "supp_on.jpg": "https://www.optimumnutrition.com/cdn/shop/files/on-1111976_Image_01.png?v=1756452646&width=2000",
  "supp_ena.jpg": "https://www.enasport.com/cdn/shop/files/CreaPure_2.png?v=1761763735&width=2048",
  "supp_c4.jpg": "https://cellucor.com/cdn/shop/products/C4-Original-30-Fruit-Punch-1_800x.png?v=1658418349",
  "supp_animal.jpg": "https://www.animalpak.com/cdn/shop/products/an-2210080_Image_01_800x.png?v=1668608828",
  "supp_syntha.jpg": "https://www.gobsn.com/cdn/shop/products/SY6_5_800x.png?v=1664483734",
  "supp_iso100.jpg": "https://dymatize.ie/cdn/shop/products/ISO100_5lbs_GourmetVanilla_RENDER_1024x1024.png?v=1612741548",
  "supp_star.jpg": "https://starnutrition.com.ar/cdn/shop/files/platinum_whey_2lb_chocolate_465406ca-971c-42b7-873b-c567cf172a6b.png?v=1711370077&width=2048",
  "supp_glutamina.jpg": "https://acdn.mitiendanube.com/stores/001/162/488/products/glutamina-micronizada-sp-nutrition-300gr1-5a3d76b17c24479e5b16135832389178-1024-1024.jpg",
  "supp_aminox.jpg": "https://www.gobsn.com/cdn/shop/products/AMX_FF_FR_30_servings_800x.png?v=1664483734"
};

async function download() {
  for (const [filename, link] of Object.entries(supplies)) {
    try {
      const resp = await fetch(link, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      if (resp.ok) {
        const buffer = await resp.arrayBuffer();
        fs.writeFileSync(`public/assets/images/products/${filename}`, Buffer.from(buffer));
        console.log(`Saved: ${filename}`);
      } else {
        console.log(`Failed HTTP ${resp.status} on ${filename}`);
      }
    } catch(err) {
      console.log(`Error on ${filename}:`, err.message);
    }
  }
}

download();
