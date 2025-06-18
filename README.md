# FCL Consulting and Sales Website

Professional website for FCL Consulting and Sales, connecting supply chains with industry-leading manufacturers specializing in metal fabrication, stamping, finishing, and CNC machining.

## Project Overview

This is a single-page application showcasing FCL Consulting and Sales' services, expertise, and manufacturing partners. The site features:

- **Hero Section**: Main value proposition - "Guiding Manufacturers from Development to Departure"
- **Company Profile**: Overview of FCL's consulting services and expertise in manufacturing partnerships
- **About Section**: Professional biography of Frank Longo, founder and operating officer
- **Partners Showcase**: Featured manufacturing partners (Trident, Marion Manufacturing, Uni-Metal)
- **Video Gallery**: Partner profile videos with downloadable capability lists
- **Interactive Modal**: Video playback functionality

## Tech Stack

- **Static Site Generator**: [Eleventy (11ty)](https://www.11ty.dev/) v2.0.1
- **Templating**: [Pug](https://pugjs.org/) templates with modular component structure
- **Styling**: [Sass](https://sass-lang.com/) with compressed output
- **JavaScript**: ES6+ with [esbuild](https://esbuild.github.io/) processing
- **CSS Processing**: [Lightning CSS](https://lightningcss.dev/) for optimization
- **Deployment**: [Netlify](https://netlify.com) with automated builds

## Project Structure

```
src/
├── 11ty/                    # Eleventy templates and content
│   ├── _includes/
│   │   ├── _base.pug       # Base HTML template
│   │   ├── content/        # Page sections
│   │   │   ├── hero-two.pug
│   │   │   ├── company.pug
│   │   │   ├── about.pug
│   │   │   ├── partners.pug
│   │   │   ├── videos.pug
│   │   │   └── video-modal.pug
│   │   ├── partials/       # Reusable components
│   │   │   ├── header.pug
│   │   │   ├── footer.pug
│   │   │   ├── main-nav.pug
│   │   │   └── meta.pug
│   │   └── svg/           # SVG assets
│   └── pages/
│       └── index.pug      # Main page template
├── js/
│   ├── main.js            # Interactive functionality
│   └── contact.js         # Contact form handling
├── sass/
│   ├── main.sass          # Main stylesheet
│   └── build/            # Sass partials and modules
└── static/               # Static assets
    ├── fonts/           # Web fonts (Inter, Kumbh Sans, etc.)
    ├── img/             # Images and thumbnails
    └── pdf/             # Partner capability documents
```

## Development

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation
```bash
npm install
```

### Available Scripts

- `npm run dev` - Build site and compile Sass (production build)
- `npm run dev:eleventy` - Build Eleventy site only
- `npm run dev:serve` - Start development server with live reload
- `npm run dev:sass` - Compile Sass to compressed CSS

### Development Workflow
1. Run `npm run dev:serve` for live development with hot reload
2. Edit Pug templates in `src/11ty/`
3. Modify styles in `src/sass/`
4. Update JavaScript in `src/js/`
5. Static assets go in `src/static/`

## Deployment

The site is configured for Netlify deployment:
- Build command: `npm run dev`
- Publish directory: `dist`
- Automatic deployments from main branch

## Features

- **Responsive Design**: Mobile-first approach with modern CSS Grid/Flexbox
- **Video Integration**: YouTube video embeds with custom modal interface
- **PDF Downloads**: Partner capability lists with direct download links
- **Modern Typography**: Custom web fonts (Inter, Kumbh Sans, DM Mono)
- **Performance Optimized**: Compressed CSS, optimized images, minimal JavaScript
- **SEO Ready**: Proper meta tags and semantic HTML structure

## Content Management

The site content is managed through Pug templates:
- Company information in `src/11ty/_includes/content/company.pug`
- Bio content in `src/11ty/_includes/content/about.pug`
- Partner logos in `src/11ty/_includes/svg/`
- Video IDs and thumbnails in `src/11ty/_includes/content/videos.pug`

## Author

**T.K. Langston** - [@designbytk](https://github.com/designbytk)
- Website: [designbytk.com](https://designbytk.com)
- Portfolio: [lnghll.com](https://lnghll.com)








