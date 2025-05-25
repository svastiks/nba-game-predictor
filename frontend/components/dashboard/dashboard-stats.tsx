import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, Zap, Trophy } from "lucide-react"

const stats = [
  {
    title: "Predictions Made",
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
    title: "Current Streak",
    value: "8",
    change: "Best: 15",
    icon: Zap,
    color: "text-yellow-400",
  },
  {
    title: "Rank",
    value: "#1,247",
    change: "Top 15%",
    icon: Trophy,
    color: "text-purple-400",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
