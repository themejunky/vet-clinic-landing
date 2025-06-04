import React from 'react'
import { MapPin, Phone, Clock, Mail, Car, Bus } from 'lucide-react'

const Location = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      info: 'Strada Maria Rosetti 26A, București 020487',
      action: 'View on Google Maps'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '0720.123.123',
      action: 'Call now'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'contact@vetcarefamily.com',
      action: 'Send email'
    }
  ]

  const schedule = [
    { day: 'Monday - Friday', hours: '08:00 - 20:00' },
    { day: 'Saturday', hours: '09:00 - 18:00' },
    { day: 'Sunday', hours: '10:00 - 16:00' },
    { day: 'Emergencies', hours: '24/7', special: true }
  ]

  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our Location and Contact
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Find us in the heart of Bucharest, in an accessible location with public transport and parking spaces.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info & Schedule */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Contact information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-secondary-900 mb-1">
                          {contact.title}
                        </h4>
                        <p className="text-secondary-600 mb-2">
                          {contact.info}
                        </p>
                        <button className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors">
                          {contact.action}
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Schedule */}
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Working hours
              </h3>
              <div className="bg-secondary-50 rounded-2xl p-6">
                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <div 
                      key={index} 
                      className={`flex justify-between items-center py-2 ${
                        item.special ? 'border-t-2 border-primary-200 pt-4 mt-4' : ''
                      }`}
                    >
                      <span className={`font-medium ${
                        item.special ? 'text-primary-600' : 'text-secondary-900'
                      }`}>
                        {item.day}
                      </span>
                      <span className={`${
                        item.special ? 'text-primary-600 font-bold' : 'text-secondary-600'
                      }`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary-600" />
                    <p className="text-sm text-primary-700">
                      <strong>For emergencies</strong> outside normal hours, call 0720.123.123
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                How to reach us
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-secondary-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Car className="w-6 h-6 text-primary-600" />
                    <h4 className="font-semibold text-secondary-900">By car</h4>
                  </div>
                  <p className="text-sm text-secondary-600">
                    Free parking available in front of the clinic. 
                    Accessible from Piața Romana and Calea Victoriei.
                  </p>
                </div>
                
                <div className="bg-secondary-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Bus className="w-6 h-6 text-primary-600" />
                    <h4 className="font-semibold text-secondary-900">Public transport</h4>
                  </div>
                  <p className="text-sm text-secondary-600">
                    Buses 131, 168 (Maria Rosetti station) or 
                    Metro M2 (Piața Romana station).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Our location
              </h3>
              
              {/* Map Container */}
              <div className="bg-secondary-100 rounded-2xl h-96 flex items-center justify-center border border-secondary-200">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                    Interactive map
                  </h4>
                  <p className="text-secondary-600 mb-4">
                    Strada Maria Rosetti 26A<br />
                    București 020487
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Strada+Maria+Rosetti+26A,+București+020487"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
              
              <p className="text-sm text-secondary-500 text-center mt-4">
                Clinic located in the central area, with easy access and parking available
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a 
                href="tel:0720123123"
                className="bg-primary-600 hover:bg-primary-700 text-white p-6 rounded-xl text-center transition-colors duration-200"
              >
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-1">Call now</h4>
                <p className="text-sm text-primary-100">0720.123.123</p>
              </a>
              
              <a 
                href="#hero"
                className="bg-secondary-100 hover:bg-secondary-200 text-secondary-900 p-6 rounded-xl text-center transition-colors duration-200"
              >
                <Clock className="w-8 h-8 mx-auto mb-3 text-primary-600" />
                <h4 className="font-semibold mb-1">Book appointment</h4>
                <p className="text-sm text-secondary-600">Online 24/7</p>
              </a>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Urgență veterinară?
            </h3>
            <p className="text-lg text-red-100 mb-6">
              Pentru situațiile de urgență suntem disponibili 24/7. Nu ezita să ne suni imediat!
            </p>
            <a 
              href="tel:0720123123"
              className="bg-white text-red-600 hover:bg-red-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Sună pentru urgențe: 0720.123.123</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location 