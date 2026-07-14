import os
import shutil

try:
    from PIL import Image
    has_pil = True
except ImportError:
    has_pil = False

dest_dir = r"c:\Users\Yogana Vinoth.Yogana\Downloads\HTML Foundation\src\assets"

mapping = {
    r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\97751ad9-4854-4c3b-a18d-523587bc5bb0\topic_ai_partners_1782880575654.png": "topic-ai-partners.jpg",
    r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\97751ad9-4854-4c3b-a18d-523587bc5bb0\topic_si_partners_1782880590058.png": "topic-si-partners.jpg",
    r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\97751ad9-4854-4c3b-a18d-523587bc5bb0\topic_consulting_partners_1782880604695.png": "topic-consulting-partners.jpg",
    r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\97751ad9-4854-4c3b-a18d-523587bc5bb0\topic_articles_1782880624494.png": "topic-articles.jpg",
    r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\97751ad9-4854-4c3b-a18d-523587bc5bb0\topic_blogs_1782880639450.png": "topic-blogs.jpg",
    r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\97751ad9-4854-4c3b-a18d-523587bc5bb0\topic_white_papers_1782880656615.png": "topic-white-papers.jpg",
    r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\97751ad9-4854-4c3b-a18d-523587bc5bb0\topic_case_studies_1782880672320.png": "topic-case-studies.jpg",
    r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\97751ad9-4854-4c3b-a18d-523587bc5bb0\topic_research_1782880687173.png": "topic-research.jpg",
    r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\97751ad9-4854-4c3b-a18d-523587bc5bb0\topic_webinars_1782880705494.png": "topic-webinars.jpg",
    r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\97751ad9-4854-4c3b-a18d-523587bc5bb0\topic_news_1782880722597.png": "topic-news.jpg",
    r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\97751ad9-4854-4c3b-a18d-523587bc5bb0\topic_events_1782880738676.png": "topic-events.jpg"
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
