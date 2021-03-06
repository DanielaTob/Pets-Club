import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Buttoncategories() {
  return (
    <div className="mt-8 flex gap-3 justify-center items-center w-full">
    <NavLink
      to={"Alimento"}
      className="btn btn-info items-center flex justify-center sm:w-32 h-10 py-3">
      <p className="text-base font-medium leading-none text-white">Alimento</p>
    </NavLink>
    <NavLink
      to={"Cuidado"}
      className="btn btn-info items-center flex justify-center sm:w-32 h-10 py-3">
      <p className="text-base font-medium leading-none text-white">Cuidado</p>
    </NavLink>
    </div>
  )
}
