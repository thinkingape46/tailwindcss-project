import React, { useEffect } from "react";

import coronavirus from "../images/nasa-logo-2.jpg";

// Import Components here
import WhiteButton from "../components/WhiteButton";

function CoronaVirus() {
  return (
    <a href="#" className="relative">
      <img src={coronavirus} className="w-full" alt="" />
      <WhiteButton>
        <a href="#">NASA Response to Coronavirus</a>
      </WhiteButton>
    </a>
  );
}

export default CoronaVirus;
