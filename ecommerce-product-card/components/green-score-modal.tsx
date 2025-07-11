"use client"

import { useEffect, useState } from "react"
import { Cloud, Droplet, ShieldCheck, X, ArrowRight } from "lucide-react"

interface GreenScoreModalProps {
  isOpen: boolean
  onClose: () => void
  greenScore: number
}

export default function GreenScoreModal({ isOpen, onClose, greenScore }: GreenScoreModalProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
    } else {
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen && !isAnimating) return null

  return (
    <div
      className={`fixed inset-0 bg-black transition-opacity duration-300 z-50 flex items-center justify-center p-4 ${
        isOpen ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none"
      }`}
    >
      <div className="fixed inset-0 bg-transparent" onClick={onClose} aria-hidden="true" />
      <div
        className={`bg-white rounded-lg shadow-xl w-full max-w-md relative z-10 transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="flex justify-between items-center border-b p-4">
          <h3 className="text-lg font-semibold">GreenScore Details • {greenScore}/100</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Cloud className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">CO₂ Footprint</p>
                <p className="text-sm text-gray-600">2.3 kg</p>
              </div>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(2.3 / 5) * 100}%` }}></div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Droplet className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Water Usage</p>
                <p className="text-sm text-gray-600">15 L</p>
              </div>
              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(15 / 30) * 100}%` }}></div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <ShieldCheck className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Fair-Trade Status</p>
                <p className="text-sm text-gray-600">Verified</p>
              </div>
              <div className="w-24 flex justify-end">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Verified</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium mb-2">Suggestions</h4>
            <div className="bg-gray-50 p-3 rounded-md hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <p className="text-sm">Try FashionEchoes (🌿 84/100) for lower impact.</p>
                <ArrowRight className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button className="text-green-600 font-medium hover:underline transition-colors">
              Learn More About GreenScore
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
