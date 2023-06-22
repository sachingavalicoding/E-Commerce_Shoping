import React from 'react'
import './home.css'
import MainHeader from '../../Components/MainHeader'
import Programs from '../../Components/Programs'
import Values from '../../Components/Values'
import FAQs from '../../Components/FAQs'
import Testimonials from '../../Components/Testimonials'
import Footor from '../../Components/Footor'
function Home() {
  return (
    <>
      <MainHeader />
      <Programs />  
      <Values /> 
      <FAQs />
      <Testimonials />
      <Footor />
    </>
  )
}

export default Home
