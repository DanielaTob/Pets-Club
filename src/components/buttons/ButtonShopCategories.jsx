import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ButtonShopCategories() {
  return (
      <div>
    <h1 className="flex justify-center items-center py-2 xl:text-3xl text-2xl font-bold leading-9 text-gray-900">Categorías</h1>
    <div className="mt-8 flex gap-3 justify-center items-center w-full">
    <NavLink
      to="/Category/Alimento"
      className="btn btn-info items-center flex justify-center sm:w-32 h-10 py-3">
      <p className="text-base font-medium leading-none text-white">Alimento</p>
    </NavLink>
    <NavLink
      to="/Category/Cuidado"
      className="btn btn-info items-center flex justify-center sm:w-32 h-10 py-3">
      <p className="text-base font-medium leading-none text-white">Cuidado</p>
    </NavLink>
    </div>
    </div>
  )
}
