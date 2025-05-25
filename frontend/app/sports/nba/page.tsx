import { Header } from "@/components/layout/header"
import { SportHeader } from "@/components/sports/sport-header"
import { NBALiveScores } from "@/components/sports/nba-live-scores"
import { GameSchedule } from "@/components/sports/game-schedule"
import { NBAPredictor } from "@/components/dashboard/nba-predictor"
import { SportNews } from "@/components/sports/sport-news"
import { Footer } from "@/components/layout/footer"

export default function NBAPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SportHeader sport="NBA" icon="🏀" description="National Basketball Association" predictionAvailable={true} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <NBALiveScores />
            <GameSchedule sport="NBA" />
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <span>🤖</span>
                <span>NBA Predictor</span>
              </h3>
              <NBAPredictor />
            </div>
          </div>
          <div className="lg:col-span-1">
            <SportNews sport="NBA" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
