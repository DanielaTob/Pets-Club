import React from 'react'
import { Link } from 'react-router-dom'


export default function Buttonhome() {
  return (
    
      <Link to="/Shop" className='flex items-center justify-center'>
        <button className='hover:bg-sky-400 bg-sky-500 delay-75 duration-100 text-white text-sm font-bold rounded-2xl w-96 py-3 mt-0 border-b-4 border-b-sky-600'>COMENCEMOS</button>
      </Link>
  )
}
