"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Laptop, Home, Search, BarChart3, Info } from "lucide-react"

const navigation = [
  { name: "Beranda", href: "/", icon: Home },
  { name: "Rekomendasi Terkini", href: "/rekomendasi", icon: Search },
  { name: "Perbandingan", href: "/perbandingan", icon: BarChart3 },
  { name: "Tentang", href: "/tentang", icon: Info },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Laptop className="h-8 w-8 text-primary neon-glow" />
            <span className="text-xl font-bold text-foreground neon-text">Study Core</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.name}
                  variant={pathname === item.href ? "default" : "ghost"}
                  asChild
                  className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  <Link href={item.href}>
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                </Button>
              )
            })}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="hover:scale-105 transition-transform">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
