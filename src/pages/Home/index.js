import MKBox from 'components/MKBox'
import React from 'react'
import Hero from './components/Hero'

import Navbar from './components/Navbar'
import Specials from './components/Specials'
import Chef from './components/Chef'
import Reviews from './components/Reviews'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

const Home = () => {
  return (
    <MKBox overflow="hidden">
        <Navbar />
        <Hero />
        <Specials />
        <Chef />
        <Reviews />
        <Subscribe />
        <Footer />
    </MKBox>
  )
}

export default Home