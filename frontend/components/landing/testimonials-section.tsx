import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Sports Analyst",
    content:
      "SportPredictor has revolutionized how I approach sports betting. The AI predictions are incredibly accurate.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Fantasy Sports Player",
    content: "The detailed analytics help me make better decisions for my fantasy teams. Highly recommended!",
    rating: 5,
  },
  {
    name: "Mike Rodriguez",
    role: "Casual Bettor",
    content: "Easy to use interface and reliable predictions. I've improved my success rate significantly.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What Our Users <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xl text-slate-400">Join thousands of satisfied users who trust SportPredictor</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
