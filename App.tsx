import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Search, User, ChevronRight, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-between">
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              
              <h1 className="text-2xl font-serif tracking-wider">SLAYKWEENBYSANJ</h1>
              
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-800 hover:text-black">New Arrivals</a>
                <a href="#" className="text-gray-800 hover:text-black">Collection</a>
                <a href="#" className="text-gray-800 hover:text-black">About</a>
              </div>
              
              <div className="flex items-center space-x-4">
                <Search className="h-5 w-5 text-gray-800 cursor-pointer" />
                <User className="h-5 w-5 text-gray-800 cursor-pointer" />
                <ShoppingBag className="h-5 w-5 text-gray-800 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-800">New Arrivals</a>
              <a href="#" className="block px-3 py-2 text-gray-800">Collection</a>
              <a href="#" className="block px-3 py-2 text-gray-800">About</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80"
          alt="Fashion Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-5xl md:text-7xl font-serif mb-4">Summer Collection</h2>
            <p className="text-xl mb-8">Embrace your elegance</p>
            <button className="bg-white text-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&q=80"
                alt="Dresses"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-serif">Dresses</h3>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80"
                alt="Accessories"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-serif">Accessories</h3>
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80"
                alt="Shoes"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-serif">Shoes</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">New Arrivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group">
                <div className="relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&q=80&w=600`}
                    alt="Product"
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button className="absolute bottom-4 left-4 right-4 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium">Elegant Summer Dress</h3>
                  <p className="text-gray-600">$299.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-4">Join Our Newsletter</h2>
          <p className="mb-8">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="px-6 py-3 bg-transparent border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white"
            />
            <button className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">SLAYKWEENBYSANJ</h3>
            <p className="text-gray-600">Elevating fashion with timeless elegance and contemporary style.</p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">About Us</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
              <li><a href="#" className="hover:text-black">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-black">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-gray-600 hover:text-black cursor-pointer" />
              <Facebook className="h-5 w-5 text-gray-600 hover:text-black cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-600 hover:text-black cursor-pointer" />
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <address className="text-gray-600 not-italic">
              123 Fashion Street<br />
              New York, NY 10001<br />
              contact@slaykweenbysanj.com<br />
              +1 (555) 123-4567
            </address>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 text-center text-gray-600">
          <p>&copy; 2024 SLAYKWEENBYSANJ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;