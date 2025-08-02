import React from 'react'
import './Navbar.css' // Assuming you have a CSS file for styling
const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-3 bg-blue-800 text-white fixed w-full z-10'>
        <span className='text-2xl cursor-pointer'>Mothers Nest</span>
      <nav>
        <ol className='flex justify-between gap-9 text-xl '>
            <li className='hover:bg-blue-600 p-2 rounded-xl cursor-pointer'>Home</li>
            <li className='hover:bg-blue-600 p-2 rounded-xl cursor-pointer'>About</li>
            <li className='hover:bg-blue-600 p-2 rounded-xl cursor-pointer'>Contact</li>
        </ol>
      </nav>
    </div>
  )
}

export default Navbar
