import React, { useState, useEffect } from "react";

// Load images
import nasaLogo from "../images/nasa-logo.svg";
import searchImage from "../images/search.svg";
import shareImage from "../images/share.svg";

function Header() {
  const navListStyleOne =
    "px-1.5 xl:px-2.5 py-3 my-auto font-titilium text-l xl:text-xl";
  const navListStyleTwo = "p-1 xl:px-1.5 font-nav bg-555 text-sm xl:text-l";

  return (
    <header className="pt-6 py-2 flex bg-startfield justify-between">
      <img src={nasaLogo} alt="NASA logo" className="w-16 xl:w-32" />
      <nav className="flex w-fit flex-col lg:flex-1 ml-10 lx:ml-10 xl:ml-10 2xl:ml-32">
        <div className="flex lx:ml-16 xl:ml-32 2xl:ml-44">
          <ul className="hidden lg:flex">
            <li className={navListStyleOne}>
              <a href="#">Missions</a>
            </li>
            <li className={navListStyleOne}>
              <a href="#">Galleries</a>
            </li>
          </ul>
          <ul>
            <li className={navListStyleOne}>
              <a href="#">NASA&nbsp;TV</a>
            </li>
          </ul>
          <ul className="hidden lg:flex">
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
          </ul>
          <div className="flex relative">
            <input
              placeholder="search"
              className="bg-333 bg-no-repeat bg-right h-8 ml-2 my-auto pl-2 text-white text-m placeholder-gray-800::placeholder hidden lg:block"
            />
            <img
              src={searchImage}
              alt=""
              className="h-10 my-auto absolute right-0 top-1"
            />
          </div>
          <a href="#" className="flex w-10">
            <img src={shareImage} alt="" className="m-auto h-10 my-auto" />
          </a>
          <div className="flex flex-col ml-2 my-auto w-8 lg:hidden">
            <div className="h-0.5 w-full bg-white my-1.5"></div>
            <div className="h-0.5 w-full bg-white"></div>
            <div className="h-0.5 w-full bg-white my-1.5"></div>
          </div>
        </div>

        <ul className="hidden lg:flex flex-row divide-x-2 divide-gray-888  ">
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
