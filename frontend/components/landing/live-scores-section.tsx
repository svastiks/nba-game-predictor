import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const liveMatches = [
  {
    league: "Premier League",
    homeTeam: "Manchester City",
    awayTeam: "Chelsea",
    homeScore: 2,
    awayScore: 1,
    status: "Live",
    time: "78'",
  },
  {
    league: "NBA",
    homeTeam: "Lakers",
    awayTeam: "Warriors",
    homeScore: 108,
    awayScore: 112,
    status: "Final",
    time: "Final",
  },
  {
    league: "NFL",
    homeTeam: "Chiefs",
    awayTeam: "Bills",
    homeScore: 21,
    awayScore: 14,
    status: "Live",
    time: "Q3 8:42",
  },
]

export function LiveScoresSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Live Sports <span className="text-gradient">Scores</span>
          </h2>
          <p className="text-xl text-slate-400">Stay updated with real-time scores from all major leagues</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {liveMatches.map((match, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 card-hover">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm text-slate-400">{match.league}</CardTitle>
                  <Badge
                    variant={match.status === "Live" ? "default" : "secondary"}
                    className={match.status === "Live" ? "bg-red-500" : ""}
                  >
                    {match.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{match.homeTeam}</span>
                    <span className="text-2xl font-bold text-emerald-400">{match.homeScore}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{match.awayTeam}</span>
                    <span className="text-2xl font-bold text-emerald-400">{match.awayScore}</span>
                  </div>
                  <div className="text-center text-sm text-slate-400 pt-2 border-t border-slate-700">{match.time}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
