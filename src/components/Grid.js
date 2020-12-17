import React, { useEffect } from "react";

import BigCard from "./BigCard";
import ArtemisCard from "./ArtemisCard";
import News from "./News";
import Meteor from "./Meteor";
import Artemis from "./Artemis";
import Earth from "./Earth";
import Astronautics from "./Astronautics";
import ImageOfTheDay from "./ImageOfTheDay";
import CoronaVirus from "./CoronaVirus";
import NasaAtHome from "./NasaAtHome";
import Kennedy from "./Kennedy";

function Grid() {
  return (
    <div className="my-auto py-2 grid grid-flow-row md:grid-rows-6 md:grid-cols-2 md:gap-1 lg:grid-rows-4 lg:grid-cols-4 lg:gap-2">
      <BigCard />
      <ArtemisCard />
      <News />
      <Meteor />
      <Artemis />
      <Earth />
      <Astronautics />
      <ImageOfTheDay />
      <CoronaVirus />
      <NasaAtHome />
      <Kennedy />
    </div>
  );
}

export default Grid;
