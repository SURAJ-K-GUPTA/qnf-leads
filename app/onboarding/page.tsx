"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, Building, Target, Rocket, CheckCircle, Sparkles, FileText, Zap } from "lucide-react"
import Image from "next/image"

const businessTypes = [
  { id: "coach", label: "Coach", icon: Users, description: "Life, business, or fitness coaching" },
  { id: "agency", label: "Agency", icon: Building, description: "Marketing, design, or consulting agency" },
  { id: "sales", label: "Sales Team", icon: Target, description: "B2B or B2C sales organization" },
  { id: "startup", label: "Startup", icon: Rocket, description: "Early-stage company or founder" },
]

const useCases = [
  { id: "qualify", label: "Qualify Prospects", icon: CheckCircle, description: "Filter high-quality leads" },
  { id: "filter", label: "Filter Junk", icon: Target, description: "Remove unqualified inquiries" },
  { id: "collect", label: "Collect Emails", icon: Users, description: "Build your email list" },
  { id: "meetings", label: "Book Meetings", icon: Building, description: "Schedule sales calls" },
]

const formOptions = [
  { id: "scratch", label: "Create from Scratch", icon: FileText, description: "Build your form step by step" },
  { id: "template", label: "Use a Template", icon: CheckCircle, description: "Start with proven templates" },
  { id: "ai", label: "AI Builder", icon: Sparkles, description: "Let AI create your form" },
]

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [businessType, setBusinessType] = useState("")
  const [useCase, setUseCase] = useState<string[]>([])
  const [formOption, setFormOption] = useState("")
  const router = useRouter()

  const progress = (step / 3) * 100

  const handleUseCaseToggle = (id: string) => {
    setUseCase((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleComplete = () => {
    // Save onboarding data to Supabase
    // Mark onboarding_complete = true
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 mb-4">
            <Image src="/qnfleads-logo.png" alt="QnFLeads" width={32} height={32} className="w-8 h-8" />
            <span className="text-2xl font-bold text-text-primary">QnFLeads</span>
          </div>
          <Progress value={progress} className="w-full max-w-md mx-auto" />
          <p className="text-sm text-text-secondary mt-2">Step {step} of 3</p>
        </div>

        {step === 1 && (
          <Card className="border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-text-primary">What type of business are you?</CardTitle>
              <CardDescription className="text-text-secondary">This helps us customize your experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {businessTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setBusinessType(type.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      businessType === type.id ? "border-brand bg-brand-soft" : "border-border hover:border-brand/50"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          businessType === type.id ? "bg-brand text-white" : "bg-background-muted"
                        }`}
                      >
                        <type.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">{type.label}</h3>
                        <p className="text-sm text-text-secondary">{type.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <Button
                onClick={() => setStep(2)}
                disabled={!businessType}
                className="w-full mt-6 bg-brand hover:bg-brand-dark text-white"
              >
                Continue
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card className="border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-text-primary">What will you use QnFLeads for?</CardTitle>
              <CardDescription className="text-text-secondary">Select all that apply</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {useCases.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleUseCaseToggle(item.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      useCase.includes(item.id) ? "border-brand bg-brand-soft" : "border-border hover:border-brand/50"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          useCase.includes(item.id) ? "bg-brand text-white" : "bg-background-muted"
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">{item.label}</h3>
                        <p className="text-sm text-text-secondary">{item.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex space-x-4 mt-6">
                <Button onClick={() => setStep(1)} variant="outline" className="flex-1 border-border">
                  Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={useCase.length === 0}
                  className="flex-1 bg-brand hover:bg-brand-dark text-white"
                >
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card className="border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-text-primary">How would you like to start?</CardTitle>
              <CardDescription className="text-text-secondary">
                Choose your preferred way to create your first form
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {formOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setFormOption(option.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      formOption === option.id ? "border-brand bg-brand-soft" : "border-border hover:border-brand/50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          formOption === option.id ? "bg-brand text-white" : "bg-background-muted"
                        }`}
                      >
                        <option.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">{option.label}</h3>
                        <p className="text-sm text-text-secondary">{option.description}</p>
                      </div>
                      {option.id === "ai" && (
                        <Badge className="ml-auto bg-brand-soft text-brand-dark">
                          <Zap className="h-3 w-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex space-x-4 mt-6">
                <Button onClick={() => setStep(2)} variant="outline" className="flex-1 border-border">
                  Back
                </Button>
                <Button
                  onClick={handleComplete}
                  disabled={!formOption}
                  className="flex-1 bg-brand hover:bg-brand-dark text-white"
                >
                  Complete Setup
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
