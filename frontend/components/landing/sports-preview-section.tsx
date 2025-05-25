import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const sports = [
  {
    name: "NBA",
    icon: "🏀",
    description: "National Basketball Association predictions available now",
    status: "available",
    href: "/sports/nba",
  },
  {
    name: "Premier League",
    icon: "⚽",
    description: "English Premier League predictions coming soon",
    status: "coming-soon",
    href: "/sports/premier-league",
  },
  {
    name: "Tennis",
    icon: "🎾",
    description: "Live scores and news available",
    status: "scores-only",
    href: "/sports/tennis",
  },
  {
    name: "Golf",
    icon: "⛳",
    description: "Live scores and news available",
    status: "scores-only",
    href: "/sports/golf",
  },
]

export function SportsPreviewSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Sports <span className="text-gradient">Coverage</span>
          </h2>
          <p className="text-xl text-slate-400">Explore live scores, news, and predictions across multiple sports.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sports.map((sport, index) => (
            <Link key={index} href={sport.href}>
              <Card className="bg-slate-800/50 border-slate-700 card-hover cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{sport.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{sport.name}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{sport.description}</p>

                  {sport.status === "available" && <Badge className="bg-emerald-600">Predictions Available</Badge>}
                  {sport.status === "coming-soon" && <Badge className="bg-yellow-600">Coming Soon</Badge>}
                  {sport.status === "scores-only" && (
                    <Badge variant="outline" className="border-slate-600 text-slate-400">
                      Scores & News
                    </Badge>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
