import React from "react";
import Logo from "../../assets/images/logo.png"
import { MdHome } from "react-icons/md";
import { MdShoppingBag  } from "react-icons/md";
import { MdShoppingCart  } from "react-icons/md";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between py-2 bg-white mb-3 shadow-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <img
                  className="h-20 w-20"
                  src={Logo}
                  alt="Logo"
              />
              
              <div className=" flex flex-wrap items-center">
                <ul className="flex lg:flex-row md:flex-row sm:flex-row list-none ml-auto">
                  <li className="nav-item">
                    <Link to="/" className="px-3 py-2 flex  items-center text-sky-400 hover:opacity-75">
                      <MdHome className="h-9 w-9  text-sky-400 opacity-75" />
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/Shop" className="px-3 py-2 flex items-center text-sky-400 hover:opacity-75">
                      <MdShoppingBag className="h-9 w-9  text-sky-400 opacity-75"/>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/Cart" className="px-3 py-2 flex items-center text-sky-400 hover:opacity-75">
                      <MdShoppingCart className="h-9 w-9 text-sky-400 opacity-75"/>
                    </Link>
                  </li>

                </ul>
              </div>
        </div>
      </nav>
    </div>
  );
}
