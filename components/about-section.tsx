import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-card-foreground mb-6">
                  I'm a passionate graphic designer and social media specialist currently pursuing my studies while
                  building my creative career in Cairo, Egypt. My journey in design began with a love for visual
                  storytelling and has evolved into a comprehensive skill set spanning branding, digital design, and
                  social media strategy.
                </p>

                <p className="text-lg leading-relaxed text-card-foreground mb-6">
                  I believe that great design is not just about aesthetics—it's about creating meaningful connections
                  between brands and their audiences. Whether I'm crafting a brand identity, designing social media
                  content, or exploring UI/UX concepts, I approach each project with creativity, attention to detail,
                  and strategic thinking.
                </p>

                <p className="text-lg leading-relaxed text-card-foreground">
                  When I'm not designing, you'll find me exploring the latest design trends, collaborating with fellow
                  creatives, and continuously learning new techniques to enhance my craft.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <img
                  src="/nada-profile.jpg"
                  alt="Nada Ahmed - Graphic Designer"
                  className="w-72 h-72 rounded-full object-cover border-4 border-background shadow-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xl">🎨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
