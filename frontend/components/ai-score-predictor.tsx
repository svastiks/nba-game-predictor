import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bot } from "lucide-react"

export function AIScorePredictor() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bot className="w-5 h-5 text-yellow-400" />
          <span>AI Score Predictor</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Input
            placeholder="Team A short name (e.g. M"
            className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
          />
          <div className="text-2xl font-bold text-yellow-400">VS</div>
          <Input
            placeholder="Team B short name (e.g. CI"
            className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
          />
        </div>
        <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium">
          <Bot className="w-4 h-4 mr-2" />
          Generate Prediction
        </Button>
      </CardContent>
    </Card>
  )
}
