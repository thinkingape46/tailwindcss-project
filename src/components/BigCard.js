import React, { useEffect } from "react";

import astronauts from "../images/artemis-astronauts.png";

// Import Components here
import WhiteButton from "../components/WhiteButton";
import BlueButton from "../components/BlueButton";

function BigCard() {
  return (
    <a className="relative" href="#">
      <img src={astronauts} className="w-full h-72 object-cover" alt="" />
      <div className="absolute left-0 bottom-0 right-0">
        <BlueButton>
          <a href="" className="block">
            In Lunar Orbit
          </a>
        </BlueButton>
        <WhiteButton>
          <a href="#">
            NASA, Canadian Space Agency Formalize Gateway Partnership for
            Artemis Program
          </a>
        </WhiteButton>
      </div>
    </a>
  );
}

export default BigCard;
