// Sanity Client Configuration
// Connected to project: i20ybq7o

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'i20ybq7o'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2024-01-01'

// GROQ Queries
export const queries = {
  // Fetch all projects ordered by order field
  allProjects: `*[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    "thumbnail": thumbnail.asset->{
      url,
      metadata
    },
    "images": images[].asset->{
      url,
      metadata
    },
    tags,
    liveUrl,
    githubUrl,
    featured,
    order
  }`,

  // Fetch featured projects only
  featuredProjects: `*[_type == "project" && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    description,
    "thumbnail": thumbnail.asset->{
      url,
      metadata
    },
    tags,
    liveUrl,
    githubUrl
  }`,

  // Fetch single project by slug
  projectBySlug: `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    "thumbnail": thumbnail.asset->{
      url,
      metadata
    },
    "images": images[].asset->{
      url,
      metadata
    },
    tags,
    liveUrl,
    githubUrl,
    featured,
    order
  }`,

  // Fetch all testimonials ordered by order field
  allTestimonials: `*[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    role,
    quote,
    "avatar": avatar.asset->{
      url,
      metadata
    },
    rating,
    company,
    featured,
    order
  }`,

  // Fetch featured testimonials only
  featuredTestimonials: `*[_type == "testimonial" && featured == true] | order(order asc) {
    _id,
    name,
    role,
    quote,
    "avatar": avatar.asset->{
      url,
      metadata
    },
    rating,
    company
  }`,

  // Fetch all services ordered by order field
  allServices: `*[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    icon,
    price,
    features,
    featured,
    order
  }`,

  // Fetch featured services only
  featuredServices: `*[_type == "service" && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    description,
    icon,
    price,
    features
  }`,
}

export default {
  projectId,
  dataset,
  apiVersion,
  queries,
}
