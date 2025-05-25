import { Header } from "@/components/layout/header"
import { NewsGrid } from "@/components/news/news-grid"
import { NewsFilters } from "@/components/news/news-filters"
import { Footer } from "@/components/layout/footer"

export default function NewsPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Sports News</h1>
          <p className="text-slate-400">Stay updated with the latest sports news and analysis.</p>
        </div>

        <NewsFilters />
        <NewsGrid />
      </main>
      <Footer />
    </div>
  )
}
