import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  email: string
  role: "user" | "admin"
  onboarding_complete: boolean
  created_at: string
  updated_at: string
}

export interface Form {
  id: string
  user_id: string
  slug: string
  title: string
  description: string
  banner_url?: string
  grading_config: {
    hot_min: number
    warm_min: number
    cold_min: number
  }
  is_published: boolean
  created_at: string
  updated_at: string
}

export interface Question {
  id: string
  form_id: string
  question_text: string
  type: "radio" | "checkbox" | "text" | "dropdown" | "rating"
  order: number
  required: boolean
  created_at: string
}

export interface Option {
  id: string
  question_id: string
  option_text: string
  score: number
  created_at: string
}

export interface Lead {
  id: string
  form_id: string
  submitted_data: Record<string, any>
  score: number
  lead_category: "hot" | "warm" | "cold"
  created_at: string
}

export interface OutreachMessage {
  id: string
  user_id: string
  category: "hot" | "warm" | "cold"
  template: string
  is_active: boolean
  created_at: string
}

export interface Report {
  id: string
  form_id: string
  insights_json: Record<string, any>
  frequency: "weekly" | "biweekly" | "monthly"
  delivery_method: "email" | "slack"
  created_at: string
}

export interface Integration {
  id: string
  user_id: string
  type: "slack" | "gmail" | "mailchimp" | "zapier"
  status: "connected" | "disconnected" | "error"
  last_sync: string
  created_at: string
}
