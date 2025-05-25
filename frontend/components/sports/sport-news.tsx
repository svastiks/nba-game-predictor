"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

interface SportNewsProps {
  sport: string
}

const newsData: Record<string, any[]> = {
  NBA: [
    {
      title: "Lakers defeat Warriors in overtime thriller",
      time: "2h ago",
      summary: "LeBron James scored 35 points as the Lakers secured a crucial victory in overtime.",
      category: "Game Recap",
    },
    {
      title: "Celtics sign veteran point guard to multi-year deal",
      time: "4h ago",
      summary: "The team adds depth to their backcourt with this strategic signing.",
      category: "Trades & Signings",
    },
    {
      title: "NBA trade deadline approaching with several stars available",
      time: "6h ago",
      summary: "Multiple All-Star players could be on the move before the deadline.",
      category: "Trade Rumors",
    },
    {
      title: "Rookie of the Year race heating up in final stretch",
      time: "8h ago",
      summary: "Three candidates emerge as frontrunners for the prestigious award.",
      category: "Awards",
    },
  ],
  Soccer: [
    {
      title: "Manchester City clinches Premier League title",
      time: "1h ago",
      summary: "City secured their fourth consecutive title with a dominant performance.",
      category: "Premier League",
    },
    {
      title: "Transfer window opens with record-breaking signings",
      time: "3h ago",
      summary: "Several clubs make major moves in the summer transfer market.",
      category: "Transfers",
    },
    {
      title: "Champions League final set for next month",
      time: "5h ago",
      summary: "Two European giants will face off in the season's biggest match.",
      category: "Champions League",
    },
    {
      title: "World Cup qualifiers continue across all confederations",
      time: "7h ago",
      summary: "National teams battle for spots in the upcoming tournament.",
      category: "International",
    },
  ],
  Tennis: [
    {
      title: "Wimbledon semifinals set with surprising upsets",
      time: "3h ago",
      summary: "Two unseeded players advance to the final four at the All England Club.",
      category: "Wimbledon",
    },
    {
      title: "New world rankings released after major tournament",
      time: "1d ago",
      summary: "Significant changes in both men's and women's rankings this week.",
      category: "Rankings",
    },
    {
      title: "French Open preparations begin for clay court season",
      time: "2d ago",
      summary: "Players adjust their training for the upcoming clay court swing.",
      category: "French Open",
    },
  ],
  Golf: [
    {
      title: "Masters Tournament concludes with dramatic finish",
      time: "1h ago",
      summary: "A playoff determines the winner of golf's most prestigious tournament.",
      category: "Masters",
    },
    {
      title: "PGA Tour schedule announced for upcoming season",
      time: "6h ago",
      summary: "New venues and increased prize money highlight the 2024 schedule.",
      category: "PGA Tour",
    },
    {
      title: "New golf course opens to host major championship",
      time: "1d ago",
      summary: "The state-of-the-art facility will debut on the professional circuit.",
      category: "Courses",
    },
  ],
}

export function SportNews({ sport }: SportNewsProps) {
  const news = newsData[sport] || []

  return (
    <Card className="bg-slate-800/50 border-slate-700 h-fit">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <span className="text-xl">📰</span>
          <span>Latest {sport} News</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {news.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="space-y-3 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/30 hover:border-emerald-500/30">
              <div className="flex items-start justify-between">
                <Badge variant="secondary" className="bg-emerald-600/20 text-emerald-400 text-xs">
                  {item.category}
                </Badge>
                <div className="flex items-center space-x-1 text-slate-500">
                  <Clock className="w-3 h-3" />
                  <span className="text-xs">{item.time}</span>
                </div>
              </div>

              <h4 className="font-semibold text-slate-200 leading-tight group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h4>

              <p className="text-sm text-slate-400 leading-relaxed">{item.summary}</p>

              <div className="flex items-center justify-end">
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </div>
            </div>

            {index < news.length - 1 && <div className="border-b border-slate-700/50 mt-6" />}
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}
