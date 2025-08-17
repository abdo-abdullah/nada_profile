import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "Brand Identity Design",
      category: "Branding",
      description:
        "Complete brand identity package including logo, color palette, and brand guidelines for a local startup.",
      image: "/placeholder-k6fc2.png",
      tags: ["Logo Design", "Brand Guidelines", "Print Design"],
      link: "https://behance.net/nada-ahmed/brand-identity-design",
    },
    {
      title: "Social Media Campaign",
      category: "Social Media",
      description: "Creative social media campaign design for a fashion brand, including Instagram posts and stories.",
      image: "/fashion-brand-instagram-layout.png",
      tags: ["Social Media", "Content Design", "Fashion"],
      link: "https://behance.net/nada-ahmed/social-media-campaign",
    },
    {
      title: "Restaurant Menu Design",
      category: "Print Design",
      description: "Elegant menu design for a premium restaurant, focusing on typography and visual hierarchy.",
      image: "/elegant-menu.png",
      tags: ["Menu Design", "Typography", "Print"],
      link: "https://behance.net/nada-ahmed/restaurant-menu-design",
    },
    {
      title: "Mobile App UI Concept",
      category: "UI/UX",
      description: "User interface design concept for a productivity mobile application with clean, modern aesthetics.",
      image: "/placeholder-hlyoj.png",
      tags: ["UI Design", "Mobile", "App Design"],
      link: "https://behance.net/nada-ahmed/mobile-app-ui-concept",
    },
    {
      title: "Event Poster Series",
      category: "Graphic Design",
      description: "Series of promotional posters for cultural events, featuring bold typography and vibrant colors.",
      image: "/vibrant-event-poster.png",
      tags: ["Poster Design", "Event Marketing", "Typography"],
      link: "https://behance.net/nada-ahmed/event-poster-series",
    },
    {
      title: "E-commerce Website Design",
      category: "Web Design",
      description: "Modern e-commerce website design with focus on user experience and conversion optimization.",
      image: "/modern-ecommerce-mockup.png",
      tags: ["Web Design", "E-commerce", "UX Design"],
      link: "https://behance.net/nada-ahmed/ecommerce-website-design",
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Work</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of creative projects spanning branding, digital design, and social media content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
              <Card className="group bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">{project.category}</Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
