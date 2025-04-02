import { ClerkProvider } from '@clerk/nextjs'
import { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ADHD-portalen',
  description: 'Kurs, forum og støtte for deg med eller rundt ADHD.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="no">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Navbar />
          {children}
        </body>
        <Footer />
      </html>
    </ClerkProvider>
  )
}
