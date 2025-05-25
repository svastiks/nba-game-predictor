"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const tennisMatches = [
  { player1: "Djokovic", player2: "Nadal", score: "6-4, 6-3", status: "Final", tournament: "Wimbledon", set: null },
  { player1: "Federer", player2: "Murray", score: "7-6, 4-6, 6-3", status: "Final", tournament: "US Open", set: null },
  {
    player1: "Alcaraz",
    player2: "Medvedev",
    score: "6-2, 3-6, 4-2",
    status: "Live",
    tournament: "French Open",
    set: "Set 3",
  },
]

export function TennisLiveScores() {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span className="text-2xl">🎾</span>
          <span>Tennis Live Scores</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {tennisMatches.map((match, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gradient-to-r from-slate-700/50 to-slate-700/30 rounded-lg p-4 border border-slate-600/50 hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-slate-400 font-medium">{match.tournament}</span>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={match.status === "Final" ? "secondary" : "default"}
                  className={`${match.status === "Final" ? "bg-slate-600" : "bg-red-600 animate-pulse"} font-medium`}
                >
                  {match.status}
                </Badge>
                {match.set && (
                  <Badge variant="outline" className="border-slate-500 text-slate-300 text-xs">
                    {match.set}
                  </Badge>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">{match.player1.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <span className="font-medium text-slate-200">{match.player1}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">{match.player2.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <span className="font-medium text-slate-200">{match.player2}</span>
                </div>
              </div>
              <div className="text-center pt-2 border-t border-slate-600">
                <span className="text-emerald-400 font-bold">{match.score}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}
