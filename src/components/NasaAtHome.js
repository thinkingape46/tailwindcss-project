import React, { useEffect } from "react";

import nasaAtHome from "../images/nasa-at-home.jpg";

// Import Components here
import WhiteButton from "../components/WhiteButton";

function NasaAtHome() {
  return (
    <a href="#" className="relative my-2">
      <img src={nasaAtHome} className="w-full" alt="NASA at home" />
      <WhiteButton>
        <a href="#">Let NASA Bring the Universe to You</a>
      </WhiteButton>
    </a>
  );
}

export default NasaAtHome;
