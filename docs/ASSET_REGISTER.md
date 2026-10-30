# WAYSTAR — Master Asset Register (V2 Flagship)
**Document Reference:** `docs/ASSET_REGISTER.md`  
**Current Revision:** Master Prompt 012 — Complete From-Scratch Reconstruction (Dubai × New York)  
**Media Delivery Standard:** Locally-hosted 1080p H.264 web derivatives with audio stripped (`-an`), `-movflags +faststart`, and paired lossless WebP poster frames.  
**Archived Predecessors:** Legacy V1 assets preserved on git branch `archive/waystar-v1`.

---

## 1. Verified Active Cinematic Video Library (`public/media/v2/`)

All active videos were sourced from Pexels under the Pexels Free Commercial Use License, inspected via `ffprobe` for technical compliance, visually evaluated via contact sheet frame extraction, and transcoded to optimized web derivatives.

| Asset ID | Web Derivative Path | Paired WebP Poster | Source Res / Codec | Delivery Res / Size | Destination Scene / Page | Architectural Theme |
|:---|:---|:---|:---|:---|:---|:---|
| `DXB-01` | `/media/v2/dubai/dubai-marina-aerial.mp4` | `dubai-marina-aerial.webp` | 3840×2160 • H.264 | 1920×1080 • 5.5 MB | Homepage Scene 01: Arrival Hero | Dubai Marina canal towers, soaring bridges, berthed yachts |
| `DXB-02` | `/media/v2/dubai/dubai-yachts-skyline.mp4` | `dubai-yachts-skyline.webp` | 3840×2160 • H.264 | 1920×1080 • 24.0 MB | Scene 03: Residence Cinema (Dubai) | Elevated marina promenade, luxury motor yachts & supertall towers |
| `DXB-03` | `/media/v2/dubai/dubai-sunset-marina.mp4` | `dubai-sunset-marina.webp` | 3840×2160 • H.264 | 1920×1080 • 14.0 MB | Scene 02 & Philosophy Hero | Golden hour waterfront reflections across Dubai residential spires |
| `DXB-04` | `/media/v2/dubai/dubai-night-skyscrapers.mp4` | `dubai-night-skyscrapers.webp` | 3840×2160 • H.264 | 1920×1080 • 23.0 MB | Scene 06: Nocturne Finale | Nocturnal illuminated towers, glass reflections, nocturnal skyline |
| `NY-01-ALT` | `/media/v2/new-york/manhattan-sunset-skyline.mp4` | `manhattan-sunset-skyline.webp` | 3840×2160 • H.264 | 1920×1080 • 6.2 MB | Scene 02: New York Selector Canvas | Hudson River & Manhattan West Side skyline at sunset |
| `NY-02` | `/media/v2/new-york/manhattan-midtown-aerial.mp4` | `manhattan-midtown-aerial.webp` | 3840×2160 • H.264 | 1920×1080 • 5.0 MB | Scene 03 & Contact Hero | Midtown Manhattan & Billionaires' Row architectural flyover |
| `NY-04-ALT` | `/media/v2/new-york/manhattan-night-architecture.mp4` | `manhattan-night-architecture.webp` | 3840×2160 • H.264 | 1920×1080 • 5.0 MB | Residences Catalogue Hero | Lit office and penthouse windows, geometric skyscraper facade |
| `NY-05` | `/media/v2/new-york/manhattan-night-skyline.mp4` | `manhattan-night-skyline.webp` | 3840×2160 • H.264 | 1920×1080 • 34.0 MB | Scene 06: Nocturne Finale (NY) | Manhattan nocturnal skyline, Empire State Building, dark horizon |
| `DXB-05-ALT` | `/media/v2/interiors/modern-luxury-interior.mp4` | `modern-luxury-interior.webp` | 3840×2160 • H.264 | 1920×1080 • 5.8 MB | Scene 04: The Art of Living | Double-height living salon, travertine hearth, calm interior glide |

---

## 2. Curated Architectural Residence Photography (`public/media/residences/`)

All property imagery corresponds to the 8 curated flagship residences in Dubai and New York:

| Residence ID | Property Name | City / Typology | Hero Image Path | Source / Resolution |
|:---|:---|:---|:---|:---|
| `the-lumina-waterfront-dubai` | The Lumina Waterfront | Dubai (Dubai Marina) • Penthouse | `/media/v2/posters/dubai-marina-aerial.webp` | 1920 × 1080 WebP |
| `the-marina-horizon-dubai` | The Marina Horizon | Dubai (Yacht Club) • Waterfront Estate | `/media/v2/posters/dubai-yachts-skyline.webp` | 1920 × 1080 WebP |
| `the-oasis-pavilion-dubai` | The Oasis Pavilion | Dubai (The Oasis) • Lagoon Villa | `/media/residences/aurelia-hero.jpg` | 1920 × 1280 JPEG |
| `the-palace-crest-dubai` | Palace Crest Residences | Dubai (Beachfront) • Sky Villa | `/media/v2/posters/dubai-sunset-marina.webp` | 1920 × 1080 WebP |
| `the-bayside-sanctuary-dubai` | The Bayside Sanctuary | Dubai (Harbour Point) • Coastal Duplex | `/media/v2/posters/dubai-night-skyscrapers.webp` | 1920 × 1080 WebP |
| `the-crown-at-billionaires-row` | The Crown at Billionaires' Row | New York (57th St) • Triplex Penthouse | `/media/v2/posters/manhattan-midtown-aerial.webp` | 1920 × 1080 WebP |
| `the-hudson-skyline-manor` | Hudson Skyline Manor | New York (Chelsea) • Sky Mansion | `/media/v2/posters/manhattan-sunset-skyline.webp` | 1920 × 1080 WebP |
| `the-tribeca-cast-iron-loft` | Tribeca Cast-Iron Loft | New York (Tribeca) • Historic Penthouse | `/media/v2/posters/manhattan-night-architecture.webp` | 1920 × 1080 WebP |

---

## 3. Discarded & Rejected Assets Log

| Asset ID | Discarded Candidate | Reason for Rejection | Replacement |
|:---|:---|:---|:---|
| `DXB-05` | Pexels #34593442 | 9:16 vertical smartphone reel of sofa with handheld wobble. Unusable for 16:9 desktop background. | Replaced by `DXB-05-ALT` (Pexels #38675643, 4K landscape interior). |
| `NY-01` | Pexels #31398068 | Misleading title. Video depicts woman hiking on mountain trail at sunset. Zero architecture. | Replaced by `NY-01-ALT` (Pexels #7066748, Hudson River sunset aerial). |
| `NY-03` | Pexels #31468432 | Misleading title. Video depicts frozen arctic lake with snow drifts. Irrelevant to NYC. | Replaced by `NY-03-ALT` (Pexels #14869911, Midtown dusk skyline). |
| `NY-04` | Pexels #12197797 | Foreground features industrial scrap yard, excavators, and chain-link fences. Incompatible with luxury. | Replaced by `NY-04-ALT` (Pexels #5827633, Manhattan Midtown aerial). |
