import React, { useEffect } from "react";

import RowOne from "./RowOne";
import RowTwo from "./RowTwo";
import RowThree from "./RowThree";

function Grid() {
  return (
    <div className="my-auto py-2">
      <RowOne />
      <RowTwo />
      <RowThree />
    </div>
  );
}

export default Grid;
