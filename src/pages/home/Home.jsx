import React from 'react'
import './home.css'
import MainHeader from '../../Components/MainHeader'
import Programs from '../../Components/Programs'
import Values from '../../Components/Values'
import FAQs from '../../Components/FAQs'
function Home() {
  return (
    <>
      <MainHeader />
      <Programs />  
      <Values /> 
      <FAQs />
    </>
  )
}

export default Home
