import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Courses from '../components/Courses'
import WhyChooseUs from '../components/WhyChooseUs'
import Form from '../components/Form'

const Home = () => {
  return (
   <>
     <Hero/>
     <About/>
    <Courses/>
    <WhyChooseUs/>
     <Form/>
   </>
  )
}

export default Home