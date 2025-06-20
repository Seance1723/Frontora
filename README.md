# Frontora

Frontora is a lightweight responsive frontend framework built with SCSS.
It provides a simple grid system, UI components and JavaScript helpers for
dropdowns, modals and accordions. Utility classes are available for spacing
and colors with the `fr-` prefix. Optional GSAP support is included for
smooth animations.

Additional components include alerts and progress bars with simple helper
functions.

## Getting Started

Install dependencies and build the CSS:

```bash
npm install
npx sass scss/frontora.scss site/css/frontora.css
```

To enable animated dropdowns, modals and accordions include the GSAP script
before `frontora.js`:

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="js/frontora.js"></script>
```

Use `frSetProgress('#myProgress', 75)` to animate a progress bar and include
`fr-alert-close` buttons to dismiss alerts.

Open `site/index.html` in your browser to see a demo.
