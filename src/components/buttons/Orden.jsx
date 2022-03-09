import React from 'react'
import { Link } from 'react-router-dom'

export default function Orden() {
  return (
    <div className='pt-6'>
      <Link to="/Category">
        <button class="btn btn-info text-base font-medium leading-none text-white">Ordenar</button>
        </Link>
    </div>
  )
}
