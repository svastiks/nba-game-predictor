import { Badge } from "@/components/ui/badge"

interface SportHeaderProps {
  sport: string
  icon: string
  description: string
  predictionAvailable: boolean
  comingSoon?: boolean
}

export function SportHeader({ sport, icon, description, predictionAvailable, comingSoon }: SportHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-4 mb-4">
        <div className="text-4xl">{icon}</div>
        <div>
          <h1 className="text-3xl font-bold">{sport}</h1>
          <p className="text-slate-400">{description}</p>
        </div>
        <div className="ml-auto">
          {predictionAvailable && <Badge className="bg-emerald-600">Predictions Available</Badge>}
          {comingSoon && <Badge className="bg-yellow-600">Predictions Coming Soon</Badge>}
          {!predictionAvailable && !comingSoon && (
            <Badge variant="outline" className="border-slate-600 text-slate-400">
              Scores & News Only
            </Badge>
          )}
        </div>
      </div>
    </div>
  )
}
