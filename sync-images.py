#!/usr/bin/env python3
"""Copy newly generated images into assets/img (resized + optimized), then rebuild.

Usage: python3 sync-images.py [source_dir]
Prints the names of images that were added or updated; prints nothing if none changed.
"""
import os
import subprocess
import sys

from PIL import Image

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = sys.argv[1] if len(sys.argv) > 1 else os.path.expanduser("~/Documents/New project/nh-solutions/assets/img")
DST = os.path.join(ROOT, "assets", "img")

changed = []
for name in sorted(os.listdir(SRC)):
    stem, ext = os.path.splitext(name)
    if ext.lower() not in (".jpg", ".jpeg", ".png", ".webp"):
        continue
    src = os.path.join(SRC, name)
    dst = os.path.join(DST, stem + ".jpg")
    if os.path.exists(dst) and os.path.getmtime(dst) >= os.path.getmtime(src):
        continue
    im = Image.open(src).convert("RGB")
    im.thumbnail((1600, 1600), Image.LANCZOS)
    im.save(dst, quality=80, optimize=True, progressive=True)
    changed.append(stem)

if changed:
    subprocess.run(["node", "build.mjs"], cwd=ROOT, check=True, stdout=subprocess.DEVNULL)
    print("\n".join(changed))
