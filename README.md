# punk.fun documentation

Non-technical documentation site for punk.fun. Plain static HTML/CSS/JS — no build
step, no dependencies, no framework. It works the moment the files are served.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Overview / home |
| `how-it-works.html` | Full launch lifecycle |
| `punk.html` | Punk, coming soon |
| `buy-in-an-auction.html` | Buyer guide |
| `pricing.html` | Batches, growth, decay, reading the chart |
| `refunds.html` | When a sale doesn't sell out |
| `after-the-sale.html` | Claiming, the pool, trading |
| `launch-a-token.html` | Launcher guide, every form setting |
| `fees.html` | Fees and who gets what |
| `the-pool.html` | The pool at sellout and the opening price |
| `sale-states.html` | Every sale badge explained |
| `glossary.html` | Term definitions |
| `faq.html` | Frequently asked questions |
| `fun-vs-punk.html` | Redirect to `punk.html`, kept so old links work |
| `batch-average.html` | Redirect to the one-price section of `pricing.html`; batch-average mode was removed from the contracts |
| `img/` | Screenshots from the alpha (`.webp`) and diagrams (`.svg`) |
| `styles.css` / `app.js` | Shared styling and the mobile-nav script |

## Publishing on GitHub Pages

1. Create a repo (e.g. `punkdotfun-docs`) and push every file in this folder to it,
   including the hidden `.nojekyll` and `CNAME` files.
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   pick your branch (`main`) and the `/ (root)` folder. Save.
4. Wait ~1 minute. The site goes live.

`.nojekyll` is included so GitHub serves the files exactly as-is (no Jekyll
processing). Leave it in place.

## Custom domain (you own punk.fun)

The `CNAME` file currently contains:

```
docs.punk.fun
```

**Change this to whatever subdomain you actually want** — e.g. `docs.punk.fun`
or `learn.punk.fun`. Then add a matching DNS record at your domain registrar:

- Type: `CNAME`
- Host/Name: the subdomain part (e.g. `docs`)
- Value/Target: `<your-github-username>.github.io`

After DNS propagates, GitHub Pages will detect the `CNAME` file and serve the
site at your subdomain. Tick **Enforce HTTPS** in Settings → Pages once it's
available.

> If you'd rather not use a subdomain, just delete the `CNAME` file and the site
> stays at `<username>.github.io/<repo>/`.

## Linking from your landing page

Once live, link to it from your existing landing page with a simple anchor:

```html
<a href="https://docs.punk.fun">Docs</a>
```

(Use whatever subdomain you settled on above.)

## Editing

Every page is a standalone HTML file. To change wording, open the file and edit
the text directly. To add a page, copy an existing one, update the `<title>` and
content, and add a `<a class="nav-link">` entry to the sidebar in **every** page
(the sidebar is duplicated per page to keep the site dependency-free).
