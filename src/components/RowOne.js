import React, { useEffect } from "react";
import BigCard from "./BigCard";
import ArtemisCard from "./ArtemisCard";
import News from "./News";
import Meteor from "./Meteor";

function RowOne() {
  return (
    <div className="grid grid-cols-2 my-1 gap-1">
      <BigCard />
      <div className="grid gap-1">
        <div className="grid grid-cols-2 gap-1">
          <ArtemisCard />
          <News />
        </div>
        <Meteor />
      </div>
    </div>
  );
}

export default RowOne;
