# Serhat Kaya — Portfolio

A personal portfolio website built with Astro, showcasing projects, skills, and a weekly stage blog.

## 🚀 Tech Stack

- [Astro](https://astro.build/) — Static site framework
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [React](https://react.dev/) — Interactive components
- [MDX](https://mdxjs.com/) — Blog content with markdown + components
- [TypeScript](https://www.typescriptlang.org/) — Type safety

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── content/
│   └── blog/         # MDX blog posts (weekly stage updates)
├── layouts/          # Page layouts
├── pages/            # Routes (index, about, blogs, contact)
├── styles/           # Global and page-specific CSS
└── data/             # Static data
public/
└── img-blogs/        # Blog images
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Serhathub/serhat-portfolio.git

# Navigate to the project
cd serhat-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

### Build

```bash
npm run build
```

Output will be in the `dist/` folder.

## 📝 Adding a Blog Post

Create a new `.mdx` file in `src/content/blog/`:

```markdown
---
title: "Week X: Your Title"
slug: "blog-week-x"
tags:
  - development
  - project
date: "DD/MM/YYYY"
image: "/img-blogs/blog-week-x.jpg"
---

Your content here...
```

The blog will automatically appear on the blogs page and in the filter system.

## 📬 Contact

- GitHub: [@Serhathub](https://github.com/Serhathub)
