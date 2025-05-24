import { Button } from "@/components/ui/button"
import { ChevronDown, User, Zap } from "lucide-react"

export function Header() {
  return (
    <header className="bg-slate-800 border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">⚽</span>
            </div>
            <span className="text-xl font-bold">SportPredictor</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-yellow-400">
              <span>🎯</span>
              <span>Sports</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-yellow-400">
              <Zap className="w-4 h-4" />
              <span>Predictions</span>
            </div>
          </nav>

          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium">
            <User className="w-4 h-4 mr-2" />
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}
