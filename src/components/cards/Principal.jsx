import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Context from "../../hooks/Context";




const Principal = () => {
  const contexto = useContext(Context);
  const [categorias, setCategorias] = useState("");
  const { Category } = useParams();
  /* console.log(Category); */

  useEffect(() => {
    setCategorias(Category);
  }, [Category]);


  function AddCart(objeto){
    const array=[...contexto.cart, objeto];
    contexto.setCart(array);
  }
  return (
    <>
      

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-10 p-8">
        {contexto.data.productos.map((items) => {
          if (items.category == categorias) {
            return (
              <div className="max-w-sm rounded-lg drop-shadow-2xl bg-white ">
                <a href="#">
                  <NavLink to={`/ViewProduct/${items.id}`}>
                    <img
                      className="p-8 rounded-t-lg"
                      src={items.image}
                      alt="product image"
                    />
                  </NavLink>
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-dark">
                      {items.name}
                    </h5>
                  </a>
                  <div className=" items-center mt-2.5 mb-5">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 ">
                      {items.peso}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900 dark:text-dark">
                      {items.price}
                    </span>
      
                    <button onClick={()=>AddCart(items)} className="btn btn-info text-base font-medium leading-none text-white">Agregar</button>
                  
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Principal;
