import React, { useEffect } from "react";

import kennedy from "../images/elana.jpg";

// Import Components here
import WhiteButton from "../components/WhiteButton";

function Kennedy() {
  return (
    <a href="#" className="relative">
      <img src={kennedy} className="w-full" alt="" />
      <WhiteButton>
        <a href="#">Quasars Rip Across Galaxies Like Tsunamis</a>
      </WhiteButton>
    </a>
  );
}

export default Kennedy;
