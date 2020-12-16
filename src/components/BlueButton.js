import React, { useEffect } from "react";

function BlueButton(props) {
  return (
    <>
      <div className="bg-cardBlue font-titilium block w-fit py-1.5 px-3">
        {props.children}
      </div>
    </>
  );
}

export default BlueButton;
