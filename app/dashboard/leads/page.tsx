"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Download, MoreHorizontal, Eye, MessageSquare, Trash2, Users, Target, TrendingUp } from "lucide-react"

// Mock data - replace with real data from Supabase
const leads = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    form: "Client Qualification",
    score: 85,
    category: "hot",
    submittedAt: "2024-01-15T10:30:00Z",
    data: {
      budget: "$5,000+",
      timeline: "Within 30 days",
      experience: "Beginner",
    },
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    form: "Service Inquiry",
    score: 72,
    category: "warm",
    submittedAt: "2024-01-15T08:15:00Z",
    data: {
      budget: "$2,000-$5,000",
      timeline: "Within 60 days",
      experience: "Intermediate",
    },
  },
  {
    id: "3",
    name: "Mike Wilson",
    email: "mike@example.com",
    form: "Consultation Request",
    score: 45,
    category: "cold",
    submittedAt: "2024-01-14T16:45:00Z",
    data: {
      budget: "Under $1,000",
      timeline: "Just exploring",
      experience: "Advanced",
    },
  },
]

export default function LeadsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [formFilter, setFormFilter] = useState("all")

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.form.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = categoryFilter === "all" || lead.category === categoryFilter
    const matchesForm = formFilter === "all" || lead.form === formFilter

    return matchesSearch && matchesCategory && matchesForm
  })

  const handleExportCSV = () => {
    // Implement CSV export functionality
    const csvContent = [
      ["Name", "Email", "Form", "Score", "Category", "Submitted At"],
      ...filteredLeads.map((lead) => [
        lead.name,
        lead.email,
        lead.form,
        lead.score,
        lead.category,
        new Date(lead.submittedAt).toLocaleDateString(),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "leads.csv"
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const handleViewLead = (leadId: string) => {
    // Navigate to lead detail page
    console.log("Viewing lead:", leadId)
  }

  const handleContactLead = (leadId: string) => {
    // Open outreach modal or navigate to contact page
    console.log("Contacting lead:", leadId)
  }

  const handleDeleteLead = (leadId: string) => {
    // Implement lead deletion
    console.log("Deleting lead:", leadId)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "hot":
        return "bg-brand text-white"
      case "warm":
        return "bg-brand-light text-white"
      case "cold":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Leads</h1>
          <p className="text-text-secondary">Manage and track your qualified leads</p>
        </div>
        <Button onClick={handleExportCSV} className="bg-brand hover:bg-brand-dark text-white">
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-text-primary">{leads.length}</div>
            <p className="text-xs text-green-600">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +12% this week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">Hot Leads</CardTitle>
            <Target className="h-4 w-4 text-brand" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-text-primary">
              {leads.filter((l) => l.category === "hot").length}
            </div>
            <p className="text-xs text-text-secondary">
              {Math.round((leads.filter((l) => l.category === "hot").length / leads.length) * 100)}% of total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">Warm Leads</CardTitle>
            <Target className="h-4 w-4 text-brand-light" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-text-primary">
              {leads.filter((l) => l.category === "warm").length}
            </div>
            <p className="text-xs text-text-secondary">
              {Math.round((leads.filter((l) => l.category === "warm").length / leads.length) * 100)}% of total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">Avg. Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-text-primary">
              {Math.round(leads.reduce((sum, lead) => sum + lead.score, 0) / leads.length)}
            </div>
            <p className="text-xs text-green-600">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +5% this month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary h-4 w-4" />
              <Input
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-border"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px] border-border">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="hot">Hot Leads</SelectItem>
                <SelectItem value="warm">Warm Leads</SelectItem>
                <SelectItem value="cold">Cold Leads</SelectItem>
              </SelectContent>
            </Select>
            <Select value={formFilter} onValueChange={setFormFilter}>
              <SelectTrigger className="w-[180px] border-border">
                <SelectValue placeholder="Filter by form" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Forms</SelectItem>
                <SelectItem value="Client Qualification">Client Qualification</SelectItem>
                <SelectItem value="Service Inquiry">Service Inquiry</SelectItem>
                <SelectItem value="Consultation Request">Consultation Request</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-text-secondary">Lead</TableHead>
                <TableHead className="text-text-secondary">Form</TableHead>
                <TableHead className="text-text-secondary">Score</TableHead>
                <TableHead className="text-text-secondary">Category</TableHead>
                <TableHead className="text-text-secondary">Submitted</TableHead>
                <TableHead className="text-text-secondary">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLeads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium text-text-primary">{lead.name}</div>
                      <div className="text-sm text-text-secondary">{lead.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-text-primary">{lead.form}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-text-primary">{lead.score}</div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getCategoryColor(lead.category)}>{lead.category.toUpperCase()}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-text-secondary">{formatDate(lead.submittedAt)}</div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleViewLead(lead.id)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleContactLead(lead.id)}>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Contact Lead
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDeleteLead(lead.id)} className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
