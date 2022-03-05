import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import image1 from "../../assets/images/carouseel1.jpg";

export default function Carousel() {
  return (
    <Slider>
      <img src={image1}/>
      <img src="https://s18.postimg.cc/vunvhvvrt/img2.jpg" />
      <img src="https://s18.postimg.cc/tdc4amjl5/img3.jpg" />
    </Slider>
  );
}
