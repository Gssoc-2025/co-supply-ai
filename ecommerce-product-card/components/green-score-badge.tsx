"use client"

import { useState } from "react"
import GreenScoreModal from "./green-score-modal"

interface GreenScoreBadgeProps {
  score: number
}

export default function GreenScoreBadge({ score }: GreenScoreBadgeProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-400 to-green-600 text-white shadow-sm hover:shadow-md transition-shadow"
        aria-label={`View GreenScore details: ${score} out of 100`}
      >
        🌿 {score}/100
      </button>

      <GreenScoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} greenScore={score} />
    </>
  )
}
