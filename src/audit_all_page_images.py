import json

# Load JSON content
path = r"c:\Users\Yogana Vinoth.Yogana\Downloads\HTML Foundation\src\data\pdf-content.json"
with open(path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Simulation of topicImageFor mapping logic
def get_image_key_for(section_key, slug):
    s = slug.lower()
    if section_key == "about":
        # About pages use explicit unique about-*.jpg images already
        return f"about-{s}"
    
    if "lending" in s: return "lending"
    if "cards" in s: return "cards"
    if "atm" in s: return "atm"
    if "corporate" in s: return "corporate"
    if "trade-finance" in s: return "tradeFinance"
    if "forex" in s: return "forex"
    if "wealth" in s: return "wealth"
    if "derivatives" in s: return "derivatives"
    if "settlement" in s: return "settlement"
    if "securities" in s or "custody" in s: return "securities"
    if "merchant-payments" in s or "merchant" in s: return "merchant"
    if "payments" in s: return "payments"
    if "treasury" in s: return "treasury"
    if "revnexure-360" in s or s == "revenue-assurance" or s == "revenue-assurance-services": return "revenue"

    if "dataxentra" in s or "data" in s: return "data"
    if "automation" in s or "intelligent-automation" in s: return "automation"
    if "agennova" in s or "ai" in s or "intelligence" in s: return "ai"

    if "risk" in s or "compliance" in s or "fraud" in s: return "fraud"
    if "customer" in s: return "customer"
    if "business-intelligence" in s or "analytics" in s: return "data"
    if "integration" in s or "enterprise-architecture" in s: return "services"

    if "digital-transformation" in s: return "services"
    if "implementation" in s: return "implementation"
    if "managed" in s: return "managed"
    if "support" in s: return "support"
    if "training" in s or "enablement" in s: return "training"
    if "consulting" in s or "advisory" in s or "strategy" in s or "principles" in s or "design-thinking" in s: return "advisory"

    return f"fallback-{section_key}"

# Run audit
results = {}
for section_key, pages in data.items():
    if not isinstance(pages, list):
        continue
    for p in pages:
        slug = p["slug"]
        img_key = get_image_key_for(section_key, slug)
        results.setdefault(img_key, []).append(f"{section_key}/{slug}")

print("=== IMAGE KEY USAGE ===")
duplicates_found = False
for img_key, page_list in results.items():
    status = "OK" if len(page_list) == 1 else "DUPLICATE"
    print(f"Image Key: {img_key:<15} | Status: {status:<10} | Pages: {page_list}")
    if len(page_list) > 1:
        duplicates_found = True

if not duplicates_found:
    print("\nSUCCESS: All pages map to completely unique images!")
else:
    print("\nWARNING: Some pages share the same image key. We must resolve them!")
