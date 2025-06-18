"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Contact() {
  const { t } = useLanguage()

  const handleTelegramContact = () => {
    // Telegram bot yoki kanal linkini ochish
    window.open("https://t.me/zargarlik_bot", "_blank")
  }

  const handleWhatsAppContact = () => {
    // WhatsApp linkini ochish
    const message = encodeURIComponent("Assalomu alaykum! Zargarlik buyumlari haqida ma'lumot olmoqchiman.")
    window.open(`https://wa.me/998901234567?text=${message}`, "_blank")
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("contactTitle")}</h2>
          <p className="text-xl text-gray-600">{t("contactSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Methods */}
          <div>
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Buyurtma berish</h3>
                <div className="space-y-4">
                  <Button
                    onClick={handleTelegramContact}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <Send className="h-5 w-5" />
                    <span>Telegram orqali bog'lanish</span>
                  </Button>

                  <Button
                    onClick={handleWhatsAppContact}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <Phone className="h-5 w-5" />
                    <span>WhatsApp orqali bog'lanish</span>
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-800 text-center">
                    💎 Mahsulotlarni ko'rib chiqqaningizdan so'ng, Telegram yoki WhatsApp orqali bog'laning. Biz sizga
                    batafsil ma'lumot beramiz va buyurtmangizni qabul qilamiz.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Traditional Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Yoki xabar qoldiring</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder={t("yourName")} />
                    <Input placeholder={t("yourPhone")} />
                  </div>
                  <Input placeholder={t("yourEmail")} type="email" />
                  <Textarea placeholder={t("yourMessage")} rows={5} />
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">{t("sendMessage")}</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t("address")}</h4>
                    <p className="text-gray-600">
                      Toshkent shahar, Chilonzor tumani,
                      <br />
                      Bunyodkor ko'chasi, 1-uy
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t("phone")}</h4>
                    <p className="text-gray-600">
                      +998 90 123 45 67
                      <br />
                      +998 91 234 56 78
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Send className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telegram</h4>
                    <p className="text-gray-600">
                      @zargarlik_bot
                      <br />
                      @zargarlik_channel
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t("email")}</h4>
                    <p className="text-gray-600">
                      info@zargarlik.uz
                      <br />
                      support@zargarlik.uz
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{t("workingHours")}</h4>
                    <p className="text-gray-600">
                      Dushanba - Shanba: 9:00 - 20:00
                      <br />
                      Yakshanba: 10:00 - 18:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <Card>
            <CardContent className="p-0">
              <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zargarlik Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
