import React, { useEffect } from "react";

import imageofDay from "../images/image-day.png";

// Import Components here
import WhiteButton from "../components/WhiteButton";
import BlueButton from "../components/BlueButton";

function ImageOfTheDay() {
  return (
    <a href="#" className="relative my-2">
      <img src={imageofDay} className="w-full" alt="" />
      <div className="absolute left-0 bottom-0 right-0">
        <BlueButton>
          <a href="" className="block"></a>Image of the Day
        </BlueButton>
        <WhiteButton>
          <a href="#">Quasars Rip Across Galaxies Like Tsunamis</a>
        </WhiteButton>
      </div>
    </a>
  );
}

export default ImageOfTheDay;
