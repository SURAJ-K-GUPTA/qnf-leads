"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 1000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/qnfleads-logo.png" alt="QnFLeads" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-bold text-text-primary">QnFLeads</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-text-secondary hover:text-text-primary">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-brand hover:bg-brand-dark text-white">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="py-20">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">Get in Touch</h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Have questions about QnFLeads? We'd love to hear from you. Send us a message and we'll respond as soon as
              possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-text-primary">Send us a message</CardTitle>
                <CardDescription className="text-text-secondary">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted && (
                  <Alert className="mb-6 border-green-200 bg-green-50">
                    <AlertDescription className="text-green-800">
                      Thank you for your message! We'll get back to you soon.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-text-primary">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-text-primary">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-text-primary">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                      className="border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-text-primary">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your question or feedback..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      className="border-border"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand hover:bg-brand-dark text-white"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-text-primary">Contact Information</CardTitle>
                  <CardDescription className="text-text-secondary">
                    Reach out to us through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-soft rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">Email</h3>
                      <p className="text-text-secondary">support@qnfleads.com</p>
                      <p className="text-sm text-text-secondary">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-soft rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">Phone</h3>
                      <p className="text-text-secondary">+1 (555) 123-4567</p>
                      <p className="text-sm text-text-secondary">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-brand-soft rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary">Office</h3>
                      <p className="text-text-secondary">
                        123 Business Ave
                        <br />
                        Suite 100
                        <br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-text-primary">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">How quickly can I get started?</h4>
                    <p className="text-sm text-text-secondary">
                      You can create your first form and start collecting leads within minutes of signing up.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Do you offer custom integrations?</h4>
                    <p className="text-sm text-text-secondary">
                      Yes! Our Agency plan includes custom integrations and dedicated support.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-2">Is there a free trial?</h4>
                    <p className="text-sm text-text-secondary">
                      We offer a 14-day free trial on all paid plans, no credit card required.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
