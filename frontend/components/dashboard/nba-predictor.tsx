"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Slider } from "@/components/ui/slider"
import { Brain, AlertTriangle } from "lucide-react"

const nbaTeams = [
  "Atlanta Hawks",
  "Boston Celtics",
  "Brooklyn Nets",
  "Charlotte Hornets",
  "Chicago Bulls",
  "Cleveland Cavaliers",
  "Dallas Mavericks",
  "Denver Nuggets",
  "Detroit Pistons",
  "Golden State Warriors",
  "Houston Rockets",
  "Indiana Pacers",
  "LA Clippers",
  "Los Angeles Lakers",
  "Memphis Grizzlies",
  "Miami Heat",
  "Milwaukee Bucks",
  "Minnesota Timberwolves",
  "New Orleans Pelicans",
  "New York Knicks",
  "Oklahoma City Thunder",
  "Orlando Magic",
  "Philadelphia 76ers",
  "Phoenix Suns",
  "Portland Trail Blazers",
  "Sacramento Kings",
  "San Antonio Spurs",
  "Toronto Raptors",
  "Utah Jazz",
  "Washington Wizards",
]

export function NBAPredictor() {
  const [teamA, setTeamA] = useState("")
  const [teamB, setTeamB] = useState("")
  const [userConfidence, setUserConfidence] = useState([75])
  const [isLoading, setIsLoading] = useState(false)
  const [prediction, setPrediction] = useState<any>(null)

  const handlePredict = async () => {
    if (!teamA || !teamB) return

    setIsLoading(true)
    // Simulate API call to your backend
    setTimeout(() => {
      setPrediction({
        winner: teamA,
        aiConfidence: 72,
        userConfidence: userConfidence[0],
        score: "112-108",
      })
      setIsLoading(false)
    }, 2000)
  }

  const canPredict = teamA && teamB && teamA !== teamB

  return (
    <div className="space-y-6">
      <Alert className="bg-amber-900/20 border-amber-800 text-amber-200">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          This is a prediction model for entertainment purposes. Please predict responsibly.
        </AlertDescription>
      </Alert>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Team A</label>
          <Select value={teamA} onValueChange={setTeamA}>
            <SelectTrigger className="bg-slate-700 border-slate-600">
              <SelectValue placeholder="Select first team" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              {nbaTeams.map((team) => (
                <SelectItem key={team} value={team} disabled={team === teamB}>
                  {team}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Team B</label>
          <Select value={teamB} onValueChange={setTeamB}>
            <SelectTrigger className="bg-slate-700 border-slate-600">
              <SelectValue placeholder="Select second team" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              {nbaTeams.map((team) => (
                <SelectItem key={team} value={team} disabled={team === teamA}>
                  {team}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </motion.div>

      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
          onClick={handlePredict}
          disabled={!canPredict || isLoading}
          className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium"
        >
          <Brain className="w-4 h-4 mr-2" />
          {isLoading ? "Generating Prediction..." : "Generate Prediction"}
        </Button>
      </motion.div>

      {prediction && (
        <motion.div
          className="bg-slate-700 rounded-lg p-4 space-y-3"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="font-semibold text-emerald-400">Prediction Result</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-slate-300">
                <strong>Predicted Winner:</strong> {prediction.winner}
              </p>
              <p className="text-slate-300">
                <strong>AI Confidence:</strong> {prediction.aiConfidence}%
              </p>
            </div>
            <div>
              <p className="text-slate-300">
                <strong>Your Confidence:</strong> {prediction.userConfidence}%
              </p>
              <p className="text-slate-300">
                <strong>Predicted Score:</strong> {prediction.score}
              </p>
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button size="sm" className="mt-2 bg-emerald-600 hover:bg-emerald-700 w-full">
              Save Prediction
            </Button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
