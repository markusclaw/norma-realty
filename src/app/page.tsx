import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Properties by Norma</div>
          <div className="hidden md:flex gap-8">
            <a href="#listings" className="text-gray-600 hover:text-gray-900">Listings</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Next Home
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Expert real estate guidance in Chula Vista and the San Diego area
          </p>
          <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
            Browse Listings
          </Button>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section id="listings" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Listings</h2>
            <p className="text-gray-600">Premium properties available now</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Listing Card Template */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <span className="text-gray-400">Property Image {i}</span>
                </div>
                <div className="p-6">
                  <div className="text-2xl font-bold text-gray-900 mb-2">$425,000</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Beautiful Home in Chula Vista</h3>
                  <p className="text-gray-600 text-sm mb-4">3 bed • 2 bath • 1,800 sqft</p>
                  <Button variant="outline" className="w-full">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How We Help</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Buying', description: 'Expert guidance to find your perfect home' },
              { title: 'Selling', description: 'Market your property to qualified buyers' },
              { title: 'Market Insights', description: 'Data-driven advice on the local market' }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Norma</h2>
              <p className="text-lg text-gray-600 mb-4">
                With years of experience in the Chula Vista and San Diego real estate market, Norma brings expertise, dedication, and a genuine commitment to your success.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're buying your first home, selling a property, or exploring commercial opportunities, Norma is here to guide you every step of the way.
              </p>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Norma's Photo</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's find your next opportunity
          </p>
          <Button size="lg" variant="outline" className="border-white text-gray-900 hover:bg-gray-100">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Get in Touch</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <textarea
              placeholder="How can we help?"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            ></textarea>
            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2026 Properties by Norma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
