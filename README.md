# Portfolio Website

A modern single-page portfolio website built with HTML, CSS, and vanilla JavaScript.

## Features

- Responsive hero, about, services, portfolio, gallery, and contact sections
- Contact method flow from **Start Consulting**:
  - Choose **Email** or **WhatsApp**
  - Email opens a popup form
  - WhatsApp redirects directly to chat
- Contact form validation for required fields
- Dynamic footer year (auto-updates every year)
- Clean purple-themed UI with reusable styles

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

- `index.html` — page structure and modal markup
- `styles.css` — all styling and responsive layout
- `script.js` — interactivity (modals, CTA flow, footer year)
- `assets/` — static assets like profile image

## Run Locally

This is a static website, so no build step is required.

1. Open the project folder in VS Code.
2. Open `index.html` directly in a browser, or use a local static server.

Example (Python):

```bash
python3 -m http.server 8000
```

Then visit: `http://localhost:8000`

## Contact Form Setup

The contact forms are configured to submit via Formspree.

- Update the `action` URL in the form tags if you want to use your own Formspree endpoint.

## WhatsApp Setup

WhatsApp links should use your own business/personal number.

- Replace the existing `wa.me` URL in `index.html` with your own.
- Format: `https://wa.me/<countrycode><number>` (no spaces or symbols).

## Customization

- Edit text/content directly in `index.html`
- Update colors and spacing variables in `:root` inside `styles.css`
- Replace images in `assets/` and update `src` references

## License

Free to reuse and adapt for your own portfolio.
