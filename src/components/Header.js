import React, { useState, useEffect } from "react";

// Load images
import nasaLogo from "../images/nasa-logo.svg";
import searchImage from "../images/search.svg";
import shareImage from "../images/share.svg";

function Header() {
  const navListStyleOne = "px-2.5 py-3 my-auto font-nav text-xl";
  const navListStyleTwo = "p-2.5 font-nav bg-555 text-sm";

  return (
    <header className="max-w-1366 flex justify-between bg-startfield pt-4 my-auto mx-36 py-4">
      <img src={nasaLogo} alt="NASA logo" />
      <nav className="flex flex-col">
        <ul className="flex divide-x-2 divide-gray-600 ml-20 my-5">
          <li className={navListStyleOne}>Missions</li>
          <li className={navListStyleOne}>Galleries</li>
          <li className={navListStyleOne}>NASA&nbsp;TV</li>
          <li className={navListStyleOne}>Follow&nbsp;NASA</li>
          <li className={navListStyleOne}>Downloads</li>
          <li className={navListStyleOne}>About</li>
          <li className={navListStyleOne}>NASA&nbsp;Audiences</li>
          <input
            placeholder="search"
            className="bg-333 bg-search bg-no-repeat bg-right h-4/5 ml-2 my-auto pl-2 text-white text-m placeholder-gray-800::placeholder"
          />
          <a href="#" className="flex w-10">
            <img src={shareImage} alt="" className="m-auto" />
          </a>
        </ul>
        <ul className="flex divide-x-2 divide-gray-888">
          <li className={navListStyleTwo}>Humans&nbsp;in&nbsp;Space</li>
          <li className={navListStyleTwo}>Moon&nbsp;to&nbsp;Mars</li>
          <li className={navListStyleTwo}>Earth</li>
          <li className={navListStyleTwo}>Space&nbsp;Tech</li>
          <li className={navListStyleTwo}>Flight</li>
          <li className={navListStyleTwo}>
            Solar&nbsp;System&nbsp;and&nbsp;Beyond
          </li>
          <li className={navListStyleTwo}>STEM&nbsp;Engagement</li>
          <li className={navListStyleTwo}>History</li>
          <li className={navListStyleTwo}>Benefits&nbsp;to&nbsp;You</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
