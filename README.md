# Saffron & Stone

A premium, single-page website for **Saffron & Stone**, a fictional contemporary Indian fine-dining restaurant in Bandra West, Mumbai. Built as a freelance portfolio project.

> **Demo content:** the restaurant, its address, phone number, email, menu, prices and opening hours are fictional and do not represent a real business.

## Features

- Sticky navigation with active-section highlighting and an accessible mobile menu (focus trap, Escape to close, scroll lock)
- Cinematic hero with responsive WebP images and a subtle entrance animation
- Editorial About section
- Filterable menu (All, Starters, Mains, Desserts, Beverages) with prices in INR, driven by `src/data/menuData.js`
- Asymmetric photo gallery
- Reservation enquiry form with client-side validation and an honest demo flow (see below)
- Contact details, opening hours and a Google Maps search link
- Responsive from 320px to wide desktop, keyboard accessible, visible focus states and `prefers-reduced-motion` support
- SEO metadata, Open Graph tags and an SVG favicon

## Tech stack

- React 19 + Vite 8 (JavaScript)
- Plain CSS with design tokens (no UI framework)
- Lucide React icons
- ESLint

## Getting started

Requires Node.js `^20.19.0` or `>=22.12.0`.

```bash
npm install
npm run dev       # start the dev server
npm run lint      # run ESLint
npm run build     # production build to dist/
npm run preview   # preview the production build
```

> **Windows PowerShell:** if script execution policy blocks `npm`, use `npm.cmd` (e.g. `npm.cmd run dev`) or run the commands from Command Prompt.

## Project structure

```
src/
  assets/images/   Optimised WebP photography
  components/      Section components (Navbar, Hero, About, Menu, Gallery, Reservation, Contact, Footer)
  data/            Site details, menu, gallery and image references
  hooks/           useScrolled, useActiveSection
  styles/          Global tokens (index.css) and per-section styles
  utils/           Reservation validation and enquiry email helpers
```

## Demo content and reservation flow

- The address (27 Saffron Lane), phone number (`+91 22 0000 0000`) and email (`reservations@saffronandstone.example`) are fictional. The phone number is deliberately invalid and the `.example` domain is reserved, so no real person or inbox is contacted.
- The "Open in Google Maps" link searches for the real neighbourhood (Bandra West, Mumbai), not the fictional street address.
- There is **no backend**. The reservation form validates input (required fields, email, phone, past dates, Mondays, a 90-day window, passed time slots) and then shows a clearly labelled summary with an option to open a pre-filled email. Nothing is stored or sent automatically and no booking is confirmed. A production version would need a booking service or backend.
- Social media links are intentionally omitted until real accounts exist.

## Image credits & licensing

All photographs are downloaded from Unsplash, resized and converted to WebP via the Unsplash image CDN, and stored locally in `src/assets/images`. Each photo's Unsplash page was checked and states **"Free to use under the Unsplash License"** (not Unsplash+). The [Unsplash License](https://unsplash.com/license) allows free commercial and non-commercial use without attribution, but not selling unaltered copies or compiling photos to build a competing service. Credit is given here as good practice.

