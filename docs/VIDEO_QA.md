# WAYSTAR V2 — Video Technical Quality Assurance Report
**Standard:** FFmpeg Technical Stream Analysis & Playback Optimization  
**Location of Derivatives:** `public/media/v2/`  
**Location of Posters:** `public/media/v2/posters/`

---

## 1. Technical Transcoding Specification

Every active video in the WAYSTAR V2 digital flagship adheres to this strict engineering standard:

```
Codec:              H.264 / AVC (High Profile, Level 4.1)
Pixel Format:       yuv420p (Universal 8-bit broad hardware decoder support)
Container:          MP4 (ISO Media / MPEG-4 Part 14)
Streaming Flag:     -movflags +faststart (MOOV atom placed at head of container)
Audio Stream:       Stripped (-an) for zero audio overhead and silent web loops
Rate Control:       Constant Rate Factor (-crf 21)
Preset:             -preset slow
Scale:              1920×1080 (Force aspect ratio with letterbox/pillarbox padding)
Poster Extraction:  First keyframe at 1080p, WebP compression at Quality 88
```

---

## 2. Active Asset Stream Verification Matrix

| Asset Path | Duration | Frame Rate | Bitrate (Avg) | File Size | Audio | MOOV Pos | Poster Format |
|:---|:---|:---|:---|:---|:---|:---|:---|
| `dubai/dubai-marina-aerial.mp4` | 15.0s | 25 fps | 2,930 kbps | 5.5 MB | None (`-an`) | Header (FastStart) | WebP (306 KB) |
| `dubai/dubai-yachts-skyline.mp4` | 30.0s | 30 fps | 6,400 kbps | 24.0 MB | None (`-an`) | Header (FastStart) | WebP (399 KB) |
| `dubai/dubai-sunset-marina.mp4` | 20.0s | 30 fps | 5,600 kbps | 14.0 MB | None (`-an`) | Header (FastStart) | WebP (350 KB) |
| `dubai/dubai-night-skyscrapers.mp4` | 25.0s | 25 fps | 7,360 kbps | 23.0 MB | None (`-an`) | Header (FastStart) | WebP (284 KB) |
| `new-york/manhattan-midtown-aerial.mp4` | 14.5s | 24 fps | 2,750 kbps | 5.0 MB | None (`-an`) | Header (FastStart) | WebP (235 KB) |
| `new-york/manhattan-sunset-skyline.mp4` | 12.0s | 24 fps | 4,130 kbps | 6.2 MB | None (`-an`) | Header (FastStart) | WebP (294 KB) |
| `new-york/manhattan-night-architecture.mp4` | 10.0s | 24 fps | 4,000 kbps | 5.0 MB | None (`-an`) | Header (FastStart) | WebP (300 KB) |
| `new-york/manhattan-night-skyline.mp4` | 28.0s | 24 fps | 9,710 kbps | 34.0 MB | None (`-an`) | Header (FastStart) | WebP (63 KB) |
| `interiors/modern-luxury-interior.mp4` | 12.0s | 30 fps | 3,860 kbps | 5.8 MB | None (`-an`) | Header (FastStart) | WebP (77 KB) |

---

## 3. Playback Performance & Browser Compatibility

1. **Zero Layout Shift (CLS = 0):** Every `<BackgroundVideo>` container renders an identical-geometry `<Image sizes="100vw">` WebP poster immediately upon DOM insertion. When the video reaches `onPlaying`, opacity transitions smoothly from poster to video over 1000ms.
2. **Reduced Motion Adaptation:** Respects `(prefers-reduced-motion: reduce)` via `useSyncExternalStore`. Users with motion sensitivities are served the still WebP poster, and `<video>` tags are omitted entirely from rendering.
3. **Battery & CPU Conservation:** Native `IntersectionObserver` activates video playback only when at least 15% of the video canvas intersects the viewport. Offscreen scenes are automatically paused (`video.pause()`), preventing GPU saturation on multi-scene pages.
4. **Hardware Decoding:** H.264 High Profile `yuv420p` guarantees hardware-accelerated decoding across Apple Silicon VideoToolbox, Intel QuickSync, NVDEC, and mobile SoC video decoders.

