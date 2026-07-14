import os
import shutil

try:
    from PIL import Image
    has_pil = True
except ImportError:
    has_pil = False

dest_dir = r"c:\Users\Yogana Vinoth.Yogana\Downloads\HTML Foundation\src\assets"

# Newly generated ones
mapping = {
    r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\97751ad9-4854-4c3b-a18d-523587bc5bb0\topic_data_analytics_1782885982698.png": "topic-data-analytics.jpg",
    r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\97751ad9-4854-4c3b-a18d-523587bc5bb0\topic_ai_intelligence_1782885996220.png": "topic-ai-intelligence.jpg",
    r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\97751ad9-4854-4c3b-a18d-523587bc5bb0\topic_risk_1782886013529.png": "topic-risk.jpg",
    r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\97751ad9-4854-4c3b-a18d-523587bc5bb0\topic_customer_1782886041364.png": "topic-customer.jpg",
    r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\97751ad9-4854-4c3b-a18d-523587bc5bb0\topic_bi_1782886056701.png": "topic-bi.jpg"
}

for src, filename in mapping.items():
    dest_path = os.path.join(dest_dir, filename)
    if not os.path.exists(src):
        print(f"Source not found: {src}")
        continue
    if has_pil:
        try:
            im = Image.open(src)
            rgb_im = im.convert('RGB')
            rgb_im.save(dest_path, 'JPEG', quality=95)
            print(f"Successfully converted and copied {filename}")
        except Exception as e:
            print(f"Failed to convert {filename} ({e}). Copying directly...")
            shutil.copy(src, dest_path)
    else:
        print(f"PIL not available. Copying directly {filename}")
        shutil.copy(src, dest_path)

# Copy SI partners image to integration
si_path = os.path.join(dest_dir, "topic-si-partners.jpg")
integration_path = os.path.join(dest_dir, "topic-integration.jpg")
if os.path.exists(si_path):
    shutil.copy(si_path, integration_path)
    print("Successfully copied topic-si-partners.jpg to topic-integration.jpg")
