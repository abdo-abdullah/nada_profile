import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Design Software",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva"],
      icon: "🎨",
    },
    {
      title: "Specializations",
      skills: ["Branding", "Logo Design", "Social Media Design"],
      icon: "⭐",
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Teamwork", "Creative Problem Solving", "Time Management"],
      icon: "🤝",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-card-foreground mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for creating impactful visual experiences and strategic design solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:shadow-lg transition-all duration-500 hover:scale-105 animate-fade-in-up w-full max-w-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle className="font-heading text-xl text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
