import { Card, CardContent } from "@/components/ui/card"
import { Users, Brain, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: Users,
    title: "Select Teams",
    description: "Choose two NBA teams you want to predict the outcome for.",
  },
  {
    icon: Brain,
    title: "AI Prediction",
    description: "Our machine learning model analyzes team data and generates a prediction.",
  },
  {
    icon: BarChart3,
    title: "Track Results",
    description: "Save your predictions and track your success rate over time.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Simple, straightforward process to get AI-powered NBA predictions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
