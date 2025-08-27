import { ArrowRight } from "lucide-react"
import PlatformRow from "./platform-row"

export default function DeploymentSection() {
  return (
    <section id="deployment" className="px-6 py-24 max-w-7xl mx-auto border-b border-gray-800">
      <h2 className="text-5xl font-bold tracking-tight uppercase mb-16 text-left">DEPLOYMENT SCENARIOS</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="relative">
          <img
            src="/dark-tactical-operations-room-with-team-coordinati.png"
            alt="Tactical Operations Room"
            className="w-full h-96 object-cover border border-gray-800"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="text-2xl font-bold uppercase tracking-wide mb-2">GLOBAL OPERATIONS CENTER</h3>
            <p className="text-gray-300">
              Coordinated deployment across multiple theaters with real-time intelligence integration.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="">
            <h3 className="text-xl font-bold uppercase tracking-wide mb-4">MISSION PARAMETERS</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Active Deployments</span>
                <span className="text-white font-bold">247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Global Coverage</span>
                <span className="text-white font-bold">156 Countries</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Response Teams</span>
                <span className="text-white font-bold">24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-0">
        <PlatformRow
          title="STRATEGIC COORDINATION"
          description="Multi-theater operations with integrated command and control systems"
          actionText="Access Command"
        />
        <PlatformRow
          title="TACTICAL DEPLOYMENT"
          description="Rapid response operations with precision timing and resource allocation"
          actionText="View Operations"
        />
      </div>
    </section>
  )
}
