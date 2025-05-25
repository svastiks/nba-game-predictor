import Link from "next/link"
import { Twitter, Instagram, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚽</span>
              </div>
              <span className="text-xl font-bold text-gradient">SportPredictor</span>
            </Link>
            <p className="text-slate-400 text-sm">
              AI-powered sports predictions for all major leagues. Make smarter bets with our advanced algorithms.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Sports</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/dashboard?sport=soccer" className="hover:text-emerald-400">
                  Soccer
                </Link>
              </li>
              <li>
                <Link href="/dashboard?sport=basketball" className="hover:text-emerald-400">
                  Basketball
                </Link>
              </li>
              <li>
                <Link href="/dashboard?sport=football" className="hover:text-emerald-400">
                  Football
                </Link>
              </li>
              <li>
                <Link href="/dashboard?sport=tennis" className="hover:text-emerald-400">
                  Tennis
                </Link>
              </li>
              <li>
                <Link href="/dashboard?sport=baseball" className="hover:text-emerald-400">
                  Baseball
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-emerald-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-slate-400 hover:text-emerald-400 cursor-pointer" />
              <Instagram className="w-5 h-5 text-slate-400 hover:text-emerald-400 cursor-pointer" />
              <Facebook className="w-5 h-5 text-slate-400 hover:text-emerald-400 cursor-pointer" />
              <Youtube className="w-5 h-5 text-slate-400 hover:text-emerald-400 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2024 SportPredictor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
