import { Header } from "@/components/layout/header"
import { DashboardWelcome } from "@/components/dashboard/dashboard-welcome"
import { PredictionTabs } from "@/components/dashboard/prediction-tabs"
import { RecentPredictions } from "@/components/dashboard/recent-predictions"
import { NewsPanel } from "@/components/dashboard/news-panel"
import { Footer } from "@/components/layout/footer"

export default function DashboardPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <DashboardWelcome />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <PredictionTabs />
            <RecentPredictions />
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
