import React from 'react'
import Imghero from '../../assets/images/3.jpg'
import Buttonhero from '../buttons/Buttonhero'

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row">
            <img src={Imghero} className="max-w-sm rounded-lg shadow-2xl"/>
        <div>
            <h1 className="text-5xl font-bold text-neutral-focus">Pets <span className='text-sky-400'>Club</span></h1>
            <p className="py-6 text-neutral-focus lg:text-2xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Buttonhero />
        </div>
        </div>
    </div>
  )
}
