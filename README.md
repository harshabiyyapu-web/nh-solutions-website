# NH Solutions — Website

Static multi-page website for NH Solutions (product & growth studio): 51 pages — home, 13 services, industries, AI Lab, 15 case studies, blog, company and legal pages.

## Edit & build
- Company details, stats, navigation: `src/lib.mjs`
- Case studies: `src/cases.mjs` · Blog posts: `src/posts.mjs`
- Pages: `src/pages/*.mjs` · Styles: `assets/css/styles.css`

```bash
node build.mjs          # regenerates every .html file
python3 sync-images.py  # pulls new generated images into assets/img and rebuilds
python3 -m http.server 4321   # preview at http://localhost:4321
```

Image prompts for every slot are in `IMAGE-PROMPTS.md`.
