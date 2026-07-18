# My Care

A mobile-style service app (hostel, school, health, finance, daily tasks, and more) built with React + Vite.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

## Deploy it live on GitHub Pages (so you can actually open and use the app)

This only needs to be done once per setup:

```bash
npm install
npm run deploy
```

That command builds the app and publishes it to a `gh-pages` branch on your repo automatically.

Then, on GitHub:
1. Go to your repository → **Settings** → **Pages** (left sidebar)
2. Under "Build and deployment" → Source: **Deploy from a branch**
3. Branch: select **gh-pages**, folder **/ (root)** → **Save**
4. Wait 1-2 minutes, then visit:
   `https://YOUR_USERNAME.github.io/MY-CARE-V2/`

Whenever you want to update the live app after making changes:
```bash
npm run deploy
```
That's it — no need to touch GitHub Pages settings again after the first time.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: My Care app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Project structure

```
mycare-app/
├── index.html          entry HTML file
├── package.json         dependencies and scripts
├── vite.config.js        build config
└── src/
    ├── main.jsx          React entry point
    └── MyCareApp.jsx      the app itself (home + health screens)
```
