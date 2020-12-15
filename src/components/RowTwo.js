import React, { useEffect } from "react";

import Artemis from "./Artemis";
import Earth from "./Earth";
import Astronautics from "./Astronautics";

function RowTwo() {
  return (
    <div className="grid grid-cols-4 gap-1 my-1">
      <Artemis />
      <Earth />
      <Astronautics />
    </div>
  );
}

export default RowTwo;
