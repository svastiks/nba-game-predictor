"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { NBAPredictor } from "./nba-predictor"
import { PremierLeaguePredictor } from "./premier-league-predictor"

const tabs = [
  { id: "nba", label: "NBA Predictor", icon: "🏀", available: true },
  { id: "premier-league", label: "Premier League Predictor", icon: "⚽", available: false },
]

export function PredictionTabs() {
  const [activeTab, setActiveTab] = useState("nba")

  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardContent className="p-0">
        {/* Tab Headers */}
        <div className="flex border-b border-slate-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 relative px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "text-emerald-400 bg-slate-700/50"
                  : "text-slate-400 hover:text-slate-300 hover:bg-slate-700/30"
              } ${!tab.available ? "opacity-60" : ""}`}
              disabled={!tab.available}
            >
              <div className="flex items-center justify-center space-x-2">
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                {!tab.available && (
                  <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded">Coming Soon</span>
                )}
              </div>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "nba" && <NBAPredictor />}
            {activeTab === "premier-league" && <PremierLeaguePredictor />}
          </motion.div>
        </div>
      </CardContent>
    </Card>
  )
}
