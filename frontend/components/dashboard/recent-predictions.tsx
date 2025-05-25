import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const recentPredictions = [
  {
    match: "Manchester City vs Chelsea",
    prediction: "2-1",
    status: "Won",
    confidence: 85,
    sport: "Soccer",
  },
  {
    match: "Lakers vs Warriors",
    prediction: "108-112",
    status: "Lost",
    confidence: 72,
    sport: "Basketball",
  },
  {
    match: "Chiefs vs Bills",
    prediction: "24-21",
    status: "Pending",
    confidence: 78,
    sport: "Football",
  },
]

export function RecentPredictions() {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Recent Predictions</CardTitle>
          <Button asChild variant="ghost" size="sm" className="text-emerald-400 hover:text-emerald-300">
            <Link href="/predictions">
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentPredictions.map((prediction, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <Badge variant="secondary" className="bg-slate-600 text-xs">
                  {prediction.sport}
                </Badge>
                <span className="text-sm text-slate-400">{prediction.confidence}% confidence</span>
              </div>
              <h4 className="font-medium">{prediction.match}</h4>
              <p className="text-sm text-slate-400">Predicted: {prediction.prediction}</p>
            </div>
            <Badge
              variant={
                prediction.status === "Won" ? "default" : prediction.status === "Lost" ? "destructive" : "secondary"
              }
              className={
                prediction.status === "Won"
                  ? "bg-emerald-600"
                  : prediction.status === "Lost"
                    ? "bg-red-600"
                    : "bg-yellow-600"
              }
            >
              {prediction.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
