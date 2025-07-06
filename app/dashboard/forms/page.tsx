"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, MoreHorizontal, Edit, Eye, Copy, Trash2, FileText, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

// Mock data - replace with real data from Supabase
const forms = [
  {
    id: "1",
    title: "Client Qualification Form",
    description: "Qualify potential coaching clients",
    status: "published",
    leads: 156,
    lastUpdated: "2 hours ago",
    slug: "client-qualification",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Service Inquiry Form",
    description: "General service inquiries",
    status: "draft",
    leads: 89,
    lastUpdated: "1 day ago",
    slug: "service-inquiry",
    createdAt: "2024-01-10",
  },
  {
    id: "3",
    title: "Consultation Request",
    description: "Book consultation calls",
    status: "published",
    leads: 67,
    lastUpdated: "3 days ago",
    slug: "consultation-request",
    createdAt: "2024-01-08",
  },
]

export default function FormsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredForms = forms.filter(
    (form) =>
      form.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      form.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDuplicate = (formId: string) => {
    // Implement form duplication logic
    console.log("Duplicating form:", formId)
  }

  const handleDelete = (formId: string) => {
    // Implement form deletion logic
    console.log("Deleting form:", formId)
  }

  const copyFormLink = (slug: string) => {
    const url = `${window.location.origin}/f/${slug}`
    navigator.clipboard.writeText(url)
    // Show toast notification
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Forms</h1>
          <p className="text-text-secondary">Create and manage your lead qualification forms</p>
        </div>
        <Link href="/dashboard/forms/new">
          <Button className="bg-brand hover:bg-brand-dark text-white">
            <Plus className="mr-2 h-4 w-4" />
            Create Form
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">Total Forms</CardTitle>
            <FileText className="h-4 w-4 text-text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-text-primary">{forms.length}</div>
            <p className="text-xs text-text-secondary">
              {forms.filter((f) => f.status === "published").length} published
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-text-primary">
              {forms.reduce((sum, form) => sum + form.leads, 0)}
            </div>
            <p className="text-xs text-green-600">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +12% this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">Avg. Conversion</CardTitle>
            <TrendingUp className="h-4 w-4 text-text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-text-primary">68%</div>
            <p className="text-xs text-green-600">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +5% this month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary h-4 w-4" />
              <Input
                placeholder="Search forms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-border"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-text-secondary">Form</TableHead>
                <TableHead className="text-text-secondary">Status</TableHead>
                <TableHead className="text-text-secondary">Leads</TableHead>
                <TableHead className="text-text-secondary">Last Updated</TableHead>
                <TableHead className="text-text-secondary">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredForms.map((form) => (
                <TableRow key={form.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium text-text-primary">{form.title}</div>
                      <div className="text-sm text-text-secondary">{form.description}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={form.status === "published" ? "default" : "secondary"}
                      className={
                        form.status === "published" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }
                    >
                      {form.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-text-primary">{form.leads}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-text-secondary">{form.lastUpdated}</div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/forms/${form.slug}/edit`}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/forms/${form.slug}/preview`}>
                            <Eye className="mr-2 h-4 w-4" />
                            Preview
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => copyFormLink(form.slug)}>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy Link
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDuplicate(form.id)}>
                          <FileText className="mr-2 h-4 w-4" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(form.id)} className="text-red-600">
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
