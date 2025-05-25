import { Header } from "@/components/layout/header"
import { PredictionsHistory } from "@/components/predictions/predictions-history"
import { PredictionsStats } from "@/components/predictions/predictions-stats"
import { Footer } from "@/components/layout/footer"

export default function PredictionsPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Predictions</h1>
          <p className="text-slate-400">Track all your predictions and analyze your success rate.</p>
        </div>

        <PredictionsStats />
        <PredictionsHistory />
      </main>
      <Footer />
    </div>
  )
}
