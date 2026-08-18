# Homey — Design System

The contract every page on this site follows. Change tokens here first, then in `app/globals.css`.

## 1. Position

Homey is a property marketplace for **one island**. The site should feel local and
physical, not like a generic SaaS landing page. Two anchors:

- **Malta limestone.** Buildings here are globigerina limestone — warm, sandy, sun-bleached.
  Every neutral on this site is warm. There is no cool gray, no slate, no zinc anywhere.
  This is the single decision that keeps the page from looking like every other AI landing page.
- **The app's coral.** `#FF385C`, taken verbatim from `constants/Colors.ts`. Used as an
  accent only — buttons, one rule, one badge per section. Never as a background wash.

Rejected on purpose: gradient mesh blobs, glassmorphism, floating 3D shapes, dark-mode-first
hero, "trusted by" logo walls (there are none), fake testimonials, invented metrics.

## 2. Color tokens

| Token | Value | Use |
|---|---|---|
| `--paper` | `#FBF8F3` | Page background. Warm limestone, never `#fff`. |
| `--paper-2` | `#F4EDE3` | Alternating section bands, input fills. |
| `--paper-3` | `#EBE1D3` | Hairline borders, dividers. |
| `--ink` | `#1C1917` | Headlines, body. Warm near-black. |
| `--ink-2` | `#57534E` | Secondary prose. |
| `--ink-3` | `#6F6862` | Captions, legal small print. |
| `--coral` | `#FF385C` | Icons, rules, borders. The app's exact brand red. |
| `--coral-deep` | `#E31C5F` | Filled buttons. From the app. |
| `--coral-link` | `#C0164F` | Links in prose, button hover. |
| `--coral-wash` | `#FFF1F3` | Icon chips, quiet highlights. |
| `--sea` | `#12303D` | The one dark section. Deep Mediterranean, warm-shifted. |
| `--sea-2` | `#1B4557` | Borders and cards inside the dark section. |

### Contrast, measured

Every text token clears WCAG AA (4.5:1), measured in the browser rather than assumed:

| Pair | Ratio |
|---|---|
| `--ink` on `--paper` | 16.5:1 |
| `--ink-2` on `--paper` | 7.2:1 |
| `--ink-3` on `--paper` | 5.2:1 |
| `--ink-3` on `--paper-2` (worst case) | 4.7:1 |
| white on `--coral-deep` (filled buttons) | 4.6:1 |
| `--coral-link` on `--paper` | 5.7:1 |

Two traps this rules out, both of which the first draft walked into:

- **The app's `#8A817A` grey is not accessible on paper** — 3.6:1, and this token carries
  13px captions. `--ink-3` is deliberately darker on the web than in the app.
- **White on `#FF385C` is 3.5:1**, which fails on a 16px button label. The brand red stays
  for icons and rules; anything filled with white text on it uses `--coral-deep`.

## 3. Typography

Three families, three jobs. Never mix jobs.

- **Poppins** (700/800) — display only: h1, h2, the wordmark, stat numerals.
  Same face as the app and the logo lockup, so the site and the app read as one brand.
  Always tracked tight: `-0.03em` at display sizes.
- **Instrument Sans** (400/500/600) — everything a person actually reads: body, nav, buttons,
  labels, FAQ. Poppins is too wide for paragraphs; this is the fix.
- **Instrument Serif** (400 italic) — one job: the pull quote and the price line. Appears
  three times on the whole site. It is the "this was designed by a person" signal.

Scale (fluid, `clamp`): display `44 → 84px` · h2 `30 → 46px` · h3 `19px` · body `17px`
· small `15px` · caption `13px`. Body line-height `1.62`, display `1.02`.

## 4. Layout

- Content width `1160px`, prose width `680px`, gutter `24px`.
- Vertical rhythm between sections: `clamp(88px, 11vw, 152px)`. Generous is the point.
- Radii: `--r-sm 12px`, `--r 20px`, `--r-lg 28px`, phone frame `44px`, pills `999px`.
- Shadows are warm and low: `0 1px 2px rgba(28,25,23,.05), 0 12px 32px -12px rgba(28,25,23,.14)`.
  No blue-black shadows, no glow.

## 5. Signature mechanics

The four things that carry the design. If a section has none of them, it is filler.

1. **Real device frames.** Every screenshot is an actual screenshot of the shipping app,
   cropped by CSS to hide the Android status bar and nav bar. Nothing is mocked or invented.
2. **The hairline rule.** A 1px `--paper-3` line under each section eyebrow, with a 40px
   coral segment at its left. Repeats across the page and ties it together.
3. **Outlined numerals.** The "how it works" steps use large Poppins 800 numerals in
   `--paper-3`, sitting behind the step title.
4. **One dark band.** Exactly one `--sea` section (the no-commission statement). It is the
   pause in the page; a second one would kill it.

## 6. Assets

Only real material ships:

- `public/screens/*.jpeg` — real screenshots from `maltainmo/screenshots/`.
- `public/brand/*` — the real app icon and logo lockup.
- **Excluded on purpose:** the profile screenshot (`4.jpeg`), which shows a real user's
  email address. It must not appear on a public site.
- No stock photography of Malta, because none is owned. Locality is carried by real
  place names and the app's own map screen instead.

## 7. Copy rules

Written against the "copy slop killer" checklist:

- **Name the pain before the feature.** The headline is about the middleman, not about "a
  modern property experience".
- **One job per section.** If a section is arguing two things, it is two sections.
- **Concrete nouns, real place names.** "Sliema", "Ta' Xbiex", "20 photos", "€" — not
  "properties across the region".
- **No claim the app cannot back.** No user counts, no listing counts, no testimonials, no
  "trusted by". The commission claim is worded exactly as the Terms of Service words it.
- **Banned words:** seamless, elevate, unlock, empower, revolutionise, effortless, journey,
  cutting-edge, "not just X — it's Y", "in today's fast-paced".
- Sentences run short. Contractions are fine. British spelling, because Malta.
