import React, { useEffect } from "react";

import RowOne from "./RowOne";
import RowTwo from "./RowTwo";
import RowThree from "./RowThree";

function Grid() {
  return (
    <div className="pt-4 my-auto py-4">
      <RowOne />
      <RowTwo />
      <RowThree />
    </div>
  );
}

export default Grid;
