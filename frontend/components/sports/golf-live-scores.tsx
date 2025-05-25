"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const golfLeaderboard = [
  { player: "Tiger Woods", score: "-12", position: "1st", round: "R4", tournament: "Masters" },
  { player: "Rory McIlroy", score: "-10", position: "2nd", round: "R4", tournament: "Masters" },
  { player: "Jordan Spieth", score: "-8", position: "T3", round: "R4", tournament: "Masters" },
  { player: "Justin Thomas", score: "-8", position: "T3", round: "R4", tournament: "Masters" },
]

export function GolfLiveScores() {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span className="text-2xl">⛳</span>
          <span>Golf Leaderboard</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {golfLeaderboard.map((player, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gradient-to-r from-slate-700/50 to-slate-700/30 rounded-lg p-4 border border-slate-600/50 hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Badge
                  variant="outline"
                  className={`border-slate-600 text-slate-300 font-bold ${
                    player.position === "1st" ? "bg-yellow-600/20 border-yellow-600 text-yellow-400" : ""
                  }`}
                >
                  {player.position}
                </Badge>
                <div>
                  <div className="font-medium text-slate-200">{player.player}</div>
                  <div className="text-sm text-slate-400">
                    {player.tournament} - {player.round}
                  </div>
                </div>
              </div>
              <div className="text-2xl font-bold text-emerald-400">{player.score}</div>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}
