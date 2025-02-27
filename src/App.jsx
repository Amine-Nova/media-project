import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/footer'

const App = () => {
  return<>
    <main className='overflow-x-hidden'>
    <Navbar />
    <Hero />
    <Footer />
    </main>
    </>
}

export default App
