import Link from "next/link"

export default function ProductNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">Sorry, we couldn't find the product you're looking for.</p>
      <Link
        href="/"
        className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  )
}
