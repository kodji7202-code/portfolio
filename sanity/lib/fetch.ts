// Fetch functions for Sanity data
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { projectId, dataset, apiVersion, queries } from './client'

// Create Sanity client
export const client = createClient({
  projectId: 'i20ybq7o',
  dataset,
  apiVersion,
  useCdn: true, // set to `false` to bypass the edge cache
})

// Configure image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Fetch all projects
export async function getProjects() {
  return client.fetch(queries.allProjects)
}

// Fetch featured projects
export async function getFeaturedProjects() {
  return client.fetch(queries.featuredProjects)
}

// Fetch single project by slug
export async function getProjectBySlug(slug: string) {
  return client.fetch(queries.projectBySlug, { slug })
}

// Fetch all testimonials
export async function getTestimonials() {
  return client.fetch(queries.allTestimonials)
}

// Fetch featured testimonials
export async function getFeaturedTestimonials() {
  return client.fetch(queries.featuredTestimonials)
}

// Fetch all services
export async function getServices() {
  return client.fetch(queries.allServices)
}

// Fetch featured services
export async function getFeaturedServices() {
  return client.fetch(queries.featuredServices)
}

// Fetch all portfolio data at once
export async function getAllPortfolioData() {
  const [projects, testimonials, services] = await Promise.all([
    getProjects(),
    getTestimonials(),
    getServices(),
  ])

  return {
    projects,
    testimonials,
    services,
  }
}
