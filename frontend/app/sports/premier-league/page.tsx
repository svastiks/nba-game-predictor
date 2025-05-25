import { Header } from "@/components/layout/header"
import { SportHeader } from "@/components/sports/sport-header"
import { PremierLeagueLiveScores } from "@/components/sports/premier-league-live-scores"
import { GameSchedule } from "@/components/sports/game-schedule"
import { PredictionNotAvailable } from "@/components/sports/prediction-not-available"
import { SportNews } from "@/components/sports/sport-news"
import { Footer } from "@/components/layout/footer"

export default function PremierLeaguePage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SportHeader
          sport="Premier League"
          icon="⚽"
          description="English Premier League"
          predictionAvailable={false}
          comingSoon={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <PremierLeagueLiveScores />
            <GameSchedule sport="Soccer" />
            <PredictionNotAvailable sport="Premier League" />
          </div>
          <div className="lg:col-span-1">
            <SportNews sport="Soccer" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
