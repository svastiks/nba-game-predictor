import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Filter } from "lucide-react"

const predictions = [
  {
    id: 1,
    date: "2024-01-15",
    sport: "Soccer",
    match: "Manchester City vs Chelsea",
    prediction: "2-1",
    actual: "2-1",
    status: "Won",
    confidence: 85,
    odds: 2.5,
  },
  {
    id: 2,
    date: "2024-01-14",
    sport: "Basketball",
    match: "Lakers vs Warriors",
    prediction: "108-112",
    actual: "105-118",
    status: "Lost",
    confidence: 72,
    odds: 1.8,
  },
  {
    id: 3,
    date: "2024-01-13",
    sport: "Football",
    match: "Chiefs vs Bills",
    prediction: "24-21",
    actual: "27-24",
    status: "Won",
    confidence: 78,
    odds: 2.1,
  },
  {
    id: 4,
    date: "2024-01-12",
    sport: "Tennis",
    match: "Djokovic vs Nadal",
    prediction: "6-4, 6-3",
    actual: "6-4, 7-5",
    status: "Won",
    confidence: 91,
    odds: 1.6,
  },
  {
    id: 5,
    date: "2024-01-11",
    sport: "Baseball",
    match: "Yankees vs Red Sox",
    prediction: "7-4",
    actual: "5-8",
    status: "Lost",
    confidence: 68,
    odds: 2.3,
  },
]

export function PredictionsHistory() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Prediction History</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="border-slate-600">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline" size="sm" className="border-slate-600">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {predictions.map((prediction) => (
          <Card key={prediction.id} className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="bg-slate-700">
                      {prediction.sport}
                    </Badge>
                    <span className="text-sm text-slate-400">{prediction.date}</span>
                  </div>
                  <h3 className="font-semibold">{prediction.match}</h3>
                </div>

                <div className="text-center">
                  <div className="text-sm text-slate-400 mb-1">Predicted</div>
                  <div className="font-medium">{prediction.prediction}</div>
                </div>

                <div className="text-center">
                  <div className="text-sm text-slate-400 mb-1">Actual</div>
                  <div className="font-medium">{prediction.actual}</div>
                </div>

                <div className="text-center">
                  <div className="text-sm text-slate-400 mb-1">Confidence</div>
                  <div className="font-medium">{prediction.confidence}%</div>
                </div>

                <div className="text-center">
                  <Badge
                    variant={prediction.status === "Won" ? "default" : "destructive"}
                    className={prediction.status === "Won" ? "bg-emerald-600" : "bg-red-600"}
                  >
                    {prediction.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
