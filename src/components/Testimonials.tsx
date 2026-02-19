import { client } from "sanity/lib/fetch"
import SectionBackground from "./ui/SectionBackground"
import TestimonialsGrid from "./TestimonialsGrid"

// Fetch testimonials with no cache for instant updates
async function getTestimonialsData() {
  return client.fetch(
    `*[_type == "testimonial"] | order(order asc) {
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
      order
    }`,
    {},
    { cache: 'no-store' }
  )
}

export default async function Testimonials() {
  const testimonials = await getTestimonialsData()

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden" style={{ background: "#000000" }}>
      <SectionBackground />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 
            className="text-5xl md:text-7xl font-bold text-white relative inline-block"
            style={{
              fontFamily: "var(--font-clash-display), sans-serif",
            }}
          >
            <span className="relative z-10">Testimonials</span>
            <span
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Testimonials
            </span>
            <div
              className="absolute -bottom-2 left-0 h-1 w-full"
              style={{
                background: "linear-gradient(90deg, #ec4899, #a855f7, #6366f1)",
                borderRadius: "2px",
              }}
            />
          </h2>
          <p className="text-white/60 max-w-xl mt-4 text-lg">
            What clients say about working with me
          </p>
        </div>

        {/* Testimonials Grid */}
        <TestimonialsGrid testimonials={testimonials} />
      </div>
    </section>
  )
}
