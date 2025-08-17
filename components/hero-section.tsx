"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-card px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-4 animate-fade-in">
            Nada Ahmed
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Graphic Designer | Student | Social Media Specialist
          </p>
          <p className="text-lg text-muted-foreground mb-8">Based in Cairo, Egypt</p>
        </div>

        <div className="mb-12">
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into visual stories through creative design, strategic branding, and engaging social
            media content.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg bg-transparent"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  )
}
