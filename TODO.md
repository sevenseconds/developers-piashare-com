
# Project TODO

## Feature/Tech Highlight

This project is a modern, multilingual micro-blogging platform for PiaShare developers, featuring a clean list-tile design similar to X.com/Twitter.com, focusing on tech tutorials and updates.

**Key Achievements:**
- **Twitter/X-like Layout:** Three-column responsive design with intelligent sidebar management.
- **Responsive Navigation:** Left sidebar adapts from full text to icons based on available space.
- **Mobile Bottom Navigation:** Fixed bottom navigation bar for mobile devices with icons and labels.
- **Right Sidebar Always Visible:** Programming languages and recent posts shown on all non-mobile screens.
- **Tag System:** Language-separated tag pages with counters and conditional TagSidebar.
- **Modern List Tile Design:** Clean card-based layout optimized for content consumption.
- **Multilingual Support:** Full i18n with Thai as default language and English support using Astro's native routing.
- **Smart Theme System:** Dark/light theme toggle with system preference detection and persistence.
- **Thai Typography:** Google Fonts Mitr for excellent Thai language rendering.
- **Mobile-First Responsive:** Optimized layout that adapts from mobile to desktop.
- **Content-Focused UX:** Subtle meta information that doesn't distract from main content.
- **Content Collections:** Markdown-based content management with Astro's content layer API.
- **Dynamic Routing:** Automated page generation from markdown content with proper language separation.
- **Astro + UnoCSS:** Built with modern web technologies for optimal performance.

## Tasks Breakdown (Completed ✅)

- [x] **Theme Scaffolding:**
    - [x] Create a new layout for the micro-blogging theme
    - [x] Design the basic post component with modern list-tile design
    
- [x] **Internationalization:**
    - [x] Configure Astro i18n with Thai and English locales
    - [x] Create separate content files for Thai and English
    - [x] Implement language switcher component
    - [x] Set up proper routing structure (/en, /th)
    
- [x] **Theme System:**
    - [x] Implement dark/light theme toggle with persistence
    - [x] Add system preference detection and fallback
    - [x] Configure theme colors (light: bg-gray-50, dark: bg-gray-900)
    
- [x] **Typography & Design:**
    - [x] Integrate Google Fonts Mitr for Thai language support
    - [x] Create responsive list-tile layout for posts
    - [x] Implement content-first hierarchy (title → meta → subtitle → tags)
    - [x] Add image placeholder fallbacks for broken images
    - [x] Optimize font sizes for mobile and high DPI screens
    
- [x] **Component Development:**
    - [x] Post component with full feature set (title, subtitle, image, tags, author, date, readTime)
    - [x] ThemeToggle component with advanced state management
    - [x] LanguageSwitcher component for i18n navigation
    - [x] MicroBlogLayout with integrated theme and language support
    - [x] Add showThumbnail prop for conditional image display
    
- [x] **Content & UX:**
    - [x] Generate realistic Thai and English dummy content
    - [x] Optimize mobile layout to prevent content squeezing
    - [x] Make "Read more" subtle and content-focused
    - [x] Position meta information (author, date, read time) below title
    - [x] Implement clickable titles alongside "Read more" links
    - [x] Remove thumbnails from front page while keeping them in individual posts
    - [x] Create individual post pages with full content and proper linking
    - [x] Increase font sizes significantly for better mobile readability
    - [x] Migrate to content collections for markdown-based content management
    - [x] Implement dynamic routing with `[...slug].astro` pages
    - [x] Set Thai as default language with proper URL structure
    - [x] Update language switcher to prioritize Thai first
    - [x] Add comprehensive Termux + AI tools setup guide
    - [x] Remove language flags from individual post headers
    - [x] Add table of contents to tutorial content
    - [x] Fix header spacing issues with post titles
    - [x] Enhance code block styling for better mobile responsiveness
    - [x] Convert inline shell commands to proper code blocks for scrollability

- [x] **Tag System Implementation:**
    - [x] Create TagSidebar component with language-specific tag counters
    - [x] Implement dynamic tag pages for both Thai and English
    - [x] Add clickable tags throughout the site with proper language routing
    - [x] Configure conditional sidebar replacement (TagSidebar vs RightSidebar)
    - [x] Remove custom tag translation system in favor of Astro's default approach
    - [x] Fix Post component language detection and tag link generation
    - [x] Ensure consistent layout and styling between homepage and tag pages
    - [x] Hide thumbnails on both homepage and tag pages for consistent design

- [x] **Twitter/X-like Layout Implementation:**
    - [x] Create left sidebar component with navigation (Home, Tutorials, Tips)
    - [x] Implement responsive left sidebar (full text on xl+, icons only on lg-xl)
    - [x] Create right sidebar with "Recents" and programming languages sections
    - [x] Add programming languages showcase (JavaScript, Python, TypeScript, Rust, Go)
    - [x] Implement mobile bottom navigation bar with icons and labels
    - [x] Update main layout to three-column responsive design
    - [x] Configure proper breakpoints (mobile <lg, medium lg-xl, large xl+)
    - [x] Ensure right sidebar always visible on non-mobile screens
    - [x] Update theme colors for Twitter/X-like contrast (bg-white/bg-black)

## Current State

✅ **Project is Feature Complete with Twitter/X-like Layout, Tag System, and Advanced Content Management**

