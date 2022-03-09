import React from 'react'
import Product1 from '../../assets/images/product1.png'
import Addcart from '../buttons/Addcart'

export default function Principal() {
  return (
    <div class="max-w-sm bg-white drop-shadow-2xl rounded-lg dark:bg-white dark:border-gray-700">
        <a href="#">
            <img class="p-8 rounded-t-lg" src={Product1} alt="product image" />
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-dark">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">1.5KG</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-3xl font-bold text-gray-900 dark:text-dark">$599</span>
                <Addcart />
            </div>
        </div>
    </div>
  )
}
