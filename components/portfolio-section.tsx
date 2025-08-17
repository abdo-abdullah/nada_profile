import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function PortfolioSection() {
  const projects = [
    {
      title: "Minders'25 Ramadan Social media Campaign",
      category: "Social Media",
      description:
        "Minders is a student activity group known for its creative and meaningful campaigns. This Ramadan campaign features Islamic geometric patterns and cohesive mobile app interface design.",
      image: "/ramadan-campaign-2025.png",
      tags: ["Logo Design", "Print Design", "Social Media"],
      link: "https://www.behance.net/gallery/224939771/Minders25-Ramadan-Social-media-Campaign",
    },
    {
      title: "SILVERSUN I SOCIAL MEDIA DESIGNS Campaign",
      category: "Social Media",
      description:
        "Creative social media campaign for SilverSun Kids Wear featuring vibrant, playful designs with trendy styles that make little ones shine. Professional branding with colorful geometric elements.",
      image: "/silversun-social-media.png",
      tags: ["Logo Design", "Print Design", "Social Media"],
      link: "https://www.behance.net/gallery/224034641/SILVERSUN-I-SOCIAL-MEDIA-DESIGNS",
    },
    {
      title: "Logo Graphic Designer",
      category: "Branding",
      description:
        "Professional logo design featuring elegant 'N' branding with gradient effects. Showcased in real-world application as storefront signage, demonstrating practical brand implementation and visual identity expertise.",
      image: "/logo-graphic-designer.jpg",
      tags: ["Logo Design", "Brand Identity", "Visual Identity"],
      link: "https://www.behance.net/gallery/202796987/logo-graphic-designer",
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
    <section id="portfolio" className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Featured Work
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of creative projects spanning branding, digital design, and social media content that deliver
            impactful results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
              <Card className="bg-card border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden rounded-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-end p-6">
                    <ExternalLink className="w-7 h-7 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300" />
                  </div>
                  <Badge className="absolute top-6 left-6 bg-primary/90 text-primary-foreground font-semibold px-4 py-2 rounded-full shadow-lg">
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-sm border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 px-3 py-1 rounded-full font-medium"
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
