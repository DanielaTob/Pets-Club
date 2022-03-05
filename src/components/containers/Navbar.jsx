import React from "react";
import Logo from "../../assets/images/logo.png"

export default function Navbar() {
  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between py-2 bg-white mb-3 shadow-lg">
        <div className="px-20">
              <img
                  className="h-20 w-20"
                  src={Logo}
                  alt="Logo"
              />
        </div>        
      </nav>
    </div>
  );
}
