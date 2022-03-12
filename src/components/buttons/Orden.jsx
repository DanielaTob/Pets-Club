import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Orden() {
  return (
    <div className='pt-6'>
      <NavLink to="/Category/Alimento">
        <button className="btn btn-info text-base font-medium leading-none text-white">Ordenar</button>
        </NavLink>
    </div>
  )
}
