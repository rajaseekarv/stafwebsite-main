import json

path = r"c:\Users\Yogana Vinoth.Yogana\Downloads\HTML Foundation\src\data\pdf-content.json"
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

about_section = data["about"]
print("Type:", type(about_section))
if isinstance(about_section, list):
    for p in about_section:
        print(f"Slug: {p.get('slug')} | Title: {p.get('title')}")
        print(f"  Tagline: {p.get('tagline')}")
        print("-" * 50)
elif isinstance(about_section, dict):
    print("Keys:", list(about_section.keys()))
    pages = about_section.get("pages", [])
    for p in pages:
        print(f"Slug: {p.get('slug')} | Title: {p.get('title')}")
        print(f"  Tagline: {p.get('tagline')}")
        print("-" * 50)
