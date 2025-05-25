import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info, Brain } from "lucide-react"

interface PredictionNotAvailableProps {
  sport: string
}

export function PredictionNotAvailable({ sport }: PredictionNotAvailableProps) {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="w-5 h-5 text-slate-400" />
          <span>{sport} Predictions</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Alert className="bg-blue-900/20 border-blue-800 text-blue-200">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Predictions for {sport} are not available yet. Please enjoy the live scores and latest news. We're working
            on expanding our prediction models to more sports!
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )
}
