import React from 'react'
import Product1 from '../../assets/images/product1.png'
import Addcart from '../buttons/Addcart'

export default function Principal() {
  return (

<div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-10 p-4'>
    <div class="max-w-sm rounded-lg drop-shadow-2xl bg-sky-100 ">
    <a href="#">
        <div>
        <img class="p-8 rounded-t-lg" src={Product1} alt="product image" />
        </div>
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-dark">Max Cat Adulto Pollo</h5>
        </a>
        <div class=" items-center mt-2.5 mb-5">
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 ">1.5 KG</span>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-3xl font-bold text-gray-900 dark:text-dark">$19.900</span>
            <Addcart />
        </div>
    </div>
</div>
<div class="max-w-sm rounded-lg drop-shadow-2xl bg-sky-100 ">
    <a href="#">
        <div>
        <img class="p-8 rounded-t-lg" src={Product1} alt="product image" />
        </div>
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-dark">Max Cat Adulto Pollo</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 ">1.5 KG</span>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-3xl font-bold text-gray-900 dark:text-dark">$19.900</span>
            <Addcart />
        </div>
    </div>
</div>


<div class="max-w-sm rounded-lg drop-shadow-2xl bg-sky-100 ">
    <a href="#">
        <div>
        <img class="p-8 rounded-t-lg" src={Product1} alt="product image" />
        </div>
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-dark">Max Cat Adulto Pollo</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 ">1.5 KG</span>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-3xl font-bold text-gray-900 dark:text-dark">$19.900</span>
            <Addcart />
        </div>
    </div>
</div>


<div class="max-w-sm rounded-lg drop-shadow-2xl bg-sky-100 ">
    <a href="#">
        <div>
        <img class="p-8 rounded-t-lg" src={Product1} alt="product image" />
        </div>
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-dark">Max Cat Adulto Pollo</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 ">1.5 KG</span>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-3xl font-bold text-gray-900 dark:text-dark">$19.900</span>
            <Addcart />
        </div>
    </div>
</div>

</div>

  )
}
