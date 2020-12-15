import React, { useEffect } from "react";

import artemiscard from "../images/artemis-card.jpg";

function ArtemisCard() {
  return (
    <a href="#" className="">
      <img src={artemiscard} className="object-cover w-full" alt="" />
    </a>
  );
}

export default ArtemisCard;
