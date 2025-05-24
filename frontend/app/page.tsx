import { Header } from "@/components/header"
import { LiveScores } from "@/components/live-scores"
import { PredictResult } from "@/components/predict-result"
import { AIScorePredictor } from "@/components/ai-score-predictor"
import { PredictionCards } from "@/components/prediction-cards"
import { NewsPanel } from "@/components/news-panel"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <LiveScores />
            <PredictResult />
            <AIScorePredictor />
            <PredictionCards />
          </div>
          <div className="lg:col-span-1">
            <NewsPanel />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
