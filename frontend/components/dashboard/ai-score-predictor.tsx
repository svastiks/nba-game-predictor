import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bot } from "lucide-react"

export function AIScorePredictor() {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bot className="w-5 h-5 text-emerald-400" />
          <span>AI Score Predictor</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select>
            <SelectTrigger className="bg-slate-700 border-slate-600">
              <SelectValue placeholder="Select Sport" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-700">
              <SelectItem value="soccer">⚽ Soccer</SelectItem>
              <SelectItem value="basketball">🏀 Basketball</SelectItem>
              <SelectItem value="football">🏈 Football</SelectItem>
              <SelectItem value="tennis">🎾 Tennis</SelectItem>
              <SelectItem value="baseball">⚾ Baseball</SelectItem>
            </SelectContent>
          </Select>

          <Input placeholder="Team A" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400" />

          <Input placeholder="Team B" className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400" />
        </div>

        <Button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium">
          <Bot className="w-4 h-4 mr-2" />
          Generate Prediction
        </Button>
      </CardContent>
    </Card>
  )
}
