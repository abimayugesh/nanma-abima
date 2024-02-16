import React from 'react'
import Navbar from '../../components/blocks/Navbar'
import Hero from './components/blocks/Hero'
import Category from './components/blocks/Category'
import Product from './components/blocks/Product'
import Footer from '../../components/blocks/Footer'
function Home() {
  return (
    <div>
      <Navbar/>
    <Hero/>
    <Category/>
    <Product/>
    <Footer/>
    </div>
  )
}

export default Home
