import os

brain_dir = "C:\\Users\\Yogana Vinoth.Yogana\\.gemini\\antigravity-ide\\brain\\47726a18-abe6-4b2e-9509-ec90ac8dd751"

print("Images in brain folder:")
for root, dirs, files in os.walk(brain_dir):
    for file in files:
        if file.lower().endswith((".png", ".jpg", ".jpeg")):
            path = os.path.join(root, file)
            print(f"  {os.path.relpath(path, brain_dir)} - {os.path.getsize(path)} bytes")
