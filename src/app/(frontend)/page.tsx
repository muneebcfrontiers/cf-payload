import React from 'react'

// import './styles.css'
import './globals.css'
import NavbarServer from '@/components/NavbarServer'
import Hero from '@/components/Hero'
// import { CompanySlider } from '@/components/Slider'
// import { AwardsGrid } from '@/components/Award'

export default async function HomePage() {

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Responsive Background Image */}
        <img
          src="/cfhero.png"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover md:object-contain z-0"
          style={{ objectPosition: 'top' }}
        />

        {/* Optional overlay for readability */}
        {/* <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0"></div> */}

        {/* Foreground content */}
        <div className="relative z-10">
          <NavbarServer />
          <Hero />
        </div>
      </div>
    </>
  )
}













// import PageTemplate, { generateMetadata } from './[slug]/page'

// export default PageTemplate

// export { generateMetadata }
