import urllib.request
import os
import sys

DOWNLOADS = [
    ('5057522', 'https://videos.pexels.com/video-files/5057522/5057522-uhd_3840_2160_25fps.mp4', 'media-masters/v2-downloads/dubai_01_marina_aerial_5057522.mp4'),
    ('30301047', 'https://videos.pexels.com/video-files/30301047/12989667_3840_2160_60fps.mp4', 'media-masters/v2-downloads/dubai_02_yachts_30301047.mp4'),
    ('36432566', 'https://videos.pexels.com/video-files/36432566/15448374_3840_2160_60fps.mp4', 'media-masters/v2-downloads/dubai_03_sunset_36432566.mp4'),
    ('35027116', 'https://videos.pexels.com/video-files/35027116/14838738_3840_2160_30fps.mp4', 'media-masters/v2-downloads/dubai_04_night_35027116.mp4'),
    ('34593442', 'https://videos.pexels.com/video-files/34593442/14659046_1440_2562_60fps.mp4', 'media-masters/v2-downloads/dubai_05_interior_34593442.mp4'),
    ('31398068', 'https://videos.pexels.com/video-files/31398068/13396810_3840_2160_25fps.mp4', 'media-masters/v2-downloads/ny_01_sunset_31398068.mp4'),
    ('5827633', 'https://videos.pexels.com/video-files/5827633/5827633-uhd_3840_2160_24fps.mp4', 'media-masters/v2-downloads/ny_02_aerial_5827633.mp4'),
    ('31468432', 'https://videos.pexels.com/video-files/31468432/13417895_3840_2160_30fps.mp4', 'media-masters/v2-downloads/ny_03_sunset_31468432.mp4'),
    ('12197797', 'https://videos.pexels.com/video-files/12197797/12197797-uhd_3840_2160_24fps.mp4', 'media-masters/v2-downloads/ny_04_horizon_12197797.mp4'),
]

os.makedirs('media-masters/v2-downloads', exist_ok=True)

# Copy already downloaded assets
if os.path.exists('media-masters/downloads/6129840_nyc_night_skyline.mp4'):
    os.system('cp media-masters/downloads/6129840_nyc_night_skyline.mp4 media-masters/v2-downloads/ny_05_night_6129840.mp4')
    print("Copied existing NY 05 6129840")

if os.path.exists('media-masters/downloads/38675643_luxury_interior_4k.mp4'):
    os.system('cp media-masters/downloads/38675643_luxury_interior_4k.mp4 media-masters/v2-downloads/opt_01_interior_38675643.mp4')
    print("Copied existing OPT 01 interior 38675643")

for vid_id, url, path in DOWNLOADS:
    if os.path.exists(path) and os.path.getsize(path) > 1000000:
        print(f"Already exists: {path} ({os.path.getsize(path)/(1024*1024):.1f} MB)")
        continue
    print(f"Downloading {vid_id} -> {path}...")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})
    try:
        with urllib.request.urlopen(req, timeout=120) as resp, open(path, 'wb') as out_f:
            while True:
                chunk = resp.read(1024 * 1024)
                if not chunk:
                    break
                out_f.write(chunk)
        size_mb = os.path.getsize(path) / (1024 * 1024)
        print(f"Finished {vid_id}: {size_mb:.2f} MB")
    except Exception as e:
        print(f"Error downloading {vid_id}: {e}")

