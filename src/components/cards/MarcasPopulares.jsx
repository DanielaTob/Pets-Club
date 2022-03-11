import React from 'react'
import { Link } from 'react-router-dom'
import Addcart from '../buttons/Addcart'
import Product1 from '../../assets/images/p4.jpg'

const MarcasPopulares = () => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-10 p-8">
            <div className="max-w-sm rounded-lg drop-shadow-2xl bg-white ">
              <a href="#">
                <Link to="/ViewProduct">
                  <img
                    className="p-8 rounded-t-lg"
                    src={Product1}
                    alt="product image"
                  />
                </Link>
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-dark">
                    Max Cat Adulto Pollo
                  </h5>
                </a>
                <div className=" items-center mt-2.5 mb-5">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 ">
                    1.5 KG
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-gray-900 dark:text-dark">
                    $19.900
                  </span>
                  <Addcart />
                </div>
              </div>
            </div>
          </div>
  )
}

export default MarcasPopulares
