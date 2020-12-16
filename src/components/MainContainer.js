import React, { useEffect } from "react";

function MainContainer(props) {
  return <div className="w-11/12 m-auto">{props.children}</div>;
}

export default MainContainer;
