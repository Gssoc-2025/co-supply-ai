export interface Product {
  id: string
  title: string
  brand: string
  price: number
  image: string
  images?: string[]
  greenScore?: number
  rating: number
  reviews: number
  description: string
  features?: string[]
  specifications?: Record<string, string>
  inStock: boolean
}

export const products: Product[] = [
  {
    id: "1",
    title: "Casual Cotton T-Shirt",
    brand: "EcoWear",
    price: 6.99,
    image: "/cotton-t-shirt-1.jpg?height=300&width=300&text=T-Shirt",
    images: [
      "/cotton-t-shirt-1.jpg?height=600&width=600&text=T-Shirt+Front",
      "/cotton-t-shirt-back.jpg?height=600&width=600&text=T-Shirt+Back",
      "/cotton-t-shirt-detail.jpg?height=600&width=600&text=T-Shirt+Detail",
    ],
    greenScore: 76,
    rating: 4.2,
    reviews: 42,
    description:
      "This eco-friendly cotton t-shirt is made from 90% organic cotton, providing comfort while being environmentally conscious.",
    features: ["90% organic cotton", "Breathable fabric", "Machine washable", "Available in multiple colors"],
    specifications: {
      Material: "90% Organic Cotton",
      Weight: "160 gsm",
      Care: "Machine wash cold, tumble dry low",
      Origin: "Ethically made in India",
    },
    inStock: true,
  },
  {
    id: "2",
    title: "Premium Leather Wallet",
    brand: "LuxeGoods",
    price: 4.99,
    image: "/leather-wallet.jpg?height=300&width=300&text=Wallet",
    images: [
      "/placeholder.svg?height=600&width=600&text=Wallet+Front",
      "/placeholder.svg?height=600&width=600&text=Wallet+Inside",
      "/placeholder.svg?height=600&width=600&text=Wallet+Detail",
    ],
    rating: 4.8,
    reviews: 156,
    description: "A premium leather wallet with multiple card slots and a sleek design. Perfect for everyday use.",
    features: ["Genuine leather", "6 card slots", "2 bill compartments", "RFID blocking technology"],
    specifications: {
      Material: "Full-grain leather",
      Dimensions: '4.5" x 3.5"',
      Color: "Brown",
      Warranty: "1 year",
    },
    inStock: true,
  },
  {
    id: "3",
    title: "Organic Bamboo Bed Sheets",
    brand: "EcoHome",
    price: 7.99,
    image: "/bed-sheets.jpg?height=300&width=300&text=Bed+Sheets",
    images: [
      "/placeholder.svg?height=600&width=600&text=Sheets+Folded",
      "/placeholder.svg?height=600&width=600&text=Sheets+On+Bed",
      "/placeholder.svg?height=600&width=600&text=Sheets+Detail",
    ],
    greenScore: 92,
    rating: 4.9,
    reviews: 213,
    description: "Ultra-soft bamboo bed sheets that are cooling, moisture-wicking, and environmentally friendly.",
    features: ["100% organic bamboo lyocell", "300 thread count", "Hypoallergenic", "Temperature regulating"],
    specifications: {
      Material: "100% Bamboo Lyocell",
      "Thread Count": "300",
      "Set Includes": "1 Fitted Sheet, 1 Flat Sheet, 2 Pillowcases",
      Care: "Machine wash cold, gentle cycle",
    },
    inStock: true,
  },
  {
    id: "4",
    title: "Wireless Bluetooth Headphones",
    brand: "SoundMax",
    price: 9.99,
    image: "/bluetooth.jpg?height=300&width=300&text=Headphones",
    images: [
      "/placeholder.svg?height=600&width=600&text=Headphones+Front",
      "/placeholder.svg?height=600&width=600&text=Headphones+Side",
      "/placeholder.svg?height=600&width=600&text=Headphones+Detail",
    ],
    rating: 4.5,
    reviews: 378,
    description: "Premium wireless headphones with noise cancellation and long battery life.",
    features: ["Active noise cancellation", "40-hour battery life", "Bluetooth 5.0", "Built-in microphone"],
    specifications: {
      "Battery Life": "40 hours",
      Connectivity: "Bluetooth 5.0",
      Weight: "250g",
      Warranty: "2 years",
    },
    inStock: true,
  },
  {
    id: "5",
    title: "Recycled Plastic Water Bottle",
    brand: "EcoHydrate",
    price: 2.99,
    image: "/water-bottle.jpg?height=300&width=300&text=Water+Bottle",
    images: [
      "/placeholder.svg?height=600&width=600&text=Bottle+Front",
      "/placeholder.svg?height=600&width=600&text=Bottle+Cap",
      "/placeholder.svg?height=600&width=600&text=Bottle+Detail",
    ],
    greenScore: 88,
    rating: 4.6,
    reviews: 92,
    description: "Durable water bottle made from 100% recycled plastic, helping reduce plastic waste.",
    features: ["Made from 100% recycled plastic", "BPA-free", "Leak-proof design", "24oz capacity"],
    specifications: {
      Material: "Recycled HDPE Plastic",
      Capacity: "24 oz / 700ml",
      Dimensions: '9.5" x 2.8"',
      "Dishwasher Safe": "Yes, top rack",
    },
    inStock: true,
  },
  {
    id: "6",
    title: "Smart Fitness Watch",
    brand: "TechFit",
    price: 6.99,
    image: "/fitness-watch.jpg?height=300&width=300&text=Fitness+Watch",
    images: [
      "/placeholder.svg?height=600&width=600&text=Watch+Front",
      "/placeholder.svg?height=600&width=600&text=Watch+Side",
      "/placeholder.svg?height=600&width=600&text=Watch+Strap",
    ],
    rating: 4.7,
    reviews: 245,
    description: "Advanced fitness tracker with heart rate monitoring, GPS, and smartphone notifications.",
    features: ["Heart rate monitoring", "Built-in GPS", "Water resistant to 50m", "7-day battery life"],
    specifications: {
      Display: '1.4" AMOLED',
      "Battery Life": "7 days",
      "Water Resistance": "50m",
      Connectivity: "Bluetooth 5.0, WiFi",
    },
    inStock: false,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getRelatedProducts(id: string, limit = 4): Product[] {
  return products
    .filter((product) => product.id !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit)
}
