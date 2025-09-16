"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Clock, Users } from "lucide-react"

const trendingLaptops = [
  {
    id: "1",
    name: "MacBook Air M2",
    brand: "Apple",
    price: 18900000,
    image: "/placeholder.svg?height=200&width=300&text=MacBook+Air+M2",
    rating: 4.8,
    reviews: 342,
    category: "Premium Ultrabook",
    trending: true,
    popular: true,
  },
  {
    id: "2",
    name: "ThinkPad X1 Carbon",
    brand: "Lenovo",
    price: 22500000,
    image: "/placeholder.svg?height=200&width=300&text=ThinkPad+X1",
    rating: 4.6,
    reviews: 189,
    category: "Business Laptop",
    trending: true,
  },
  {
    id: "3",
    name: "ROG Zephyrus G14",
    brand: "ASUS",
    price: 19900000,
    image: "/placeholder.svg?height=200&width=300&text=ROG+Zephyrus",
    rating: 4.7,
    reviews: 267,
    category: "Gaming Laptop",
    popular: true,
  },
  {
    id: "4",
    name: "Surface Laptop 5",
    brand: "Microsoft",
    price: 16500000,
    image: "/placeholder.svg?height=200&width=300&text=Surface+Laptop",
    rating: 4.5,
    reviews: 156,
    category: "Creative Laptop",
  },
]

const categories = [
  {
    name: "Gaming",
    count: 45,
    description: "Laptop dengan GPU dedicated untuk gaming dan rendering",
    color: "bg-red-100 text-red-800",
  },
  {
    name: "Ultrabook",
    count: 38,
    description: "Laptop tipis dan ringan untuk mobilitas tinggi",
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "Business",
    count: 32,
    description: "Laptop untuk kebutuhan profesional dan bisnis",
    color: "bg-green-100 text-green-800",
  },
  {
    name: "Budget",
    count: 28,
    description: "Laptop dengan harga terjangkau namun berkualitas",
    color: "bg-yellow-100 text-yellow-800",
  },
]

export default function RecommendationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Rekomendasi Laptop Terkini</h1>
          <p className="text-muted-foreground">
            Laptop terpopuler dan trending berdasarkan review pengguna dan performa terbaru
          </p>
        </div>

        {/* Trending Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Trending Sekarang</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingLaptops.map((laptop) => (
              <Card key={laptop.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="relative">
                    <img
                      src={laptop.image || "/placeholder.svg"}
                      alt={laptop.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <div className="absolute top-2 left-2 flex gap-1">
                      {laptop.trending && (
                        <Badge className="bg-red-500 text-white text-xs">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                      {laptop.popular && (
                        <Badge className="bg-orange-500 text-white text-xs">
                          <Users className="h-3 w-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Badge variant="outline">{laptop.brand}</Badge>
                    <CardTitle className="text-lg">{laptop.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {laptop.category}
                    </Badge>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">Rp {(laptop.price / 1000000).toFixed(1)}jt</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{laptop.rating}</span>
                        <span className="text-sm text-muted-foreground">({laptop.reviews})</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <Button className="w-full">Lihat Detail</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Kategori Populer</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <Badge className={category.color}>{category.count} laptop</Badge>
                  </div>
                  <CardDescription className="text-sm">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full bg-transparent">
                    Jelajahi Kategori
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Latest Updates */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Update Terbaru</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Laptop Gaming Terbaru</CardTitle>
                <CardDescription>Review lengkap laptop gaming dengan GPU RTX 4060 terbaru</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Baca Selengkapnya
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tips Memilih Laptop</CardTitle>
                <CardDescription>Panduan lengkap memilih laptop sesuai kebutuhan dan budget</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Baca Selengkapnya
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Promo Bulan Ini</CardTitle>
                <CardDescription>Dapatkan diskon hingga 30% untuk laptop pilihan terbaik</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Lihat Promo
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
