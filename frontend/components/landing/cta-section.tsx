import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-500/10 to-blue-500/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Ready to Start <span className="text-gradient">Predicting</span>?
        </h2>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Join SportPredictor today and start making NBA predictions with our AI-powered model.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium"
        >
          <Link href="/signup">
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
