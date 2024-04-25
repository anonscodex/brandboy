import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navibar from './components/Navibar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'


function App() {
  

  return (
    <>
      <Navibar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <Hero />
      </div>
      <Portfolio />
      <Services />
    </>
      
  )
}

export default App
