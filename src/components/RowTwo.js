import React, { useEffect } from "react";

// Import components
import Meteor from "./Meteor";
import Artemis from "./Artemis";
import Earth from "./Earth";
import Astronautics from "./Astronautics";

function RowTwo() {
  return (
    <div className="grid gap-2 my-0 md:grid-cols-2">
      <Meteor />
      <Artemis />
      <Earth />
      <Astronautics />
    </div>
  );
}

export default RowTwo;
