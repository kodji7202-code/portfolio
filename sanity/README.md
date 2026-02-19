# Sanity CMS Setup Guide

## Quick Start

### 1. Create a Sanity Project
```bash
# Install Sanity CLI globally
npm install -g sanity

# Create a new Sanity project
sanity init

# Or create from template
sanity init --template nextjs
```

### 2. Configure Environment Variables
Copy the `.env.example` file and fill in your credentials:
```bash
cp sanity/.env.example .env.local
```

Then edit `.env.local` with your values:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Add Schemas
Copy the schemas from `sanity/schemas/` to your Sanity project's `schemas/` folder.

### 4. Deploy Schemas
```bash
sanity deploy
```

## Schema Overview

### Project Schema (`project.ts`)
- `title` - Project name
- `slug` - URL slug
- `description` - Project description
- `thumbnail` - Main image
- `images` - Gallery images array
- `tags` - Technologies used
- `liveUrl` - Live website link
- `githubUrl` - GitHub repo link
- `featured` - Featured flag
- `order` - Display order

### Testimonial Schema (`testimonial.ts`)
- `name` - Client name
- `role` - Client role/position
- `quote` - Testimonial text
- `avatar` - Client photo
- `rating` - 1-5 star rating
- `company` - Company name
- `featured` - Featured flag
- `order` - Display order

### Service Schema (`service.ts`)
- `title` - Service name
- `slug` - URL slug
- `description` - Service description
- `icon` - Icon selection (palette/code/layers)
- `price` - Price starting from
- `features` - Feature tags
- `featured` - Featured flag
- `order` - Display order

## GROQ Queries

All queries are predefined in `sanity/lib/client.ts`:
- `allProjects` - Get all projects
- `featuredProjects` - Get featured projects only
- `projectBySlug` - Get single project
- `allTestimonials` - Get all testimonials
- `featuredTestimonials` - Get featured testimonials
- `allServices` - Get all services
- `featuredServices` - Get featured services

## Fetching Data

```typescript
import { getProjects, getTestimonials, getServices } from '@/sanity/lib/fetch'

// In your page component
export async function getStaticProps() {
  const projects = await getProjects()
  const testimonials = await getTestimonials()
  const services = await getServices()
  
  return {
    props: {
      projects,
      testimonials,
      services
    }
  }
}
```

## Using with Next.js App Router

Create a lib/sanity.ts file:
```typescript
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
```
