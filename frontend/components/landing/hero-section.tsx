import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Target } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
            <Brain className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">AI-Powered Sports Predictions</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Predict NBA Games
            <span className="block text-gradient">With AI</span>
          </h1>

          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Use our machine learning model to predict NBA game outcomes. Input two teams, get predictions, and track
            your success rate over time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium"
            >
              <Link href="/signup">
                Start Predicting
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Link href="/sports/nba">View NBA Scores</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-semibold mb-2">NBA Predictions</h3>
              <p className="text-sm text-slate-400">
                Currently supporting NBA game predictions with more leagues coming soon
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-semibold mb-2">Machine Learning</h3>
              <p className="text-sm text-slate-400">Advanced algorithms analyze team data to generate predictions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/10 rounded-full animate-float" />
      <div
        className="absolute bottom-20 right-10 w-16 h-16 bg-blue-500/10 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
    </section>
  )
}
