import React from "react";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import carru1 from "../../assets/images/carr2.jpg";
import carru2 from "../../assets/images/carr1.jpg";
import carru3 from "../../assets/images/carr3.jpg";


export default function Carousel() {
  return (
    
  <Slider autoplay={3000}>
	  <img src={carru1} />
	  <img src={carru2} />
	  <img src={carru3} />
  </Slider>
  );
}

