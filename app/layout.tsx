import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Swapnil Sachan',
  description: 'This is my portfolio website, where you can get to know more about my career in tech and other spaces.  My projects, experiences and contact links can also be found here.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} transition ease-in-out duration-500`}>
        <Navbar />
        <div className='w-full xl:flex xl:flex-col xl:items-center'>
          {children}
        </div>
      </body>
    </html>
  )
}