| File(s) | Used in | Photographer | Source |
| --- | --- | --- | --- |
| `hero-thali-768/1280/1920.webp` | Hero | Outcast India ([@outcast_india](https://unsplash.com/@outcast_india)) | [aVCyDXjU5rs](https://unsplash.com/photos/aVCyDXjU5rs) |
| `about-dining-room.webp` | About | Decima Athens ([@decimaandathens](https://unsplash.com/@decimaandathens)) | [JNazKIHX614](https://unsplash.com/photos/JNazKIHX614) |
| `about-chef.webp` | About | Alfonso Betancourt ([@tigredemar](https://unsplash.com/@tigredemar)) | [Bq44jpoeFf4](https://unsplash.com/photos/Bq44jpoeFf4) |
| `menu-samosa.webp` | Menu | kabir cheema ([@kabircheema](https://unsplash.com/@kabircheema)) | [8T9AVksyt7s](https://unsplash.com/photos/8T9AVksyt7s) |
| `menu-paneer-tikka.webp` | Menu | Viktor Forgacs ([@sonance](https://unsplash.com/@sonance)) | [WmKXu-bzygo](https://unsplash.com/photos/WmKXu-bzygo) |
| `menu-pani-puri.webp` | Menu | Rimsha Noor ([@rimshaj123](https://unsplash.com/@rimshaj123)) | [ojbPCoo4I20](https://unsplash.com/photos/ojbPCoo4I20) |
| `menu-tandoor-skewers.webp` | Menu | Zayed Ahmed Zadu ([@zayed_ahmed_zadu](https://unsplash.com/@zayed_ahmed_zadu)) | [-yFswqcNxXk](https://unsplash.com/photos/-yFswqcNxXk) |
| `menu-biryani.webp` | Menu | Shreyak Singh ([@shreyaksingh](https://unsplash.com/@shreyaksingh)) | [0j4bisyPo3M](https://unsplash.com/photos/0j4bisyPo3M) |
| `menu-butter-chicken.webp` | Menu | Raman ([@potofgold07](https://unsplash.com/@potofgold07)) | [sqcH2q7lkvo](https://unsplash.com/photos/sqcH2q7lkvo) |
| `menu-mustard-fish.webp` | Menu | Abhik Paul ([@thedrunknerd](https://unsplash.com/@thedrunknerd)) | [Lsiv0oAIfFk](https://unsplash.com/photos/Lsiv0oAIfFk) |
| `menu-rogan-josh.webp` | Menu | amirali mirhashemian ([@amir_v_ali](https://unsplash.com/@amir_v_ali)) | [ZSukCSw5VV4](https://unsplash.com/photos/ZSukCSw5VV4) |
| `menu-palak-paneer.webp` | Menu | Chetanya Sharma ([@chetanya_designs](https://unsplash.com/@chetanya_designs)) | [_bAW_ln_-Zs](https://unsplash.com/photos/_bAW_ln_-Zs) |
| `menu-pistachio-cake.webp` | Menu | Shaikha Alsaedi ([@byshaikha](https://unsplash.com/@byshaikha)) | [nPaGPefMAa0](https://unsplash.com/photos/nPaGPefMAa0) |
| `menu-kheer.webp` | Menu | Ashraful Islam ([@ashraful25](https://unsplash.com/@ashraful25)) | [j1ZG-vIiApI](https://unsplash.com/photos/j1ZG-vIiApI) |
| `menu-jalebi.webp` | Menu | Shoeib Abolhassani ([@shoeibabhn](https://unsplash.com/@shoeibabhn)) | [NsFJOFvAt2I](https://unsplash.com/photos/NsFJOFvAt2I) |
| `menu-masala-chai.webp` | Menu | AJOY DAS ([@champsara](https://unsplash.com/@champsara)) | [gXYwwTQ_tZw](https://unsplash.com/photos/gXYwwTQ_tZw) |
| `menu-mango-lassi.webp` | Menu | Circle Digital Marketing Agency ([@circledigitalmarketingagency](https://unsplash.com/@circledigitalmarketingagency)) | [8I2cgBzen8M](https://unsplash.com/photos/8I2cgBzen8M) |
| `menu-kairi-cooler.webp` | Menu | Cliffer Rebelo ([@cliffer14](https://unsplash.com/@cliffer14)) | [oy8Cb66RFW0](https://unsplash.com/photos/oy8Cb66RFW0) |
| `menu-rose-thandai.webp` | Menu | Jaspinder Singh ([@jaspindersingh](https://unsplash.com/@jaspindersingh)) | [CBwoyP69nAU](https://unsplash.com/photos/CBwoyP69nAU) |
| `gallery-dining-room.webp` | Gallery | takahiro taguchi ([@tak_tag](https://unsplash.com/@tak_tag)) | [8l_RuuZrOyY](https://unsplash.com/photos/8l_RuuZrOyY) |
| `gallery-thali.webp` | Gallery | Suryagayathri C.K ([@suryagayathri](https://unsplash.com/@suryagayathri)) | [ahAnlX43EYg](https://unsplash.com/photos/ahAnlX43EYg) |
| `gallery-spices.webp` | Gallery | Anju Ravindranath ([@anjurnath](https://unsplash.com/@anjurnath)) | [Nihdo084Yos](https://unsplash.com/photos/Nihdo084Yos) |
| `gallery-tandoor.webp` | Gallery | 毛 祥 ([@mw960367054](https://unsplash.com/@mw960367054)) | [-kTrhnE6Hzs](https://unsplash.com/photos/-kTrhnE6Hzs) |
| `gallery-bar.webp` | Gallery | Intricate Explorer ([@intricateexplorer](https://unsplash.com/@intricateexplorer)) | [xdXjX_ACpw0](https://unsplash.com/photos/xdXjX_ACpw0) |
| `gallery-table.webp` | Gallery | chez gilbert saigon ([@chezgilbertsaigon](https://unsplash.com/@chezgilbertsaigon)) | [JM9bcbYabbs](https://unsplash.com/photos/JM9bcbYabbs) |

Photographs depict real dishes and venues, not the fictional restaurant. Dish names and descriptions were written to match each photo, but the photos are illustrative.

## Fonts

Playfair Display and DM Sans are loaded from Google Fonts (SIL Open Font License).

## Known limitations

- Frontend only: there is no booking backend, and the demo email address cannot receive mail.
- Date and time validation uses the visitor's local clock, not Mumbai time.
- Open Graph image and canonical URL are not set until a production domain exists.
- Fonts depend on Google Fonts being reachable.
