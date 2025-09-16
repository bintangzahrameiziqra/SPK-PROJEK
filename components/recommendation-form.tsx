"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Search } from "lucide-react"
import { LaptopResults } from "@/components/laptop-results"

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

const majors = [
  "Teknik Informatika",
  "Sistem Informasi",
  "Desain Grafis",
  "Arsitektur",
  "Akuntansi",
  "Manajemen",
  "Teknik Sipil",
  "Kedokteran",
  "Hukum",
  "Psikologi",
]

const usageOptions = [
  { id: "programming", label: "Programming & Development" },
  { id: "design", label: "Design & Creative Work" },
  { id: "gaming", label: "Gaming" },
  { id: "office", label: "Office Work" },
  { id: "multimedia", label: "Video/Audio Editing" },
  { id: "research", label: "Research & Analysis" },
]

interface RecommendationFormProps {
  onBack: () => void
}

export function RecommendationForm({ onBack }: RecommendationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    jurusan: "",
    budget: [10000000],
    storage: "",
    ram: "",
    gpu: "",
    cpu: "",
    screenSize: "",
    usage: [],
  })
  const [showResults, setShowResults] = useState(false)

  const handleUsageChange = (usageId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      usage: checked ? [...prev.usage, usageId] : prev.usage.filter((id) => id !== usageId),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
  }

  if (showResults) {
    return <LaptopResults formData={formData} onBack={() => setShowResults(false)} />
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Button variant="ghost" onClick={onBack} className="gap-2 mb-4">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Beranda
        </Button>
        <h1 className="text-3xl font-bold text-foreground mb-2">Form Rekomendasi Laptop</h1>
        <p className="text-muted-foreground">
          Isi form berikut untuk mendapatkan rekomendasi laptop yang sesuai dengan kebutuhan Anda
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Informasi Dasar</CardTitle>
            <CardDescription>Pilih jurusan dan tentukan budget Anda</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="jurusan">Jurusan</Label>
              <Select
                value={formData.jurusan}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, jurusan: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih jurusan Anda" />
                </SelectTrigger>
                <SelectContent>
                  {majors.map((major) => (
                    <SelectItem key={major} value={major}>
                      {major}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label>Budget (Rp {formData.budget[0].toLocaleString("id-ID")})</Label>
              <Slider
                value={formData.budget}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                max={50000000}
                min={3000000}
                step={500000}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Rp 3.000.000</span>
                <span>Rp 50.000.000</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Spesifikasi</CardTitle>
            <CardDescription>Tentukan spesifikasi minimum yang Anda butuhkan</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="storage">Storage</Label>
              <Select
                value={formData.storage}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, storage: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kapasitas storage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="256gb-ssd">256GB SSD</SelectItem>
                  <SelectItem value="512gb-ssd">512GB SSD</SelectItem>
                  <SelectItem value="1tb-ssd">1TB SSD</SelectItem>
                  <SelectItem value="1tb-hdd">1TB HDD</SelectItem>
                  <SelectItem value="2tb-hdd">2TB HDD</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ram">RAM</Label>
              <Select value={formData.ram} onValueChange={(value) => setFormData((prev) => ({ ...prev, ram: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kapasitas RAM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4gb">4GB</SelectItem>
                  <SelectItem value="8gb">8GB</SelectItem>
                  <SelectItem value="16gb">16GB</SelectItem>
                  <SelectItem value="32gb">32GB</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="gpu">GPU</Label>
              <Select value={formData.gpu} onValueChange={(value) => setFormData((prev) => ({ ...prev, gpu: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih tipe GPU" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="integrated">Integrated Graphics</SelectItem>
                  <SelectItem value="entry-dedicated">Entry Level Dedicated</SelectItem>
                  <SelectItem value="mid-dedicated">Mid Range Dedicated</SelectItem>
                  <SelectItem value="high-dedicated">High End Dedicated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cpu">CPU</Label>
              <Select value={formData.cpu} onValueChange={(value) => setFormData((prev) => ({ ...prev, cpu: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih tipe CPU" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="intel-i3">Intel Core i3</SelectItem>
                  <SelectItem value="intel-i5">Intel Core i5</SelectItem>
                  <SelectItem value="intel-i7">Intel Core i7</SelectItem>
                  <SelectItem value="intel-i9">Intel Core i9</SelectItem>
                  <SelectItem value="amd-ryzen3">AMD Ryzen 3</SelectItem>
                  <SelectItem value="amd-ryzen5">AMD Ryzen 5</SelectItem>
                  <SelectItem value="amd-ryzen7">AMD Ryzen 7</SelectItem>
                  <SelectItem value="amd-ryzen9">AMD Ryzen 9</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="screenSize">Ukuran Layar</Label>
              <Select
                value={formData.screenSize}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, screenSize: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih ukuran layar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="13-inch">13 inch</SelectItem>
                  <SelectItem value="14-inch">14 inch</SelectItem>
                  <SelectItem value="15-inch">15 inch</SelectItem>
                  <SelectItem value="16-inch">16 inch</SelectItem>
                  <SelectItem value="17-inch">17 inch</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Kegunaan Utama</CardTitle>
            <CardDescription>Pilih aktivitas yang akan sering Anda lakukan (bisa lebih dari satu)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {usageOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.id}
                    checked={formData.usage.includes(option.id)}
                    onCheckedChange={(checked) => handleUsageChange(option.id, checked as boolean)}
                  />
                  <Label htmlFor={option.id} className="text-sm font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" size="lg" className="gap-2">
            <Search className="h-5 w-5" />
            Cari Rekomendasi Laptop
          </Button>
        </div>
      </form>
    </div>
  )
}
