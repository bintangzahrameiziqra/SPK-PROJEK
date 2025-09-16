"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Star, Heart, ShoppingCart, Cpu, HardDrive, Monitor, Zap, BarChart3, Eye } from "lucide-react"
import { LaptopDetail } from "@/components/laptop-detail"

interface FormData {
  jurusan: string
  budget: number[]
  storage: string
  ram: string
  gpu: string
  cpu: string
  screenSize: string
  usage: string[]
}

interface Laptop {
  id: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  specs: {
    cpu: string
    ram: string
    storage: string
    gpu: string
    screen: string
    weight: string
  }
  suitabilityScore: number
  pros: string[]
  cons: string[]
  bestFor: string[]
  availability: "in-stock" | "limited" | "out-of-stock"
}

// Mock data - in real app this would come from API
const mockLaptops: Laptop[] = [
  {
    id: "1",
    name: "ThinkPad E14 Gen 4",
    brand: "Lenovo",
    price: 12500000,
    originalPrice: 14000000,
    image: "/lenovo-thinkpad-laptop.jpg",
    rating: 4.5,
    reviews: 128,
    specs: {
      cpu: "Intel Core i5-1235U",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      gpu: "Intel Iris Xe",
      screen: '14" FHD IPS',
      weight: "1.64 kg",
    },
    suitabilityScore: 95,
    pros: ["Keyboard berkualitas tinggi", "Build quality solid", "Port lengkap"],
    cons: ["Layar kurang cerah", "Speaker biasa saja"],
    bestFor: ["Programming", "Office Work", "Research"],
    availability: "in-stock",
  },
  {
    id: "2",
    name: "Inspiron 15 3000",
    brand: "Dell",
    price: 8900000,
    image: "/dell-inspiron-laptop.png",
    rating: 4.2,
    reviews: 89,
    specs: {
      cpu: "Intel Core i3-1115G4",
      ram: "8GB DDR4",
      storage: "256GB SSD",
      gpu: "Intel UHD Graphics",
      screen: '15.6" HD',
      weight: "1.85 kg",
    },
    suitabilityScore: 78,
    pros: ["Harga terjangkau", "Performa cukup untuk tugas dasar"],
    cons: ["Layar resolusi rendah", "Build quality plastik"],
    bestFor: ["Office Work", "Basic Programming"],
    availability: "in-stock",
  },
  {
    id: "3",
    name: "VivoBook 14 X413",
    brand: "ASUS",
    price: 7500000,
    originalPrice: 8200000,
    image: "/asus-vivobook-laptop.jpg",
    rating: 4.3,
    reviews: 156,
    specs: {
      cpu: "Intel Core i3-1005G1",
      ram: "4GB DDR4",
      storage: "256GB SSD",
      gpu: "Intel UHD Graphics",
      screen: '14" FHD',
      weight: "1.6 kg",
    },
    suitabilityScore: 72,
    pros: ["Ringan dan portable", "Desain menarik", "Layar FHD"],
    cons: ["RAM terbatas", "Performa terbatas untuk multitasking"],
    bestFor: ["Office Work", "Light Programming"],
    availability: "limited",
  },
  {
    id: "4",
    name: "Pavilion Gaming 15",
    brand: "HP",
    price: 15900000,
    image: "/hp-pavilion-gaming-laptop.jpg",
    rating: 4.4,
    reviews: 203,
    specs: {
      cpu: "Intel Core i5-11300H",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      gpu: "NVIDIA GTX 1650",
      screen: '15.6" FHD 144Hz',
      weight: "2.23 kg",
    },
    suitabilityScore: 88,
    pros: ["GPU dedicated", "Layar 144Hz", "Cooling baik"],
    cons: ["Berat", "Battery life pendek saat gaming"],
    bestFor: ["Gaming", "Design Work", "Video Editing"],
    availability: "in-stock",
  },
]

interface LaptopResultsProps {
  formData: FormData
  onBack: () => void
}

export function LaptopResults({ formData, onBack }: LaptopResultsProps) {
  const [sortBy, setSortBy] = useState("suitability")
  const [selectedLaptop, setSelectedLaptop] = useState<Laptop | null>(null)
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (laptopId: string) => {
    setFavorites((prev) => (prev.includes(laptopId) ? prev.filter((id) => id !== laptopId) : [...prev, laptopId]))
  }

  const sortedLaptops = [...mockLaptops].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "suitability":
      default:
        return b.suitabilityScore - a.suitabilityScore
    }
  })

  if (selectedLaptop) {
    return <LaptopDetail laptop={selectedLaptop} onBack={() => setSelectedLaptop(null)} formData={formData} />
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Button variant="ghost" onClick={onBack} className="gap-2 mb-4">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Form
        </Button>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Rekomendasi Laptop untuk {formData.jurusan}</h1>
            <p className="text-muted-foreground">
              Ditemukan {mockLaptops.length} laptop sesuai kriteria Anda (Budget: Rp{" "}
              {formData.budget[0].toLocaleString("id-ID")})
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Urutkan:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="suitability">Kesesuaian Tertinggi</SelectItem>
                <SelectItem value="price-low">Harga Terendah</SelectItem>
                <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                <SelectItem value="rating">Rating Tertinggi</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {sortedLaptops.map((laptop) => (
          <Card key={laptop.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="relative">
                <img
                  src={laptop.image || "/placeholder.svg"}
                  alt={laptop.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 bg-background/80 hover:bg-background"
                  onClick={() => toggleFavorite(laptop.id)}
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(laptop.id) ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
                <div className="absolute top-2 left-2">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    {laptop.suitabilityScore}% Cocok
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{laptop.brand}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{laptop.rating}</span>
                    <span className="text-sm text-muted-foreground">({laptop.reviews})</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{laptop.name}</CardTitle>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">Rp {laptop.price.toLocaleString("id-ID")}</span>
                  {laptop.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      Rp {laptop.originalPrice.toLocaleString("id-ID")}
                    </span>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-1">
                  <Cpu className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">{laptop.specs.cpu}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">{laptop.specs.ram}</span>
                </div>
                <div className="flex items-center gap-1">
                  <HardDrive className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">{laptop.specs.storage}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Monitor className="h-3 w-3 text-muted-foreground" />
                  <span className="text-muted-foreground">{laptop.specs.screen}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-sm font-medium text-foreground">Cocok untuk:</div>
                <div className="flex flex-wrap gap-1">
                  {laptop.bestFor.map((use, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {use}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <Badge
                  variant={
                    laptop.availability === "in-stock"
                      ? "default"
                      : laptop.availability === "limited"
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {laptop.availability === "in-stock"
                    ? "Tersedia"
                    : laptop.availability === "limited"
                      ? "Terbatas"
                      : "Habis"}
                </Badge>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setSelectedLaptop(laptop)}>
                    <Eye className="h-4 w-4 mr-1" />
                    Detail
                  </Button>
                  <Button size="sm" disabled={laptop.availability === "out-of-stock"}>
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Beli
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Comparison CTA */}
      <div className="mt-12 text-center">
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="py-8">
            <h3 className="text-xl font-bold mb-2">Masih bingung memilih?</h3>
            <p className="text-muted-foreground mb-4">
              Bandingkan laptop pilihan Anda secara detail untuk membantu keputusan
            </p>
            <Button className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Bandingkan Laptop
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
