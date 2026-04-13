import fs from 'fs';
import https from 'https';

const downloads = [
  { url: 'https://cdn.muscleandstrength.com/store/media/catalog/product/g/o/gold_standard_100_whey_-_5lbs_-_double_rich_chocolate_1_1_2.jpg', file: 'supp_on.jpg' },
  { url: 'https://cdn.muscleandstrength.com/store/media/catalog/product/c/4/c4_original_chd_1.jpg', file: 'supp_c4.jpg' },
  { url: 'https://cdn.muscleandstrength.com/store/media/catalog/product/a/n/animal_pak_44_1.jpg', file: 'supp_animal.jpg' },
  { url: 'https://cdn.muscleandstrength.com/store/media/catalog/product/i/s/iso100_gpc_5lb.jpg', file: 'supp_iso100.jpg' },
  { url: 'https://cdn.muscleandstrength.com/store/media/catalog/product/a/m/aminox_-_30_servings_-_watermelon_2.jpg', file: 'supp_aminox.jpg' },
  { url: 'https://cdn.muscleandstrength.com/store/media/catalog/product/s/y/syntha-6_-_48_servings_-_chocolate_milkshake_1_2.jpg', file: 'supp_syntha.jpg' },
  { url: 'https://cdn.muscleandstrength.com/store/media/catalog/product/u/n/universal_creatine_reserve_fruit_punch.jpg', file: 'supp_ena.jpg' },
  { url: 'https://cdn.muscleandstrength.com/store/media/catalog/product/m/a/magnesium_citrate_120_tabs.jpg', file: 'supp_magnesio.jpg' }, // fallback mapped to glutamina or others if needed
  { url: 'https://cdn.muscleandstrength.com/store/media/catalog/product/1/0/100_glutamine500.jpg', file: 'supp_glutamina.jpg' },
  { url: 'https://cdn.muscleandstrength.com/store/media/catalog/product/n/i/nitro_tech_4lb_-_milk_chocolate.jpg', file: 'supp_star.jpg' }
];

async function run() {
  for (let dl of downloads) {
    try {
      const resp = await fetch(dl.url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
      });
      if (resp.ok) {
         const buffer = await resp.arrayBuffer();
         fs.writeFileSync(`public/assets/images/products/${dl.file}`, Buffer.from(buffer));
         console.log(`Success: ${dl.file}`);
      } else {
         console.log(`Failed HTTP ${resp.status}: ${dl.url}`);
      }
    } catch(e) {
      console.log(`Error on ${dl.file}:`, e.message);
    }
  }
}
run();
