import React from 'react'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle, Heart } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#location' }
  ]

  const services = [
    'General consultations',
    'Vaccinations and prevention',
    'Veterinary surgery',
    '24/7 Emergencies',
    'Veterinary cardiology',
    'Medical tests'
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gradient-white mb-4">
                  VetCare Family
                </h3>
                <p className="text-secondary-300 leading-relaxed">
                  Professional and loving care for your companion animals. 
                  Over 15 years of experience in veterinary medicine.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span className="text-secondary-300 text-sm">
                    Strada Maria Rosetti 26A, București 020487
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <a href="tel:0720123123" className="text-secondary-300 text-sm hover:text-white transition-colors">
                    0720.123.123
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <a href="mailto:contact@vetcarefamily.com" className="text-secondary-300 text-sm hover:text-white transition-colors">
                    contact@vetcarefamily.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick navigation</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-secondary-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-secondary-300 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule & Emergency */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Working hours</h4>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-secondary-300 text-sm">Monday - Friday</span>
                  <span className="text-white text-sm font-medium">08:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-300 text-sm">Saturday</span>
                  <span className="text-white text-sm font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-300 text-sm">Sunday</span>
                  <span className="text-white text-sm font-medium">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between border-t border-secondary-700 pt-3">
                  <span className="text-primary-400 text-sm font-medium">Emergencies</span>
                  <span className="text-primary-400 text-sm font-bold">24/7</span>
                </div>
              </div>

              <div className="bg-primary-900/50 rounded-lg p-4 border border-primary-700">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-primary-400" />
                  <span className="text-primary-400 font-medium text-sm">24/7 Emergencies</span>
                </div>
                <p className="text-secondary-300 text-xs">
                  For veterinary emergencies we are available anytime
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-secondary-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow us on social media</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/40720123123" 
                  className="w-10 h-10 bg-secondary-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="bg-secondary-800 rounded-lg p-6 max-w-md">
                <h4 className="text-lg font-semibold mb-2">Newsletter</h4>
                <p className="text-secondary-300 text-sm mb-4">
                  Subscribe for animal care tips
                </p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 bg-secondary-700 border border-secondary-600 rounded-l-lg focus:outline-none focus:border-primary-500 text-sm"
                  />
                  <button className="bg-primary-600 hover:bg-primary-700 px-6 py-2 rounded-r-lg transition-colors text-sm font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-secondary-400 text-sm">
              <span>© 2024 VetCare Family. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-500" />
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                Terms and Conditions
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                GDPR
              </a>
            </div>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="border-t border-red-700 bg-red-900/30 py-4">
          <div className="text-center">
            <p className="text-red-200 text-sm">
              <strong>Urgențe veterinare:</strong> Pentru situațiile de urgență, sunați la{' '}
              <a href="tel:0720123123" className="text-red-100 font-bold hover:underline">
                0720.123.123
              </a>
              {' '}- Disponibili 24/7
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 