import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">About Me</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creative visuals that connect brands with people.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Card className="bg-card border-2 border-border hover:border-primary/30 transition-all duration-300 rounded-2xl shadow-lg">
              <CardContent className="p-10">
                <p className="text-lg leading-relaxed text-card-foreground mb-8 font-medium">
                  I’m Nada Ahmed, a passionate Graphic Designer specialized in branding, logo creation, and social media design. With a strong eye for visual storytelling, I help businesses build creative designs that connect with their audience and leave a lasting impact.
                </p>

                <p className="text-lg leading-relaxed text-card-foreground mb-8 font-medium">
                  My design journey has been fueled by curiosity and continuous learning. Whether I’m crafting a brand identity, designing engaging social media campaigns, or developing creative visuals, I approach every project with creativity, attention to detail, and strategic thinking.
                </p>

              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-96 h-96 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/nada-profile.jpg"
                  alt="Nada Ahmed - Graphic Designer"
                  className="w-80 h-80 rounded-full object-cover border-4 border-background shadow-xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:rotate-12">
                <span className="text-3xl">✨</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:-rotate-12">
                <span className="text-2xl">🎨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
