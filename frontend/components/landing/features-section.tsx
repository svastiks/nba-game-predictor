import { Card, CardContent } from "@/components/ui/card"
import { Brain, BarChart3, Bell, Shield, Users, Smartphone } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Predictions",
    description:
      "Advanced machine learning algorithms analyze thousands of data points to provide accurate predictions.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Track your prediction history, success rates, and identify patterns in your betting strategy.",
  },
  {
    icon: Bell,
    title: "Real-time Alerts",
    description: "Get instant notifications for game updates, prediction results, and breaking news.",
  },
  {
    icon: Shield,
    title: "Responsible Gaming",
    description: "Built-in safeguards and transparency to promote responsible sports prediction practices.",
  },
  {
    icon: Users,
    title: "Community Insights",
    description: "Learn from top predictors and share strategies with our growing community.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Access your predictions anywhere with our fully responsive mobile experience.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">SportPredictor</span>?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to make informed sports predictions and track your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 card-hover">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
