import React, { useEffect } from "react";

import astronauts from "../images/artemis-astronauts.jpg";

// Import Components here
import WhiteButton from "../components/WhiteButton";
import BlueButton from "../components/BlueButton";

function BigCard() {
  return (
    <a className="relative my-2" href="#">
      <img src={astronauts} className="w-full" alt="" />
      <div className="absolute left-0 bottom-0 right-0">
        <BlueButton>
          <a href="" className="block">
            Commercial&nbsp;Crew
          </a>
        </BlueButton>
        <WhiteButton>
          <a href="#">
            NASA, ESA Choose Astronauts for SpaceX Crew-3 Mission to Space
            Station
          </a>
        </WhiteButton>
      </div>
    </a>
  );
}

export default BigCard;
