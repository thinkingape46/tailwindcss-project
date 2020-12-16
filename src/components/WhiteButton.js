import React, { useEffect } from "react";

function WhiteButton(props) {
  return (
    <>
      <div className="text-black font-titilium py-1.5 px-3 bg-white bg-opacity-80 hover:bg-opacity-100">
        {props.children}
      </div>
    </>
  );
}

export default WhiteButton;
