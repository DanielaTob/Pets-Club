import React, { useContext, useState } from "react";
import Context from "../../hooks/Context";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const CardCart = () => {
  const contexto = useContext(Context);

  const [counter, setCounter] = useState(1);
   function add() {
     setCounter(counter + 1);
   }
   function remove() {
     if (counter - 1 < 1) {
     } else setCounter(counter - 1);
   }

  
  return (
    <>
      {contexto.cart.map((items) => {
        return (
          <div class="flex justify-between items-center mt-6 pt-6">
            <div class="flex items-center">
              <img src={items.image} width="60" class="rounded-full" />
              <div class="flex flex-col ml-3">
                <span class="md:text-md font-medium text-black">
                  {items.name}
                </span>
              
                <div className="flex gap-3">

               <button
                      onClick={remove}
                      className="btn btn-info btn-xs flex gap-3 pointer text-white"
                    >
                      <AiOutlineMinus />
                    </button>

                    <span className="text-black">{items.counter}</span>

                    <button
                      onClick={add}
                      className="btn btn-info btn-xs flex gap-3 pointer text-white"
                    >
                      <AiOutlinePlus />
                    </button> 


                </div>


              </div>
            </div>
            <div class="flex justify-center items-center">
              <div class="pr-8 ">
                <span class="text-lg text-black font-medium">
                  {items.price}
                </span>
              </div>
              <button className="text-sky-400">
                <BsFillTrashFill className="cursor-pointer w-6 h-6" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardCart;
