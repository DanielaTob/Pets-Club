import React from 'react'

export default function Buttoncategories() {
  return (
    <div className='mt-8 flex gap-3 justify-center items-center w-full'>
        <button className="items-center hover:bg-sky-400 bg-sky-500 flex justify-center sm:w-32 w-full h-10 py-3 rounded-full">
            <p className="text-base font-medium leading-none text-white">Alimento</p>
        </button>

        <button className="items-center hover:bg-sky-400 bg-sky-500 flex justify-center sm:w-32 w-full h-10 py-3 rounded-full">
            <p className="text-base font-medium leading-none text-white">Cuidado</p>
        </button>
    </div>
  )
}
