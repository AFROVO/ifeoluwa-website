# Ifeoluwa Opawoye — Official Website

Personal website for **Ifeoluwa Opawoye**, modelled on the structure of [cristianoronaldo.com](https://cristianoronaldo.com). Built with plain HTML, CSS, and vanilla JavaScript — no framework, no build step.

---

## File Structure

```
ifeoluwa-website/
├── index.html      ← Single-page HTML, all sections in order
├── styles.css      ← All styles; CSS custom properties at the top of :root
├── script.js       ← Vanilla JS: navbar, scroll-reveal, form, gallery hover
└── CLAUDE.md       ← This file
```

---

## Sections (top → bottom)

| Section ID   | Nav label        | Purpose                                             |
|--------------|------------------|-----------------------------------------------------|
| `#hero`      | IO               | Full-screen 5-panel cinematic gallery + name        |
| `#about`     | ABOUT            | Bio text + 3-panel portrait strip                   |
| `#projects`  | PROJECTS         | 4 project cards (AFROVO flagship + 3 others)        |
| `#journey`   | JOURNEY          | Horizontally scrolling milestone badges             |
| `#showcase`  | —                | Full-bleed IO LIFE showcase block (like Life Museum)|
| `#connect`   | CONNECT          | Newsletter subscribe form                           |
| footer       | —                | Social icons, tagline, copyright                    |

---

## Design System

### Colours (CSS custom properties in `styles.css` `:root`)

| Variable      | Value     | Use                          |
|---------------|-----------|------------------------------|
| `--gold`      | `#D4A853` | Primary accent (CTA, borders)|
| `--gold-dark` | `#A07830` | Gradient variation           |
| `--bg`        | `#0a0a0a` | Page background              |
| `--bg-card`   | `#111111` | Card/badge backgrounds       |
| `--bg-mid`    | `#161616` | Newsletter section           |
| `--white`     | `#FFFFFF` | Primary text                 |
| `--dim`       | `rgba(255,255,255,0.55)` | Secondary/body text |

To change the accent colour, edit `--gold` and `--gold-dark` in `:root`.

### Typography

| Variable       | Font           | Used for                     |
|----------------|----------------|------------------------------|
| `--font-head`  | Bebas Neue     | All headings, labels, CTAs   |
| `--font-body`  | Inter          | Body copy, form fields       |

Both loaded from Google Fonts in `index.html` `<head>`.

---

## Adding Real Photos

Gallery panels and about panels are CSS gradient placeholders. To swap in real images:

1. **Hero gallery** — target `.item-1` through `.item-5` in `styles.css`:
   ```css
   .item-1 { background-image: url('images/photo-1.jpg'); }
   ```

2. **About panels** — target `.panel-a`, `.panel-b`, `.panel-c`:
   ```css
   .panel-a { background-image: url('images/about-1.jpg'); }
   ```

3. **Showcase backdrop** — target `.showcase-backdrop`:
   ```css
   .showcase-backdrop { background-image: url('images/showcase.jpg'); }
   ```

Place images in an `images/` folder at the project root.

---

## Updating Content

### Name / tagline
Edit `index.html` — search for `Ifeoluwa Opawoye` and update in place.

### Projects (AFROVO and others)
Each project is a `.project-card` div in `#projects`. To add/edit:
- Change the `.card-tag`, `.card-title`, `.card-desc` text.
- Point `.project-cta` href to the real URL.
- Add a new background gradient class in `styles.css` (follow the `.bg-afrovo` pattern).

### Journey milestones
Each milestone is a `.journey-item` in `#journey`. Update the `.badge-initials` (2-letter abbreviation) and `.journey-name` text.

### Social links
Footer `<a>` tags with class `.social-icon` — add `href` values pointing to real profiles.

---

## JavaScript Behaviours (`script.js`)

| Feature              | How it works                                          |
|----------------------|-------------------------------------------------------|
| Navbar scroll state  | Adds `.scrolled` class after 40 px scroll             |
| Active nav link      | IntersectionObserver tracks which section is visible  |
| Mobile hamburger     | Toggles `.open` on `#navLinks` and `#hamburger`       |
| Scroll reveal        | `[data-reveal]` and `.journey-item` fade in on enter  |
| Gallery hover        | Mouse X position shifts gallery slightly (parallax)   |
| Newsletter form      | Client-side validation + success message              |

---

## Responsive Breakpoints

| Breakpoint   | Changes                                              |
|--------------|------------------------------------------------------|
| ≤ 900 px     | Hamburger menu, stacked about/projects layout        |
| ≤ 560 px     | Gallery reduced to 2 panels, showcase text smaller   |

---

## Reference Site

[https://cristianoronaldo.com](https://cristianoronaldo.com) — same section order and layout logic; colour scheme changed from orange `#FF5A00` → gold `#D4A853`.
