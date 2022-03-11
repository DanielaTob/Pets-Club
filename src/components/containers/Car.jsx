import React from 'react'
import product1 from '../../assets/images/p1.jpg'

function Car() {
    
    return (
        
            <div className='"h-screen bg-gray-300"'>
                <div className='py-12'>
                    <div className='max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg md:max-w-5xl'>
                        <div className='md:flex '>
                            <div className='w-full p-4 px-5 py-5'>
                                <div className='md:grid md:grid-cols-3 gap-2 '>
                                    <div className='col-span-2 p-5'>
                                    <h1 className="text-xl font-medium ">Resumen Productos</h1>
                                        <div className="flex justify-between items-center mt-6 pt-6">
                                            <div className="flex items-center"> <img className="h-24 w-24 mask mask-squircle" src={product1}/>
                                                <div className="flex flex-col ml-3"> <span className="md:text-md font-medium">Chicken momo</span>
                                                    <span className="text-xs font-light text-gray-400">datos</span> 
                                                </div>
                                            </div>

                                            


                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            


    );
}

export default Car;


