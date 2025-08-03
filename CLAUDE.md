# Claude Project Brief

## Project Description
This project is a modern, multilingual micro-blogging platform for PiaShare developers. It features a clean list-tile design similar to Twitter/X, with support for both Thai and English content. The platform showcases tech updates, tutorials, and developer resources with excellent typography and responsive design.

## Key Features
- **Internationalization (i18n)**: Full support for Thai and English with routes (`/` and `/th/` for Thai, `/en/` for English)
- **Twitter/X-like Layout**: Three-column responsive design with left navigation, main content, and right sidebar
- **Responsive Navigation**: Left sidebar adapts from full text to icons based on screen space availability
- **Mobile Bottom Navigation**: Fixed bottom navigation bar on mobile devices with icons and labels
- **Right Sidebar**: Always visible on desktop/tablet with recent posts and programming languages
- **Dark/Light Theme**: Smart theme toggle with system preference detection and manual override
- **Thai Typography**: Google Fonts Mitr for excellent Thai language rendering with large, mobile-friendly fonts
- **Content-First Layout**: Subtle meta information that doesn't distract from the main content
- **Responsive Images**: Placeholder fallbacks for broken images with conditional thumbnail display
- **Language Switching**: Easy language toggle in the header with Thai prioritized first
- **Individual Post Pages**: Full-content post pages with enhanced typography for mobile readability
- **Mobile-Optimized Typography**: Significantly increased font sizes for high DPI screens and mobile devices
- **Content Collections**: Markdown-based content management with Astro's content layer API
- **Dynamic Routing**: Automated page generation from markdown content with proper language separation

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
│   ├── LanguageSwitcher.astro # Thai/English language toggle (Thai first)
│   ├── LeftSidebar.astro    # Responsive left navigation (full text/icons only)
│   ├── RightSidebar.astro   # Right sidebar with recents and programming languages
│   └── MobileBottomNav.astro # Mobile bottom navigation bar
├── layouts/
│   └── MicroBlogLayout.astro # Main layout with Twitter/X-like three-column structure
├── content/
│   ├── config.ts            # Content collections configuration
│   └── blog/
│       ├── en/              # English markdown posts
│       │   ├── getting-started-api.md
│       │   ├── building-responsive-components.md
│       │   ├── modern-javascript-features.md
│       │   └── termux-ai-setup-guide.md
│       └── th/              # Thai markdown posts
│           ├── getting-started-api.md
│           ├── building-responsive-components.md
│           ├── modern-javascript-features.md
│           └── termux-ai-setup-guide.md
├── pages/
│   ├── index.astro          # Thai homepage (default, thumbnails hidden)
│   ├── posts/
│   │   └── [...slug].astro  # Dynamic Thai post pages
│   ├── th/
│   │   ├── index.astro      # Alternative Thai homepage
│   │   └── posts/
│   │       └── [...slug].astro  # Alternative Thai post routes
│   └── en/
│       ├── index.astro      # English homepage (thumbnails hidden)
│       └── posts/
│           └── [...slug].astro  # Dynamic English post pages
├── astro.config.mjs         # Astro config with native i18n (Thai default)
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

### Twitter/X-like Layout System
- **Three-Column Design**: Left navigation, main content, right sidebar
- **Responsive Breakpoints**:
  - **Mobile (<lg)**: Hidden sidebars, bottom navigation, full-width content
  - **Medium (lg-xl)**: Icon-only left sidebar (80px), visible right sidebar (320px)
  - **Large (xl+)**: Full left sidebar with text (256px), visible right sidebar (320px)
- **Left Navigation**: Home, Tutorials, Tips with responsive icon/text display
- **Right Sidebar**: Recent posts section and programming languages (JS, Python, TypeScript, Rust, Go)
- **Mobile Navigation**: Fixed bottom bar with icon and text labels

### Theme System
- **Persistence**: LocalStorage with system preference fallback
- **Dynamic Updates**: Listens for system theme changes when no manual preference set
- **Colors**: Light theme uses `bg-white`, dark theme uses `bg-black` for Twitter/X-like contrast

### Internationalization
- **Astro Native i18n**: File-based routing without custom translation utilities
- **Route Structure**: `defaultLocale: 'th'`, `locales: ['th', 'en']` (Thai as primary language)
- **Content Management**: Markdown-based content collections with language separation
- **Individual Posts**: Dynamic routing from content collections with proper language linking
- **Language Switcher**: Thai prioritized first, intelligent URL mapping between languages

### Content Collections
- **Schema Validation**: Zod-based frontmatter validation for consistency
- **Markdown Processing**: Astro's content layer API for rendering
- **Language Separation**: Organized by language (`/en/` and `/th/` subdirectories)
- **Dynamic Generation**: Pages automatically generated from markdown content
- **Rich Metadata**: Title, subtitle, author, date, tags, description, read time

### Typography & Mobile Optimization
- **Font Sizes**: Significantly increased for mobile and high DPI screens
  - Main titles: `text-4xl sm:text-5xl` (increased from `text-3xl`)
  - Lead paragraphs: `text-2xl sm:text-3xl` (increased from `text-xl`)
  - Body text: `text-lg sm:text-xl` (increased from base size)
  - Meta info: `text-lg sm:text-xl` (increased from `text-base`)
- **Responsive Design**: Mobile-first approach with larger touch targets
- **Thai Language**: Google Fonts Mitr optimized for Thai rendering
- **Enhanced Code Blocks**: Mobile-responsive styling with borders, padding, and horizontal scrolling
- **Proper Command Formatting**: Shell commands converted to scrollable code blocks instead of inline code

## What Matters for Claude Code
When the context exceeds, it is important for Claude Code to have access to the following information to continue work:
- The project description and current feature set including Twitter/X-like layout
- The three-column responsive layout system with breakpoint logic
- Left sidebar component with responsive text/icon display (`LeftSidebar.astro`)
- Right sidebar component with recents and programming languages (`RightSidebar.astro`)
- Mobile bottom navigation component (`MobileBottomNav.astro`)
- The i18n setup with Thai as default language and content collections structure
- The Post component interface and responsive design patterns with conditional thumbnails
- Theme toggle implementation and state management
- Content collections schema and markdown content organization
- Dynamic routing patterns for both languages (`[...slug].astro` files)
- Language switcher logic with Thai prioritization
- The contents of `unocss.config.mjs` and `astro.config.mjs`
- The contents of the `src` directory, especially components, layouts, content, and dynamic pages
- Read the `TODO.md` file to see the pending tasks or current status
- Typography setup with Mitr font for Thai language support and mobile optimization
- Individual post page structure with proper spacing for header controls
- Conditional thumbnail display logic (`showThumbnail` prop usage)
- Content collections configuration in `src/content.config.ts`
- Responsive layout margins and breakpoint system for three-column layout

## Memories
- Check TODO.md for the next tasks or current status