"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BarChart3, FileText, Users, MessageSquare, Settings, Zap, Book, ChevronUp, LogOut } from "lucide-react"
import { useAuth } from "@/lib/auth"

const navigation = [
  {
    title: "Main",
    items: [
      { title: "Overview", url: "/dashboard", icon: BarChart3 },
      { title: "Forms", url: "/dashboard/forms", icon: FileText },
      { title: "Leads", url: "/dashboard/leads", icon: Users },
      { title: "Reports", url: "/dashboard/reports", icon: BarChart3 },
    ],
  },
  {
    title: "Tools",
    items: [
      { title: "Outreach", url: "/dashboard/outreach", icon: MessageSquare },
      { title: "Integrations", url: "/dashboard/integrations", icon: Zap },
      { title: "Settings", url: "/dashboard/settings", icon: Settings },
      { title: "Tutorials", url: "/dashboard/tutorials", icon: Book },
    ],
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const { user, signOut } = useAuth()

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center space-x-3 px-2 py-2">
          <Image src="/qnfleads-logo.png" alt="QnFLeads" width={24} height={24} className="w-6 h-6" />
          <span className="text-lg font-bold text-text-primary">QnFLeads</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {navigation.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <Link href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="text-xs">{user?.email?.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span className="truncate">{user?.email}</span>
                  <ChevronUp className="ml-auto h-4 w-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
