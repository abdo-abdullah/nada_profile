"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card/30 to-muted px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-foreground mb-6 animate-fade-in tracking-tight">
            Nada Ahmed
          </h1>
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <Image
                src="/nada-profile.jpg"
                alt="Nada Ahmed - Graphic Designer"
                width={180}
                height={180}
                className="rounded-full object-cover border-4 border-primary/30 shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 transition-opacity duration-300 group-hover:opacity-75"></div>
            </div>
          </div>
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-3 tracking-wide">
            Graphic Designer | Student | Social Media Specialist
          </p>
          <p className="text-xl text-muted-foreground mb-10 font-medium">Based in Cairo, Egypt</p>
        </div>

        <div className="mb-16">
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Transforming ideas into visual stories through creative design, strategic branding, and engaging social
            media content that drives results.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-10 py-4 text-lg font-semibold rounded-xl bg-transparent hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-primary mx-auto" />
        </div>
      </div>
    </section>
  )
}
