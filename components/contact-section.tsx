import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Linkedin, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Let's Work Together
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your creative vision to life? I'd love to hear about your project and discuss how we can
            collaborate to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-card border-2 border-border hover:border-primary/30 transition-all duration-300 rounded-2xl shadow-lg">
            <CardHeader className="pb-8">
              <CardTitle className="font-heading text-3xl text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 px-8 pb-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-base font-semibold text-foreground mb-3">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-input border-2 border-border focus:border-primary focus:ring-primary h-12 text-base rounded-xl"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-base font-semibold text-foreground mb-3">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-input border-2 border-border focus:border-primary focus:ring-primary h-12 text-base rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-base font-semibold text-foreground mb-3">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Project inquiry"
                  className="bg-input border-2 border-border focus:border-primary focus:ring-primary h-12 text-base rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-semibold text-foreground mb-3">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-input border-2 border-border focus:border-primary focus:ring-primary resize-none text-base rounded-xl"
                />
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                size="lg"
              >
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-2 border-border hover:border-primary/30 transition-all duration-300 rounded-2xl shadow-lg">
              <CardContent className="p-10">
                <h3 className="font-heading text-3xl font-bold text-foreground mb-8">Get In Touch</h3>

                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shadow-md">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-1">Phone</p>
                      <a
                        href="tel:+201117399256"
                        className="text-muted-foreground hover:text-primary transition-colors text-base font-medium"
                      >
                        +201117399256
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center shadow-md">
                      <Linkedin className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-1">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/nada-ahmed-ba47bb303/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors text-base font-medium"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center shadow-md">
                      <MapPin className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-1">Location</p>
                      <p className="text-muted-foreground text-base font-medium">Cairo, Egypt</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shadow-md">
                      <Mail className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-1">Email</p>
                      <a
                        href="mailto:nada@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors text-base font-medium"
                      >
                        nada@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-2 border-primary/20 rounded-2xl shadow-lg">
              <CardContent className="p-10 text-center">
                <h4 className="font-heading text-2xl font-bold text-foreground mb-6">Ready to Start Your Project?</h4>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Let's discuss your creative needs and bring your vision to life through thoughtful design and
                  strategic creativity.
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent px-8 py-3 text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
