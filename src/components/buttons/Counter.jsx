import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

export default function Counter() {
  const [counter, setCounter] = useState(1);
  function add() {
    setCounter(counter + 1);
  }
  function remove() {
    if (counter - 1 < 1) {
    } else setCounter(counter - 1);
  }
  return (
    <div className="flex gap-3">
            <button onClick={remove} className="btn btn-info btn-xs flex gap-3 pointer text-white">
                <AiOutlineMinus />
            </button>

            <span className="text-black">{counter}</span>

            <button onClick={add} className="btn btn-info btn-xs flex gap-3 pointer text-white">
                <AiOutlinePlus />
            </button>

    </div>
  );
}
