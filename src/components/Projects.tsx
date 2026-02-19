import { client } from "sanity/lib/fetch"
import SectionBackground from "./ui/SectionBackground"
import ProjectsGrid from "./ProjectsGrid"

// Fetch projects with no cache for instant updates
async function getProjectsData() {
  return client.fetch(
    `*[_type == "project"] | order(order asc) {
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
      githubUrl,
      order
    }`,
    {},
    { cache: 'no-store' }
  )
}

export default async function Projects() {
  const projects = await getProjectsData()

  return (
    <section id="projects" className="py-20 relative overflow-hidden" style={{ background: "#000000" }}>
      <SectionBackground />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 
            className="text-5xl md:text-7xl font-bold text-white relative inline-block"
            style={{
              fontFamily: "var(--font-clash-display), sans-serif",
            }}
          >
            <span className="relative z-10">Projects</span>
            <span
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, #ec4899, #a855f7, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
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
            Here are some of the projects I've worked on.
          </p>
        </div>

        {/* Projects Grid */}
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  )
}
