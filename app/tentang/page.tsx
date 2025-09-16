import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Users, Award, Zap, Heart, Shield, Lightbulb, Mail, Phone, MapPin } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Rekomendasi Akurat",
    description:
      "Algoritma AI yang menganalisis kebutuhan berdasarkan jurusan dan preferensi pengguna untuk memberikan rekomendasi yang tepat sasaran.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Platform yang dibangun berdasarkan feedback dan review dari ribuan mahasiswa Indonesia dari berbagai jurusan.",
  },
  {
    icon: Award,
    title: "Database Terlengkap",
    description:
      "Koleksi laptop terlengkap dengan informasi spesifikasi detail, harga terkini, dan availability dari berbagai toko.",
  },
  {
    icon: Zap,
    title: "Performa Cepat",
    description:
      "Interface yang responsif dan cepat untuk memberikan pengalaman pencarian yang optimal di semua perangkat.",
  },
]

const values = [
  {
    icon: Heart,
    title: "Peduli Mahasiswa",
    description: "Kami memahami tantangan mahasiswa dalam memilih laptop yang tepat dengan budget terbatas.",
  },
  {
    icon: Shield,
    title: "Transparansi",
    description: "Informasi yang jujur dan transparan tanpa bias terhadap brand atau toko tertentu.",
  },
  {
    icon: Lightbulb,
    title: "Inovasi Berkelanjutan",
    description: "Terus mengembangkan fitur dan algoritma untuk memberikan pengalaman yang lebih baik.",
  },
]

const team = [
  {
    name: "Ahmad Rizki",
    role: "Founder & CEO",
    major: "Teknik Informatika",
    university: "Institut Teknologi Bandung",
    image: "/placeholder.svg?height=150&width=150&text=Ahmad",
  },
  {
    name: "Sari Dewi",
    role: "Head of Product",
    major: "Sistem Informasi",
    university: "Universitas Indonesia",
    image: "/placeholder.svg?height=150&width=150&text=Sari",
  },
  {
    name: "Budi Santoso",
    role: "Lead Developer",
    major: "Teknik Komputer",
    university: "Universitas Gadjah Mada",
    image: "/placeholder.svg?height=150&width=150&text=Budi",
  },
]

const stats = [
  { label: "Mahasiswa Terbantu", value: "15,000+" },
  { label: "Laptop Terdaftar", value: "2,500+" },
  { label: "Universitas Partner", value: "150+" },
  { label: "Rating Kepuasan", value: "4.8/5" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Tentang <span className="text-primary">LaptopRekomendasi</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Platform rekomendasi laptop berbasis AI yang membantu mahasiswa Indonesia menemukan laptop ideal sesuai
            kebutuhan jurusan dan budget mereka.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Misi Kami</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
                Membantu setiap mahasiswa Indonesia membuat keputusan yang tepat dalam memilih laptop dengan menyediakan
                rekomendasi yang akurat, transparan, dan mudah dipahami berdasarkan kebutuhan akademik dan anggaran
                mereka.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fitur-fitur unggulan yang membuat LaptopRekomendasi menjadi pilihan terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nilai-Nilai Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap keputusan dan pengembangan produk
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Tim Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mahasiswa dan alumni yang berpengalaman dalam teknologi dan memahami kebutuhan akademik
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mb-2">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{member.major}</p>
                    <p>{member.university}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Hubungi Kami</CardTitle>
              <CardDescription>Ada pertanyaan atau saran? Jangan ragu untuk menghubungi tim kami</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Mail className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">hello@laptoprekomendasi.id</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Phone className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">+62 812-3456-7890</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold">Lokasi</h3>
                  <p className="text-sm text-muted-foreground">Jakarta, Indonesia</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button size="lg">Kirim Pesan</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-primary to-secondary">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold text-primary-foreground mb-4">Siap Menemukan Laptop Ideal Anda?</h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Bergabunglah dengan ribuan mahasiswa yang telah menemukan laptop impian mereka
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Mulai Pencarian Sekarang
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
