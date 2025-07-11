"use client"

import { useRouter } from "next/navigation"
import { ArrowRight, ArrowUpRight, Leaf, Plus, TrendingUp, FileText } from "lucide-react"

import { AuthCheck } from "@/components/auth-check"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import DashboardLayout from "@/components/dashboard-layout"

// Mock data for products
const products = [
  {
    id: 1,
    name: "Organic Cotton T-shirt",
    category: "Apparel",
    website: "eco-threads.com",
    score: 92,
    status: "Published",
    date: "2023-05-15",
    image: "/cotton-t-shirt.png?height=80&width=80",
  },
  {
    id: 2,
    name: "Bamboo Water Bottle",
    category: "Accessories",
    website: "sustainablesips.com",
    score: 88,
    status: "Published",
    date: "2023-06-02",
    image: "/bamboo.jpg?height=80&width=80",
  },
  {
    id: 3,
    name: "Recycled Denim Jeans",
    category: "Apparel",
    website: "greenjeans.org",
    score: 78,
    status: "Published",
    date: "2023-06-20",
    image: "/denim.jpg?height=80&width=80",
  },
  {
    id: 4,
    name: "Hemp Backpack",
    category: "Accessories",
    website: "earthpacks.com",
    score: 85,
    status: "Draft",
    date: "2023-07-10",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function DashboardPage() {
  const router = useRouter()

  // Calculate average score
  const averageScore = Math.round(products.reduce((acc, product) => acc + product.score, 0) / products.length)

  // Count published products
  const publishedProducts = products.filter((product) => product.status === "Published").length

  return (
    <AuthCheck>
      <DashboardLayout>
        <div className="space-y-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-gray-500">Monitor and manage your sustainable products</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700" onClick={() => router.push("/upload")}>
              <Plus className="mr-2 h-4 w-4" />
              Add New Product
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="rounded-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                <FileText className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{products.length}</div>
                <p className="text-xs text-gray-500">+2 from last month</p>
              </CardContent>
            </Card>

            <Card className="rounded-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Published Products</CardTitle>
                <TrendingUp className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{publishedProducts}</div>
                <p className="text-xs text-gray-500">
                  {Math.round((publishedProducts / products.length) * 100)}% of total
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Average Green Score</CardTitle>
                <Leaf className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{averageScore}</div>
                <Progress value={averageScore} className="h-2" />
              </CardContent>
            </Card>

            <Card className="rounded-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Carbon Offset</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-gray-500"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.4 tons</div>
                <p className="text-xs text-gray-500">+0.8 tons from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Products */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Products</h2>
              <Button variant="ghost" size="sm" className="text-green-600" onClick={() => router.push("/products")}>
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {products.slice(0, 3).map((product) => (
                <Card key={product.id} className="overflow-hidden rounded-xl">
                  <div className="flex items-center gap-4 p-6">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.category}</p>
                    </div>
                  </div>
                  <CardContent className="border-t p-0">
                    <div className="grid grid-cols-2 divide-x">
                      <div className="p-4 text-center">
                        <p className="text-sm text-gray-500">Green Score</p>
                        <div className="mt-1 flex items-center justify-center gap-1">
                          <Leaf className="h-4 w-4 text-green-500" />
                          <span className="font-semibold">{product.score}</span>
                        </div>
                      </div>
                      <div className="p-4 text-center">
                        <p className="text-sm text-gray-500">Status</p>
                        <div
                          className={`mt-1 rounded-full px-2 py-1 text-xs font-medium ${
                            product.status === "Published"
                              ? "bg-green-100 text-green-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {product.status}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t p-4">
                    <Button
                      variant="ghost"
                      className="w-full justify-center gap-1 text-green-600"
                      onClick={() => router.push(`/products/${product.id}`)}
                    >
                      View Details
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </AuthCheck>
  )
}
