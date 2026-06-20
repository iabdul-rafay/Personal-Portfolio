# Abdul Rafay — Premium Portfolio

A single-page, highly animated portfolio. Royal Indigo + Cyber Cyan + Electric
Purple + Soft Gold theme. Glassmorphism, magnetic buttons, custom cursor,
mouse-follow glow, particle background, animated SVG avatar with orbiting tech
icons, smooth scroll reveals, and an interactive blog.

## Run locally (VS Code)
1. Install **Live Server** extension
2. `File → Open Folder` → select this folder
3. Right-click `index.html` → **Open with Live Server**
4. Site opens at `http://127.0.0.1:5500`

## Deploy to Vercel

**CLI:**
```bash
npm i -g vercel
cd portfolio
vercel
```

**Dashboard:**
1. Push folder to GitHub
2. Visit `vercel.com/new` → Import repo
3. Framework preset: **Other** → Deploy

## Structure
```
index.html        Single-page app
css/style.css     All styles
js/data.js        Projects, skills, blog posts, socials
js/main.js        Loader, cursor, animations, blog engine
assets/           CV PDF
vercel.json       Vercel config
```

## Sections
Home · About · Skills · Projects · Certificates · Blog · Resume · Contact
