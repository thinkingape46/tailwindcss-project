import React, { useEffect } from "react";

import artemis from "../images/artemis.jpg";

// Import Components here
import WhiteButton from "../components/WhiteButton";
import BlueButton from "../components/BlueButton";

function Artemis() {
  return (
    <a className="relative gap-2">
      <img src={artemis} className="w-full object-fill" alt="" />
      <div className="absolute left-0 bottom-0 right-0">
        <BlueButton>
          <a href="" className="block"></a>Artemis
        </BlueButton>
        <WhiteButton>
          <a href="#">
            NASA Administrator Signs Statement of Intent with Brazil on Artemis
          </a>
        </WhiteButton>
      </div>
    </a>
  );
}

export default Artemis;
