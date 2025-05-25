import { Header } from "@/components/layout/header"
import { SportHeader } from "@/components/sports/sport-header"
import { TennisLiveScores } from "@/components/sports/tennis-live-scores"
import { GameSchedule } from "@/components/sports/game-schedule"
import { PredictionNotAvailable } from "@/components/sports/prediction-not-available"
import { SportNews } from "@/components/sports/sport-news"
import { Footer } from "@/components/layout/footer"

export default function TennisPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SportHeader sport="Tennis" icon="🎾" description="Professional Tennis" predictionAvailable={false} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <TennisLiveScores />
            <GameSchedule sport="Tennis" />
            <PredictionNotAvailable sport="Tennis" />
          </div>
          <div className="lg:col-span-1">
            <SportNews sport="Tennis" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
