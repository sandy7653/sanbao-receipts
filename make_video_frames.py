from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

W, H = 1280, 720
BG = (8, 17, 31)
PANEL = (16, 28, 47)
PANEL2 = (19, 35, 58)
BORDER = (39, 69, 103)
TEXT = (238, 245, 255)
MUTED = (154, 176, 202)
ACCENT = (114, 208, 255)
OK = (89, 209, 140)
WARN = (255, 209, 102)

root = Path(r"C:\Users\songh\.openclaw\workspace\sanbao-receipts")
out = root / 'video_frames'
out.mkdir(exist_ok=True)

font_paths = [
    r"C:\Windows\Fonts\segoeui.ttf",
    r"C:\Windows\Fonts\arial.ttf"
]

def get_font(size, bold=False):
    candidates = []
    if bold:
        candidates += [r"C:\Windows\Fonts\segoeuib.ttf", r"C:\Windows\Fonts\arialbd.ttf"]
    candidates += font_paths
    for path in candidates:
        p = Path(path)
        if p.exists():
            return ImageFont.truetype(str(p), size)
    return ImageFont.load_default()

f_title = get_font(60, True)
f_h2 = get_font(34, True)
f_body = get_font(24)
f_small = get_font(20)
f_code = get_font(22)

def wrap(draw, text, font, width):
    words = text.split()
    lines = []
    line = ''
    for word in words:
        test = word if not line else line + ' ' + word
        if draw.textlength(test, font=font) <= width:
            line = test
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines

def panel(draw, xy, radius=24, fill=PANEL, outline=BORDER, width=2):
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)

def frame_base():
    img = Image.new('RGB', (W, H), BG)
    draw = ImageDraw.Draw(img)
    panel(draw, (32, 32, W-32, H-32), radius=28)
    return img, draw

def save_frame(i, painter):
    img, draw = frame_base()
    painter(img, draw)
    img.save(out / f'frame_{i:03d}.png')

slides = []

def slide(fn, seconds=3):
    slides.append((fn, seconds))

slide(lambda img, draw: [
    draw.text((80, 90), 'THE SYNTHESIS SUBMISSION', font=f_small, fill=ACCENT),
    draw.text((80, 150), 'Sanbao Receipts', font=f_title, fill=TEXT),
    draw.text((80, 240), 'Agent identity, execution receipts, and wallet-linked accountability', font=f_body, fill=MUTED),
    panel(draw, (80, 340, 380, 520), fill=PANEL2),
    panel(draw, (410, 340, 710, 520), fill=PANEL2),
    panel(draw, (740, 340, 1140, 520), fill=PANEL2),
    draw.text((110, 380), 'Identity', font=f_h2, fill=TEXT),
    draw.text((110, 435), 'ERC-8004-ready profile', font=f_body, fill=MUTED),
    draw.text((440, 380), 'Receipts', font=f_h2, fill=TEXT),
    draw.text((440, 435), 'Structured action history', font=f_body, fill=MUTED),
    draw.text((770, 380), 'Review Surface', font=f_h2, fill=TEXT),
    draw.text((770, 435), 'Human-readable audit trail', font=f_body, fill=MUTED)
], 3)

slide(lambda img, draw: [
    draw.text((80, 90), 'Problem', font=f_title, fill=TEXT),
    *[draw.text((80, 190 + idx*42), line, font=f_body, fill=MUTED) for idx, line in enumerate(wrap(draw,
    'Autonomous agents can act, but humans still lack a compact way to inspect identity, authority, action history, and outcome quality. Sanbao Receipts turns those actions into structured receipts tied to wallet ownership and reviewable execution states.', f_body, 1080))]
], 3)

slide(lambda img, draw: [
    draw.text((80, 90), 'Live Demo and Repo', font=f_title, fill=TEXT),
    draw.text((80, 190), 'Repo:', font=f_h2, fill=ACCENT),
    draw.text((80, 240), 'github.com/sandy7653/sanbao-receipts', font=f_code, fill=TEXT),
    draw.text((80, 320), 'Demo:', font=f_h2, fill=ACCENT),
    draw.text((80, 370), 'sandy7653.github.io/sanbao-receipts/', font=f_code, fill=TEXT),
    draw.text((80, 460), 'Public, published, and accessible.', font=f_body, fill=MUTED)
], 3)

slide(lambda img, draw: [
    draw.text((80, 90), 'Execution Receipts', font=f_title, fill=TEXT),
    panel(draw, (80, 180, 1180, 300), fill=PANEL2),
    panel(draw, (80, 320, 1180, 440), fill=PANEL2),
    panel(draw, (80, 460, 1180, 580), fill=PANEL2),
    draw.text((110, 210), 'Register agent identity', font=f_h2, fill=TEXT),
    draw.text((890, 210), 'verified', font=f_h2, fill=OK),
    draw.text((110, 355), 'Record owner wallet target', font=f_h2, fill=TEXT),
    draw.text((860, 355), 'verified', font=f_h2, fill=OK),
    draw.text((110, 495), 'Prepare self-custody transfer', font=f_h2, fill=TEXT),
    draw.text((850, 495), 'completed', font=f_h2, fill=WARN)
], 3)

slide(lambda img, draw: [
    draw.text((80, 90), 'Submission Artifacts', font=f_title, fill=TEXT),
    *[draw.text((100, 190 + idx*70), item, font=f_h2, fill=TEXT) for idx, item in enumerate([
        'agent.json', 'agent_log.json', 'cover.svg', 'GitHub Pages demo'
    ])]
], 3)

slide(lambda img, draw: [
    draw.text((80, 90), 'Track Fit', font=f_title, fill=TEXT),
    *[draw.text((100, 190 + idx*80), item, font=f_h2, fill=TEXT) for idx, item in enumerate([
        'Synthesis Open Track',
        'Agents With Receipts — ERC-8004',
        'Let the Agent Cook — No Humans Required',
        'Agent Services on Base'
    ])]
], 3)

slide(lambda img, draw: [
    draw.text((80, 90), 'Status Confirmed', font=f_title, fill=TEXT),
    draw.text((80, 200), 'Project: publish', font=f_h2, fill=OK),
    draw.text((80, 280), 'Wallet: self_custody completed', font=f_h2, fill=OK),
    draw.text((80, 360), 'Owner: 0x5877F6C4bF3d6c8651C6B4fbeBcf05aA9FB71A0F', font=f_code, fill=TEXT),
    draw.text((80, 470), 'Sanbao Receipts is now a real published submission with a live demo.', font=f_body, fill=MUTED)
], 4)

idx = 0
fps = 1
for painter, seconds in slides:
    for _ in range(seconds * fps):
        save_frame(idx, painter)
        idx += 1

print(idx)
