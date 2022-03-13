import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function ContinueShop() {
  return (
    <Link to="/Category/Alimento" class="flex items-center">
      <button class="btn btn-info gap-2 text-white"><FaArrowLeft />Sigue comprando</button>
    </Link>
  );
}
