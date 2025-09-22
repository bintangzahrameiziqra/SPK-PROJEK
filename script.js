// JavaScript for interactive functionality
function showRecommendationForm() {
  document.getElementById("recommendationModal").classList.remove("hidden")
  document.body.style.overflow = "hidden"
}

function hideRecommendationForm() {
  document.getElementById("recommendationModal").classList.add("hidden")
  document.body.style.overflow = "auto"
}

// Handle form submission
document.getElementById("recommendationForm").addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const data = Object.fromEntries(formData)

  // Show loading state
  const submitBtn = this.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML
  submitBtn.innerHTML = "Mencari Rekomendasi..."
  submitBtn.disabled = true

  // Simulate API call
  setTimeout(() => {
    // Reset button
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false

    // Hide modal and show results
    hideRecommendationForm()
    showResults(data)
  }, 2000)
})

function showResults(data) {
  // Create results section
  const resultsHTML = `
        <section class="py-20 bg-card/50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-4xl font-bold text-foreground mb-4 neon-text">Rekomendasi Laptop untuk Anda</h2>
                    <p class="text-xl text-muted-foreground">Berdasarkan kriteria yang Anda pilih</p>
                </div>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="interactive-card neon-border bg-card rounded-xl p-6">
                        <div class="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                            <svg class="w-16 h-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-foreground mb-2">ASUS VivoBook Pro 15</h3>
                        <p class="text-primary font-semibold text-lg mb-2">Rp 12.500.000</p>
                        <div class="space-y-1 text-sm text-muted-foreground mb-4">
                            <p>• Intel Core i7-12700H</p>
                            <p>• 16GB RAM, 512GB SSD</p>
                            <p>• NVIDIA RTX 3050</p>
                            <p>• 15.6" OLED Display</p>
                        </div>
                        <div class="flex items-center mb-4">
                            <div class="flex text-yellow-400">
                                ★★★★★
                            </div>
                            <span class="ml-2 text-sm text-muted-foreground">4.8 (245 reviews)</span>
                        </div>
                        <button class="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:scale-105 transition-all duration-300">
                            Lihat Detail
                        </button>
                    </div>
                    
                    <div class="interactive-card neon-border bg-card rounded-xl p-6">
                        <div class="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                            <svg class="w-16 h-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-foreground mb-2">Lenovo ThinkPad E15</h3>
                        <p class="text-primary font-semibold text-lg mb-2">Rp 11.200.000</p>
                        <div class="space-y-1 text-sm text-muted-foreground mb-4">
                            <p>• AMD Ryzen 7 5700U</p>
                            <p>• 16GB RAM, 512GB SSD</p>
                            <p>• Integrated Graphics</p>
                            <p>• 15.6" FHD Display</p>
                        </div>
                        <div class="flex items-center mb-4">
                            <div class="flex text-yellow-400">
                                ★★★★☆
                            </div>
                            <span class="ml-2 text-sm text-muted-foreground">4.6 (189 reviews)</span>
                        </div>
                        <button class="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:scale-105 transition-all duration-300">
                            Lihat Detail
                        </button>
                    </div>
                    
                    <div class="interactive-card neon-border bg-card rounded-xl p-6">
                        <div class="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                            <svg class="w-16 h-16 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold text-foreground mb-2">HP Pavilion Gaming</h3>
                        <p class="text-primary font-semibold text-lg mb-2">Rp 13.800.000</p>
                        <div class="space-y-1 text-sm text-muted-foreground mb-4">
                            <p>• Intel Core i5-12500H</p>
                            <p>• 16GB RAM, 512GB SSD</p>
                            <p>• NVIDIA RTX 3060</p>
                            <p>• 15.6" 144Hz Display</p>
                        </div>
                        <div class="flex items-center mb-4">
                            <div class="flex text-yellow-400">
                                ★★★★★
                            </div>
                            <span class="ml-2 text-sm text-muted-foreground">4.7 (312 reviews)</span>
                        </div>
                        <button class="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:scale-105 transition-all duration-300">
                            Lihat Detail
                        </button>
                    </div>
                </div>
            </div>
        </section>
    `

  // Insert results after the CTA section
  const ctaSection = document.querySelector("section:last-of-type")
  ctaSection.insertAdjacentHTML("afterend", resultsHTML)

  // Scroll to results
  setTimeout(() => {
    document.querySelector("section:last-of-type").scrollIntoView({ behavior: "smooth" })
  }, 100)
}

// Add smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
  // Add slide-in animation to hero section
  setTimeout(() => {
    document.querySelector(".slide-in").style.opacity = "1"
  }, 100)

  // Add intersection observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all interactive cards
  document.querySelectorAll(".interactive-card").forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    observer.observe(card)
  })
})

// Close modal when clicking outside
document.getElementById("recommendationModal").addEventListener("click", function (e) {
  if (e.target === this) {
    hideRecommendationForm()
  }
})

// Handle escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hideRecommendationForm()
  }
})
