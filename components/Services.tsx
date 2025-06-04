import React from 'react'
import Image from 'next/image'
import { 
  Stethoscope, 
  Scissors, 
  Heart, 
  Shield, 
  Zap, 
  Users, 
  Clock, 
  Phone
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'General Consultations',
      description: 'Complete routine examinations, diagnosis and treatment for all species of companion animals.',
      features: ['Complete clinical examination', 'Rapid diagnosis', 'Personalized treatment plan']
    },
    {
      icon: Shield,
      title: 'Vaccinations & Prevention',
      description: 'Complete vaccination programs and preventive measures to maintain animal health.',
      features: ['Required vaccines', 'Deworming', 'Preventive counseling']
    },
    {
      icon: Scissors,
      title: 'Surgery & Procedures',
      description: 'Routine and complex surgical interventions in a sterile and safe environment.',
      features: ['Spaying/Neutering', 'Emergency surgery', 'Microchipping']
    },
    {
      icon: Heart,
      title: 'Veterinary Cardiology',
      description: 'Diagnosis and treatment of cardiovascular conditions in animals.',
      features: ['Veterinary EKG', 'Cardiac ultrasound', 'Cardiac treatment']
    },
    {
      icon: Zap,
      title: '24/7 Emergencies',
      description: 'Emergency services available around the clock for critical situations.',
      features: ['Permanent guard', 'Veterinary ambulance', 'Rapid interventions']
    },
    {
      icon: Users,
      title: 'Counseling & Education',
      description: 'Guidance for pet owners in all aspects of animal care.',
      features: ['Nutritional education', 'Animal behavior', 'Home care']
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            We offer a complete range of veterinary services to ensure that your 
            companion animals receive the best possible care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className="bg-secondary-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-secondary-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                    <IconComponent className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-secondary-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-secondary-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need an emergency consultation?
            </h3>
            <p className="text-xl text-primary-100 mb-8">
              We are available 24/7 for your veterinary emergencies. 
              Don't hesitate to contact us anytime!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0720123123" 
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call now: 0720.123.123</span>
              </a>
              <a 
                href="#hero" 
                className="bg-primary-800 hover:bg-primary-900 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Clock className="w-5 h-5" />
                <span>Book online</span>
              </a>
            </div>
          </div>
        </div>

        {/* Services Images */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/vet-images/ivan-rojas-urrea-EsW5atCWiww-unsplash.jpg"
              alt="Veterinary consultation"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/vet-images/priscilla-du-preez-2hc6ocDAsNY-unsplash.jpg"
              alt="Professional care"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/vet-images/karsten-winegeart-loJL4ijUobg-unsplash.jpg"
              alt="Modern equipment"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 