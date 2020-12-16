import React, { useEffect } from "react";

import meteor from "../images/meteor.jpg";

// Import Components here
import WhiteButton from "../components/WhiteButton";
import BlueButton from "../components/BlueButton";

function Meteor() {
  return (
    <>
      <a className="relative" href="#">
        <img src={meteor} className="object-cover w-full" alt="" />
        <div className="absolute left-0 bottom-0 right-0">
          <BlueButton>
            <a href="" className="block"></a>Solar System and Beyond
          </BlueButton>
          <WhiteButton>
            <a href="#">New Hubble Data Explains Missing Dark Matter</a>
          </WhiteButton>
        </div>
      </a>
    </>
  );
}

export default Meteor;
