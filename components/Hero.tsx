'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Heart, Shield, Clock, Star } from 'lucide-react'
import AppointmentForm from './AppointmentForm'

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 leading-tight">
                Professional care for 
                <span className="text-gradient block"> your furry friends</span>
              </h1>
              
              <p className="text-xl text-secondary-600 leading-relaxed">
                Our veterinary clinic offers comprehensive care services for companion animals, 
                with a team of dedicated specialists and state-of-the-art equipment.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">Care with love</h3>
                  <p className="text-sm text-secondary-600">We treat every animal like our own</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">Modern equipment</h3>
                  <p className="text-sm text-secondary-600">State-of-the-art technology</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">Available 24/7</h3>
                  <p className="text-sm text-secondary-600">For veterinary emergencies</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">Extensive experience</h3>
                  <p className="text-sm text-secondary-600">Over 15 years in the field</p>
                </div>
              </div>
            </div>

            {/* CTA Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">5000+</div>
                <div className="text-sm text-secondary-600">Animals treated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">4.9</div>
                <div className="text-sm text-secondary-600">Google Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-secondary-600">Years experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Appointment Form */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-secondary-100">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-secondary-900 mb-2">
                  Book a Consultation
                </h2>
                <p className="text-secondary-600">
                  Fill out the form and we will contact you as soon as possible
                </p>
              </div>
              
              <AppointmentForm />
            </div>

            {/* Hero Image */}
            <div className="mt-8 relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/vet-images/lydia-torrey-AovflqCt9Ws-unsplash.jpg"
                alt="Veterinarian caring for a dog"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 