import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, Calendar, DollarSign } from "lucide-react"

const stats = [
  {
    title: "Total Predictions",
    value: "247",
    change: "+12 this week",
    icon: Target,
    color: "text-blue-400",
  },
  {
    title: "Success Rate",
    value: "73.2%",
    change: "+2.1% this month",
    icon: TrendingUp,
    color: "text-emerald-400",
  },
  {
    title: "This Month",
    value: "42",
    change: "18 won, 24 pending",
    icon: Calendar,
    color: "text-purple-400",
  },
  {
    title: "Avg Confidence",
    value: "78.5%",
    change: "+1.2% this week",
    icon: DollarSign,
    color: "text-yellow-400",
  },
]

export function PredictionsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-slate-800/50 border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-slate-400 mt-1">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
