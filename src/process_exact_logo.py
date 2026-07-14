from PIL import Image
import os

src_path = r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\82f24add-d604-4c55-8a26-a6fe30ef8561\media__1783091109120.jpg"
dest_path = r"c:\Users\Yogana Vinoth.Yogana\Downloads\HTML Foundation\src\assets\stafrof-logo-white-text.png"

if os.path.exists(src_path):
    img = Image.open(src_path).convert("RGBA")
    datas = img.getdata()
    
    # Get background color from top-left pixel
    bg_color = datas[0]
    print(f"Detected background color: {bg_color}")

    newData = []
    for item in datas:
        # Distance to background color
        dist = ((item[0] - bg_color[0])**2 + (item[1] - bg_color[1])**2 + (item[2] - bg_color[2])**2)**0.5
        
        # Increased threshold to 60 to clean up any emboss shadow gradients on background edges cleanly
        if dist < 60:
            newData.append((255, 255, 255, 0)) # transparent
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(dest_path, "PNG")
    print("Exact logo with white text converted to transparent PNG successfully!")
else:
    print("Source logo file not found.")
