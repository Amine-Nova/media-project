import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Services from './components/Services/Services'

const App = () => {
  return<>
    <main className='overflow-x-hidden'>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Footer />
    </main>
    </>
}

export default App
