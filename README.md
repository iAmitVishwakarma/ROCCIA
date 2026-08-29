# Rocia

**Rocia** is a premium, modern React web portfolio showcasing a cutting‑edge **sticky sidebar** experience with a scrolling image gallery. Built with **Vite**, **React 19**, and **Tailwind CSS**, the site demonstrates a sleek, premium aesthetic using glass‑morphism, vibrant gradients, and smooth micro‑animations.

---

## 📖 Overview

Rocia combines three main sections:

1. **Left Sticky Sidebar** – Displays a large "10+" statistic that stays pinned while the user scrolls.
2. **Center Scrolling Gallery** – A masonry‑style image grid that scrolls freely, with hover‑scale animations and a subtle drop‑shadow.
3. **Right Sticky Sidebar** – Shows the brand name **ROCCIA** and a stylised logo that remain fixed on the viewport.

All three sections work together to create a dynamic, immersive scrolling experience without any JavaScript beyond React's rendering. The layout is fully responsive, falling back to a single‑column layout on mobile devices.

---

## ✨ Features

- **Sticky sidebars** using `position: sticky` (no JS needed) – works across modern browsers.
- **Tailwind CSS** utility‑first styling – eliminates bulky custom CSS and enables rapid design iteration.
- **Responsive design** – columns collapse gracefully on tablets and phones.
- **Micro‑animations** – hover‑scale effect on images, smooth transition of the logo.
- **Premium UI** – custom colour palette, glass‑morphism backgrounds, and typography from Google Fonts (Inter & Lato).
- **Optimised assets** – lazy‑loaded images and SVG icons for instant page loads.
- **Vite dev server** – fast HMR for rapid development.

---

## 🚀 Live Demo

> **_Note:_** Replace the placeholder URL with your actual deployment URL (e.g., GitHub Pages, Vercel, Netlify).

[🔗 Live demo on GitHub Pages](https://your-username.github.io/rocia)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 19 (JSX) |
| **Bundler**   | Vite 7 |
| **Styling**   | Tailwind CSS 4.1 (utility‑first) |
| **Fonts**     | Google Fonts – Inter, Lato |
| **Version Control** | Git |
| **Hosting**   | Any static‑site host (GitHub Pages, Netlify, Vercel) |

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/rocia.git
cd rocia

# Install dependencies
npm install
```

---

## ▶️ Development

Start the Vite development server (hot‑module replacement enabled):

```bash
npm run dev
```

Open `http://localhost:5173` in your browser. The site automatically reloads when you edit source files.

---

## 📦 Build for Production

```bash
npm run build   # Generates optimized static assets in /dist
```

You can preview the production build locally:

```bash
npm run preview
```

---

## 📂 Project Structure

```
rocia/
├─ public/               # static assets (favicon, etc.)
├─ src/
│  ├─ assets/           # images used in the Experience gallery
│  ├─ components/       # React components (Hero, Experience, …)
│  │   ├─ Experience.jsx
│  │   └─ Hero.jsx
│  ├─ pages/            # page‑level components
│  │   └─ Home.jsx
│  ├─ index.css         # Tailwind base + custom tokens (color palette, fonts)
│  └─ main.jsx          # React entry point
├─ .gitignore
├─ README.md            # ← **You are reading it!**
├─ package.json
└─ vite.config.js
```

---

## 🎨 Design & Aesthetics

- **Colour palette** – luxury gold (`#c5a059`), cream (`#f2f1ea`), and deep charcoal for contrast.
- **Typography** – `Inter` for headings, `Lato` for body copy, providing excellent readability.
- **Glass‑morphism** – subtle translucency on sidebars for a premium feel.
- **Micro‑animations** – images scale on hover (`group-hover:scale-105`), logo hue rotation for visual interest.
- **Responsive breakpoints** – mobile‑first design that adapts at 1024 px and 768 px.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your‑feature`).
3. Commit your changes (`git commit -m "Add …"`).
4. Push to your fork (`git push origin feature/your‑feature`).
5. Open a Pull Request against `main`.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 📞 Contact

**Creator:** *Your Name* – [your.email@example.com](mailto:your.email@example.com)

---

*Built with love, premium design, and a pinch of modern CSS magic.*
