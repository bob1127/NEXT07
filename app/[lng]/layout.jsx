'use client'
import '../../styles/globals.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Footer from '@/components/ui/footer'
import Banner from '@/components/banner'
import Navbar from '../../components/Navbar/Navbar'
import Email from '../../components/ui/email';
import ToggleMenu from '../../components/ToggleMenu/header'
import  {dir}  from 'i18next'
import { languages } from '../i18n/settings'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}


export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={` font-inter antialiased bg-white text-gray-900 tracking-tight`}>
      
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Navbar/>
          <ToggleMenu/>
          {children}
          <Banner />
          <Email/>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
