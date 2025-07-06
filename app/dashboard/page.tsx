"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Plus, TrendingUp, Users, FileText, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

// Mock data - replace with real data from Supabase
const leadsData = [
  { name: "Mon", leads: 12 },
  { name: "Tue", leads: 19 },
  { name: "Wed", leads: 8 },
  { name: "Thu", leads: 15 },
  { name: "Fri", leads: 22 },
  { name: "Sat", leads: 6 },
  { name: "Sun", leads: 9 },
]

const categoryData = [
  { name: "Hot", value: 35, color: "#FE470B" },
  { name: "Warm", value: 45, color: "#FF7440" },
  { name: "Cold", value: 20, color: "#FFECE4" },
]

const recentLeads = [
  { name: "John Smith", form: "Client Qualification", score: 85, category: "hot", time: "2 hours ago" },
  { name: "Sarah Johnson", form: "Service Inquiry", score: 72, category: "warm", time: "4 hours ago" },
  { name: "Mike Wilson", form: "Client Qualification", score: 45, category: "cold", time: "6 hours ago" },
  { name: "Emily Davis", form: "Consultation Request", score: 88, category: "hot", time: "8 hours ago" },
]

const topForms = [
  { name: "Client Qualification Form", leads: 156, conversion: 68 },
  { name: "Service Inquiry Form", leads: 89, conversion: 45 },
  { name: "Consultation Request", leads: 67, conversion: 72 },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Welcome back!</h1>
          <p className="text-text-secondary">Here's what's happening with your leads today.</p>
        </div>
        <Link href="/dashboard/forms/new">
          <Button className="bg-brand hover:bg-brand-dark text-white">
            <Plus className="mr-2 h-4 w-4" />
            Create Form
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-text-primary">1,234</div>
            <p className="text-xs text-green-600">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">Hot Leads</CardTitle>
            <Target className="h-4 w-4 text-brand" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-text-primary">432</div>
            <p className="text-xs text-green-600">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +8% from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">Active Forms</CardTitle>
            <FileText className="h-4 w-4 text-text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-text-primary">12</div>
            <p className="text-xs text-text-secondary">3 created this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">Conversion Rate</CardTitle>
            <BarChart className="h-4 w-4 text-text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-text-primary">68%</div>
            <p className="text-xs text-green-600">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +5% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-text-primary">Leads This Week</CardTitle>
            <CardDescription className="text-text-secondary">
              Daily lead submissions over the past 7 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                leads: {
                  label: "Leads",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[200px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={leadsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="leads" fill="var(--color-leads)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-text-primary">Lead Categories</CardTitle>
            <CardDescription className="text-text-secondary">Distribution of lead quality scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              {categoryData.map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-text-secondary">
                    {item.name} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-text-primary">Recent Leads</CardTitle>
            <CardDescription className="text-text-secondary">Latest form submissions and their scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLeads.map((lead, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-background-muted rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-text-primary">
                        {lead.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">{lead.name}</p>
                      <p className="text-xs text-text-secondary">{lead.form}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={lead.category === "hot" ? "default" : "secondary"}
                      className={
                        lead.category === "hot"
                          ? "bg-brand text-white"
                          : lead.category === "warm"
                            ? "bg-brand-light text-white"
                            : "bg-background-muted text-text-secondary"
                      }
                    >
                      {lead.score}
                    </Badge>
                    <p className="text-xs text-text-secondary mt-1">{lead.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/dashboard/leads">
              <Button variant="ghost" className="w-full mt-4 text-brand hover:text-brand-dark">
                View All Leads
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-text-primary">Top Performing Forms</CardTitle>
            <CardDescription className="text-text-secondary">Forms with the highest lead generation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topForms.map((form, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-text-primary">{form.name}</p>
                    <span className="text-sm text-text-secondary">{form.leads} leads</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress value={form.conversion} className="flex-1" />
                    <span className="text-sm text-text-secondary">{form.conversion}%</span>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/dashboard/forms">
              <Button variant="ghost" className="w-full mt-4 text-brand hover:text-brand-dark">
                Manage Forms
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
