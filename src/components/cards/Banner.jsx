import React from 'react'
import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import Orden from '../buttons/Orden'

export default function Banner() {
  return (
    <div className="sm:mx-auto sm:container px-6 xl:px-0">
            <div className="flex items-center justify-between md:flex-row flex-col py-12 space-y-6 md:space-y-0 w-full">
                <div className="hidden md:block">
                    <img className="hidden xl:block w-full" src={img1} alt="img1" />
                    <img className="xl:hidden w-full" src={img1} alt="img1" />
                </div>
                <div className="flex justify-center items-center flex-col xl:w-2/5 md:px-6 sm:w-3/4 md:w-2/4">
                    <div className="">
                        <h1 className="xl:text-4xl text-3xl font-bold leading-9 text-gray-900">Pets <span className='text-sky-400'>Club</span></h1>
                    </div>
                    <div className="mt-4">
                        <p className="xl:text-xl text-base leading-7 text-center text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi vitae sed laudantium eum velit commodi non provident veritatis.</p>
                    </div>
                    <Orden />
                </div>
                <div className="flex md:w-auto w-full justify-center flex-row space-x-4 md:space-x-0">
                    <div className="w-full">
                        <img className="hidden xl:block w-full" src={img2} alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
                        <img className="xl:hidden w-full" src={img1} alt="sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1" />
                    </div>
                    <div className="md:hidden w-full">
                        <img className="hidden xl:block w-full" src={img1} alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
                        <img className="xl:hidden w-full" src={img2} alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1" />
                    </div>
                </div>
            </div>
        </div>
  )
}
