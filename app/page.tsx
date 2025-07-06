"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Filter, Zap, BarChart3, Users, MessageSquare, CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/qnfleads-logo.png" alt="QnFLeads" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-bold text-text-primary">QnFLeads</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-text-secondary hover:text-text-primary transition-colors">
              Features
            </a>
            <a href="#use-cases" className="text-text-secondary hover:text-text-primary transition-colors">
              Use Cases
            </a>
            <a href="#pricing" className="text-text-secondary hover:text-text-primary transition-colors">
              Pricing
            </a>
          </nav>
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

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-brand-soft text-brand-dark border-brand-light">
              ✨ AI-Powered Lead Qualification
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Filter Out Junk, Keep The Best Leads, <span className="text-brand">Close More Deals</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
              Transform your lead generation with intelligent forms, automated scoring, and AI-powered outreach. Stop
              wasting time on unqualified prospects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-brand hover:bg-brand-dark text-white px-8 py-4 text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg border-border hover:bg-background-muted bg-transparent"
                  onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background-muted">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Everything You Need to Qualify Leads
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Powerful tools to create, score, and convert your leads with intelligent automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-soft rounded-lg flex items-center justify-center mb-4">
                  <Filter className="h-6 w-6 text-brand" />
                </div>
                <CardTitle className="text-text-primary">AI Form Builder</CardTitle>
                <CardDescription className="text-text-secondary">
                  Create dynamic qualification forms with drag-and-drop simplicity or let AI build them for you
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-soft rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-brand" />
                </div>
                <CardTitle className="text-text-primary">Lead Scoring</CardTitle>
                <CardDescription className="text-text-secondary">
                  Automatically score and categorize leads as hot, warm, or cold based on their responses
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-brand-soft rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-brand" />
                </div>
                <CardTitle className="text-text-primary">Outreach Automation</CardTitle>
                <CardDescription className="text-text-secondary">
                  Generate personalized outreach messages and automate follow-ups based on lead quality
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Perfect For Every Business</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              QnFLeads adapts to your industry and business model
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-brand" />
                </div>
                <CardTitle className="text-text-primary">Coaches</CardTitle>
                <CardDescription className="text-text-secondary">
                  Qualify potential clients and identify serious prospects ready to invest in coaching
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-brand" />
                </div>
                <CardTitle className="text-text-primary">Agencies</CardTitle>
                <CardDescription className="text-text-secondary">
                  Filter high-value clients and streamline your sales process with automated qualification
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-brand" />
                </div>
                <CardTitle className="text-text-primary">Sales Teams</CardTitle>
                <CardDescription className="text-text-secondary">
                  Prioritize leads effectively and focus your team's efforts on the most promising prospects
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-brand-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-brand" />
                </div>
                <CardTitle className="text-text-primary">Startups</CardTitle>
                <CardDescription className="text-text-secondary">
                  Validate product-market fit and identify your ideal customer profile efficiently
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-background-muted">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">How QnFLeads Works</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Three simple steps to transform your lead qualification process
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Create Form</h3>
              <p className="text-text-secondary">
                Build qualification forms from scratch, use templates, or let our AI create the perfect form for your
                business
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Score Leads</h3>
              <p className="text-text-secondary">
                Leads are automatically scored and categorized based on their responses, filtering out unqualified
                prospects
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-4">Automate Outreach</h3>
              <p className="text-text-secondary">
                AI generates personalized messages for each lead category and automates your follow-up process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border">
              <CardHeader className="text-center">
                <CardTitle className="text-text-primary">Free</CardTitle>
                <div className="text-3xl font-bold text-text-primary mt-4">
                  $0<span className="text-lg font-normal text-text-secondary">/month</span>
                </div>
                <CardDescription className="text-text-secondary">Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-brand mr-3" />
                    Up to 2 forms
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-brand mr-3" />
                    100 submissions/month
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-brand mr-3" />
                    Basic analytics
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-brand hover:bg-brand-dark text-white">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-brand shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-brand text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-text-primary">Pro</CardTitle>
                <div className="text-3xl font-bold text-text-primary mt-4">
                  $49<span className="text-lg font-normal text-text-secondary">/month</span>
                </div>
                <CardDescription className="text-text-secondary">For growing businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-brand mr-3" />
                    Unlimited forms
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-brand mr-3" />
                    5,000 submissions/month
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-brand mr-3" />
                    AI form builder
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-brand mr-3" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-brand mr-3" />
                    Outreach automation
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-brand hover:bg-brand-dark text-white">Start Free Trial</Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="text-center">
                <CardTitle className="text-text-primary">Agency</CardTitle>
                <div className="text-3xl font-bold text-text-primary mt-4">
                  $149<span className="text-lg font-normal text-text-secondary">/month</span>
                </div>
                <CardDescription className="text-text-secondary">For agencies and teams</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-brand mr-3" />
                    Everything in Pro
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-brand mr-3" />
                    25,000 submissions/month
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-brand mr-3" />
                    Team collaboration
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-brand mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center text-text-secondary">
                    <CheckCircle className="h-5 w-5 text-brand mr-3" />
                    White-label options
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-6 border-border hover:bg-background-muted bg-transparent"
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background-muted">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-text-secondary mb-4">
                  "QnFLeads transformed our lead qualification process. We're now closing 3x more deals with half the
                  effort."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-soft rounded-full flex items-center justify-center mr-3">
                    <span className="text-brand font-semibold">JS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">John Smith</p>
                    <p className="text-sm text-text-secondary">CEO, Growth Agency</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-text-secondary mb-4">
                  "The AI form builder saved us hours of work. Our lead quality has never been better."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-soft rounded-full flex items-center justify-center mr-3">
                    <span className="text-brand font-semibold">MJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Maria Johnson</p>
                    <p className="text-sm text-text-secondary">Marketing Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-text-secondary mb-4">
                  "Finally, a tool that actually filters out the tire-kickers. Our sales team loves it!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-soft rounded-full flex items-center justify-center mr-3">
                    <span className="text-brand font-semibold">RW</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">Robert Wilson</p>
                    <p className="text-sm text-text-secondary">Sales Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-text-primary">How does the lead scoring work?</AccordionTrigger>
                <AccordionContent className="text-text-secondary">
                  Our AI analyzes responses to your form questions and assigns scores based on the criteria you set.
                  Leads are automatically categorized as hot, warm, or cold based on their total score.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-text-primary">
                  Can I customize the outreach messages?
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary">
                  Yes! You can create custom templates for each lead category (hot, warm, cold) and use dynamic
                  variables to personalize messages based on form responses.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-text-primary">What integrations do you support?</AccordionTrigger>
                <AccordionContent className="text-text-secondary">
                  We integrate with popular tools like Slack, Gmail, Mailchimp, Zapier, and most major CRM systems. New
                  integrations are added regularly based on user feedback.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-text-primary">Is there a free trial?</AccordionTrigger>
                <AccordionContent className="text-text-secondary">
                  Yes! We offer a 14-day free trial on all paid plans. No credit card required to get started.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-text-primary">How secure is my data?</AccordionTrigger>
                <AccordionContent className="text-text-secondary">
                  We take security seriously. All data is encrypted in transit and at rest, and we're SOC 2 compliant.
                  Your data is never shared with third parties.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-soft">
        <div className="max-w-container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Ready to Transform Your Lead Generation?
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using QnFLeads to qualify better leads and automate their outreach
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-brand hover:bg-brand-dark text-white px-8 py-4 text-lg">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg border-border hover:bg-background bg-transparent"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/qnfleads-logo.png" alt="QnFLeads" width={24} height={24} className="w-6 h-6" />
                <span className="text-lg font-bold text-text-primary">QnFLeads</span>
              </div>
              <p className="text-text-secondary">
                Filter out junk, keep the best leads, and close more deals with AI-powered qualification.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-text-primary mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-text-secondary hover:text-text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-text-secondary hover:text-text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#integrations" className="text-text-secondary hover:text-text-primary">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-text-primary mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-text-secondary hover:text-text-primary">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-text-secondary hover:text-text-primary">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-text-secondary hover:text-text-primary">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-text-secondary hover:text-text-primary">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-text-primary mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-text-secondary hover:text-text-primary">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-text-secondary hover:text-text-primary">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-text-secondary hover:text-text-primary">
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-text-secondary">
            <p>&copy; 2024 QnFLeads. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
