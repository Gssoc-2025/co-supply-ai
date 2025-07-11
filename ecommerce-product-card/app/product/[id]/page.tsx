import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ShoppingCart, Heart, Share2, Check, X } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/lib/products"
import ProductCard from "@/components/product-card"
import GreenScoreBadge from "@/components/green-score-badge"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(params.id, 4)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          ← Back to products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative h-96 w-full rounded-lg overflow-hidden border">
            <Image
              src={product.images?.[0] || product.image}
              alt={product.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {product.images?.slice(1).map((image, index) => (
              <div
                key={index}
                className="relative h-32 rounded-md overflow-hidden border cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.title} view ${index + 2}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-xl text-gray-700 mb-4">${product.price.toFixed(2)}</p>

            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="flex items-center mb-6">
              <span className="mr-2 font-medium">Brand:</span>
              <span>{product.brand}</span>
              {product.greenScore && (
                <div className="ml-4">
                  <GreenScoreBadge score={product.greenScore} />
                </div>
              )}
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Key Features:</h3>
              <ul className="list-none space-y-2">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center mb-6">
              <div className="mr-4 flex items-center">
                <span className="font-medium mr-2">Availability:</span>
                {product.inStock ? (
                  <span className="text-green-600 flex items-center">
                    <Check className="h-4 w-4 mr-1" /> In Stock
                  </span>
                ) : (
                  <span className="text-red-600 flex items-center">
                    <X className="h-4 w-4 mr-1" /> Out of Stock
                  </span>
                )}
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 ${
                  product.inStock ? "bg-black hover:bg-gray-800" : "bg-gray-300 cursor-not-allowed"
                } text-white rounded-md font-medium transition-colors`}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
              <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-bold text-lg mb-4">Specifications</h3>
            <div className="grid grid-cols-1 gap-2">
              {Object.entries(product.specifications || {}).map(([key, value]) => (
                <div key={key} className="grid grid-cols-2 py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{key}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}
