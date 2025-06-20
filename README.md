# Frontora

Frontora is a lightweight and unique SCSS framework for building responsive interfaces. It ships with a flexible grid, utility classes and small JavaScript modules. Each interactive element has its own script but a `frontora.js` bundle is also provided for convenience.

## Getting Started

Install dependencies and build the CSS:

```bash
npm install
npx sass scss/frontora.scss site/css/frontora.css
```

Include the optional GSAP script before the Frontora bundle if you want animated transitions:

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="js/frontora.js"></script>
```

If you only need specific behaviour you can instead include the individual modules from `js/modules`.

### Helpers

- `frSetProgress('#myProgress', 80)` – update progress bars
- `frShowToast('#myToast')` – display toast notifications
- `frInitDropdowns()` etc. – manually initialise components if needed

Open `site/index.html` to see a small demo of the framework.