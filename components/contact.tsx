"use client"

import type React from "react"

import { useState } from "react"
import { Send, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/components/language-provider"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert(t("messageSent") || "Xabar muvaffaqiyatli jo'natildi!")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light tracking-[0.08em] sm:tracking-[0.1em] mb-3 sm:mb-4 text-foreground">
            {t("contactTitle") || "Get In Touch"}
          </h2>
          <div className="w-12 sm:w-16 h-px bg-primary mx-auto mb-4 sm:mb-6" />
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            {t("contactDescription") || "Have a question? We'd love to hear from you. Send us a message today."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border shadow-lg h-80">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3043.4104783568728!2d71.751684!3d40.3766548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb9d6aa90275b5%3A0x3a362104073155b6!2sFerga%20Gold!5e1!3m2!1suz!2s!4v1764048397976!5m2!1suz!2s" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-lg p-5 sm:p-6 text-center hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Fergana, Uzbekistan</p>
                <p className="text-xs sm:text-sm text-foreground font-medium">Mustaqillik St. 123</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 sm:p-6 text-center hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Phone</p>
                <p className="text-xs sm:text-sm text-foreground font-medium">+998 73 244 55 66</p>
              </div>

              <div className="bg-card border border-border rounded-lg p-5 sm:p-6 text-center hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-xs sm:text-sm text-foreground font-medium">info@ferganagold.uz</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-serif font-light tracking-[0.05em] mb-6 text-foreground">
              {t("sendMessage") || "Send a Message"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2 text-foreground">
                    {t("fullName") || "Full Name"} *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2 text-foreground">
                    {t("emailAddress") || "Email"} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-2 text-foreground">
                  {t("phoneNumber") || "Phone"}
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2 text-foreground">
                  {t("message") || "Message"} *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="text-sm resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 py-2 sm:py-3"
              >
                <Send className="h-4 w-4" />
                <span>{t("sendMessage") || "Send Message"}</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
