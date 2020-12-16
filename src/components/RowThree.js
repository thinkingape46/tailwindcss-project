import React, { useEffect } from "react";

import ImageOfTheDay from "./ImageOfTheDay";
import CoronaVirus from "./CoronaVirus";
import NasaAtHome from "./NasaAtHome";
import Kennedy from "./Kennedy";

function RowThree() {
  return (
    <div className="grid grid-cols-1 my-0 md:grid-cols-2 lg:grid-cols-4 gap-2">
      <ImageOfTheDay />
      <CoronaVirus />
      <NasaAtHome />
      <Kennedy />
    </div>
  );
}

export default RowThree;
