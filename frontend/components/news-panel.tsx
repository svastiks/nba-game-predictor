import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Newspaper } from "lucide-react"

const newsItems = [
  {
    sport: "NBA",
    icon: "🏀",
    title: "Celtics defeat Lakers 112-108 in thriller.",
    time: "23m ago",
  },
  {
    sport: "Football",
    icon: "⚽",
    title: "Real Madrid appoints Xabi Alonso as new manager after Ancelotti departure.",
    time: "49m ago",
  },
  {
    sport: "MLB",
    icon: "⚾",
    title: "Yankees hit 4 home runs to beat Red Sox 9-3.",
    time: "1h ago",
  },
  {
    sport: "Hockey",
    icon: "🏒",
    title: "Maple Leafs fire head coach after playoff exit.",
    time: "2h ago",
  },
]

export function NewsPanel() {
  return (
    <Card className="bg-slate-800 border-slate-700 h-fit">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Newspaper className="w-5 h-5 text-yellow-400" />
          <span>Latest Sports News</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {newsItems.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-start space-x-3">
              <span className="text-lg">{item.icon}</span>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-medium text-yellow-400">{item.sport}:</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{item.title}</p>
                <span className="text-xs text-slate-500">{item.time}</span>
              </div>
            </div>
            {index < newsItems.length - 1 && <div className="border-b border-slate-700" />}
          </div>
        ))}
        <Button variant="outline" className="w-full mt-4 border-slate-600 text-slate-300 hover:bg-slate-700">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh News
        </Button>
      </CardContent>
    </Card>
  )
}
