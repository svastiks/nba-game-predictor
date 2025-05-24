import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const predictions = [
  {
    homeTeam: "MCI",
    homeFlag: "🔵",
    awayTeam: "CHE",
    awayFlag: "🔵",
    prediction: "2-1",
    status: "In Progress",
    statusColor: "bg-yellow-600",
  },
  {
    homeTeam: "BAR",
    homeFlag: "🔴",
    awayTeam: "VAL",
    awayFlag: "🟡",
    prediction: "2-1",
    status: "Lost",
    statusColor: "bg-red-600",
  },
]

export function PredictionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {predictions.map((prediction, index) => (
        <Card key={index} className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-sm">{prediction.homeFlag}</span>
                </div>
                <span className="font-medium">{prediction.homeTeam}</span>
              </div>
              <div className="text-xl font-bold">VS</div>
              <div className="flex items-center space-x-3">
                <span className="font-medium">{prediction.awayTeam}</span>
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-sm">{prediction.awayFlag}</span>
                </div>
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-sm text-slate-400">Predicted: {prediction.prediction}</div>
              <Badge className={`${prediction.statusColor} text-white`}>{prediction.status}</Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
