import React from 'react'
import './Navbar.css' // Assuming you have a CSS file for styling
const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-blue-800 text-white fixed w-full z-10'>
        <span className='text-2xl'>Mothers Nest</span>
      <nav>
        <ol className='flex justify-between gap-9 text-xl'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ol>
      </nav>
    </div>
  )
}

export default Navbar
