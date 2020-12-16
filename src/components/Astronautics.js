import React, { useEffect } from "react";

import astronautics from "../images/astronautics.jpg";

// Import Components here
import WhiteButton from "../components/WhiteButton";
import BlueButton from "../components/BlueButton";

function Astronautics() {
  return (
    <>
      <a className="relative">
        <img src={astronautics} className="w-full" alt="" />{" "}
        <div className="absolute left-0 bottom-0 right-0">
          <BlueButton>
            <a href="" className="block"></a>Astronautics
          </BlueButton>
          <WhiteButton>
            <a href="#">
              NASA’s Supersonic X-59 Assembly Team Marks Wing Milestone
            </a>
          </WhiteButton>
        </div>
      </a>
    </>
  );
}

export default Astronautics;
