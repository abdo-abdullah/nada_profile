import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Design Software",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma"],
      icon: "🎨",
    },
    {
      title: "Specializations",
      skills: ["Branding", "Logo Design", "Social Media Design", "UI/UX Basics"],
      icon: "⭐",
    },
    {
      title: "Social Media",
      skills: ["Content Strategy", "Social Media Management", "Campaign Design", "Analytics"],
      icon: "📱",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-lg transition-shadow duration-300">
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
