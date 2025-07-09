import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Users, Target, Zap, BarChart3, Mail, Shield, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-[#E0E0E0] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image src="/qnfleads-logo.png" alt="QnFLeads" width={40} height={40} className="mr-3" />
              <span className="text-xl font-bold text-[#212121]">QnFLeads</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-[#555555] hover:text-[#FE470B] transition-colors">
                Features
              </a>
              <a href="#use-cases" className="text-[#555555] hover:text-[#FE470B] transition-colors">
                Use Cases
              </a>
              <a href="#pricing" className="text-[#555555] hover:text-[#FE470B] transition-colors">
                Pricing
              </a>
              <Link href="/contact" className="text-[#555555] hover:text-[#FE470B] transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="text-[#555555] hover:text-[#FE470B] hover:bg-[#FFECE4]">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-[#FE470B] hover:bg-[#FF7440] text-white">Start Free Trial</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-[#FFECE4] text-[#FE470B] hover:bg-[#FFECE4]">
                🚀 Transform Your Lead Generation
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-[#212121] mb-6 leading-tight">
                Filter Out Junk, Keep The Best Leads, Close More Deals.
              </h1>
              <p className="text-xl text-[#555555] mb-8 leading-relaxed">
                Transform your lead generation with intelligent forms, automated scoring, and AI-powered outreach. Stop
                wasting time on unqualified prospects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <Button size="lg" className="bg-[#FE470B] hover:bg-[#FF7440] text-white px-8 py-3 text-lg">
                    Start Free Trial
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#E0E0E0] text-[#555555] hover:bg-[#F5F5F5] px-8 py-3 text-lg bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#FFECE4] to-[#F5F5F5] rounded-2xl p-8">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="QnFLeads Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">Everything You Need to Qualify Leads</h2>
            <p className="text-xl text-[#555555] max-w-3xl mx-auto">
              Our comprehensive platform helps you create intelligent forms, score leads automatically, and automate
              your outreach process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-[#E0E0E0] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FFECE4] rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#FE470B]" />
                </div>
                <CardTitle className="text-[#212121]">AI Form Builder</CardTitle>
                <CardDescription className="text-[#555555]">
                  Create intelligent qualification forms with AI assistance. Add scoring, conditional logic, and custom
                  branding.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#E0E0E0] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FFECE4] rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-[#FE470B]" />
                </div>
                <CardTitle className="text-[#212121]">Lead Scoring</CardTitle>
                <CardDescription className="text-[#555555]">
                  Automatically score and categorize leads as Hot, Warm, or Cold based on their responses and behavior.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#E0E0E0] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FFECE4] rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-[#FE470B]" />
                </div>
                <CardTitle className="text-[#212121]">Outreach Automation</CardTitle>
                <CardDescription className="text-[#555555]">
                  Send personalized follow-up messages automatically based on lead scores and categories.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">Perfect for Every Business Type</h2>
            <p className="text-xl text-[#555555] max-w-3xl mx-auto">
              Whether you're a coach, agency, sales team, or startup, QnFLeads adapts to your unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-[#E0E0E0] hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#FFECE4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#FE470B]" />
                </div>
                <CardTitle className="text-[#212121]">Coaches</CardTitle>
                <CardDescription className="text-[#555555]">
                  Qualify potential clients and identify those ready to invest in coaching services.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#E0E0E0] hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#FFECE4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#FE470B]" />
                </div>
                <CardTitle className="text-[#212121]">Agencies</CardTitle>
                <CardDescription className="text-[#555555]">
                  Screen prospects and focus on high-value clients who match your service offerings.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#E0E0E0] hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#FFECE4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-[#FE470B]" />
                </div>
                <CardTitle className="text-[#212121]">Sales Teams</CardTitle>
                <CardDescription className="text-[#555555]">
                  Prioritize leads and ensure your team focuses on the most promising opportunities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#E0E0E0] hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#FFECE4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-[#FE470B]" />
                </div>
                <CardTitle className="text-[#212121]">Startups</CardTitle>
                <CardDescription className="text-[#555555]">
                  Validate product-market fit and identify early adopters for your solution.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">How It Works</h2>
            <p className="text-xl text-[#555555] max-w-3xl mx-auto">
              Get started in minutes with our simple 3-step process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FE470B] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#212121] mb-4">Create Form</h3>
              <p className="text-[#555555]">
                Build your qualification form using our AI-powered builder or choose from templates.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FE470B] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#212121] mb-4">Score Leads</h3>
              <p className="text-[#555555]">
                Automatically score and categorize incoming leads based on their responses.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#FE470B] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#212121] mb-4">Automate Outreach</h3>
              <p className="text-[#555555]">
                Send personalized follow-up messages automatically based on lead quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-[#555555] max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-[#E0E0E0] hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#212121]">Free</CardTitle>
                <div className="text-3xl font-bold text-[#212121] mb-2">
                  $0<span className="text-lg font-normal text-[#555555]">/month</span>
                </div>
                <CardDescription className="text-[#555555]">Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-[#555555]">
                    <CheckCircle className="w-5 h-5 text-[#FE470B] mr-3" />
                    Up to 3 forms
                  </li>
                  <li className="flex items-center text-[#555555]">
                    <CheckCircle className="w-5 h-5 text-[#FE470B] mr-3" />
                    100 submissions/month
                  </li>
                  <li className="flex items-center text-[#555555]">
                    <CheckCircle className="w-5 h-5 text-[#FE470B] mr-3" />
                    Basic analytics
                  </li>
                </ul>
                <Button className="w-full bg-[#FE470B] hover:bg-[#FF7440] text-white">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-[#FE470B] border-2 hover:shadow-lg transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#FE470B] text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-[#212121]">Pro</CardTitle>
                <div className="text-3xl font-bold text-[#212121] mb-2">
                  $29<span className="text-lg font-normal text-[#555555]">/month</span>
                </div>
                <CardDescription className="text-[#555555]">For growing businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-[#555555]">
                    <CheckCircle className="w-5 h-5 text-[#FE470B] mr-3" />
                    Unlimited forms
                  </li>
                  <li className="flex items-center text-[#555555]">
                    <CheckCircle className="w-5 h-5 text-[#FE470B] mr-3" />
                    5,000 submissions/month
                  </li>
                  <li className="flex items-center text-[#555555]">
                    <CheckCircle className="w-5 h-5 text-[#FE470B] mr-3" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-[#555555]">
                    <CheckCircle className="w-5 h-5 text-[#FE470B] mr-3" />
                    AI form builder
                  </li>
                  <li className="flex items-center text-[#555555]">
                    <CheckCircle className="w-5 h-5 text-[#FE470B] mr-3" />
                    Email automation
                  </li>
                </ul>
                <Button className="w-full bg-[#FE470B] hover:bg-[#FF7440] text-white">Start Free Trial</Button>
              </CardContent>
            </Card>

            <Card className="border-[#E0E0E0] hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#212121]">Agency</CardTitle>
                <div className="text-3xl font-bold text-[#212121] mb-2">
                  $99<span className="text-lg font-normal text-[#555555]">/month</span>
                </div>
                <CardDescription className="text-[#555555]">For teams and agencies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-[#555555]">
                    <CheckCircle className="w-5 h-5 text-[#FE470B] mr-3" />
                    Everything in Pro
                  </li>
                  <li className="flex items-center text-[#555555]">
                    <CheckCircle className="w-5 h-5 text-[#FE470B] mr-3" />
                    25,000 submissions/month
                  </li>
                  <li className="flex items-center text-[#555555]">
                    <CheckCircle className="w-5 h-5 text-[#FE470B] mr-3" />
                    Team collaboration
                  </li>
                  <li className="flex items-center text-[#555555]">
                    <CheckCircle className="w-5 h-5 text-[#FE470B] mr-3" />
                    White-label options
                  </li>
                  <li className="flex items-center text-[#555555]">
                    <CheckCircle className="w-5 h-5 text-[#FE470B] mr-3" />
                    Priority support
                  </li>
                </ul>
                <Button className="w-full bg-[#FE470B] hover:bg-[#FF7440] text-white">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-[#E0E0E0]">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FE470B] fill-current" />
                  ))}
                </div>
                <p className="text-[#555555] mb-4">
                  "QnFLeads transformed our lead qualification process. We're now closing 3x more deals with the same
                  effort."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Sarah Johnson"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-[#212121]">Sarah Johnson</div>
                    <div className="text-sm text-[#555555]">Marketing Director</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#E0E0E0]">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FE470B] fill-current" />
                  ))}
                </div>
                <p className="text-[#555555] mb-4">
                  "The AI form builder saved us hours of work. Our conversion rates improved by 40% in the first month."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Mike Chen"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-[#212121]">Mike Chen</div>
                    <div className="text-sm text-[#555555]">Sales Manager</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#E0E0E0]">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FE470B] fill-current" />
                  ))}
                </div>
                <p className="text-[#555555] mb-4">
                  "Finally, a tool that actually filters out the tire-kickers. Our team can focus on real
                  opportunities."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Emily Rodriguez"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-[#212121]">Emily Rodriguez</div>
                    <div className="text-sm text-[#555555]">Business Coach</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-4">Frequently Asked Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-[#E0E0E0]">
              <AccordionTrigger className="text-[#212121] hover:text-[#FE470B]">
                How does the lead scoring work?
              </AccordionTrigger>
              <AccordionContent className="text-[#555555]">
                Our AI analyzes responses to your form questions and assigns scores based on the criteria you set. Leads
                are automatically categorized as Hot, Warm, or Cold based on their total score.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-[#E0E0E0]">
              <AccordionTrigger className="text-[#212121] hover:text-[#FE470B]">
                Can I customize the forms completely?
              </AccordionTrigger>
              <AccordionContent className="text-[#555555]">
                Yes! You have full control over form design, questions, scoring criteria, and branding. Use our
                drag-and-drop builder or let AI create forms based on your requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-[#E0E0E0]">
              <AccordionTrigger className="text-[#212121] hover:text-[#FE470B]">
                What integrations are available?
              </AccordionTrigger>
              <AccordionContent className="text-[#555555]">
                We integrate with popular tools like Slack, Gmail, Mailchimp, Zapier, and more. This allows you to
                automatically sync leads and trigger follow-up sequences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-[#E0E0E0]">
              <AccordionTrigger className="text-[#212121] hover:text-[#FE470B]">
                Is there a free trial?
              </AccordionTrigger>
              <AccordionContent className="text-[#555555]">
                Yes! We offer a 14-day free trial of our Pro plan with no credit card required. You can also use our
                Free plan indefinitely with basic features.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-[#E0E0E0]">
              <AccordionTrigger className="text-[#212121] hover:text-[#FE470B]">
                How secure is my data?
              </AccordionTrigger>
              <AccordionContent className="text-[#555555]">
                We take security seriously. All data is encrypted in transit and at rest, and we're SOC 2 compliant.
                Your leads and forms are stored securely and never shared.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FE470B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Lead Generation?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using QnFLeads to qualify better leads and close more deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-white text-[#FE470B] hover:bg-gray-100 px-8 py-3 text-lg">
                Start Free Trial
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#212121] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image src="/qnfleads-logo.png" alt="QnFLeads" width={32} height={32} className="mr-3" />
                <span className="text-xl font-bold">QnFLeads</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transform your lead generation with intelligent forms and automated outreach.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 QnFLeads. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
