import React, { useEffect } from "react";

import NasaLogo from "../images/nasa-logo.svg";

const footerNavStyle = "mx-2 text-xs font-bold text-blue-400 hover:underline";

function Footer() {
  return (
    <>
      <div className="py-4">
        <div className="font-helvetica flex flex-col lg:flex-row text-sm font-semibold my-2">
          <img src={NasaLogo} className="h-16 w-fit" alt="NASA logo" />
          <div>
            <p>
              National&nbsp;Aeronautics&nbsp;and&nbsp;Space&nbsp;Administration
            </p>
            <p>NASA&nbsp;Official:&nbsp;Brian&nbsp;Dunbar</p>
          </div>
        </div>
        <nav className="px-2 mr-0">
          <ul className="flex flex-col lg:flex-row lg:justify-end">
            <li className={footerNavStyle}>
              <a href="#">No Fear Act</a>
            </li>
            <li className={footerNavStyle}>
              <a href="#">FOIA</a>
            </li>
            <li className={footerNavStyle}>
              <a href="#">Privacy</a>
            </li>
            <li className={footerNavStyle}>
              <a href="#">Office of Inspector General</a>
            </li>
            <li className={footerNavStyle}>
              <a href="#">Office of Special Counsel</a>
            </li>
            <li className={footerNavStyle}>
              <a href="#">Agency Financial Reports</a>
            </li>
            <li className={footerNavStyle}>
              <a href="#">Contact NASA</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Footer;
