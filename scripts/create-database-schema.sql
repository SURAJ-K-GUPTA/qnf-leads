-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create custom types
CREATE TYPE user_role AS ENUM ('user', 'admin');
CREATE TYPE lead_category AS ENUM ('hot', 'warm', 'cold');
CREATE TYPE question_type AS ENUM ('text', 'radio', 'checkbox', 'dropdown', 'rating');
CREATE TYPE form_status AS ENUM ('draft', 'published', 'archived');

-- Users table (extends Supabase auth.users)
CREATE TABLE public.users (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT NOT NULL,
    role user_role DEFAULT 'user',
    onboarding_complete BOOLEAN DEFAULT FALSE,
    business_type TEXT,
    industry TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Forms table
CREATE TABLE public.forms (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    description TEXT,
    banner_url TEXT,
    grading_config JSONB DEFAULT '{"hot": {"min": 80, "max": 100}, "warm": {"min": 50, "max": 79}, "cold": {"min": 0, "max": 49}}',
    status form_status DEFAULT 'draft',
    is_published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Questions table
CREATE TABLE public.questions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    form_id UUID REFERENCES public.forms(id) ON DELETE CASCADE NOT NULL,
    question_text TEXT NOT NULL,
    question_type question_type NOT NULL,
    order_index INTEGER NOT NULL,
    required BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Options table (for radio, checkbox, dropdown questions)
CREATE TABLE public.options (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    question_id UUID REFERENCES public.questions(id) ON DELETE CASCADE NOT NULL,
    option_text TEXT NOT NULL,
    score INTEGER DEFAULT 0,
    order_index INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Leads table
CREATE TABLE public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    form_id UUID REFERENCES public.forms(id) ON DELETE CASCADE NOT NULL,
    name TEXT,
    email TEXT,
    submitted_data JSONB NOT NULL,
    score INTEGER NOT NULL DEFAULT 0,
    lead_category lead_category NOT NULL,
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Outreach messages table
CREATE TABLE public.outreach_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    category lead_category NOT NULL,
    subject TEXT,
    template TEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reports table
CREATE TABLE public.reports (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    form_id UUID REFERENCES public.forms(id) ON DELETE CASCADE NOT NULL,
    insights_json JSONB,
    frequency TEXT DEFAULT 'weekly',
    delivery_method TEXT DEFAULT 'email',
    last_sent_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Integrations table
CREATE TABLE public.integrations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE NOT NULL,
    type TEXT NOT NULL, -- 'slack', 'gmail', 'mailchimp', 'zapier', etc.
    status TEXT DEFAULT 'disconnected',
    config JSONB,
    last_sync TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_forms_user_id ON public.forms(user_id);
CREATE INDEX idx_forms_slug ON public.forms(slug);
CREATE INDEX idx_questions_form_id ON public.questions(form_id);
CREATE INDEX idx_options_question_id ON public.options(question_id);
CREATE INDEX idx_leads_form_id ON public.leads(form_id);
CREATE INDEX idx_leads_category ON public.leads(lead_category);
CREATE INDEX idx_leads_created_at ON public.leads(created_at);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.options ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.outreach_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.integrations ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Users can only see their own data
CREATE POLICY "Users can view own profile" ON public.users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.users
    FOR UPDATE USING (auth.uid() = id);

-- Forms policies
CREATE POLICY "Users can view own forms" ON public.forms
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own forms" ON public.forms
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own forms" ON public.forms
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own forms" ON public.forms
    FOR DELETE USING (auth.uid() = user_id);

-- Public can view published forms (for form rendering)
CREATE POLICY "Public can view published forms" ON public.forms
    FOR SELECT USING (is_published = true);

-- Questions policies
CREATE POLICY "Users can manage questions for own forms" ON public.questions
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.forms 
            WHERE forms.id = questions.form_id 
            AND forms.user_id = auth.uid()
        )
    );

-- Public can view questions for published forms
CREATE POLICY "Public can view questions for published forms" ON public.questions
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.forms 
            WHERE forms.id = questions.form_id 
            AND forms.is_published = true
        )
    );

-- Options policies
CREATE POLICY "Users can manage options for own questions" ON public.options
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.questions q
            JOIN public.forms f ON f.id = q.form_id
            WHERE q.id = options.question_id 
            AND f.user_id = auth.uid()
        )
    );

-- Public can view options for published forms
CREATE POLICY "Public can view options for published forms" ON public.options
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.questions q
            JOIN public.forms f ON f.id = q.form_id
            WHERE q.id = options.question_id 
            AND f.is_published = true
        )
    );

-- Leads policies
CREATE POLICY "Users can view leads for own forms" ON public.leads
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.forms 
            WHERE forms.id = leads.form_id 
            AND forms.user_id = auth.uid()
        )
    );

-- Anyone can insert leads (for form submissions)
CREATE POLICY "Anyone can submit leads" ON public.leads
    FOR INSERT WITH CHECK (true);

-- Outreach messages policies
CREATE POLICY "Users can manage own outreach messages" ON public.outreach_messages
    FOR ALL USING (auth.uid() = user_id);

-- Reports policies
CREATE POLICY "Users can manage reports for own forms" ON public.reports
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.forms 
            WHERE forms.id = reports.form_id 
            AND forms.user_id = auth.uid()
        )
    );

-- Integrations policies
CREATE POLICY "Users can manage own integrations" ON public.integrations
    FOR ALL USING (auth.uid() = user_id);

-- Functions for automatic slug generation
CREATE OR REPLACE FUNCTION generate_slug(title TEXT)
RETURNS TEXT AS $$
BEGIN
    RETURN lower(regexp_replace(regexp_replace(title, '[^a-zA-Z0-9\s]', '', 'g'), '\s+', '-', 'g'));
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-generate slug for forms
CREATE OR REPLACE FUNCTION set_form_slug()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.slug IS NULL OR NEW.slug = '' THEN
        NEW.slug := generate_slug(NEW.title) || '-' || substr(NEW.id::text, 1, 8);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_set_form_slug
    BEFORE INSERT ON public.forms
    FOR EACH ROW
    EXECUTE FUNCTION set_form_slug();

-- Function to calculate lead score and category
CREATE OR REPLACE FUNCTION calculate_lead_score(form_id_param UUID, submitted_data_param JSONB)
RETURNS TABLE(score INTEGER, category lead_category) AS $$
DECLARE
    total_score INTEGER := 0;
    grading_config JSONB;
BEGIN
    -- Get the form's grading configuration
    SELECT f.grading_config INTO grading_config
    FROM public.forms f
    WHERE f.id = form_id_param;

    -- Calculate score based on submitted data
    -- This is a simplified version - you'd implement more complex scoring logic
    total_score := (submitted_data_param->>'score')::INTEGER;

    -- Determine category based on score
    IF total_score >= (grading_config->'hot'->>'min')::INTEGER THEN
        RETURN QUERY SELECT total_score, 'hot'::lead_category;
    ELSIF total_score >= (grading_config->'warm'->>'min')::INTEGER THEN
        RETURN QUERY SELECT total_score, 'warm'::lead_category;
    ELSE
        RETURN QUERY SELECT total_score, 'cold'::lead_category;
    END IF;
END;
$$ LANGUAGE plpgsql;
