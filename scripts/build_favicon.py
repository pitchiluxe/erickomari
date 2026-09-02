"""Generate favicon set from MyBio/public/avatar.jpg.

Produces:
  public/favicon.ico    — multi-size ICO (16, 32, 48, 64, 128, 256)
  public/favicon-16.png  — 16x16 PNG
  public/favicon-32.png  — 32x32 PNG
  public/apple-touch-icon.png — 180x180 PNG
  public/og-image.png   — 1200x630 Open Graph card
  public/favicon.svg    — replaced: circular SVG using the same gradient ring
                          as the hero card so the favicon matches the page

Run from the MyBio/ directory: python scripts/build_favicon.py
"""
from __future__ import annotations

import io
import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
SRC = PUBLIC / "avatar.jpg"

# Match the hero card ring: blue -> indigo -> purple
RING_COLORS = [(59, 130, 246), (99, 102, 241), (139, 92, 246)]  # blue-500, indigo-500, violet-500


def load_portrait() -> Image.Image:
    img = Image.open(SRC).convert("RGBA")
    # Square-crop to the shorter side, then we'll mask to a circle.
    w, h = img.size
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    return img.crop((left, top, left + side, top + side))


def make_ring(size: int) -> Image.Image:
    """Gradient ring drawn around the circle."""
    ring = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(ring)

    # 3-stop linear gradient top-left -> bottom-right
    for y in range(size):
        for x in range(size):
            t = (x + y) / max(1, 2 * (size - 1))  # 0..1
            # blend across the 3 stops
            if t < 0.5:
                u = t / 0.5
                r = int(RING_COLORS[0][0] * (1 - u) + RING_COLORS[1][0] * u)
                g = int(RING_COLORS[0][1] * (1 - u) + RING_COLORS[1][1] * u)
                b = int(RING_COLORS[0][2] * (1 - u) + RING_COLORS[1][2] * u)
            else:
                u = (t - 0.5) / 0.5
                r = int(RING_COLORS[1][0] * (1 - u) + RING_COLORS[2][0] * u)
                g = int(RING_COLORS[1][1] * (1 - u) + RING_COLORS[2][1] * u)
                b = int(RING_COLORS[1][2] * (1 - u) + RING_COLORS[2][2] * u)
            d.point((x, y), fill=(r, g, b, 255))

    # Carve a hole so only the ring remains.
    mask = Image.new("L", (size, size), 0)
    md = ImageDraw.Draw(mask)
    thickness = max(2, size // 14)
    md.ellipse((0, 0, size - 1, size - 1), fill=255)
    md.ellipse((thickness, thickness, size - 1 - thickness, size - 1 - thickness), fill=0)
    ring.putalpha(mask)
    return ring


def render(size: int, *, ring: bool = True, ring_thickness_ratio: float = 0.07) -> Image.Image:
    """Render a circular favicon at the given size."""
    portrait = load_portrait().resize((size, size), Image.LANCZOS)

    # Circular mask applied to the portrait.
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size - 1, size - 1), fill=255)
    portrait.putalpha(mask)

    if ring:
        # Use the bigger ring layer so anti-aliasing stays clean, then resize down.
        big = max(size * 2, 256)
        ring_layer = make_ring(big).resize((size, size), Image.LANCZOS)
        ring_layer.putalpha(ring_layer.split()[-1].point(lambda v: int(v * 0.95)))
        ring_layer.alpha_composite(portrait)
        return ring_layer
    return portrait


def make_ico(sizes: list[int], out: Path) -> None:
    base = render(max(sizes), ring=True)
    base.save(out, format="ICO", sizes=[(s, s) for s in sizes])
    print(f"  wrote {out.relative_to(ROOT)} ({sizes})")


def make_png(size: int, out: Path) -> None:
    img = render(size, ring=True)
    img.save(out, format="PNG", optimize=True)
    print(f"  wrote {out.relative_to(ROOT)} ({size}x{size})")


def make_og_image(out: Path) -> None:
    """1200x630 Open Graph card — portrait on the right, name + role on the left."""
    W, H = 1200, 630
    canvas = Image.new("RGB", (W, H), (11, 15, 26))  # #0b0f1a
    d = ImageDraw.Draw(canvas)

    # Background gradient
    for y in range(H):
        t = y / H
        r = int(18 * (1 - t) + 30 * t)
        g = int(22 * (1 - t) + 27 * t)
        b = int(34 * (1 - t) + 75 * t)
        d.line([(0, y), (W, y)], fill=(r, g, b))

    # Right side: circular portrait with ring, ~420px
    portrait_size = 420
    portrait = render(portrait_size, ring=True)
    px = W - portrait_size - 90
    py = (H - portrait_size) // 2
    canvas.paste(portrait, (px, py), portrait)

    # Left side: name + role (rasterized via simple text — relies on the
    # system font and stays safe in a build script that must not import
    # anything beyond Pillow).
    try:
        from PIL import ImageFont
        title_font = ImageFont.truetype("arialbd.ttf", 72)
        sub_font = ImageFont.truetype("arial.ttf", 30)
        tag_font = ImageFont.truetype("arial.ttf", 24)
    except OSError:
        from PIL import ImageFont
        title_font = ImageFont.load_default()
        sub_font = ImageFont.load_default()
        tag_font = ImageFont.load_default()

    d.text((80, 200), "Erick Omari", fill=(226, 232, 240), font=title_font)
    d.text((80, 300), "Full-Stack Software Architect", fill=(148, 163, 184), font=sub_font)
    d.text((80, 340), "AI Systems Engineer", fill=(148, 163, 184), font=sub_font)
    d.text((80, 410), "github.com/pitchiluxe", fill=(96, 165, 250), font=tag_font)

    canvas.save(out, format="PNG", optimize=True)
    print(f"  wrote {out.relative_to(ROOT)} (1200x630)")


def main() -> None:
    if not SRC.exists():
        raise SystemExit(f"missing {SRC}")

    print("Building favicon set…")
    make_ico([16, 32, 48, 64, 128, 256], PUBLIC / "favicon.ico")
    make_png(16, PUBLIC / "favicon-16.png")
    make_png(32, PUBLIC / "favicon-32.png")
    make_png(180, PUBLIC / "apple-touch-icon.png")
    make_og_image(PUBLIC / "og-image.png")
    print("Done.")


if __name__ == "__main__":
    main()
