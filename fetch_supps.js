import fs from 'fs';

const queries = [
    {q: "Proteina Optimum Nutrition Gold Standard Whey", file: "supp_on.jpg"},
    {q: "Creatina Monohidrato ENA", file: "supp_ena.jpg"},
    {q: "Pre entreno c4 cellucor", file: "supp_c4.jpg"},
    {q: "Animal Pak Universal", file: "supp_animal.jpg"},
    {q: "Citrato de Magnesio", file: "supp_magnesio.jpg"},
    {q: "Dymatize ISO 100", file: "supp_iso100.jpg"},
    {q: "Whey Protein Star Nutrition", file: "supp_star.jpg"},
    {q: "Glutamina SPX", file: "supp_glutamina.jpg"},
    {q: "bsn amino x", file: "supp_aminox.jpg"}
];

async function run() {
    for (let item of queries) {
        try {
            const url = `https://listado.mercadolibre.com.ar/${item.q.replace(/ /g, '-')}`;
            const res = await fetch(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
                }
            });
            const text = await res.text();
            const match = text.match(/<img[^>]+class="ui-search-result-image__image"[^>]+src="([^"]+)"/i) || text.match(/<img[^>]+class="ui-search-result-image__image"[^>]+data-src="([^"]+)"/i);
            
            if (match && match[1]) {
                const imgUrl = match[1].replace('I.jpg', 'O.jpg');
                const imgRes = await fetch(imgUrl, {
                    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
                });
                const buffer = await imgRes.arrayBuffer();
                fs.writeFileSync(`public/assets/images/products/${item.file}`, Buffer.from(buffer));
                console.log(`Downloaded ${item.file}`);
            } else {
                console.log(`No image found for ${item.q}`);
            }
        } catch (e) {
            console.log(`Error on ${item.q}:`, e.message);
        }
    }
}
run();
