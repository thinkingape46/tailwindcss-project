import React, { useState, useEffect } from "react";

// Load images
import nasaLogo from "../images/nasa-logo.svg";
import searchImage from "../images/search.svg";
import shareImage from "../images/share.svg";

function Header() {
  const navListStyleOne = "px-2.5 py-3 my-auto font-titilium text-xl";
  const navListStyleTwo = "p-2.5 font-nav bg-555 text-sm";

  return (
    <header className="pt-4 py-4 flex bg-startfield">
      <img src={nasaLogo} alt="NASA logo" />
      <nav className="flex flex-col w-full">
        <ul className="flex flex-wrap divide-x-2 divide-gray-600 my-5 w-fit ml-48">
          <li className={navListStyleOne}>
            <a href="#">Missions</a>
          </li>
          <li className={navListStyleOne}>
            <a href="#">Galleries</a>
          </li>
          <li className={navListStyleOne}>
            <a href="#">NASA&nbsp;TV</a>
          </li>
          <li className={navListStyleOne}>
            <a href="#">Follow&nbsp;NASA</a>
          </li>
          <li className={navListStyleOne}>
            <a href="#">Downloads</a>
          </li>
          <li className={navListStyleOne}>
            <a href="#">About</a>
          </li>
          <li className={navListStyleOne}>
            <a href="#">NASA&nbsp;Audiences</a>
          </li>
          <input
            placeholder="search"
            className="bg-333 bg-search bg-no-repeat bg-right h-4/5 ml-2 my-2 pl-2 text-white text-m placeholder-gray-800::placeholder"
          />
          <a href="#" className="flex w-10">
            <img src={shareImage} alt="" className="m-auto" />
          </a>
        </ul>
        <ul className="flex flex-wrap divide-x-2 divide-gray-888 w-fit ml-16">
          <li className={navListStyleTwo}>
            <a href="#">Humans&nbsp;in&nbsp;Space</a>
          </li>
          <li className={navListStyleTwo}>
            <a href="#">Moon&nbsp;to&nbsp;Mars</a>
          </li>
          <li className={navListStyleTwo}>
            <a href="#">Earth</a>
          </li>
          <li className={navListStyleTwo}>
            <a href="#">Space&nbsp;Tech</a>
          </li>
          <li className={navListStyleTwo}>
            <a href="#">Flight</a>
          </li>
          <li className={navListStyleTwo}>
            <a href="#">Solar&nbsp;System&nbsp;and&nbsp;Beyond</a>
          </li>
          <li className={navListStyleTwo}>
            <a href="#">STEM&nbsp;Engagement</a>
          </li>
          <li className={navListStyleTwo}>
            <a href="#">History</a>
          </li>
          <li className={navListStyleTwo}>
            <a href="#">Benefits&nbsp;to&nbsp;You</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
