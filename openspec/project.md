# Project Context

## Purpose

Minou website - a multilingual jewelry e-commerce content management system built with Sanity CMS. Manages product catalog including jewelry pieces, categories, collections, materials, colors, and site-wide settings. Supports both English and Croatian (hr) languages.

## Tech Stack

- **Sanity CMS v5** - Headless content management
- **TypeScript 5.8** - Type-safe development
- **React 19** - UI framework
- **styled-components 6** - Styling
- **ESLint 9** - Code linting
- **Prettier 3** - Code formatting
- **@sanity/language-filter** - Multilingual content filtering
- **@sanity/vision** - Content explorer

## Project Conventions

### Code Style

- **Prettier**: No semicolons, 100 char print width, no bracket spacing, single quotes
- **ESLint**: Uses `@sanity/eslint-config-studio`
- **TypeScript**: Strict mode enabled, ES2017 target
- **File naming**: camelCase for type files (e.g., `productType.ts`, `siteSettingsType.ts`)
- **Schema naming**: `camelCase` for schema names, `Title Case` for schema titles
- **Multilingual pattern**: Object fields with `en` and `hr` keys for translatable content

### Architecture Patterns

- **Singleton pattern**: `siteSettings` is a singleton document (single instance allowed)
- **Reference relationships**: Products reference genre, category, collection, colors, and materials
- **Field grouping**: Product fields organized into logical groups (classification, pricing, specifications, inventory, seo)
- **Rich text content**: Uses Sanity Portable Text (array of block type) for descriptions and multilingual text
- **Preview configuration**: All document types include preview for better studio experience

### Testing Strategy

No testing framework currently configured. Add testing approach before implementing tests.

### Git Workflow

No specific branching strategy documented. Document commit conventions before implementing changes.

## Domain Context

### Content Types

- **Products**: Jewelry pieces with pricing, images, specifications, inventory tracking, and multilingual descriptions
- **Categories**: Product categories with multilingual names and images
- **Genres**: Product types (e.g., rings, necklaces) with multilingual names
- **Collections**: Seasonal or thematic product groupings
- **Materials**: Material definitions (gold, silver, etc.) with multilingual names
- **Colors**: Color definitions with hex codes for product variants
- **Site Settings**: Singleton document containing branding, contact info, social links, FAQ, shipping/returns policies

### Multilingual Support

- Default language: English (`en`)
- Secondary language: Croatian (`hr`)
- Language filter plugin enabled on `siteSettings` document type
- Pattern: Use object fields with `en` and `hr` keys for translatable content

### Pricing and Inventory

- Currency: EUR
- Fields: `price` (required), `discount` (optional for showing original price)
- Inventory: `inStock` (boolean), `quantity` (number), `sku` (string)

## Important Constraints

- **OIB validation**: Croatian company identification number must be 11 digits
- **Required fields**: Products must have name, slug, price, at least one image, category, and genre
- **Singleton enforcement**: `siteSettings` has restricted actions (publish, discardChanges, restore)
- **Language support**: English content required, Croatian content strongly recommended for Croatian market
- **Image formats**: SVG preferred for logos, various formats for other images

## External Dependencies

- **Sanity Cloud**: Project ID `5nz4uhz2`, dataset `production`
- **Sanity GraphQL**: Deployed via `npm run deploy-graphql`
- **Social platforms**: Facebook, TikTok, Instagram, YouTube URLs for site settings
