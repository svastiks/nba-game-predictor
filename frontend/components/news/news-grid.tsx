import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ExternalLink } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "NBA Finals: Celtics Defeat Lakers in Thrilling Game 7",
    excerpt:
      "In a nail-biting finish, the Boston Celtics secured their 18th championship with a 112-108 victory over the Los Angeles Lakers.",
    category: "Basketball",
    time: "2 hours ago",
    image: "/placeholder.svg?height=200&width=300",
    source: "ESPN",
  },
  {
    id: 2,
    title: "Transfer News: Real Madrid Signs Mbappé for Record Fee",
    excerpt:
      "Real Madrid has officially announced the signing of Kylian Mbappé from PSG for a record-breaking transfer fee.",
    category: "Soccer",
    time: "4 hours ago",
    image: "/placeholder.svg?height=200&width=300",
    source: "Sky Sports",
  },
  {
    id: 3,
    title: "NFL Draft: Quarterback Goes First Overall",
    excerpt:
      "The Chicago Bears select USC quarterback Caleb Williams with the first overall pick in the 2024 NFL Draft.",
    category: "Football",
    time: "6 hours ago",
    image: "/placeholder.svg?height=200&width=300",
    source: "NFL.com",
  },
  {
    id: 4,
    title: "Wimbledon: Djokovic Advances to Semifinals",
    excerpt:
      "Novak Djokovic continues his quest for another Wimbledon title with a straight-sets victory in the quarterfinals.",
    category: "Tennis",
    time: "8 hours ago",
    image: "/placeholder.svg?height=200&width=300",
    source: "BBC Sport",
  },
  {
    id: 5,
    title: "World Series: Yankees Take 2-1 Series Lead",
    excerpt: "The New York Yankees defeat the Dodgers 8-4 to take a commanding 2-1 lead in the World Series.",
    category: "Baseball",
    time: "10 hours ago",
    image: "/placeholder.svg?height=200&width=300",
    source: "MLB.com",
  },
  {
    id: 6,
    title: "Champions League: Manchester City Reaches Final",
    excerpt:
      "Manchester City secures their spot in the Champions League final with a 3-1 aggregate victory over Bayern Munich.",
    category: "Soccer",
    time: "12 hours ago",
    image: "/placeholder.svg?height=200&width=300",
    source: "UEFA.com",
  },
]

export function NewsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsArticles.map((article) => (
        <Card key={article.id} className="bg-slate-800/50 border-slate-700 card-hover cursor-pointer">
          <div className="aspect-video bg-slate-700 rounded-t-lg"></div>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <Badge variant="secondary" className="bg-emerald-600 text-white">
                {article.category}
              </Badge>
              <div className="flex items-center text-sm text-slate-400">
                <Clock className="w-3 h-3 mr-1" />
                {article.time}
              </div>
            </div>

            <h3 className="font-semibold mb-2 line-clamp-2 leading-tight">{article.title}</h3>

            <p className="text-slate-400 text-sm mb-4 line-clamp-3">{article.excerpt}</p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">{article.source}</span>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
