import React from "react";
import ContinueShop from "../buttons/ContinueShop";
import CardCart from "../cards/CardCart";


function Car() {
  return (
    <div class="bg-white">
      <div class="py-12">
        <div class="max-w-md mx-auto bg-white shadow-2xl rounded-lg md:max-w-5xl">
          <div class="md:flex ">
            <div class="w-full p-4 px-5 py-5">
              <div class="md:grid md:grid-cols-3 gap-2 ">
                <div class="col-span-2 p-5">
                  <h1 class="text-xl font-medium text-black">Carrito de compras</h1>

                    <CardCart />
                  
                  <div class="flex justify-between items-center mt-6 pt-6 border-t">
                    <ContinueShop />
                  </div>
                </div>
                <div class=" p-5 bg-sky-200 rounded overflow-visible">
                  
                  <span class="text-xl font-medium text-black block pb-3">
                    Detalles de la compra
                  </span>
                  <span class="text-xs text-gray-400 ">Total</span>
                  <div class="overflow-visible flex justify-between items-center mt-2"></div>
                  <div class="grid grid-cols-3 gap-2 pt-2 mb-3"></div>
                  <button class="btn btn-wide btn-info text-white">
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
