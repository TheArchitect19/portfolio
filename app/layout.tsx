import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import './globals.css'

import Navbar from './components/navbar'
import Footer from './components/footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Swapnil Sachan | Portfolio',
  description: 'This is my personal portfolio website.',

  icons: [
    { rel: "icon", type:"image/png", sizes:"32x32", url:"/favicon/favicon-32x32.png" },
    { rel: "icon", type:"image/png", sizes:"16x16", url:"/favicon/favicon-16x16.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/favicon/apple-touch-icon.png" }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet" />

        <link rel='favicon' href='/favicon/favicon.ico' />
      </head>

      <body className={`${montserrat.className} transition ease-linear duration-200`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
