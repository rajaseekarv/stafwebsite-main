import json

json_path = r"c:\Users\Yogana Vinoth.Yogana\Downloads\HTML Foundation\src\data\pdf-content.json"
ts_path = r"c:\Users\Yogana Vinoth.Yogana\Downloads\HTML Foundation\src\lib\section-images.ts"

with open(json_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

with open(ts_path, 'r', encoding='utf-8') as f:
    ts_content = f.read()

# Extract all slugs from JSON list
all_slugs = []
for sec_key, pages in data.items():
    if isinstance(pages, list):
        for page in pages:
            if isinstance(page, dict) and "slug" in page:
                all_slugs.append((sec_key, page["slug"]))

print("Auditing all page slugs against section-images.ts:")
missing_count = 0
for sec_key, slug in all_slugs:
    # Check if slug is in TS file (case insensitive or exact match)
    match_str = f'"{slug.lower()}"'
    match_str_single = f"'{slug.lower()}'"
    
    is_mapped = match_str in ts_content.lower() or match_str_single in ts_content.lower()
    
    # Check for about sections
    if sec_key == "about" and slug in ["who-we-are", "vision", "board-of-directors", "leadership-team", "design-thinking", "ai-principles", "data-strategy", "what-we-do", "industries", "why-stafrof", "innovation", "commitment", "join", "our-story"]:
        is_mapped = True
        
    if not is_mapped:
        print(f"MISSING: [{sec_key}] slug: '{slug}' is not mapped to any unique image in section-images.ts!")
        missing_count += 1
    else:
        # Just print OK for a few to verify
        pass

print(f"Audit completed. Found {missing_count} missing mappings.")
