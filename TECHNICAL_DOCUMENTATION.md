
# Progressive Group Website - Technical Documentation

## Architecture Overview
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom configurations
- **UI Components**: Shadcn/UI component library
- **Routing**: React Router DOM v6
- **State Management**: React hooks and context
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/UI components
│   ├── Navigation.tsx  # Header navigation
│   ├── Footer.tsx      # Site footer
│   ├── LoadingScreen.tsx
│   └── ContactForm.tsx
├── pages/              # Route components
│   ├── Index.tsx       # Homepage
│   ├── OurStory.tsx    # Company history
│   ├── OurBusinesses.tsx
│   ├── Awards.tsx
│   ├── OurImpact.tsx
│   └── Careers.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── index.css          # Global styles
```

## Key Components

### Navigation Component
- Responsive design with mobile hamburger menu
- Smooth scrolling between sections
- Active state management
- Company logo with rotation animation

### Loading Screen
- Custom branded loader
- Smooth transition to main content
- Progressive Group branding

### Contact Form
- Form validation with React Hook Form
- Responsive design with proper mobile optimization
- Professional styling with subtle animations

### Footer
- Company information and contact details
- Social media links
- Legal pages and sitemap
- Consistent across all pages

## Responsive Design Strategy
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible typography scaling
- Optimized touch targets for mobile
- Proper spacing and layout adjustments

## Performance Optimizations
- Lazy loading of images
- Code splitting by routes
- Optimized bundle size
- Fast loading with Vite
- Efficient re-renders with React best practices

## SEO Implementation
- Meta tags for each page
- Open Graph tags for social sharing
- Twitter Card integration
- Structured data for search engines
- Semantic HTML structure

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement approach
