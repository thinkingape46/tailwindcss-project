import React, { useEffect } from "react";
import BigCard from "./BigCard";
import ArtemisCard from "./ArtemisCard";
import News from "./News";

function RowOne() {
  return (
    <>
      <div className="grid grid-cols-1 my-0 gap-1">
        <BigCard />
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <ArtemisCard />
        <News />
      </div>
    </>
  );
}

export default RowOne;
