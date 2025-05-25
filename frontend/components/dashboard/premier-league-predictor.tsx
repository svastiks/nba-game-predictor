"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Slider } from "@/components/ui/slider"
import { Brain, Info } from "lucide-react"

const premierLeagueTeams = [
  "Arsenal",
  "Aston Villa",
  "Brighton & Hove Albion",
  "Burnley",
  "Chelsea",
  "Crystal Palace",
  "Everton",
  "Fulham",
  "Liverpool",
  "Luton Town",
  "Manchester City",
  "Manchester United",
  "Newcastle United",
  "Nottingham Forest",
  "Sheffield United",
  "Tottenham Hotspur",
  "West Ham United",
  "Wolverhampton Wanderers",
  "Brentford",
  "Bournemouth",
]

export function PremierLeaguePredictor() {
  const [teamA, setTeamA] = useState("")
  const [teamB, setTeamB] = useState("")
  const [userConfidence, setUserConfidence] = useState([75])

  const canPredict = teamA && teamB && teamA !== teamB

  return (
    <div className="space-y-6">
      <Alert className="bg-blue-900/20 border-blue-800 text-blue-200">
        <Info className="h-4 w-4" />
        <AlertDescription>
          Premier League predictions are coming soon! The interface is ready, but our ML model is still in development.
        </AlertDescription>
      </Alert>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Home Team</label>
          <Select value={teamA} onValueChange={setTeamA} disabled>
            <SelectTrigger className="bg-slate-700 border-slate-600 opacity-60">
              <SelectValue placeholder="Select home team" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              {premierLeagueTeams.map((team) => (
                <SelectItem key={team} value={team} disabled={team === teamB}>
                  {team}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Away Team</label>
          <Select value={teamB} onValueChange={setTeamB} disabled>
            <SelectTrigger className="bg-slate-700 border-slate-600 opacity-60">
              <SelectValue placeholder="Select away team" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              {premierLeagueTeams.map((team) => (
                <SelectItem key={team} value={team} disabled={team === teamA}>
                  {team}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      <motion.div
        className="space-y-3 opacity-60"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <label className="text-sm font-medium text-slate-300">Your Confidence Level: {userConfidence[0]}%</label>
        <Slider
          value={userConfidence}
          onValueChange={setUserConfidence}
          max={100}
          min={1}
          step={1}
          className="w-full"
          disabled
        />
        <p className="text-xs text-slate-400">
          How confident are you in this prediction? This helps us calculate your overall confidence score.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Button
          disabled
          className="w-full bg-gradient-to-r from-slate-600 to-slate-700 text-slate-400 font-medium cursor-not-allowed"
        >
          <Brain className="w-4 h-4 mr-2" />
          Coming Soon - Prediction Model in Development
        </Button>
      </motion.div>

      <motion.div
        className="bg-slate-700/50 rounded-lg p-4 border border-slate-600"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <h4 className="font-semibold text-slate-400 mb-2">Preview Interface</h4>
        <p className="text-sm text-slate-400">
          This is how the Premier League predictor will work once our machine learning model is ready. You'll be able to
          select teams, set your confidence level, and get AI-powered predictions just like the NBA predictor.
        </p>
      </motion.div>
    </div>
  )
}
