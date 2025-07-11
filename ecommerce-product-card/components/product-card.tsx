"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import GreenScoreModal from "./green-score-modal"
import type { Product } from "@/lib/products"

interface ProductCardProps extends Product {}

export default function ProductCard({
  id,
  title,
  brand,
  price,
  image,
  greenScore,
  rating,
  reviews,
  inStock,
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const stars = Array(5)
    .fill(0)
    .map((_, i) => {
      return i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
    })

  return (
    <div
      className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col">
        <div className="relative w-full">
          <Link href={`/product/${id}`}>
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              {!inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white font-medium px-3 py-1 bg-red-500 rounded-md">Out of Stock</span>
                </div>
              )}
            </div>
          </Link>
          {greenScore && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-400 to-green-600 text-white shadow-md hover:shadow-lg transition-shadow"
              aria-label={`View GreenScore details: ${greenScore} out of 100`}
            >
              🌿 {greenScore}/100
            </button>
          )}
        </div>
        <div className="p-4">
          <Link href={`/product/${id}`} className="hover:underline">
            <h2 className="text-lg font-semibold line-clamp-2">{title}</h2>
          </Link>
          <p className="text-sm text-gray-600 mb-2">{brand}</p>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xl font-bold">${price.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <div className="flex">
                {stars.map((starClass, index) => (
                  <svg key={index} className={`w-4 h-4 ${starClass}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">({reviews})</span>
            </div>
            <button
              className={`p-2 rounded-full ${inStock ? "bg-black hover:bg-gray-800" : "bg-gray-300 cursor-not-allowed"} text-white transition-colors`}
              disabled={!inStock}
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {greenScore && (
        <GreenScoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} greenScore={greenScore} />
      )}
    </div>
  )
}
