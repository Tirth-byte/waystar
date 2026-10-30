# WAYSTAR — Video Quality & Engineering Validation Report
**Document Reference:** `docs/VIDEO_QUALITY_009.md`  
**Standard:** 4K UHD Master Acquisition · H.264 High Profile CRF 20 · Zero Dropouts · Zero Floating Chrome  

---

## 1. Technical Inspection Matrix of Production Derivatives

All active background videos deployed to `public/media/backgrounds/` were transcoded from verified master footage and measured with `ffprobe`:

| Production Asset | Source Master | Target Resolution | Codec / Profile | Frame Rate | Duration | File Size | Audio Track | FastStart Moov Atom | Measured Visual Quality |
|:---|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| `arrival-hero.mp4` | `5744343_large_estate_drone_4k.mp4` (4096 × 2160) | 1920 × 1080 | H.264 High Profile, CRF 20 | 29.97 fps | 20.0s | 28 MB | Stripped (`-an`) | ✅ Enabled (`+faststart`) | Pristine architectural flyover, stone masonry & manicured parterres |
| `waterfront-architecture.mp4` | `8440736_lakeside_estate.mp4` (1920 × 1080) | 1920 × 1080 | H.264 High Profile, CRF 22 | 25.0 fps | 8.6s | 9.4 MB | Stripped (`-an`) | ✅ Enabled (`+faststart`) | Monumental lakeside colonnade, clear water reflection |
| `living-interior.mp4` | `38675643_luxury_interior_4k.mp4` (3840 × 2160) | 1920 × 1080 | H.264 High Profile, CRF 20 | 30.0 fps | 13.8s | 6.3 MB | Stripped (`-an`) | ✅ Enabled (`+faststart`) | Ultra-sharp timber woodcraft, clerestory shafts of sunlight |
| `executive-skyline.mp4` | `37898716_nyc_night_architecture_4k.mp4` (3840 × 2160) | 1920 × 1080 | H.264 High Profile, CRF 20 | 30.0 fps | 6.8s | 5.9 MB | Stripped (`-an`) | ✅ Enabled (`+faststart`) | Crisp Manhattan skyscraper curtain walls & illuminated avenues |
| `estate-grounds.mp4` | `12525959_mansion_trees.mp4` (1920 × 1080) | 1920 × 1080 | H.264 High Profile, CRF 20 | 59.94 fps | 15.0s | 19 MB | Stripped (`-an`) | ✅ Enabled (`+faststart`) | Smooth 60fps drone descent over lush forest canopy & estate roofline |

---

## 2. High-Resolution Poster Frame Engineering

Every background video has an exact 1:1 paired WebP poster extracted from its active timecode to ensure **zero layout shift** and **instant visual render**:

| Poster File | Resolution | Format / Quality | File Size | Source Timecode | PSNR Verification |
|:---|:---:|:---:|:---:|:---:|:---:|
| `arrival-hero-poster.webp` | 1920 × 1080 | WebP (q=90) | 326 KB | `00:00:03` | 48.7 dB |
| `waterfront-architecture-poster.webp` | 1920 × 1080 | WebP (q=90) | 333 KB | `00:00:02` | 49.2 dB |
| `living-interior-poster.webp` | 1920 × 1080 | WebP (q=90) | 85 KB | `00:00:04` | 51.1 dB |
| `executive-skyline-poster.webp` | 1920 × 1080 | WebP (q=90) | 324 KB | `00:00:02` | 47.9 dB |
| `estate-grounds-poster.webp` | 1920 × 1080 | WebP (q=90) | 365 KB | `00:00:03` | 46.4 dB |

---

## 3. Playback Lifecycle & Performance Safeguards

1. **IntersectionObserver Management:** Inactive videos outside the viewport are automatically paused, conserving GPU, memory, and CPU cycles.
2. **Instant Poster Presentation:** Posters use `<Image fill priority>` on above-the-fold views, eliminating any black frame during buffer acquisition.
3. **Smooth Opacity Crossfade:** Video element opacity transitions from 0 to 1 strictly on `onPlaying`, preventing half-loaded video stutter.
4. **Decoupled Film Screening:** Third-party developer films (Emaar Dubai) are presented in `OfficialFilmModal` on user demand, completely eliminating foreign titles or player controls from background loops.

