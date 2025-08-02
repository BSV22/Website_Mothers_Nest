import React from 'react'
import './Cards.css' // Assuming you have a CSS file for styling

const Cards = (props) => {
  return (
    <div className='flex flex-col items-center justify-center p-4 bg-gray-200 shadow-lg rounded-2xl max-w-80 mx-4 my-2 min-h-30 min-w-80 hover:bg-gray-300'>
      <h1 className='font-bold text-xl'>{props.title}</h1>
      <p className='text-gray-500'>{props.content}</p>
    </div>
  )
}

export default Cards
  