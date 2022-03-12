import React, { useContext, useState } from "react";
import Context from "../../hooks/Context";
import Counter from "../buttons/Counter";
import { BsFillTrashFill } from "react-icons/bs";

const CardCart = () => {
  const contexto = useContext(Context);
  const [cart, setCart] = useState(contexto.cart);
  console.log(contexto.cart);
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
                <Counter />
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
