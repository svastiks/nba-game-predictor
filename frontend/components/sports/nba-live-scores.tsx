"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const nbaGames = [
  { homeTeam: "Lakers", awayTeam: "Warriors", homeScore: 108, awayScore: 112, status: "Final", quarter: null },
  { homeTeam: "Celtics", awayTeam: "Heat", homeScore: 115, awayScore: 102, status: "Final", quarter: null },
  { homeTeam: "Nuggets", awayTeam: "Suns", homeScore: 98, awayScore: 95, status: "Live", quarter: "Q4" },
  { homeTeam: "Bucks", awayTeam: "76ers", homeScore: 87, awayScore: 92, status: "Live", quarter: "Q3" },
]

export function NBALiveScores() {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span className="text-2xl">🏀</span>
          <span>NBA Live Scores</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {nbaGames.map((game, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gradient-to-r from-slate-700/50 to-slate-700/30 rounded-lg p-4 border border-slate-600/50 hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">{game.homeTeam.slice(0, 3).toUpperCase()}</span>
                    </div>
                    <span className="font-medium text-slate-200">{game.homeTeam}</span>
                  </div>
                  <span className="text-2xl font-bold text-emerald-400">{game.homeScore}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">{game.awayTeam.slice(0, 3).toUpperCase()}</span>
                    </div>
                    <span className="font-medium text-slate-200">{game.awayTeam}</span>
                  </div>
                  <span className="text-2xl font-bold text-emerald-400">{game.awayScore}</span>
                </div>
              </div>
              <div className="ml-6 flex flex-col items-center space-y-2">
                <Badge
                  variant={game.status === "Final" ? "secondary" : "default"}
                  className={`${game.status === "Final" ? "bg-slate-600" : "bg-red-600 animate-pulse"} font-medium`}
                >
                  {game.status}
                </Badge>
                {game.quarter && (
                  <Badge variant="outline" className="border-slate-500 text-slate-300 text-xs">
                    {game.quarter}
                  </Badge>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}
