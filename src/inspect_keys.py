import json

path = r"c:\Users\Yogana Vinoth.Yogana\Downloads\HTML Foundation\src\data\pdf-content.json"
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

for section, pages in data.items():
    print(f"\n--- Section: {section} ---")
    for page in pages:
        print(f"  Slug: {page.get('slug')}, Title: {page.get('title')}")
