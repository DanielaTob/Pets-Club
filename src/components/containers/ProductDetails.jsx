import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Context from "../../hooks/Context";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const ProductDetails = () => {
  const info = useParams();
  const id = parseInt(info.id);
  const contexto = useContext(Context);
  /* console.log(contexto.info.productos);
   console.log(id); */

   const [counter, setCounter] = useState(1);
   function add() {
     setCounter(counter + 1);
   }
   function remove() {
     if (counter - 1 < 1) {
     } else setCounter(counter - 1);
   }


  function AddCart(objeto) {
    const contador={"counter":counter}
    const newObject=Object.assign(objeto, contador)
    const array = [...contexto.cart, newObject];
    contexto.setCart(array);
    console.log(counter);
  }

  const response = contexto.data.productos.filter((items) => items.id == id);
  /* console.log(response); */
  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={response[0].image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                PETS <span>CLUB</span>
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {response[0].name}
              </h1>
              <p className="leading-relaxed">{response[0].description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex items-center gap-10">
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 ">
                    {response[0].peso}
                  </span>

                  <div className="flex gap-3">
                    <button
                      onClick={remove}
                      className="btn btn-info btn-xs flex gap-3 pointer text-white"
                    >
                      <AiOutlineMinus />
                    </button>

                    <span className="text-black">{counter}</span>

                    <button
                      onClick={add}
                      className="btn btn-info btn-xs flex gap-3 pointer text-white"
                    >
                      <AiOutlinePlus />
                    </button>

                  </div>

                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {response[0].price}
                </span>
                
                
                <button onClick={()=>AddCart(response[0])} className="btn btn-info flex ml-auto font-medium text-white border-0 py-2 px-6">Agregar al carrito</button>


              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
