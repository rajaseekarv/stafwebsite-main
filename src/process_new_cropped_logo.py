from PIL import Image
import os

src_path = r"C:\Users\Yogana Vinoth.Yogana\.gemini\antigravity-ide\brain\82f24add-d604-4c55-8a26-a6fe30ef8561\media__1783089995540.jpg"
dest_path = r"c:\Users\Yogana Vinoth.Yogana\Downloads\HTML Foundation\src\assets\stafrof-logo-new.png"

if os.path.exists(src_path):
    img = Image.open(src_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Convert white background pixels to transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0)) # transparent
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(dest_path, "PNG")
    print("New cropped logo processed and converted to transparent PNG successfully!")
else:
    print("Source logo file not found.")
