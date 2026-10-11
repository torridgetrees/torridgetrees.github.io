# Torridge Christmas Trees website

A simple website made of plain files: no WordPress, no database, nothing to update or patch.
It can be hosted for free on GitHub Pages, Cloudflare Pages or Netlify.

Prices, tree sizes, stands, delivery options and dates are **not** on the website. They all
live in the Google Form, and the website just sends people to it with "Order your tree" buttons.
So when prices change, you only update the form.

## Each year: point the site at the new order form

If you make a new Google Form for the season, open **`site-config.js`** in any text editor
(Notepad, TextEdit, or straight on GitHub by clicking the pencil icon). That's the only file you
need to touch:

| What | Setting |
|---|---|
| Order form link (every "Order your tree" button) | `orderFormUrl`, e.g. `"https://forms.gle/abc123"` |
| Form shown inside the Order page (optional) | `orderFormEmbedUrl`: the long `.../viewform?embedded=true` link, or `""` to show just a button |
| Email, phone, contact name | `email`, `phone`, `phoneName` |
| Social links (`""` hides one) | `facebook`, `instagram`, `twitter` |

Keep the quotes and commas as they are. If you keep using the same form each year, you don't
need to change anything here.

Where to find the form links: in Google Forms click **Send**, then the link icon (tick "Shorten URL"
for the forms.gle link). For the embedded version, click the `< >` icon and copy the address
inside `src="..."`.

## Preview on your computer

Double-click `index.html`. It opens in your browser just as it will look online.

## Files

- `index.html`, `about.html`, `contact.html`, `order.html`, `privacy.html`: the pages
- `site-config.js`: **the settings (edit this)**
- `site.js`: fills the pages in from the settings (no need to edit)
- `styles.css`: colours and layout
- `images/`: logo and photos (from the old website)
- `privacy-policy.html`, `order-form.html`: redirects, so old links to the old site still work
- `404.html`: "page not found" page
- `.nojekyll`: tells GitHub Pages to serve the files as they are (leave it in)

## Deploying (free)

This folder is ready to be the root of a GitHub repository.

**GitHub Pages**: create a repository on GitHub, push this folder to it (branch `main`), then
Settings → Pages → *Deploy from a branch* → `main` / root. When you're ready to use your own
domain, add `torridgetrees.co.uk` under Settings → Pages → Custom domain (GitHub creates the
CNAME file for you), then update the DNS records.

**Cloudflare Pages** or **Netlify**: either connect the GitHub repository, or upload this folder
by drag and drop. No build command is needed; the output folder is the root.

To update later, edit `site-config.js` and push/upload again (editing on GitHub redeploys by itself).

## Moving off IONOS (do this last)

1. Get the new site live on the free host and check it on its temporary address.
2. Point the domain at it: change the DNS records at IONOS, move the domain's DNS to
   Cloudflare (free), or transfer the domain away from IONOS.
3. The domain currently has IONOS mail (MX) records. If nobody uses an @torridgetrees.co.uk
   mailbox, they can go. Use Cloudflare Email Routing if you want an address like
   orders@torridgetrees.co.uk forwarding to Gmail.
4. Once the new site shows at torridgetrees.co.uk, cancel the IONOS hosting plan.
