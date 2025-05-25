import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { number: "50K+", label: "Active Users" },
  { number: "1M+", label: "Predictions Made" },
  { number: "85%", label: "Accuracy Rate" },
  { number: "5", label: "Sports Covered" },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-6">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
