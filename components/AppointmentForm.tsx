'use client'

import React, { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  phone: string
  email: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

const AppointmentForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      })
      return
    }

    setStatus({ type: 'loading', message: '' })

    try {
      const response = await fetch('/api/send-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Your request has been sent successfully! We will contact you soon.',
        })
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        })
      } else {
        throw new Error('Failed to send appointment request')
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again or call us directly.',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="07XX XXX XXX"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="email@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
          placeholder="Briefly describe the reason for consultation or other relevant details..."
        />
      </div>

      {/* Status Messages */}
      {status.type !== 'idle' && (
        <div className={`flex items-center space-x-2 p-3 rounded-lg ${
          status.type === 'success' 
            ? 'bg-green-50 text-green-700 border border-green-200' 
            : status.type === 'error'
            ? 'bg-red-50 text-red-700 border border-red-200'
            : 'bg-primary-50 text-primary-700 border border-primary-200'
        }`}>
          {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
          {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
          {status.type === 'loading' && (
            <div className="w-5 h-5 border-2 border-primary-600 border-t-transparent rounded-full animate-spin" />
          )}
          <span className="text-sm">{status.message}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status.type === 'loading'}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {status.type === 'loading' ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Request</span>
          </>
        )}
      </button>

      <p className="text-xs text-secondary-500 text-center">
        * Required fields. By submitting the form you agree to our{' '}
        <a href="#" className="text-primary-600 hover:underline">
          privacy policy
        </a>
        .
      </p>
    </form>
  )
}

export default AppointmentForm 