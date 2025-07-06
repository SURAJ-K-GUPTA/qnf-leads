"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { FileText, Sparkles, LayoutTemplateIcon as Template, ArrowRight } from "lucide-react"

const creationMethods = [
  {
    id: "scratch",
    title: "Start from Scratch",
    description: "Build your form step by step with full control",
    icon: FileText,
    badge: null,
  },
  {
    id: "template",
    title: "Use Template",
    description: "Choose from proven form templates",
    icon: Template,
    badge: null,
  },
  {
    id: "ai",
    title: "AI Builder",
    description: "Let AI create your form based on your business",
    icon: Sparkles,
    badge: "Popular",
  },
]

export default function NewFormPage() {
  const [step, setStep] = useState(1)
  const [method, setMethod] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    businessType: "",
    industry: "",
  })
  const router = useRouter()

  const handleMethodSelect = (methodId: string) => {
    setMethod(methodId)
    if (methodId === "scratch") {
      setStep(2)
    } else if (methodId === "ai") {
      setStep(3)
    } else {
      // Handle template selection
      router.push("/dashboard/forms/templates")
    }
  }

  const handleBasicInfoSubmit = () => {
    if (method === "scratch") {
      // Create form and redirect to builder
      router.push(`/dashboard/forms/${Date.now()}/edit`)
    } else if (method === "ai") {
      // Generate AI form
      handleAIGeneration()
    }
  }

  const handleAIGeneration = async () => {
    // Simulate AI form generation
    console.log("Generating AI form with:", formData)
    // In real implementation, call AI API here
    setTimeout(() => {
      router.push(`/dashboard/forms/${Date.now()}/edit`)
    }, 2000)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Create New Form</h1>
        <p className="text-text-secondary">Choose how you'd like to create your lead qualification form</p>
      </div>

      {step === 1 && (
        <div className="grid md:grid-cols-3 gap-6">
          {creationMethods.map((method) => (
            <Card
              key={method.id}
              className="cursor-pointer border-2 border-border hover:border-brand transition-colors"
              onClick={() => handleMethodSelect(method.id)}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-brand-soft rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-brand" />
                </div>
                <CardTitle className="text-text-primary flex items-center justify-center gap-2">
                  {method.title}
                  {method.badge && <Badge className="bg-brand text-white text-xs">{method.badge}</Badge>}
                </CardTitle>
                <CardDescription className="text-text-secondary">{method.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}

      {step === 2 && method === "scratch" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-text-primary">Form Details</CardTitle>
            <CardDescription className="text-text-secondary">Provide basic information about your form</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-text-primary">
                Form Title
              </Label>
              <Input
                id="title"
                placeholder="e.g., Client Qualification Form"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className="text-text-primary">
                Description
              </Label>
              <Textarea
                id="description"
                placeholder="Brief description of what this form is for..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="border-border"
              />
            </div>
            <div className="flex space-x-4">
              <Button onClick={() => setStep(1)} variant="outline" className="flex-1 border-border">
                Back
              </Button>
              <Button
                onClick={handleBasicInfoSubmit}
                disabled={!formData.title}
                className="flex-1 bg-brand hover:bg-brand-dark text-white"
              >
                Create Form
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && method === "ai" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-text-primary flex items-center">
              <Sparkles className="mr-2 h-5 w-5 text-brand" />
              AI Form Builder
            </CardTitle>
            <CardDescription className="text-text-secondary">
              Tell us about your business and we'll create the perfect form for you
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ai-title" className="text-text-primary">
                Form Title
              </Label>
              <Input
                id="ai-title"
                placeholder="e.g., Client Qualification Form"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="business-type" className="text-text-primary">
                Business Type
              </Label>
              <Input
                id="business-type"
                placeholder="e.g., Life Coach, Marketing Agency, SaaS Startup"
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                className="border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry" className="text-text-primary">
                Industry/Niche
              </Label>
              <Input
                id="industry"
                placeholder="e.g., Health & Wellness, B2B Software, E-commerce"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ai-description" className="text-text-primary">
                What do you want to qualify?
              </Label>
              <Textarea
                id="ai-description"
                placeholder="Describe what makes a good lead for your business..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="border-border"
              />
            </div>
            <div className="flex space-x-4">
              <Button onClick={() => setStep(1)} variant="outline" className="flex-1 border-border">
                Back
              </Button>
              <Button
                onClick={handleBasicInfoSubmit}
                disabled={!formData.title || !formData.businessType}
                className="flex-1 bg-brand hover:bg-brand-dark text-white"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Form
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
