'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-serif font-bold text-gray-900">NORMA REALTY</div>
          <div className="hidden md:flex gap-8">
            <a href="#luxury" className="text-sm text-gray-600 hover:text-gray-900 font-medium">LUXURY HOMES</a>
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 font-medium">ABOUT</a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 font-medium">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero - Dark Luxury */}
      <section className="pt-20 pb-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-serif font-light mb-6 tracking-wide">
            Extraordinary Homes
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light">
            Luxury real estate expertise in San Diego
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-gray-900 font-semibold hover:bg-gray-100 transition">
              Browse Listings
            </button>
            <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-serif font-light text-gray-900 mb-2">25+</div>
              <p className="text-gray-600 font-light">Years of Excellence</p>
            </div>
            <div>
              <div className="text-4xl font-serif font-light text-gray-900 mb-2">$2.3B+</div>
              <p className="text-gray-600 font-light">Sales Volume</p>
            </div>
            <div>
              <div className="text-4xl font-serif font-light text-gray-900 mb-2">500+</div>
              <p className="text-gray-600 font-light">Properties Sold</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section id="luxury" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-light text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-lg text-gray-600 font-light">Handpicked luxury homes in prime locations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-gray-300 h-72 mb-6 overflow-hidden relative">
                  <div className="w-full h-full flex items-center justify-center text-gray-500 font-light">
                    Luxury Property {i}
                  </div>
                  <div className="absolute top-4 right-4 bg-gray-900 text-white px-4 py-2 text-sm font-semibold">
                    FEATURED
                  </div>
                </div>
                <h3 className="text-xl font-serif font-light text-gray-900 mb-2">
                  Coastal Estate #{i}
                </h3>
                <p className="text-3xl font-serif font-light text-gray-900 mb-3">
                  ${(4 + i * 0.5).toFixed(1)}M
                </p>
                <p className="text-gray-600 text-sm font-light mb-4">
                  5 bed • 4 bath • 6,200 sqft • Ocean View
                </p>
                <button className="text-gray-900 text-sm font-semibold hover:text-gray-600 transition">
                  VIEW DETAILS →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Agent */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-serif font-light text-gray-900 mb-8">Meet Norma</h2>
              <p className="text-lg text-gray-600 font-light mb-6 leading-relaxed">
                With over two decades of experience in luxury real estate, Norma brings unparalleled expertise, discretion, and dedication to every transaction.
              </p>
              <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                Specializing in high-value properties along the San Diego coast, Norma has built a reputation for excellence among discerning buyers and sellers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-gray-900 font-bold mt-1">✓</div>
                  <div>
                    <p className="font-semibold text-gray-900">Luxury Market Expert</p>
                    <p className="text-gray-600 text-sm font-light">Specialized in high-end residential properties</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-gray-900 font-bold mt-1">✓</div>
                  <div>
                    <p className="font-semibold text-gray-900">Trusted Advisor</p>
                    <p className="text-gray-600 text-sm font-light">Personalized service with complete discretion</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-light">Norma's Professional Portrait</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-serif font-light text-center mb-16">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-gray-700 p-8">
                <p className="text-gray-300 font-light mb-6 leading-relaxed italic">
                  "Norma's expertise and attention to detail made our home sale seamless. Her market knowledge and negotiation skills were exceptional."
                </p>
                <p className="font-semibold text-white">Client {i}</p>
                <p className="text-sm text-gray-400 font-light">San Diego, CA</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-serif font-light text-gray-900 mb-6">
            Ready to Explore?
          </h2>
          <p className="text-lg text-gray-600 font-light mb-10">
            Let's discuss your luxury real estate goals
          </p>
          <button className="px-10 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition">
            SCHEDULE CONSULTATION
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            <div>
              <p className="text-white font-serif font-light text-lg mb-2">NORMA REALTY</p>
              <p className="text-sm font-light">Luxury Real Estate Specialist</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-4 text-sm">CONTACT</p>
              <p className="text-sm font-light">San Diego, CA</p>
              <p className="text-sm font-light">contact@normarealty.com</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-4 text-sm">SOCIAL</p>
              <p className="text-sm font-light">Instagram • LinkedIn</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm font-light">
            <p>© 2026 Norma Realty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
