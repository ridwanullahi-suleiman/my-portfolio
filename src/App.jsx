import './App.css'
import React, { Suspense, lazy } from "react";
import LoadingSinner from './components/LoadingSpinner'
import ThreeBackground from './components/ThreeBackground';
const NavBar = lazy(() => import("./components/NavBar"));
import Hero from './components/HeroSection'
import NumberSection from './components/NumberSection';
import ServiceSection from './components/ServiceSection';
import WhyMe from './components/WhyMe';
import ProjectSection from './components/ProjectSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/FooterSection';
import ButtonToTop from './components/ButtonToTop';



export default function App() {
  return (
    <div className='bg-black min-h-screen'>
       <ThreeBackground />
      <div className='relative z-10'>
        <Suspense 
          fallback={
            <div className='flex justify-center items-center min-h-screen'>
              <LoadingSinner />
            </div>
          }
        >
          
          <NavBar />
          <Hero />
          <NumberSection />
          <ServiceSection />
          <WhyMe />
          <ProjectSection />
          <TestimonialsSection/>
          <ContactSection />
          <Footer />
          <ButtonToTop/>
         </Suspense> 
      </div>
    </div>
  )
}
