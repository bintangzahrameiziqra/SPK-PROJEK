"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Star,
  Heart,
  ShoppingCart,
  Cpu,
  HardDrive,
  Monitor,
  Zap,
  CheckCircle,
  XCircle,
  Users,
  Award,
} from "lucide-react"

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

interface LaptopDetailProps {
  laptop: Laptop
  onBack: () => void
  formData: FormData
}

const performanceScores = {
  programming: 85,
  design: 70,
  gaming: 60,
  office: 95,
  multimedia: 75,
  research: 90,
}

const reviews = [
  {
    id: 1,
    user: "Ahmad S.",
    major: "Teknik Informatika",
    rating: 5,
    comment: "Laptop ini sangat cocok untuk programming. Keyboard nyaman untuk coding berjam-jam.",
    date: "2 minggu lalu",
  },
  {
    id: 2,
    user: "Sari M.",
    major: "Sistem Informasi",
    rating: 4,
    comment: "Performa bagus untuk harga segini. Cuma layarnya agak kurang cerah kalau di luar ruangan.",
    date: "1 bulan lalu",
  },
  {
    id: 3,
    user: "Budi R.",
    major: "Akuntansi",
    rating: 5,
    comment: "Sempurna untuk Excel dan aplikasi office. Battery life juga lumayan.",
    date: "1 bulan lalu",
  },
]

export function LaptopDetail({ laptop, onBack, formData }: LaptopDetailProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Button variant="ghost" onClick={onBack} className="gap-2 mb-4">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Hasil
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Image and Basic Info */}
        <div className="space-y-4">
          <div className="relative">
            <img
              src={laptop.image || "/placeholder.svg"}
              alt={laptop.name}
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary text-primary-foreground">
                {laptop.suitabilityScore}% Cocok untuk {formData.jurusan}
              </Badge>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-lg font-medium">{laptop.rating}</span>
              <span className="text-muted-foreground">({laptop.reviews} ulasan)</span>
            </div>
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
                  ? "Stok Terbatas"
                  : "Habis"}
            </Badge>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge variant="outline" className="mb-2">
              {laptop.brand}
            </Badge>
            <h1 className="text-3xl font-bold text-foreground mb-4">{laptop.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-primary">Rp {laptop.price.toLocaleString("id-ID")}</span>
              {laptop.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  Rp {laptop.originalPrice.toLocaleString("id-ID")}
                </span>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Spesifikasi Utama</h3>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 p-3 bg-card rounded-lg">
                <Cpu className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Processor</div>
                  <div className="text-sm text-muted-foreground">{laptop.specs.cpu}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-lg">
                <Zap className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Memory</div>
                  <div className="text-sm text-muted-foreground">{laptop.specs.ram}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-lg">
                <HardDrive className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Storage</div>
                  <div className="text-sm text-muted-foreground">{laptop.specs.storage}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-card rounded-lg">
                <Monitor className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium">Display</div>
                  <div className="text-sm text-muted-foreground">{laptop.specs.screen}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="flex-1 gap-2" disabled={laptop.availability === "out-of-stock"}>
              <ShoppingCart className="h-4 w-4" />
              Beli Sekarang
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Detailed Information Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performa</TabsTrigger>
          <TabsTrigger value="reviews">Ulasan</TabsTrigger>
          <TabsTrigger value="comparison">Perbandingan</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Kelebihan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {laptop.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{pro}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  Kekurangan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {laptop.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{con}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Cocok untuk Aktivitas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {laptop.bestFor.map((activity, index) => (
                  <Badge key={index} variant="secondary">
                    {activity}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Skor Performa berdasarkan Kegunaan</CardTitle>
              <CardDescription>Penilaian performa laptop untuk berbagai aktivitas (0-100)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(performanceScores).map(([activity, score]) => (
                <div key={activity} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="capitalize">{activity.replace("-", " ")}</span>
                    <span className="font-medium">{score}/100</span>
                  </div>
                  <Progress value={score} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-6">
          <div className="space-y-4">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{review.user}</span>
                      <Badge variant="outline" className="text-xs">
                        {review.major}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{review.comment}</p>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="comparison">
          <Card>
            <CardHeader>
              <CardTitle>Perbandingan dengan Laptop Lain</CardTitle>
              <CardDescription>Fitur ini akan segera tersedia untuk membantu Anda membandingkan laptop</CardDescription>
            </CardHeader>
            <CardContent className="text-center py-8">
              <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Fitur perbandingan detail akan segera hadir</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
