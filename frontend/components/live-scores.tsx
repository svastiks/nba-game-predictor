import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"

const leagues = [
  {
    name: "Premier League",
    country: "England",
    flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    trophy: "🏆",
    matches: [
      { homeTeam: "M", homeFlag: "🔵", score: "2 - 1", awayTeam: "C", awayFlag: "🔴" },
      { homeTeam: "A", homeFlag: "🔴", score: "1 - 1", awayTeam: "T", awayFlag: "⚪" },
    ],
  },
  {
    name: "La Liga",
    country: "Spain",
    flag: "🇪🇸",
    trophy: "🏆",
    matches: [
      { homeTeam: "R", homeFlag: "⚪", score: "3 - 0", awayTeam: "A", awayFlag: "🔵" },
      { homeTeam: "B", homeFlag: "🔴", score: "2 - 2", awayTeam: "V", awayFlag: "🟡" },
    ],
  },
  {
    name: "Serie A",
    country: "Italy",
    flag: "🇮🇹",
    trophy: "🏆",
    matches: [
      { homeTeam: "J", homeFlag: "⚫", score: "1 - 0", awayTeam: "R", awayFlag: "🔴" },
      { homeTeam: "I", homeFlag: "🔵", score: "2 - 2", awayTeam: "A", awayFlag: "⚫" },
    ],
  },
]

export function LiveScores() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          <h2 className="text-2xl font-bold">Live Football Scores</h2>
        </div>
        <span className="text-sm text-slate-400">Updated every 30s</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {leagues.map((league, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{league.trophy}</span>
                  <div>
                    <CardTitle className="text-lg">{league.name}</CardTitle>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-slate-700 text-white">
                  {league.country}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {league.matches.map((match, matchIndex) => (
                <div key={matchIndex} className="flex items-center justify-between p-3 bg-slate-700 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{match.homeFlag}</span>
                    <span className="font-medium">{match.homeTeam}</span>
                  </div>
                  <div className="text-lg font-bold text-yellow-400">{match.score}</div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{match.awayTeam}</span>
                    <span className="text-lg">{match.awayFlag}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
