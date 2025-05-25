"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, User, Menu, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const sports = [
  {
    name: "NBA",
    icon: "🏀",
    href: "/sports/nba",
    predictionAvailable: true,
  },
  {
    name: "Premier League",
    icon: "⚽",
    href: "/sports/premier-league",
    predictionAvailable: false,
    comingSoon: true,
  },
  {
    name: "Tennis",
    icon: "🎾",
    href: "/sports/tennis",
    predictionAvailable: false,
  },
  {
    name: "Golf",
    icon: "⛳",
    href: "/sports/golf",
    predictionAvailable: false,
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚽</span>
            </div>
            <span className="text-xl font-bold text-gradient">SportPredictor</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-slate-300 hover:text-emerald-400 transition-colors">
                <span>🎯</span>
                <span>Sports</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700 w-80">
                {sports.map((sport) => (
                  <DropdownMenuItem key={sport.name} asChild>
                    <Link
                      href={sport.href}
                      className="flex items-center justify-between text-slate-300 hover:text-emerald-400 w-full p-3"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{sport.icon}</span>
                        <span className="font-medium">{sport.name}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {sport.predictionAvailable && (
                          <Badge variant="default" className="bg-emerald-600 text-xs whitespace-nowrap">
                            Predictions
                          </Badge>
                        )}
                        {sport.comingSoon && (
                          <Badge variant="secondary" className="bg-yellow-600 text-xs whitespace-nowrap">
                            Coming Soon
                          </Badge>
                        )}
                        {!sport.predictionAvailable && !sport.comingSoon && (
                          <Badge
                            variant="outline"
                            className="border-slate-600 text-slate-400 text-xs whitespace-nowrap"
                          >
                            Scores Only
                          </Badge>
                        )}
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/predictions"
              className={cn(
                "flex items-center space-x-1 transition-colors",
                isActive("/predictions") ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400",
              )}
            >
              <span>📊</span>
              <span>My Predictions</span>
            </Link>

            <Link
              href="/news"
              className={cn(
                "flex items-center space-x-1 transition-colors",
                isActive("/news") ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400",
              )}
            >
              <span>📰</span>
              <span>News</span>
            </Link>

            <Link
              href="/dashboard"
              className={cn(
                "flex items-center space-x-1 transition-colors",
                isActive("/dashboard") ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400",
              )}
            >
              <span>📈</span>
              <span>Dashboard</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="hidden md:flex bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium"
            >
              <Link href="/login">
                <User className="w-4 h-4 mr-2" />
                Login
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-4 mt-4">
              {sports.map((sport) => (
                <Link
                  key={sport.name}
                  href={sport.href}
                  className="flex items-center justify-between text-slate-300 hover:text-emerald-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <span>{sport.icon}</span>
                    <span>{sport.name}</span>
                  </div>
                  {sport.predictionAvailable && (
                    <Badge variant="default" className="bg-emerald-600 text-xs">
                      Predictions
                    </Badge>
                  )}
                  {sport.comingSoon && (
                    <Badge variant="secondary" className="bg-yellow-600 text-xs">
                      Coming Soon
                    </Badge>
                  )}
                </Link>
              ))}
              <Link
                href="/predictions"
                className="text-slate-300 hover:text-emerald-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                📊 My Predictions
              </Link>
              <Link
                href="/news"
                className="text-slate-300 hover:text-emerald-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                📰 News
              </Link>
              <Link
                href="/dashboard"
                className="text-slate-300 hover:text-emerald-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                📈 Dashboard
              </Link>
              <Button asChild className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white w-fit">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
