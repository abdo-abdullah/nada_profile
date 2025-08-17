import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Linkedin, Mail, MapPin, ExternalLink, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight animate-fade-in-up">
            Let's Work Together
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full animate-expand"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
            Ready to bring your creative vision to life? I'd love to hear about your project and discuss how we can
            collaborate to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-card border-2 border-border hover:border-primary/30 transition-all duration-500 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 animate-fade-in-left">
            <CardHeader className="pb-8">
              <CardTitle className="font-heading text-3xl text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 px-8 pb-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="animate-fade-in-up animation-delay-200">
                  <label htmlFor="name" className="block text-base font-semibold text-foreground mb-3">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-input border-2 border-border focus:border-primary focus:ring-primary h-12 text-base rounded-xl transition-all duration-300 hover:border-primary/50 focus:scale-105"
                  />
                </div>
                <div className="animate-fade-in-up animation-delay-300">
                  <label htmlFor="email" className="block text-base font-semibold text-foreground mb-3">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-input border-2 border-border focus:border-primary focus:ring-primary h-12 text-base rounded-xl transition-all duration-300 hover:border-primary/50 focus:scale-105"
                  />
                </div>
              </div>

              <div className="animate-fade-in-up animation-delay-400">
                <label htmlFor="subject" className="block text-base font-semibold text-foreground mb-3">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Project inquiry"
                  className="bg-input border-2 border-border focus:border-primary focus:ring-primary h-12 text-base rounded-xl transition-all duration-300 hover:border-primary/50 focus:scale-105"
                />
              </div>

              <div className="animate-fade-in-up animation-delay-500">
                <label htmlFor="message" className="block text-base font-semibold text-foreground mb-3">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-input border-2 border-border focus:border-primary focus:ring-primary resize-none text-base rounded-xl transition-all duration-300 hover:border-primary/50 focus:scale-105"
                />
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-fade-in-up animation-delay-600"
                size="lg"
              >
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-right">
            <Card className="bg-card border-2 border-border hover:border-primary/30 transition-all duration-500 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2">
              <CardContent className="p-10">
                <h3 className="font-heading text-3xl font-bold text-foreground mb-8">Get In Touch</h3>

                <div className="space-y-8">
                  <div className="flex items-center space-x-6 group animate-fade-in-up animation-delay-200">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Phone className="w-8 h-8 text-primary group-hover:animate-bounce" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-1">Phone</p>
                      <a
                        href="tel:+201158386303"
                        className="text-muted-foreground hover:text-primary transition-colors text-base font-medium"
                      >
                        +201158386303
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 group animate-fade-in-up animation-delay-300">
                    <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <MessageCircle className="w-8 h-8 text-green-500 group-hover:animate-bounce" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-1">WhatsApp</p>
                      <a
                        href="https://wa.me/201158386303"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-green-500 transition-colors text-base font-medium"
                      >
                        Chat with me
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 group animate-fade-in-up animation-delay-400">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Linkedin className="w-8 h-8 text-accent group-hover:animate-bounce" />
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

                  <div className="flex items-center space-x-6 group animate-fade-in-up animation-delay-500">
                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <MapPin className="w-8 h-8 text-secondary group-hover:animate-bounce" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-1">Location</p>
                      <p className="text-muted-foreground text-base font-medium">Cairo, Egypt</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 group animate-fade-in-up animation-delay-600">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Mail className="w-8 h-8 text-primary group-hover:animate-bounce" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-1">Email</p>
                      <a
                        href="mailto:nadaamed412@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors text-base font-medium"
                      >
                        nadaamed412@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 group animate-fade-in-up animation-delay-700">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <ExternalLink className="w-8 h-8 text-accent group-hover:animate-bounce" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg mb-1">Behance</p>
                      <a
                        href="https://www.behance.net/nadaahmed250"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors text-base font-medium"
                      >
                        View my portfolio
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-2 border-primary/20 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up animation-delay-800">
              <CardContent className="p-10 text-center">
                <h4 className="font-heading text-2xl font-bold text-foreground mb-6">Ready to Start Your Project?</h4>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Let's discuss your creative needs and bring your vision to life through thoughtful design and
                  strategic creativity.
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent px-8 py-3 text-lg font-semibold rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105"
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
