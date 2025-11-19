# Gaushala Revolution Website

A beautiful, responsive website for promoting sustainable cattle-based ecosystems and rural empowerment.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # All UI components
│   ├── Navbar.tsx      # Sticky navigation with scroll effect
│   ├── Hero.tsx        # Hero carousel with 3 slides
│   ├── About.tsx       # Problem statement section
│   ├── Mission.tsx     # Mission & Vision sections
│   ├── Impact.tsx      # Impact statistics
│   ├── Gallery.tsx     # Image gallery with hover effects
│   ├── CTA.tsx         # Call-to-action section
│   └── Footer.tsx      # Footer with links and contact
├── pages/
│   └── Index.tsx       # Main landing page
├── assets/             # All images
├── index.css           # Design system & global styles
└── App.tsx             # App routing configuration
```

## 🎨 Design System

### Colors
- **Primary**: Emerald Green (Eco/Agricultural theme)
- **Secondary**: Amber (Call-to-action)
- **Background**: Clean white/dark modes

### Features
- Smooth scroll animations
- Responsive mobile menu
- Auto-playing hero carousel
- Hover effects on gallery images
- Gradient overlays
- Modern typography

## 🌐 Deployment to Vercel

### Method 1: Via Lovable (Easiest)
1. Click "Share" → "Publish" in Lovable
2. Your site will be live instantly

### Method 2: Via Vercel Dashboard
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

### Method 3: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🔧 Customization

### Update Content
- Edit text in component files (`src/components/*.tsx`)
- Replace images in `src/assets/` directory

### Change Colors
- Modify `src/index.css` (design tokens)
- Update `tailwind.config.ts` (if needed)

### Add Pages
1. Create new file in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `Navbar.tsx`

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Key Features

✅ Auto-playing hero carousel with manual controls
✅ Sticky navigation with scroll effect
✅ Mobile hamburger menu
✅ Smooth scroll to sections
✅ Animated statistics
✅ Hover effects on images
✅ SEO optimized meta tags
✅ Fast loading times

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📞 Support

For issues or questions, refer to:
- [Lovable Docs](https://docs.lovable.dev)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)

---

Built with ❤️ using Lovable
