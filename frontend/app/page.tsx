import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/landing/hero-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { SportsPreviewSection } from "@/components/landing/sports-preview-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/layout/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <SportsPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
