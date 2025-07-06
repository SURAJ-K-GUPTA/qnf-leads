import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          role: "user" | "admin"
          onboarding_complete: boolean
          created_at: string
        }
        Insert: {
          id: string
          email: string
          role?: "user" | "admin"
          onboarding_complete?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          role?: "user" | "admin"
          onboarding_complete?: boolean
          created_at?: string
        }
      }
      forms: {
        Row: {
          id: string
          user_id: string
          slug: string
          title: string
          description: string | null
          banner_url: string | null
          grading_config: any
          is_published: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          slug: string
          title: string
          description?: string | null
          banner_url?: string | null
          grading_config?: any
          is_published?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          slug?: string
          title?: string
          description?: string | null
          banner_url?: string | null
          grading_config?: any
          is_published?: boolean
          created_at?: string
        }
      }
      questions: {
        Row: {
          id: string
          form_id: string
          question_text: string
          question_type: "text" | "radio" | "checkbox" | "dropdown" | "rating"
          order: number
          required: boolean
          created_at: string
        }
        Insert: {
          id?: string
          form_id: string
          question_text: string
          question_type: "text" | "radio" | "checkbox" | "dropdown" | "rating"
          order: number
          required?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          form_id?: string
          question_text?: string
          question_type?: "text" | "radio" | "checkbox" | "dropdown" | "rating"
          order?: number
          required?: boolean
          created_at?: string
        }
      }
      options: {
        Row: {
          id: string
          question_id: string
          option_text: string
          score: number
          created_at: string
        }
        Insert: {
          id?: string
          question_id: string
          option_text: string
          score: number
          created_at?: string
        }
        Update: {
          id?: string
          question_id?: string
          option_text?: string
          score?: number
          created_at?: string
        }
      }
      leads: {
        Row: {
          id: string
          form_id: string
          submitted_data: any
          score: number
          lead_category: "hot" | "warm" | "cold"
          created_at: string
        }
        Insert: {
          id?: string
          form_id: string
          submitted_data: any
          score: number
          lead_category: "hot" | "warm" | "cold"
          created_at?: string
        }
        Update: {
          id?: string
          form_id?: string
          submitted_data?: any
          score?: number
          lead_category?: "hot" | "warm" | "cold"
          created_at?: string
        }
      }
    }
  }
}
