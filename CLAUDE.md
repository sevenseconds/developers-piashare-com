# Claude Project Brief

## Project Description
This project is a modern, multilingual micro-blogging platform for PiaShare developers. It features a clean list-tile design similar to Twitter/X, with support for both Thai and English content. The platform showcases tech updates, tutorials, and developer resources with excellent typography and responsive design.

## Key Features
- **Internationalization (i18n)**: Full support for Thai and English with separate routes (`/` for English, `/th/` for Thai)
- **Modern List Tile Design**: Card-based layout with optimized mobile responsiveness
- **Dark/Light Theme**: Smart theme toggle with system preference detection and manual override
- **Thai Typography**: Google Fonts Mitr for excellent Thai language rendering with large, mobile-friendly fonts
- **Content-First Layout**: Subtle meta information that doesn't distract from the main content
- **Responsive Images**: Placeholder fallbacks for broken images with conditional thumbnail display
- **Language Switching**: Easy language toggle in the header
- **Individual Post Pages**: Full-content post pages with enhanced typography for mobile readability
- **Mobile-Optimized Typography**: Significantly increased font sizes for high DPI screens and mobile devices

## Frameworks and Libraries
- [Astro](https://astro.build/) - The web framework with built-in i18n support
- [UnoCSS](https://unocss.dev/) - Utility-first CSS framework for styling
- [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- [Google Fonts Mitr](https://fonts.google.com/specimen/Mitr) - Thai-optimized typography

## Project Structure
```
src/
├── components/
│   ├── Post.astro           # Main blog post component with conditional thumbnails
│   ├── ThemeToggle.astro    # Dark/light theme switcher with persistence
│   └── LanguageSwitcher.astro # Thai/English language toggle
├── layouts/
│   └── MicroBlogLayout.astro # Main layout with theme and i18n support
├── pages/
│   ├── index.astro          # English homepage (thumbnails hidden)
│   ├── posts/
│   │   └── getting-started-api.astro  # Individual post with large fonts
│   └── th/
│       ├── index.astro      # Thai homepage (thumbnails hidden)
│       └── posts/
│           └── getting-started-api.astro  # Thai post with large fonts
├── astro.config.mjs         # Astro config with native i18n setup
└── unocss.config.mjs        # UnoCSS config with Mitr font
```

## Current Implementation Details

### Post Component (`src/components/Post.astro`)
- **Props**: `title`, `subtitle?`, `image?`, `tags[]`, `date?`, `readTime?`, `author?`, `href?`, `showThumbnail?`
- **Layout**: Responsive flex layout (vertical on mobile, horizontal on desktop)
- **Image Handling**: Left-positioned with fallback placeholders for broken images, conditional display via `showThumbnail`
- **Meta Info**: Author, date, and read time positioned below title in muted styling
- **Content Hierarchy**: Title → Meta → Subtitle → Tags → Subtle "Read more" link
- **Conditional Display**: Thumbnails hidden on homepage (`showThumbnail={false}`), shown in individual posts

### Theme System
- **Persistence**: LocalStorage with system preference fallback
- **Dynamic Updates**: Listens for system theme changes when no manual preference set
- **Colors**: Light theme uses `bg-gray-50`, dark theme uses `bg-gray-900`

### Internationalization
- **Astro Native i18n**: File-based routing without custom translation utilities
- **Route Structure**: `defaultLocale: 'en'`, `locales: ['en', 'th']`
- **Content Management**: Separate `.astro` files for each language with localized content
- **Individual Posts**: Both languages have corresponding post pages with proper linking

### Typography & Mobile Optimization
- **Font Sizes**: Significantly increased for mobile and high DPI screens
  - Main titles: `text-4xl sm:text-5xl` (increased from `text-3xl`)
  - Lead paragraphs: `text-2xl sm:text-3xl` (increased from `text-xl`)
  - Body text: `text-lg sm:text-xl` (increased from base size)
  - Meta info: `text-lg sm:text-xl` (increased from `text-base`)
- **Responsive Design**: Mobile-first approach with larger touch targets
- **Thai Language**: Google Fonts Mitr optimized for Thai rendering

## What Matters for Claude Code
When the context exceeds, it is important for Claude Code to have access to the following information to continue work:
- The project description and current feature set
- The i18n setup and language-specific content structure with individual post pages
- The Post component interface and responsive design patterns with conditional thumbnails
- Theme toggle implementation and state management
- The contents of `unocss.config.mjs` and `astro.config.mjs`
- The contents of the `src` directory, especially components, layouts, and post pages
- Read the `TODO.md` file to see the pending tasks or current status
- Typography setup with Mitr font for Thai language support and mobile optimization
- Individual post page structure and enhanced font sizing for mobile readability
- Conditional thumbnail display logic (`showThumbnail` prop usage)

## Memories
- Check TODO.md for the next tasks or current status