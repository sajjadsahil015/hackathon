# Quickstart: Interactive Robotics Textbook

**Feature**: Interactive Robotics Textbook
**Date**: 2025-12-07

## Prerequisites
- Node.js >= 18.0.0
- npm or yarn

## Setup

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd interactive-robotics-textbook
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm start
   ```
   Opens [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deploy

1. **Build for production**:
   ```bash
   npm run build
   ```
   Output will be in `build/` directory.

2. **Test Production Build**:
   ```bash
   npm run serve
   ```

3. **Deploy to GitHub Pages**:
   (Handled by GitHub Actions, but manual command is:)
   ```bash
   USE_SSH=true npm run deploy
   ```

## Adding Content

1. Create a new folder or file in `docs/`.
2. Ensure frontmatter includes `title` and `sidebar_position`.
3. Save file; Docusaurus hot-reloads automatically.
