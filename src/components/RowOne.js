import React, { useEffect } from "react";
import BigCard from "./BigCard";
import ArtemisCard from "./ArtemisCard";
import News from "./News";
import Meteor from "./Meteor";

function RowOne() {
  return (
    <div className="grid grid-cols-2 my-1">
      <BigCard />
      <div>
        <div className="grid grid-cols-2">
          <ArtemisCard />
          <News />
        </div>
        <Meteor />
      </div>
    </div>
  );
}

export default RowOne;
