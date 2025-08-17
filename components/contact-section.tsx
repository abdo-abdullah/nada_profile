import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Linkedin, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-card-foreground mb-4">Let's Work Together</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your creative vision to life? I'd love to hear about your project and discuss how we can
            collaborate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="bg-input border-border focus:ring-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-input border-border focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Project inquiry"
                  className="bg-input border-border focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-input border-border focus:ring-primary resize-none"
                />
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg" size="lg">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-background border-border">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a
                        href="tel:+201117399256"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +201117399256
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/nada-ahmed-ba47bb303/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Cairo, Egypt</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">Available upon request</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-border">
              <CardContent className="p-8 text-center">
                <h4 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Ready to Start Your Project?
                </h4>
                <p className="text-muted-foreground mb-6">
                  Let's discuss your creative needs and bring your vision to life through thoughtful design and
                  strategic creativity.
                </p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
