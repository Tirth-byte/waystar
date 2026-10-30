# WAYSTAR — VIDEO QUALITY & ENGINEERING REPORT
**Document Reference:** `docs/VIDEO_QUALITY_REPORT.md`  
**Execution Phase:** Master Prompt 004 — Media Verification & Engineering  
**Compiler Tools:** FFmpeg 9.0.2, FFprobe 9.0.2, libx264 (core 165 r3222), cwebp 1.6.0  
**Inspection Date:** October 30, 2026  
**Quality Engineer:** Senior Frontend Performance & Media Engineer

---

## 1. Technical Transcoding & Compression Pipeline

To ensure seamless edge delivery and responsive playback across mobile, tablet, and ultra-high-resolution desktop displays, all raw masters (ranging from 1440p to 4096p and up to 212MB in raw file size) were passed through a standardized FFmpeg transcoding pipeline:

```bash
ffmpeg -y -i <master_file> \
  -vf "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080" \
  -c:v libx264 -crf 22 -preset medium -movflags +faststart -an \
  <web_derivative_path>
```

### Engineering Rationale:
1. **Aspect Ratio Normalization (16:9 1920 × 1080):**
   - Masters with DCI 1.90:1 ratios (e.g. 4096 × 2160 or 2732 × 1440) were scaled and subtly center-cropped to exactly 1920 × 1080. This eliminates unsightly black letterboxing and prevents layout shift in 100svh fullscreen containers.
2. **Codec Selection (H.264 High Profile, 8-bit YUV420p):**
   - H.264 remains the global gold standard for universal hardware-accelerated video playback across iOS Safari, macOS Safari, Chromium browsers, Android Chrome, and Firefox. It requires 60% less battery and GPU decode overhead than unoptimized AV1 or HEVC formats on older client machines.
3. **Constant Rate Factor (CRF 22):**
   - CRF 22 produces perceptually lossless fidelity for architectural footage, retaining delicate stone textures, water ripples, and architectural millwork without macroblocking or banding, while achieving a 65–85% reduction in file size compared to raw capture bitrates.
4. **FastStart Moov Atom Placement (`-movflags +faststart`):**
   - In standard MP4 files, metadata (the `moov` atom) is written at the end of the file. By relocating the `moov` atom to the very beginning, browsers can begin playing the video immediately after buffering the first few kilobytes, without waiting for the entire multi-megabyte file to download.
5. **Zero-Audio Track Stripping (`-an`):**
   - Ambient luxury website backgrounds must be silent. Leaving an empty or low-bitrate audio track consumes unnecessary bandwidth and can trigger mobile browser autoplay restrictions (e.g., iOS Safari requiring explicit user interaction before playing any media with an audio stream, even if muted via HTML). Stripping the audio track completely guarantees automatic, smooth autoplay compliance.

---

## 2. Technical Inspection Stream Data (FFprobe Analysis)

| Web Derivative | Dimensions | Aspect Ratio | Frame Rate | Video Codec | Bitrate | File Size | Audio Stream | Moov FastStart |
|---|---|---|---|---|---|---|---|---|
| `hero/waystar-main-hero-1080p.mp4` | 1920 × 1080 | 16:9 | 25.0 fps | H.264 (High) | ~12.1 Mbps (Peak) | 21.6 MB | None (Stripped) | Enabled (`+faststart`) |
| `architecture/waystar-lakeside-estate-1080p.mp4` | 1920 × 1080 | 16:9 | 25.0 fps | H.264 (High) | ~8.9 Mbps | 9.4 MB | None (Stripped) | Enabled (`+faststart`) |
| `architecture/waystar-waterfront-towers-1080p.mp4` | 1920 × 1080 | 16:9 | 59.94 fps | H.264 (High) | ~16.8 Mbps | 42.0 MB | None (Stripped) | Enabled (`+faststart`) |
| `architecture/waystar-infinity-pool-1080p.mp4` | 1920 × 1080 | 16:9 | 24.0 fps | H.264 (High) | ~6.1 Mbps | 11.2 MB | None (Stripped) | Enabled (`+faststart`) |
| `residences/waystar-luxury-interior-1080p.mp4` | 1920 × 1080 | 16:9 | 30.0 fps | H.264 (High) | ~3.0 Mbps | 5.0 MB | None (Stripped) | Enabled (`+faststart`) |
| `residences/waystar-coastal-villa-1080p.mp4` | 1920 × 1080 | 16:9 | 23.98 fps | H.264 (High) | ~6.7 Mbps | 19.8 MB | None (Stripped) | Enabled (`+faststart`) |
| `lifestyle/waystar-terrace-pavilion-1080p.mp4` | 1920 × 1080 | 16:9 | 59.94 fps | H.264 (High) | ~4.7 Mbps | 8.7 MB | None (Stripped) | Enabled (`+faststart`) |
| `residences/waystar-alpine-residence-1080p.mp4` | 1920 × 1080 | 16:9 | 25.0 fps | H.264 (High) | ~4.3 Mbps | 6.8 MB | None (Stripped) | Enabled (`+faststart`) |
| `residences/waystar-beachfront-pavilion-1080p.mp4` | 1920 × 1080 | 16:9 | 24.0 fps | H.264 (High) | ~7.3 Mbps | 11.3 MB | None (Stripped) | Enabled (`+faststart`) |
| `lifestyle/waystar-estate-landscape-1080p.mp4` | 1920 × 1080 | 16:9 | 30.0 fps | H.264 (High) | ~8.5 Mbps | 17.4 MB | None (Stripped) | Enabled (`+faststart`) |

---

## 3. Visual Verification & Architectural Quality Audit

Every clip was visually verified using contact sheets generated from 4 distinct timestamps across each clip's duration:

### Composition & Stability
- **Pacing:** All clips demonstrate controlled, continuous cinematic motion—either slow aerial crane/drone glides or steady architectural interior dollies.
- **Horizon Alignment:** No camera tilt or handheld vibration. Horizons remain level, preserving the formal architectural gravity expected of an elite developer's portfolio.
- **Lighting & Color Grading:** Natural daylight, golden hour, or controlled twilight with balanced dynamic range. Highlights are preserved without clipping, and architectural shadow tones retain texture without crushing.

### Text Contrast & Readability Assessment
- **Overlay Philosophy:** Rather than applying heavy, opaque dark scrims that muddy the imagery (a common amateur web design flaw), WAYSTAR utilizes:
  1. Delicate directional linear gradients (e.g. `bg-gradient-to-t from-black/60 via-transparent to-black/30`) targeted only where headlines or navigation sit.
  2. Subdued text drop shadows (`drop-shadow-sm` and `drop-shadow-md`) on Warm Ivory (`#F7F6F2`) and Sandstone (`#B9A994`) typography.
  3. Visual breathing room: Text is positioned in the lower-third or left-half of compositions where skies or water planes provide natural negative space.

---

## 4. Mobile Fallback & Responsive Poster Architecture

On low-bandwidth connections, battery-saver modes, or devices where users have enabled `prefers-reduced-motion` or data-saver headers, background video playback is automatically suspended in favor of a crisp poster image.

### Dual-Format Strategy:
- **WebP (Primary):** Compressed with Google's `cwebp` at quality factor 85, delivering an average file size of 200–350 KB per 1080p frame (up to 40% smaller than comparable JPEGs with zero perceptual artifacting).
- **JPEG (Fallback):** High-baseline JPEG generated via FFmpeg at `-q:v 2` for legacy compatibility.
- **Next.js `<Image>` Optimization:** Poster images can be preloaded via Next.js `<Image priority>` to guarantee instant paint before video stream initialization.

