"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowUpDown, Leaf, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
    image: "/hemp-bag.jpg?height=80&width=80",
  },
  {
    id: 5,
    name: "Biodegradable Phone Case",
    category: "Electronics",
    website: "ecocase.com",
    score: 90,
    status: "Published",
    date: "2023-08-05",
    image: "/bio-phone-case.jpg?height=80&width=80",
  },
  {
    id: 6,
    name: "Solar-Powered Watch",
    category: "Accessories",
    website: "solartime.com",
    score: 95,
    status: "Draft",
    date: "2023-09-12",
    image: "/solar-watch.jpg?height=80&width=80",
  },
]

export default function ProductsPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState<{ field: string; direction: "asc" | "desc" }>({
    field: "score",
    direction: "desc",
  })

  // Filter products based on search term
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.website.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const fieldA = a[sortBy.field as keyof typeof a]
    const fieldB = b[sortBy.field as keyof typeof b]

    if (typeof fieldA === "string" && typeof fieldB === "string") {
      return sortBy.direction === "asc" ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA)
    }

    return sortBy.direction === "asc" ? Number(fieldA) - Number(fieldB) : Number(fieldB) - Number(fieldA)
  })

  const handleSort = (field: string) => {
    setSortBy({
      field,
      direction: sortBy.field === field && sortBy.direction === "asc" ? "desc" : "asc",
    })
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Products</h1>
            <p className="text-gray-500">Manage and monitor your sustainable product portfolio</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700" onClick={() => router.push("/upload")}>
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Button>
        </div>

        <Card className="rounded-xl">
          <CardHeader className="pb-3">
            <CardTitle>Product List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search products..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  All
                </Button>
                <Button variant="outline" size="sm">
                  Published
                </Button>
                <Button variant="outline" size="sm">
                  Draft
                </Button>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("category")}>
                      <div className="flex items-center">
                        Category
                        <ArrowUpDown className="ml-1 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Website</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("score")}>
                      <div className="flex items-center">
                        Green Score
                        <ArrowUpDown className="ml-1 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("status")}>
                      <div className="flex items-center">
                        Status
                        <ArrowUpDown className="ml-1 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort("date")}>
                      <div className="flex items-center">
                        Date
                        <ArrowUpDown className="ml-1 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="h-10 w-10 rounded-md object-cover"
                          />
                          <span className="font-medium">{product.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.website}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Leaf className="h-4 w-4 text-green-500" />
                          <span>{product.score}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                            product.status === "Published"
                              ? "bg-green-100 text-green-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {product.status}
                        </div>
                      </TableCell>
                      <TableCell>{product.date}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => router.push(`/products/${product.id}`)}>
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
