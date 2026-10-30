import subprocess
import os

os.makedirs("public/media/v2/dubai", exist_ok=True)
os.makedirs("public/media/v2/new-york", exist_ok=True)
os.makedirs("public/media/v2/interiors", exist_ok=True)
os.makedirs("public/media/v2/posters", exist_ok=True)

JOBS = [
    # DUBAI
    {
        "id": "DUB-01",
        "in": "media-masters/v2-downloads/dubai_01_marina_aerial_5057522.mp4",
        "out_mp4": "public/media/v2/dubai/dubai-marina-aerial.mp4",
        "out_poster": "public/media/v2/posters/dubai-marina-aerial.webp",
        "ss": "00:00:03",
    },
    {
        "id": "DUB-02",
        "in": "media-masters/v2-downloads/dubai_02_yachts_30301047.mp4",
        "out_mp4": "public/media/v2/dubai/dubai-yachts-skyline.mp4",
        "out_poster": "public/media/v2/posters/dubai-yachts-skyline.webp",
        "ss": "00:00:04",
    },
    {
        "id": "DUB-03",
        "in": "media-masters/v2-downloads/dubai_03_sunset_36432566.mp4",
        "out_mp4": "public/media/v2/dubai/dubai-sunset-marina.mp4",
        "out_poster": "public/media/v2/posters/dubai-sunset-marina.webp",
        "ss": "00:00:02",
    },
    {
        "id": "DUB-04",
        "in": "media-masters/v2-downloads/dubai_04_night_35027116.mp4",
        "out_mp4": "public/media/v2/dubai/dubai-night-skyscrapers.mp4",
        "out_poster": "public/media/v2/posters/dubai-night-skyscrapers.webp",
        "ss": "00:00:06",
    },

    # NEW YORK
    {
        "id": "NY-01",
        "in": "media-masters/v2-downloads/ny_02_aerial_5827633.mp4",
        "out_mp4": "public/media/v2/new-york/manhattan-midtown-aerial.mp4",
        "out_poster": "public/media/v2/posters/manhattan-midtown-aerial.webp",
        "ss": "00:00:03",
    },
    {
        "id": "NY-02",
        "in": "media-masters/downloads/7066748_nyc_golden_hour.mp4",
        "out_mp4": "public/media/v2/new-york/manhattan-sunset-skyline.mp4",
        "out_poster": "public/media/v2/posters/manhattan-sunset-skyline.webp",
        "ss": "00:00:03",
    },
    {
        "id": "NY-03",
        "in": "media-masters/downloads/37898716_nyc_night_architecture_4k.mp4",
        "out_mp4": "public/media/v2/new-york/manhattan-night-architecture.mp4",
        "out_poster": "public/media/v2/posters/manhattan-night-architecture.webp",
        "ss": "00:00:04",
    },
    {
        "id": "NY-04",
        "in": "media-masters/v2-downloads/ny_05_night_6129840.mp4",
        "out_mp4": "public/media/v2/new-york/manhattan-night-skyline.mp4",
        "out_poster": "public/media/v2/posters/manhattan-night-skyline.webp",
        "ss": "00:00:05",
    },

    # INTERIOR
    {
        "id": "INT-01",
        "in": "media-masters/v2-downloads/opt_01_interior_38675643.mp4",
        "out_mp4": "public/media/v2/interiors/modern-luxury-interior.mp4",
        "out_poster": "public/media/v2/posters/modern-luxury-interior.webp",
        "ss": "00:00:04",
    },
]

for job in JOBS:
    src = job["in"]
    out_mp4 = job["out_mp4"]
    out_poster = job["out_poster"]
    tmp_jpg = out_poster.replace(".webp", ".jpg")
    ss = job["ss"]

    print(f"Processing {job['id']}: {src} -> {out_mp4}...")

    # Transcode MP4
    cmd_mp4 = [
        "ffmpeg", "-y", "-i", src,
        "-vf", "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080",
        "-c:v", "libx264", "-profile:v", "high", "-crf", "21",
        "-preset", "medium", "-an", "-movflags", "+faststart",
        out_mp4
    ]
    subprocess.run(cmd_mp4, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    # Extract poster frame JPG
    cmd_jpg = [
        "ffmpeg", "-y", "-ss", ss, "-i", src,
        "-vframes", "1", "-vf", "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080",
        "-q:v", "2", tmp_jpg
    ]
    subprocess.run(cmd_jpg, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    # Convert to WebP
    cmd_webp = ["cwebp", "-q", "88", tmp_jpg, "-o", out_poster]
    subprocess.run(cmd_webp, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    if os.path.exists(tmp_jpg):
        os.remove(tmp_jpg)

    mp4_mb = os.path.getsize(out_mp4) / (1024 * 1024)
    webp_kb = os.path.getsize(out_poster) / 1024
    print(f"Finished {job['id']}: MP4={mp4_mb:.1f} MB, WebP={webp_kb:.0f} KB")

