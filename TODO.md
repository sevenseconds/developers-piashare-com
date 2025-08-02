
# Project TODO

## Feature/Tech Highlight

This project is a modern, multilingual micro-blogging platform for PiaShare developers, featuring a clean list-tile design similar to X.com/Twitter.com, focusing on tech tutorials and updates.

**Key Achievements:**
- **Modern List Tile Design:** Clean card-based layout optimized for content consumption.
- **Multilingual Support:** Full i18n with Thai and English content using Astro's native routing.
- **Smart Theme System:** Dark/light theme toggle with system preference detection and persistence.
- **Thai Typography:** Google Fonts Mitr for excellent Thai language rendering.
- **Mobile-First Responsive:** Optimized layout that adapts from mobile to desktop.
- **Content-Focused UX:** Subtle meta information that doesn't distract from main content.
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

## Current State

✅ **Project is Feature Complete**

- **Core Functionality:** All major features implemented and working
- **Responsive Design:** Optimized for all screen sizes
- **Multilingual:** Full Thai/English support with native Astro i18n
- **Theme System:** Smart dark/light toggle with persistence
- **Typography:** Excellent Thai language rendering with Mitr font
- **Content Structure:** Professional blog layout with author, dates, tags
- **User Experience:** Content-focused design with subtle navigation elements

## Project Structure

```
src/
├── components/
│   ├── Post.astro              ✅ Feature-complete blog post component with conditional thumbnails
│   ├── ThemeToggle.astro       ✅ Advanced theme switching with persistence
│   └── LanguageSwitcher.astro  ✅ i18n navigation component
├── layouts/
│   └── MicroBlogLayout.astro   ✅ Main layout with theme and i18n integrations
├── pages/
│   ├── index.astro             ✅ English homepage (thumbnails hidden)
│   ├── posts/
│   │   └── getting-started-api.astro  ✅ Individual post with large fonts
│   └── th/
│       ├── index.astro         ✅ Thai homepage (thumbnails hidden)
│       └── posts/
│           └── getting-started-api.astro  ✅ Thai post with large fonts
├── astro.config.mjs            ✅ Configured with native i18n
├── unocss.config.mjs           ✅ Configured with Mitr font support
├── CLAUDE.md                   ✅ Updated project documentation
└── TODO.md                     ✅ Complete task tracking
```

## Future Enhancements (Optional)

- [ ] **Advanced Features:**
    - [x] Individual blog post pages ✅ (completed with large mobile fonts)
    - [ ] Tag filtering and search functionality
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

- **No Custom Utils Needed:** Using Astro's native i18n instead of custom translation utilities
- **File-Based Content:** Each language version is a separate .astro file with localized content
- **Theme Persistence:** Uses localStorage with smart fallback to system preferences
- **Mobile-First:** Responsive design prioritizes mobile experience with large fonts
- **Content Hierarchy:** Visual design emphasizes content over navigation elements
- **Typography Optimization:** Significantly increased font sizes for mobile and high DPI screens
- **Conditional Thumbnails:** Thumbnails hidden on homepage but shown in individual posts
- **Individual Post Pages:** Full content pages with enhanced readability
