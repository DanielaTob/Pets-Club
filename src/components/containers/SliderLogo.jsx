import React from "react";
import Marquee from "react-fast-marquee";
import Logo1 from '../../assets/images/logo1.png'
import Logo2 from '../../assets/images/logo2.png'
import Logo3 from '../../assets/images/logo3.png'
import Logo4 from '../../assets/images/logo4.png'
import Logo5 from '../../assets/images/logo5.png'

export default function SliderLogo() {
  return (
    <div className="py-10">
      <Marquee speed={80}>
        <div className="px-10">
            <img src={Logo1} alt=""/>
        </div>

        <div className="px-10">
            <img src={Logo2} alt=""/>
        </div>

        <div className="px-10">
            <img src={Logo3} alt=""/>
        </div>

        <div className="px-10">
            <img src={Logo4} alt=""/>
        </div>

        <div className="px-10">
            <img src={Logo5} alt=""/>
        </div>
      </Marquee>
    </div>
  );
}
