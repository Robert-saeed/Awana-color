# 🎮 Color Quarters – PWA Game Interface

Color Quarters is a lightweight, mobile-friendly web app designed for quick score tracking across four colored zones: Red, Green, Yellow, and Blue. Each zone has its own counter and custom buttons for adding or subtracting values. Built for low-spec devices, it supports offline use, undo/redo history, and persistent storage.

## 🚀 Features

- 🟥 🟩 🟨 🟦 Four independent color zones
- 🔢 Individual counters per zone
- ➕➖ Custom buttons for scoring and deductions
- 🔄 Reset button to clear all counters
- ↩️ ↪️ Undo/Redo with full history tracking
- 💾 Auto-save using LocalStorage
- 📱 Responsive mobile layout
- 📦 Installable as a PWA (Add to Home Screen)
- 🌐 Offline support via Service Worker

## 📁 File Structure

- `index.html` – Main interface
- `manifest.json` – PWA configuration
- `service-worker.js` – Offline caching logic
- `icon-192.png` / `icon-512.png` – App icons

## 🛠️ Run Locally

```bash
git clone https://github.com/yourusername/color-quarters.git
cd color-quarters
# Open index.html in your browser
