import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Cards from './components/Cards.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <>
      <Navbar />

      <div className='flex flex-col items-center justify-center min-h-90 bg-gray-100'>
        <h1 className="text-3xl font-bold text-center m-10">Mothers Nest</h1>
      </div>
      <div className='flex flex-col '>
        <h1 className='text-center text-3xl font-bold py-8'>Quick Access</h1>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-4'>
        <Cards title="Admissions" content="Learn About Admission process and requirements" />
        <Cards title="Fee Structure" content="Know our Fee Structure and payment options" />
        <Cards title="Events" content="Stay Updated on school Events and important dates" />
      </div>
      <div className='flex flex-col '>
        <h1 className='text-center text-3xl font-bold py-8'>Explore our Programs</h1>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-4'>
        <Cards title="Academic Programs" content="Learn About Admission Programs" />
        <Cards title="Art And Culture" content="Events and Activities related to Art And Culture" />
        <Cards title="Sports" content="WE also organise Annual Sports Day" />
      </div>

      <footer className='flex justify-center bg-cyan-950 text-amber-50' >Thank you</footer>
    </>
  )
}

export default App
