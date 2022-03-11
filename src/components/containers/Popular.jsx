import React from 'react'
import MarcasPopulares from '../cards/MarcasPopulares'


export default function Popular() {
  return (
    <div>
        <h1 className="flex justify-center items-center pt-20 xl:text-3xl text-2xl font-bold leading-9 text-gray-900">Marcas Populares</h1>
        <MarcasPopulares />
    </div>
  )
}
