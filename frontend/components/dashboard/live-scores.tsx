import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"

const leagues = [
  {
    name: "Premier League",
    country: "England",
    matches: [
      { homeTeam: "MCI", score: "2 - 1", awayTeam: "CHE" },
      { homeTeam: "ARS", score: "1 - 1", awayTeam: "TOT" },
    ],
  },
  {
    name: "NBA",
    country: "USA",
    matches: [
      { homeTeam: "LAL", score: "108 - 112", awayTeam: "GSW" },
      { homeTeam: "BOS", score: "115 - 102", awayTeam: "MIA" },
    ],
  },
  {
    name: "NFL",
    country: "USA",
    matches: [
      { homeTeam: "KC", score: "24 - 21", awayTeam: "BUF" },
      { homeTeam: "DAL", score: "17 - 14", awayTeam: "NYG" },
    ],
  },
]

export function LiveScores() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Zap className="w-5 h-5 text-emerald-400" />
          <h2 className="text-2xl font-bold">Live Scores</h2>
        </div>
        <span className="text-sm text-slate-400">Updated every 30s</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {leagues.map((league, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{league.name}</CardTitle>
                <Badge variant="secondary" className="bg-slate-700 text-white">
                  {league.country}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {league.matches.map((match, matchIndex) => (
                <div key={matchIndex} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                  <span className="font-medium">{match.homeTeam}</span>
                  <div className="text-lg font-bold text-emerald-400">{match.score}</div>
                  <span className="font-medium">{match.awayTeam}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
