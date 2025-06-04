import React from 'react'
import Image from 'next/image'
import { Award, Users, Clock, Heart } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '15+', label: 'Years of experience' },
    { number: '5000+', label: 'Animals treated' },
    { number: '4.9', label: 'Google Rating' },
    { number: '24/7', label: 'Emergency availability' }
  ]

  const team = [
    {
      name: 'Dr. Maria Popescu',
      role: 'Lead Veterinarian',
      specialization: 'Surgery and internal medicine',
      experience: '15 years experience'
    },
    {
      name: 'Dr. Alexandru Ionescu',
      role: 'Veterinarian',
      specialization: 'Cardiology and emergencies',
      experience: '10 years experience'
    },
    {
      name: 'Dr. Elena Constantinescu',
      role: 'Veterinarian',
      specialization: 'Dermatology and nutrition',
      experience: '8 years experience'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Passion for animals',
      description: 'We treat every animal with the love and attention they deserve'
    },
    {
      icon: Award,
      title: 'Excellence in services',
      description: 'High quality standards in all services offered'
    },
    {
      icon: Users,
      title: 'Dedicated team',
      description: 'Qualified specialists with extensive experience in the field'
    },
    {
      icon: Clock,
      title: 'Availability',
      description: 'Here for you and your animal whenever you need us'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            About VetCare Family
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience in veterinary medicine, we are dedicated to providing 
            the best care for your companion animals.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-secondary-900 mb-6">
                Our mission
              </h3>
              <p className="text-lg text-secondary-600 leading-relaxed mb-6">
                At VetCare Family, we believe that every animal deserves the best medical care. 
                Our team of passionate specialists works every day to provide the highest quality 
                veterinary services in a warm and welcoming environment.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                We use modern equipment and advanced techniques to diagnose and treat 
                a wide range of conditions, from routine consultations to complex surgical procedures.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm text-secondary-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="space-y-6">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/vet-images/artur-tumasjan-qLzWvcQq-V8-unsplash.jpg"
                alt="VetCare Family veterinary team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 rounded-xl overflow-hidden shadow-lg">
                                  <Image
                    src="/images/vet-images/ayla-verschueren-nWKMtmbpxQs-unsplash.jpg"
                    alt="Modern veterinary clinic"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-40 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/vet-images/lydia-torrey-AovflqCt9Ws-unsplash.jpg"
                    alt="Professional care"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-secondary-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="bg-secondary-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Our team of specialists
            </h3>
            <p className="text-lg text-secondary-600">
              Veterinarians with extensive experience and passion for animals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary-600" />
                </div>
                <h4 className="text-xl font-bold text-secondary-900 mb-2">
                  {member.name}
                </h4>
                <p className="text-primary-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-secondary-600 text-sm mb-2">
                  {member.specialization}
                </p>
                <p className="text-secondary-500 text-sm">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8">
            Certifications and Memberships
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-secondary-100">
              <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="font-semibold text-secondary-900 mb-2">ANMV</h4>
              <p className="text-sm text-secondary-600">Autoritatea Națională pentru Medicină Veterinară</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-secondary-100">
              <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="font-semibold text-secondary-900 mb-2">CNMV</h4>
              <p className="text-sm text-secondary-600">Colegiul Național al Medicilor Veterinari</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-secondary-100">
              <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="font-semibold text-secondary-900 mb-2">ISO 9001</h4>
              <p className="text-sm text-secondary-600">Certificare pentru managementul calității</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-secondary-100">
              <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h4 className="font-semibold text-secondary-900 mb-2">ESAVS</h4>
              <p className="text-sm text-secondary-600">European School for Advanced Veterinary Studies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 