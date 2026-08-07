# LTS Construction – Official Website

Modern, high-conversion website for **LTS Construction (Pty) Ltd**, a KwaZulu-Natal based main contractor specialising in industrial, commercial and residential construction.

**Tagline:** Construction On-Time

---

## Overview

| Item | Detail |
|------|--------|
| Company | LTS Construction (Pty) Ltd |
| Registration | 2018/353263/07 |
| VAT | 4190282527 |
| Location | 14 Churchill Street, Shelly Beach, KwaZulu-Natal, South Africa |
| Phone | 079 579 7759 · 063 701 1380 |
| Email | trismout@gmail.com · moutondavid012@gmail.com |
| Director | David Mouton (45+ years industry experience) |

---

## Features

- Fully responsive, mobile-first design
- Dark / Light mode with system preference detection + localStorage persistence
- Sticky glass-morphism header
- Mobile hamburger navigation
- Floating WhatsApp button (high-conversion for SA market)
- Project portfolio with hover overlays
- Testimonials & trust signals
- Real Google Maps embed on Contact page
- Accessible focus states & `prefers-reduced-motion` support
- Clean, modern 2026 design system (Inter font, CSS variables)

---

## Project Structure

```
lts-modern/
├── index.html          # Home
├── services.html       # Services
├── projects.html       # Portfolio
├── about.html          # Company story & leadership
├── contact.html        # Enquiry form + Google Maps
├── css/
│   └── style.css       # Design system + dark mode
├── js/
│   └── main.js         # Menu, theme toggle, scroll behaviour
├── assets/
│   └── images/         # Logo + project photography
├── README.md
└── .gitignore
```

---

## Quick Start

### Option 1 – Open directly
Simply open `index.html` in any modern browser.

### Option 2 – Local server (recommended)

```bash
# Python
python3 -m http.server 8080

# Node
npx serve -p 8080
```

Then visit: **http://localhost:8080**

---

## Dark Mode

The site respects the user’s system preference on first visit.  
A moon / sun toggle in the header lets visitors switch themes.  
Preference is saved in `localStorage` under the key `lts-theme`.

---

## Customisation

- **Brand colours** – edit CSS variables at the top of `css/style.css` (`--red`, `--red-dark`, etc.)
- **Contact details** – search/replace phone numbers and emails across the HTML files
- **Google Maps** – the embed on `contact.html` uses a place query for 14 Churchill Street, Shelly Beach. Replace the `src` if the address changes.
- **Form** – currently uses `action="#"`. Connect to Formspree, Netlify Forms, or your own backend as needed.

---

## Browser Support

Chrome, Firefox, Safari, Edge (latest two versions).  
CSS Grid, Flexbox, `backdrop-filter`, and CSS custom properties are used.

---

## Licence & Credits

© 2026 LTS Construction (Pty) Ltd. All rights reserved.  
Website design & development by **Raznet Solutions**.

Project photography and company profile materials remain the property of LTS Construction.

---

## Contact

For website support or further development:

- **Raznet Solutions**
- bathie28@gmail.com / 0836701391
- Project enquiries: trismout@gmail.com
