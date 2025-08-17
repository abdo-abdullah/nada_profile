"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

export function PortfolioSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = document.querySelectorAll(".portfolio-card")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

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
      title: "FOXY I SOCIAL MEDIA DESIGNS",
      category: "Social Media",
      description:
        "Fox Brand Egypt offers an innovative solution for hair removal methods, using nanotechnology. Elegant pink branding with minimalist fox logo design and comprehensive social media campaign.",
      image: "/foxy-social-media.jpg",
      tags: ["Social Media", "Brand Identity", "Logo Design"],
      link: "https://www.behance.net/gallery/215467457/FOXY-I-SOCIAL-MEDIA-DESIGNS",
    },
    {
      title: "colors in I SOCIAL MEDIA DESIGNS",
      category: "Social Media",
      description:
        "COLORS IN kids wear is the leading Egyptian kids wear manufacturer offering all trendy fashion designs with the best quality. Vibrant orange and white branding with playful geometric elements.",
      image: "/colors-in-social-media.jpg",
      tags: ["Social Media", "Fashion", "Kids Wear"],
      link: "https://www.behance.net/gallery/219045361/colors-in-I-SOCIAL-MEDIA-DESIGNS",
    },
    {
      title: "SOCIAL MEDIA DESIGNS",
      category: "Social Media",
      description:
        "Comprehensive social media design portfolio showcasing various brand campaigns, mobile mockups, and promotional materials with cohesive pink aesthetic and professional presentation.",
      image: "/social-media-designs.jpg",
      tags: ["Social Media", "Portfolio", "Brand Design"],
      link: "https://www.behance.net/gallery/220661737/SOCIAL-MEDIA-DESIGNS",
    },
  ]

  return (
    <section id="portfolio" className="py-24 px-4 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight animate-fade-in-up">
            Featured Work
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full animate-expand"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            A showcase of creative projects spanning branding, digital design, and social media content that deliver
            impactful results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
              <Card
                className={`portfolio-card bg-card border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:rotate-1 cursor-pointer overflow-hidden rounded-2xl transform ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-10 scale-95"
                }`}
                data-index={index}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end justify-end p-6">
                    <ExternalLink className="w-7 h-7 text-white transform translate-y-4 rotate-12 group-hover:translate-y-0 group-hover:rotate-0 transition-all duration-500 animate-bounce-subtle" />
                  </div>
                  <Badge className="absolute top-6 left-6 bg-primary/90 text-primary-foreground font-semibold px-4 py-2 rounded-full shadow-lg transform -translate-x-2 group-hover:translate-x-0 transition-all duration-500 animate-pulse-slow">
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-all duration-500 leading-tight transform group-hover:translate-x-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base group-hover:text-foreground transition-colors duration-500">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-sm border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-500 px-3 py-1 rounded-full font-medium transform hover:scale-110 hover:-translate-y-1"
                        style={{ transitionDelay: `${tagIndex * 100}ms` }}
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
