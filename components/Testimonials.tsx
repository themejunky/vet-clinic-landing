import React from 'react'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ana Popescu',
      photo: '/images/reviews/aiony-haust-3TLl_97HNJo-unsplash.jpg',
      rating: 5,
      text: 'The team at VetCare Family was extraordinary with my cat, Luna. Their professionalism and care were priceless. I recommend them with confidence!',
      service: 'Emergency consultation'
    },
    {
      name: 'Mihai Ionescu',
      photo: '/images/reviews/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg',
      rating: 5,
      text: 'My dog had a complex surgical procedure and the result was perfect. The doctors are very competent and understanding.',
      service: 'Surgery'
    },
    {
      name: 'Elena Gheorghiu',
      photo: '/images/reviews/ivana-cajina-_7LbC5J-jw4-unsplash.jpg',
      rating: 5,
      text: 'I have been bringing all 4 of my dogs here for 3 years. The staff is wonderful and the prices are very fair. A trustworthy clinic!',
      service: 'Regular consultations'
    },
    {
      name: 'Radu Cristescu',
      photo: '/images/reviews/charles-etoroma-95UF6LXe-Lo-unsplash.jpg',
      rating: 5,
      text: 'Exceptional emergency services! They saved my cat on a weekend night. Thank you for your dedication!',
      service: '24/7 Emergency'
    },
    {
      name: 'Carmen Dumitrescu',
      photo: '/images/reviews/ian-dooley-d1UPkiFd04A-unsplash.jpg',
      rating: 5,
      text: 'The modern equipment and professional approach impressed me. The test results were ready very quickly.',
      service: 'Medical tests'
    }
  ]

  const stats = [
    { number: '4.9', label: 'Google Rating' },
    { number: '500+', label: 'Positive reviews' },
    { number: '98%', label: 'Satisfied clients' },
    { number: '90%', label: 'Returning clients' }
  ]

  return (
    <section id="testimonials" className="section-padding bg-secondary-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            What our clients say
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            The trust and satisfaction of our clients are the best proof of the quality of our services.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-secondary-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-secondary-100"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <Quote className="w-8 h-8 text-primary-300" />
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-secondary-700 text-center leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Service */}
              <div className="text-center mb-6">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.service}
                </span>
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-secondary-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-secondary-600">
                    VetCare Family Client
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Over 500 positive reviews on Google
            </h3>
            <p className="text-xl text-primary-100 mb-8">
              Our clients appreciate the quality of services and the special care we give to each animal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-2xl font-bold">4.9</span>
              </div>
              
              <a 
                href="https://maps.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View all reviews
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-100">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Want to be our next satisfied client?
            </h3>
            <p className="text-lg text-secondary-600 mb-6">
              Book a consultation and experience the understanding and professionalism of our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#hero"
                className="btn-primary"
              >
                Book consultation
              </a>
              <a 
                href="tel:0720123123"
                className="btn-secondary"
              >
                Call now: 0720.123.123
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 