- **Twitter/X-like Layout:** Three-column responsive design with intelligent sidebar behavior
- **Tag System:** Complete language-separated tag pages with counters and clickable navigation
- **Responsive Navigation:** Left sidebar shows full text when space allows, icons when limited
- **Mobile Experience:** Bottom navigation bar with proper spacing and touch targets
- **Conditional Sidebars:** TagSidebar replaces RightSidebar on tag pages, maintaining consistent left navigation
- **Core Functionality:** All major features implemented and working
- **Responsive Design:** Optimized for all screen sizes with proper header spacing
- **Multilingual:** Full Thai/English support with Thai as default language
- **Theme System:** Smart dark/light toggle with persistence and Twitter/X-like contrast
- **Typography:** Excellent Thai language rendering with Mitr font
- **Content Collections:** Markdown-based content management with schema validation
- **Dynamic Routing:** Automated page generation from markdown content and tags
- **Content Structure:** Professional blog layout with author, dates, clickable tags
- **User Experience:** Content-focused design with Thai-prioritized language switching
- **Comprehensive Tutorials:** Complete setup guides with table of contents
- **Mobile Code Blocks:** Enhanced code formatting with proper scrollability and styling

## Project Structure

```
src/
├── components/
│   ├── Post.astro              ✅ Feature-complete blog post component with clickable tags and conditional thumbnails
│   ├── ThemeToggle.astro       ✅ Advanced theme switching with persistence
│   ├── LanguageSwitcher.astro  ✅ i18n navigation component (Thai prioritized)
│   ├── LeftSidebar.astro       ✅ Responsive left navigation (full text/icons, Twitter/X-like)
│   ├── RightSidebar.astro      ✅ Right sidebar with recents and programming languages
│   ├── TagSidebar.astro        ✅ Tag sidebar with counters and language filtering for tag pages
│   └── MobileBottomNav.astro   ✅ Mobile bottom navigation bar with icons and labels
├── layouts/
│   └── MicroBlogLayout.astro   ✅ Three-column Twitter/X-like layout with responsive sidebars
├── content/
│   ├── config.ts               ✅ Content collections configuration with schema validation
│   └── blog/
│       ├── en/                 ✅ English markdown posts (4 articles)
│       │   ├── getting-started-api.md
│       │   ├── building-responsive-components.md
│       │   ├── modern-javascript-features.md
│       │   └── termux-ai-setup-guide.md (comprehensive tutorial)
│       └── th/                 ✅ Thai markdown posts (4 articles)
│           ├── getting-started-api.md
│           ├── building-responsive-components.md
│           ├── modern-javascript-features.md
│           └── termux-ai-setup-guide.md (comprehensive tutorial)
├── pages/
│   ├── index.astro             ✅ Thai homepage (default, thumbnails hidden)
│   ├── posts/
│   │   └── [...slug].astro     ✅ Dynamic Thai post pages with proper spacing
│   ├── tags/
│   │   └── [...slug].astro     ✅ Dynamic Thai tag pages with TagSidebar
│   ├── th/
│   │   ├── index.astro         ✅ Alternative Thai homepage
│   │   └── posts/
│   │       └── [...slug].astro ✅ Alternative Thai post routes
│   └── en/
│       ├── index.astro         ✅ English homepage (thumbnails hidden)
│       ├── posts/
│       │   └── [...slug].astro ✅ Dynamic English post pages with proper spacing
│       └── tags/
│           └── [...slug].astro ✅ Dynamic English tag pages with TagSidebar
├── astro.config.mjs            ✅ Configured with native i18n (Thai default)
├── unocss.config.mjs           ✅ Configured with Mitr font support and line-clamp utilities
├── CLAUDE.md                   ✅ Updated project documentation with Twitter/X layout info
└── TODO.md                     ✅ Complete task tracking with layout implementation details
```

## Future Enhancements (Optional)

- [ ] **Advanced Features:**
    - [x] Individual blog post pages ✅ (completed with large mobile fonts)
    - [x] Tag filtering and search functionality ✅ (completed with tag pages and TagSidebar)
    - [ ] Author profile pages
    - [ ] RSS feed generation
    - [ ] More individual post content for both languages
    
- [ ] **Performance:**
    - [ ] Image optimization and lazy loading
    - [ ] Additional performance metrics monitoring
    
- [ ] **Content Management:**
    - [ ] CMS integration for dynamic content
    - [ ] Comment system integration

## Development Notes

- **Content Collections:** Using Astro's content layer API with markdown and schema validation
- **Dynamic Routing:** Automated page generation with `[...slug].astro` pattern
- **Thai Default:** Thai language set as primary with proper URL structure
- **Language Switching:** Intelligent URL mapping between Thai and English content
- **Theme Persistence:** Uses localStorage with smart fallback to system preferences
- **Mobile-First:** Responsive design prioritizes mobile experience with large fonts
- **Twitter/X-like Layout:** Three-column responsive design with intelligent sidebar management
- **Responsive Breakpoints:** Smart layout adaptation (mobile <lg, medium lg-xl, large xl+)
- **Sidebar Intelligence:** Left sidebar shows full text when space allows, icons when limited
- **Mobile Navigation:** Bottom navigation bar for mobile devices with proper touch targets
- **Programming Languages:** Right sidebar showcases tech stack (JS, Python, TypeScript, Rust, Go)
- **Content Hierarchy:** Visual design emphasizes content over navigation elements
- **Typography Optimization:** Significantly increased font sizes for mobile and high DPI screens
- **Conditional Thumbnails:** Thumbnails hidden on homepage and tag pages, shown in individual posts
- **Header Spacing:** Proper spacing added to prevent title overlap with controls
- **Professional Tutorials:** Comprehensive guides with table of contents and accurate technical information
- **Enhanced Code Blocks:** Mobile-responsive code styling with borders, padding, and scrollability
- **Proper Command Formatting:** Shell commands converted from inline to scrollable code blocks
- **Tag System:** Language-separated tag pages with automatic generation and conditional TagSidebar
- **Clickable Tags:** All tags throughout the site link to appropriate language-specific tag pages
