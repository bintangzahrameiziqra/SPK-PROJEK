"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Laptop, ArrowRight, BarChart3, Zap, Shield, Sparkles } from "lucide-react"
import { RecommendationForm } from "@/components/recommendation-form"

const popularMajors = [
  { name: "Teknik Informatika", count: "2,450 mahasiswa", color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  { name: "Desain Grafis", count: "1,890 mahasiswa", color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
  { name: "Akuntansi", count: "1,650 mahasiswa", color: "bg-green-500/20 text-green-300 border-green-500/30" },
  { name: "Arsitektur", count: "1,200 mahasiswa", color: "bg-orange-500/20 text-orange-300 border-orange-500/30" },
]

const features = [
  {
    icon: Zap,
    title: "AI Super Cerdas",
    description: "Algoritma machine learning yang menganalisis 50+ parameter untuk rekomendasi terpersonalisasi",
  },
  {
    icon: BarChart3,
    title: "Perbandingan Real-time",
    description: "Bandingkan performa, harga, dan review dari ribuan laptop dengan visualisasi interaktif",
  },
  {
    icon: Shield,
    title: "Data Terpercaya",
    description: "Database terintegrasi dengan 100+ toko online untuk informasi harga dan stok terkini",
  },
  {
    icon: Sparkles,
    title: "Pengalaman Premium",
    description: "Interface modern dengan teknologi terdepan untuk pengalaman pencarian yang tak terlupakan",
  },
]

const stats = [
  { label: "Laptop Database", value: "5,000+" },
  { label: "Mahasiswa Aktif", value: "25,000+" },
  { label: "Jurusan Supported", value: "75+" },
  { label: "Akurasi AI", value: "98.5%" },
]

export default function HomePage() {
  const [showRecommendationForm, setShowRecommendationForm] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (showRecommendationForm) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <RecommendationForm onBack={() => setShowRecommendationForm(false)} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.65_0.25_240_/_0.1),transparent_70%)]"></div>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${isVisible ? "slide-in" : "opacity-0"}`}>
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-6 text-balance">
              Temukan Laptop <span className="text-primary neon-text">Impian</span> dengan{" "}
              <span className="text-accent neon-text">Study Core</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto text-pretty">
              Platform AI terdepan yang membantu mahasiswa menemukan laptop perfect match berdasarkan jurusan, budget,
              dan kebutuhan spesifik dengan akurasi tinggi.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="gap-3 text-lg px-10 py-8 neon-glow hover:scale-105 transition-all duration-300"
                onClick={() => setShowRecommendationForm(true)}
              >
                <Search className="h-6 w-6" />
                Mulai Pencarian AI
                <ArrowRight className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-8 bg-transparent neon-border hover:scale-105 transition-all duration-300"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Lihat Demo Interaktif
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-20 right-10 opacity-20">
          <Laptop className="h-32 w-32 text-primary float-animation" />
        </div>
      </section>

      <section className="py-20 bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center interactive-card p-6 rounded-xl">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3 neon-text">{stat.value}</div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mengapa <span className="text-primary neon-text">Study Core</span> Berbeda?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Teknologi AI terdepan dengan pengalaman user yang tak tertandingi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="text-center interactive-card neon-border bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-6 neon-glow">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Jurusan Trending</h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Eksplorasi rekomendasi laptop untuk jurusan paling populer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularMajors.map((major, index) => (
              <Card key={index} className="interactive-card neon-border bg-card/80 backdrop-blur-sm cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{major.name}</CardTitle>
                  <Badge variant="secondary" className={`${major.color} border`}>
                    {major.count}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full bg-transparent hover:scale-105 transition-all duration-300"
                  >
                    Eksplorasi Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(0.65_0.25_240_/_0.2),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,oklch(0.75_0.30_200_/_0.2),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 neon-text">
            Siap Upgrade Pengalaman Belajar?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Dapatkan rekomendasi laptop AI-powered dalam hitungan detik
          </p>
          <Button
            size="lg"
            className="gap-4 text-xl px-12 py-10 neon-glow hover:scale-110 transition-all duration-500"
            onClick={() => setShowRecommendationForm(true)}
          >
            <Laptop className="h-7 w-7" />
            Mulai Journey Anda
            <Sparkles className="h-7 w-7" />
          </Button>
        </div>
      </section>
    </div>
  )
}
