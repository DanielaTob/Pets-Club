import React, {useContext} from 'react'
import Context from '../../hooks/Context'


export default function Indicator() {
  const contexto = useContext(Context);
  
  return (
    <div className='indicator'>
        <span className="indicator-item text-white badge bg-red-700 border-none">{contexto.cart.length}</span> 
    </div>
  )
}
