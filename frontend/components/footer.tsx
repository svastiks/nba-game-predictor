import { Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 mt-16">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-400">© 2024 SportPredictor. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Twitter className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
            <Instagram className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}
