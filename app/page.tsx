"use client"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import MissionBriefSection from "@/components/mission-brief-section"
import DoctrineSection from "@/components/doctrine-section"
import IntelligenceSection from "@/components/intelligence-section"
import SecuritySection from "@/components/security-section"
import DeploymentSection from "@/components/deployment-section"
import MetricsSection from "@/components/metrics-section"
import CTASection from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="bg-black text-white font-sans min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MissionBriefSection />
      <DoctrineSection />
      <IntelligenceSection />
      <SecuritySection />
      <DeploymentSection />
      <MetricsSection />
      <CTASection />

      {/* Footer */}
      <footer className="px-6 py-12 text-center text-gray-600 text-sm border-t border-gray-800 uppercase tracking-wide">
        © {new Date().getFullYear()} SENTINEL PROJECT — CLASSIFIED
      </footer>
    </div>
  )
}
