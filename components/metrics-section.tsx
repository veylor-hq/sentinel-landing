import { ArrowRight } from "lucide-react"
import PlatformRow from "./platform-row"

export default function MetricsSection() {
  return (
    <section id="metrics" className="px-6 py-24 max-w-7xl mx-auto border-b border-gray-800">
      <h2 className="text-5xl font-bold tracking-tight uppercase mb-16 text-left">OPERATIONAL METRICS</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-8">
          <div className="border border-gray-800 p-8 bg-gray-950/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold uppercase tracking-wide">MISSION SUCCESS RATE</h3>
              <span className="text-4xl font-bold text-white">99.7%</span>
            </div>
            <p className="text-gray-400">
              Operational success across all deployment scenarios with minimal deviation from projected outcomes.
            </p>
          </div>

          <div className="border border-gray-800 p-8 bg-gray-950/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold uppercase tracking-wide">RESPONSE TIME</h3>
              <span className="text-4xl font-bold text-white">2.3s</span>
            </div>
            <p className="text-gray-400">
              Average time from threat detection to operational response deployment across global networks.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src="/dark-military-command-center-with-multiple-screens.png"
            alt="Command Center Operations"
            className="w-full h-full object-cover border border-gray-800"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>
      <div className="space-y-0">
        <PlatformRow
          title="PERFORMANCE ANALYTICS"
          description="Real-time operational metrics and predictive performance modeling"
          actionText="View Dashboard"
        />

        <PlatformRow
          title="MISSION REPORTS"
          description="Comprehensive after-action reports and strategic intelligence briefings"
          actionText="Access Reports"
        />
      </div>
    </section>
  )
}
