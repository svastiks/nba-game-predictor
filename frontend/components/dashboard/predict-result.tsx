import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Zap, Plus, AlertTriangle } from "lucide-react"

export function PredictResult() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Zap className="w-5 h-5 text-emerald-400" />
          <h2 className="text-2xl font-bold">Predict Result</h2>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium">
          <Plus className="w-4 h-4 mr-2" />
          New Prediction
        </Button>
      </div>

      <Alert className="bg-amber-900/20 border-amber-800 text-amber-200">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          Our AI model has an 85% accuracy rate. Please predict responsibly and never bet more than you can afford to
          lose.
        </AlertDescription>
      </Alert>
    </div>
  )
}
