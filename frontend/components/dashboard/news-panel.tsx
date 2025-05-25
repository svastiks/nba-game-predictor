import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Newspaper, ArrowRight } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    sport: "NBA",
    title: "Celtics defeat Lakers 112-108 in thriller.",
    time: "23m ago",
  },
  {
    sport: "Soccer",
    title: "Real Madrid appoints Xabi Alonso as new manager.",
    time: "49m ago",
  },
  {
    sport: "NFL",
    title: "Chiefs sign star quarterback to extension.",
    time: "1h ago",
  },
  {
    sport: "Tennis",
    title: "Djokovic advances to Wimbledon semifinals.",
    time: "2h ago",
  },
]

export function NewsPanel() {
  return (
    <Card className="bg-slate-800/50 border-slate-700 h-fit">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Newspaper className="w-5 h-5 text-emerald-400" />
            <span>Latest News</span>
          </CardTitle>
          <Button asChild variant="ghost" size="sm" className="text-emerald-400 hover:text-emerald-300">
            <Link href="/news">
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {newsItems.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-start space-x-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <Badge variant="secondary" className="bg-emerald-600 text-xs">
                    {item.sport}
                  </Badge>
                  <span className="text-xs text-slate-500">{item.time}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{item.title}</p>
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
