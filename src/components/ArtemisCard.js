import React, { useEffect } from "react";

import artemiscard from "../images/artemis-card.jpg";

// Import Components here
import WhiteButton from "../components/WhiteButton";
import BlueButton from "../components/BlueButton";

function ArtemisCard() {
  return (
    <>
      <a href="#" className="relative my-2 lg:col-start-3 lg:col-span-1">
        <img src={artemiscard} className="object-cover w-full" alt="" />{" "}
        <div className="absolute left-0 bottom-0 right-0">
          <BlueButton>
            <a href="" className="block"></a>Artemis
          </BlueButton>
          <WhiteButton>
            <a href="#">Meet the Artemis Team</a>
          </WhiteButton>
        </div>
      </a>
    </>
  );
}

export default ArtemisCard;
