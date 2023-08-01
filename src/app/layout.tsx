import { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

import { Oxanium } from 'next/font/google'

const oxanium = Oxanium({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: 'Andrei Cotfas',
  description: 'Personal trainer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={oxanium.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
