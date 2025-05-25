"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import { motion } from "framer-motion"

interface GameScheduleProps {
  sport: string
}

const scheduleData: Record<string, any[]> = {
  NBA: [
    {
      homeTeam: "Boston Celtics",
      awayTeam: "Miami Heat",
      date: "Today",
      time: "8:00 PM EST",
      venue: "TD Garden",
      status: "upcoming",
    },
    {
      homeTeam: "Golden State Warriors",
      awayTeam: "Los Angeles Lakers",
      date: "Today",
      time: "10:30 PM EST",
      venue: "Chase Center",
      status: "upcoming",
    },
    {
      homeTeam: "Milwaukee Bucks",
      awayTeam: "Philadelphia 76ers",
      date: "Today",
      time: "7:00 PM EST",
      venue: "Fiserv Forum",
      status: "live",
    },
  ],
  Soccer: [
    {
      homeTeam: "Arsenal",
      awayTeam: "Chelsea",
      date: "Today",
      time: "3:00 PM GMT",
      venue: "Emirates Stadium",
      status: "upcoming",
    },
    {
      homeTeam: "Manchester United",
      awayTeam: "Liverpool",
      date: "Today",
      time: "5:30 PM GMT",
      venue: "Old Trafford",
      status: "upcoming",
    },
  ],
  Tennis: [
    {
      player1: "Carlos Alcaraz",
      player2: "Novak Djokovic",
      date: "Today",
      time: "2:00 PM EST",
      venue: "Arthur Ashe Stadium",
      tournament: "US Open",
      status: "upcoming",
    },
    {
      player1: "Iga Swiatek",
      player2: "Coco Gauff",
      date: "Today",
      time: "4:00 PM EST",
      venue: "Centre Court",
      tournament: "Wimbledon",
      status: "live",
    },
  ],
  Golf: [
    {
      tournament: "The Masters",
      round: "Round 3",
      date: "Today",
      time: "1:00 PM EST",
      venue: "Augusta National",
      status: "live",
    },
    {
      tournament: "PGA Championship",
      round: "Round 2",
      date: "Today",
      time: "11:00 AM EST",
      venue: "Bethpage Black",
      status: "upcoming",
    },
  ],
}

export function GameSchedule({ sport }: GameScheduleProps) {
  const games = scheduleData[sport] || []

  const getSportIcon = (sport: string) => {
    switch (sport) {
      case "NBA":
        return "🏀"
      case "Soccer":
        return "⚽"
      case "Tennis":
        return "🎾"
      case "Golf":
        return "⛳"
      default:
        return "🏆"
    }
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-emerald-400" />
          <span>Today's {sport} Schedule</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {games.length === 0 ? (
          <div className="text-center py-8 text-slate-400">
            <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No {sport} games scheduled for today</p>
          </div>
        ) : (
          games.map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gradient-to-r from-slate-700/50 to-slate-700/30 rounded-lg p-4 border border-slate-600/50 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{getSportIcon(sport)}</span>
                  <Badge
                    variant={game.status === "live" ? "default" : "secondary"}
                    className={`${game.status === "live" ? "bg-red-600 animate-pulse" : "bg-slate-600"} font-medium`}
                  >
                    {game.status === "live" ? "LIVE" : "Upcoming"}
                  </Badge>
                </div>
                <div className="flex items-center space-x-1 text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{game.time}</span>
                </div>
              </div>

              {sport === "Tennis" ? (
                <div className="space-y-2">
                  <div className="text-center">
                    <span className="text-sm text-emerald-400 font-medium">{game.tournament}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <span className="font-medium text-slate-200">{game.player1}</span>
                    <span className="text-slate-400">vs</span>
                    <span className="font-medium text-slate-200">{game.player2}</span>
                  </div>
                  <div className="text-center text-sm text-slate-400">{game.venue}</div>
                </div>
              ) : sport === "Golf" ? (
                <div className="space-y-2">
                  <div className="text-center">
                    <span className="font-medium text-slate-200">{game.tournament}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-emerald-400 font-medium">{game.round}</span>
                  </div>
                  <div className="text-center text-sm text-slate-400">{game.venue}</div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">{game.homeTeam.slice(0, 3).toUpperCase()}</span>
                      </div>
                      <span className="font-medium text-slate-200">{game.homeTeam}</span>
                    </div>
                    <span className="text-slate-400 text-sm">HOME</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">{game.awayTeam.slice(0, 3).toUpperCase()}</span>
                      </div>
                      <span className="font-medium text-slate-200">{game.awayTeam}</span>
                    </div>
                    <span className="text-slate-400 text-sm">AWAY</span>
                  </div>
                  <div className="text-center text-sm text-slate-400 pt-2 border-t border-slate-600">{game.venue}</div>
                </div>
              )}
            </motion.div>
          ))
        )}
      </CardContent>
    </Card>
  )
}
