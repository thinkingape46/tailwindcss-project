import React, { useEffect } from "react";

import earth from "../images/earth.png";

// Import Components here
import WhiteButton from "../components/WhiteButton";
import BlueButton from "../components/BlueButton";

function Earth() {
  return (
    <>
      <a className="relative h-full object-cover w-full lg:col-start-2 lg:col-span-2">
        <img src={earth} alt="" className="h-full w-full" />
        <div className="absolute left-0 bottom-0 right-0">
          <BlueButton>
            <a href="" className="block"></a>Earth
          </BlueButton>
          <WhiteButton>
            <a href="#">Seeing the COVID-19 Pandemic from Space</a>
          </WhiteButton>
        </div>
      </a>
    </>
  );
}

export default Earth;
