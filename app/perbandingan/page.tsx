"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Plus, X, Cpu, HardDrive, Monitor, Zap, Weight, Star, CheckCircle, XCircle } from "lucide-react"

interface Laptop {
  id: string
  name: string
  brand: string
  price: number
  image: string
  rating: number
  specs: {
    cpu: string
    ram: string
    storage: string
    gpu: string
    screen: string
    weight: string
    battery: string
  }
  pros: string[]
  cons: string[]
}

const availableLaptops: Laptop[] = [
  {
    id: "1",
    name: "ThinkPad E14 Gen 4",
    brand: "Lenovo",
    price: 12500000,
    image: "/lenovo-thinkpad-laptop.jpg",
    rating: 4.5,
    specs: {
      cpu: "Intel Core i5-1235U",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      gpu: "Intel Iris Xe",
      screen: '14" FHD IPS',
      weight: "1.64 kg",
      battery: "57Wh",
    },
    pros: ["Keyboard berkualitas tinggi", "Build quality solid", "Port lengkap"],
    cons: ["Layar kurang cerah", "Speaker biasa saja"],
  },
  {
    id: "2",
    name: "Inspiron 15 3000",
    brand: "Dell",
    price: 8900000,
    image: "/dell-inspiron-laptop.png",
    rating: 4.2,
    specs: {
      cpu: "Intel Core i3-1115G4",
      ram: "8GB DDR4",
      storage: "256GB SSD",
      gpu: "Intel UHD Graphics",
      screen: '15.6" HD',
      weight: "1.85 kg",
      battery: "41Wh",
    },
    pros: ["Harga terjangkau", "Performa cukup untuk tugas dasar"],
    cons: ["Layar resolusi rendah", "Build quality plastik"],
  },
  {
    id: "3",
    name: "VivoBook 14 X413",
    brand: "ASUS",
    price: 7500000,
    image: "/asus-vivobook-laptop.jpg",
    rating: 4.3,
    specs: {
      cpu: "Intel Core i3-1005G1",
      ram: "4GB DDR4",
      storage: "256GB SSD",
      gpu: "Intel UHD Graphics",
      screen: '14" FHD',
      weight: "1.6 kg",
      battery: "37Wh",
    },
    pros: ["Ringan dan portable", "Desain menarik", "Layar FHD"],
    cons: ["RAM terbatas", "Performa terbatas untuk multitasking"],
  },
  {
    id: "4",
    name: "Pavilion Gaming 15",
    brand: "HP",
    price: 15900000,
    image: "/hp-pavilion-gaming-laptop.jpg",
    rating: 4.4,
    specs: {
      cpu: "Intel Core i5-11300H",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      gpu: "NVIDIA GTX 1650",
      screen: '15.6" FHD 144Hz',
      weight: "2.23 kg",
      battery: "52.5Wh",
    },
    pros: ["GPU dedicated", "Layar 144Hz", "Cooling baik"],
    cons: ["Berat", "Battery life pendek saat gaming"],
  },
]

export default function ComparisonPage() {
  const [selectedLaptops, setSelectedLaptops] = useState<Laptop[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterBrand, setFilterBrand] = useState("all")

  const filteredLaptops = availableLaptops.filter((laptop) => {
    const matchesSearch =
      laptop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      laptop.brand.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesBrand = filterBrand === "all" || laptop.brand === filterBrand
    const notSelected = !selectedLaptops.find((selected) => selected.id === laptop.id)

    return matchesSearch && matchesBrand && notSelected
  })

  const addLaptop = (laptop: Laptop) => {
    if (selectedLaptops.length < 3) {
      setSelectedLaptops([...selectedLaptops, laptop])
    }
  }

  const removeLaptop = (laptopId: string) => {
    setSelectedLaptops(selectedLaptops.filter((laptop) => laptop.id !== laptopId))
  }

  const brands = ["all", ...new Set(availableLaptops.map((laptop) => laptop.brand))]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Perbandingan Laptop</h1>
          <p className="text-muted-foreground">
            Bandingkan hingga 3 laptop secara side-by-side untuk membantu keputusan Anda
          </p>
        </div>

        {selectedLaptops.length === 0 ? (
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle>Mulai Perbandingan</CardTitle>
              <CardDescription>Pilih laptop yang ingin Anda bandingkan dari daftar di bawah</CardDescription>
            </CardHeader>
          </Card>
        ) : (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Perbandingan ({selectedLaptops.length}/3)</h2>
              <Button variant="outline" onClick={() => setSelectedLaptops([])} disabled={selectedLaptops.length === 0}>
                Reset Perbandingan
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {selectedLaptops.map((laptop) => (
                <Card key={laptop.id} className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 z-10"
                    onClick={() => removeLaptop(laptop.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>

                  <CardHeader className="pb-4">
                    <img
                      src={laptop.image || "/placeholder.svg"}
                      alt={laptop.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <div className="space-y-2">
                      <Badge variant="outline">{laptop.brand}</Badge>
                      <CardTitle className="text-lg">{laptop.name}</CardTitle>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">
                          Rp {laptop.price.toLocaleString("id-ID")}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{laptop.rating}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Cpu className="h-4 w-4 text-muted-foreground" />
                        <span>{laptop.specs.cpu}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="h-4 w-4 text-muted-foreground" />
                        <span>{laptop.specs.ram}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <HardDrive className="h-4 w-4 text-muted-foreground" />
                        <span>{laptop.specs.storage}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Monitor className="h-4 w-4 text-muted-foreground" />
                        <span>{laptop.specs.screen}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Weight className="h-4 w-4 text-muted-foreground" />
                        <span>{laptop.specs.weight}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Kelebihan:</h4>
                      <ul className="space-y-1">
                        {laptop.pros.slice(0, 2).map((pro, index) => (
                          <li key={index} className="flex items-start gap-1 text-xs">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Kekurangan:</h4>
                      <ul className="space-y-1">
                        {laptop.cons.slice(0, 2).map((con, index) => (
                          <li key={index} className="flex items-start gap-1 text-xs">
                            <XCircle className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {selectedLaptops.length < 3 && (
                <Card className="border-dashed border-2 border-muted-foreground/25">
                  <CardContent className="flex items-center justify-center h-full min-h-[400px]">
                    <div className="text-center">
                      <Plus className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Pilih laptop lain untuk dibandingkan</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari laptop berdasarkan nama atau brand..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterBrand} onValueChange={setFilterBrand}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by Brand" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand === "all" ? "Semua Brand" : brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Available Laptops */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Pilih Laptop untuk Dibandingkan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredLaptops.map((laptop) => (
              <Card key={laptop.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <img
                    src={laptop.image || "/placeholder.svg"}
                    alt={laptop.name}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <div className="space-y-1">
                    <Badge variant="outline" className="text-xs">
                      {laptop.brand}
                    </Badge>
                    <CardTitle className="text-sm">{laptop.name}</CardTitle>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-primary">Rp {(laptop.price / 1000000).toFixed(1)}jt</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">{laptop.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    size="sm"
                    className="w-full gap-2"
                    onClick={() => addLaptop(laptop)}
                    disabled={selectedLaptops.length >= 3}
                  >
                    <Plus className="h-3 w-3" />
                    {selectedLaptops.length >= 3 ? "Maksimal 3" : "Tambah"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredLaptops.length === 0 && (
            <Card>
              <CardContent className="text-center py-8">
                <p className="text-muted-foreground">Tidak ada laptop yang sesuai dengan pencarian Anda</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
