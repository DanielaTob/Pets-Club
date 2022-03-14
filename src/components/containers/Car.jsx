import React, { useContext } from "react";
import Context from "../../hooks/Context";
import ContinueShop from "../buttons/ContinueShop";
import CardCart from "../cards/CardCart";


function Car() {
  const contexto = useContext(Context);
  const sumTotal = () => {
    const reducer = (accumalator, currentValue) => {
    const { price } = currentValue;
      return accumalator + price;
    };
    const sum = contexto.cart.reduce(reducer, 0);
    console.log(contexto);
    return sum;
  };
  

  return (
    <div className="bg-white">
      <div className="py-12">
        <div className="max-w-md mx-auto bg-white shadow-2xl rounded-lg md:max-w-5xl">
          <div className="md:flex ">
            <div className="w-full p-4 px-5 py-5">
              <div className="md:grid md:grid-cols-3 gap-2 ">
                <div className="col-span-2 p-5">
                  <h1 className="text-xl font-medium text-black">Carrito de compras</h1>

                    <CardCart />
                  
                  <div className="flex justify-between items-center mt-6 pt-6 border-t">
                    <ContinueShop />
                  </div>
                </div>
                <div className=" p-5 bg-sky-200 rounded overflow-visible">
                  
                  <span className="text-xl font-medium text-black block pb-3">
                    Detalles de la compra
                  </span>
                  <span className="text-xs text-gray-400 ">{sumTotal()}</span>
                  <div className="overflow-visible flex justify-between items-center mt-2"></div>
                  <div className="grid grid-cols-3 gap-2 pt-2 mb-3"></div>
                  <button className="btn btn-wide btn-info text-white">
                    Finalizar compra
                  </button>
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
