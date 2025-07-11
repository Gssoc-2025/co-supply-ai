import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function Home() {
  return (
    <main className="container mx-auto p-4 md:p-8">
      <section className="mb-12">
        <div className="bg-gradient-to-r from-purple-700 to-indigo-900 text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Summer Collection 2025</h1>
          <p className="text-lg mb-6 max-w-2xl">
            Discover our latest products with sustainable options. Look for the 🌿 GreenScore badge for eco-friendly
            choices.
          </p>
          <button className="bg-white text-indigo-900 px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors">
            Shop Now
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </main>
  )
}
