import React, { useContext } from "react";
import AddView from "../buttons/AddView";
import product1 from "../../assets/images/p4.jpg";
import { useParams } from "react-router-dom";
import Context from "../../hooks/Context";

const ProductDetails = () => {
  const info = useParams();
  const id = parseInt(info.id);
  const contexto = useContext(Context);
  /* console.log(contexto.info.productos);
   console.log(id); */

  const response = contexto.data.productos.filter((items) => items.id == id);
  console.log(response);
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
                <div className="flex items-center">
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 ">
                    {response[0].peso}
                  </span>
                  <span className="mr-3">Cantidad</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>

                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {response[0].price}
                </span>
                <AddView />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
