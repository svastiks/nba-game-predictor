import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Zap, Plus, AlertTriangle } from "lucide-react"

export function PredictResult() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          <h2 className="text-2xl font-bold">Predict Result</h2>
        </div>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium">
          <Plus className="w-4 h-4 mr-2" />
          New Prediction
        </Button>
      </div>

      <Alert className="bg-red-900/20 border-red-800 text-red-200">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          The prediction model only has an accuracy of 70%. I would strongly advice against using this for gambling.
        </AlertDescription>
      </Alert>
    </div>
  )
}
