import requests
from bs4 import BeautifulSoup

queries = [
    ("Proteina Optimum Nutrition Gold Standard Whey", "supp_on.jpg"),
    ("Creatina Monohidrato ENA", "supp_ena.jpg"),
    ("Pre entreno c4 cellucor", "supp_c4.jpg"),
    ("Animal Pak Universal", "supp_animal.jpg"),
    ("Citrato de Magnesio", "supp_magnesio.jpg"),
    ("Dymatize ISO 100", "supp_iso100.jpg"),
    ("Whey Protein Star Nutrition", "supp_star.jpg"),
    ("Glutamina SPX", "supp_glutamina.jpg"),
    ("bsn amino x", "supp_aminox.jpg")
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

for q, fname in queries:
    try:
        url = f"https://listado.mercadolibre.com.ar/{q.replace(' ', '-')}"
        res = requests.get(url, headers=headers)
        soup = BeautifulSoup(res.text, 'html.parser')
        img = soup.find('img', class_='ui-search-result-image__image')
        if img:
            img_url = img.get('data-src') or img.get('src')
            if img_url:
                high_res_url = img_url.replace('I.jpg', 'O.jpg')
                img_res = requests.get(high_res_url)
                with open(f"public/assets/images/products/{fname}", "wb") as f:
                    f.write(img_res.content)
                print(f"Downloaded {fname}")
            else:
                print(f"No image url found for {q}")
        else:
             print(f"No image element found for {q}")
    except Exception as e:
        print(f"Error on {q}: {e}")
