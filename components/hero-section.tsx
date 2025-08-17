"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card/30 to-muted px-4 overflow-hidden">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1
            className={`font-heading text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
          >
            Nada Ahmed
          </h1>
          <div
            className={`mb-8 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative group">
              <Image
                src="/nada-profile.jpg"
                alt="Nada Ahmed - Graphic Designer"
                width={180}
                height={180}
                className="rounded-full object-cover border-4 border-primary/30 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-3xl animate-pulse-slow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 transition-all duration-500 group-hover:opacity-75 group-hover:scale-110"></div>
              <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-spin-slow opacity-30"></div>
            </div>
          </div>
          <p
            className={`text-2xl md:text-3xl text-primary font-semibold mb-3 tracking-wide transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            Student | Junior Graphics Designer
          </p>
          <p
            className={`text-xl text-muted-foreground mb-10 font-medium transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            Based in Cairo, Egypt
          </p>
        </div>

        <div
          className={`mb-16 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up">
            Transforming ideas into visual stories through creative design, strategic branding, and engaging social
            media content that drives results.
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 transition-all duration-1000 delay-1100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-bounce-subtle"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-10 py-4 text-lg font-semibold rounded-xl bg-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-bounce-subtle animation-delay-200"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-primary mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  )
}
