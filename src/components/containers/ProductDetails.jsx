import React, { useContext } from "react";
import AddView from "../buttons/AddView";
import { useParams } from "react-router-dom";
import Context from "../../hooks/Context";
import Counter from "../buttons/Counter";

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
                <div className="flex items-center gap-10">
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 ">
                    {response[0].peso}
                  </span>
                  
                  
                    <Counter/>
                  
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
