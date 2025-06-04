import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://vetcare-family.com'),
  title: 'VetCare Family Clinic | Professional Veterinary Services in Bucharest',
  description: 'Professional veterinary care for your beloved pets. Located in Bucharest, we offer comprehensive veterinary services with a caring, family-oriented approach.',
  keywords: 'veterinary, vet clinic, pet care, Bucharest, Romania, animal hospital, pet health',
  authors: [{ name: 'VetCare Family Clinic' }],
  openGraph: {
    title: 'VetCare Family Clinic | Professional Veterinary Services',
    description: 'Professional veterinary care for your beloved pets in Bucharest.',
    type: 'website',
    locale: 'en_US',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 