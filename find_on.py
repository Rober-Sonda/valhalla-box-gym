from duckduckgo_search import DDGS

ddgs = DDGS()
results = list(ddgs.images("optimum nutrition whey gold standard white background pure", max_results=5))
for i, r in enumerate(results):
    print(f"[{i}]: {r['image']}")
