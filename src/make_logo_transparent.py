from PIL import Image
import os

path = r"c:\Users\Yogana Vinoth.Yogana\Downloads\HTML Foundation\src\assets\stafrof-logo-new.png"

if os.path.exists(path):
    img = Image.open(path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # If pixel is white or near-white, make it transparent
        # White is (255, 255, 255). Let's use a threshold (e.g., > 240 for R, G, B)
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0)) # transparent
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(path, "PNG")
    print("Logo white background successfully converted to transparent!")
else:
    print("Logo file not found.")
