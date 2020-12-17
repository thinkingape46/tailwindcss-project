import React, { useEffect } from "react";

const linkStyle = "my-1 block hover:underline";

function News() {
  return (
    <div className="font-titilium bg-newblue p-2 flex flex-col my-2 lg:col-start-4 lg:col-span-1">
      <p className="text-base justify-self-start py-1 borderBottom">
        NASA Events
      </p>
      <div className="text-xs flex-grow">
        <a className={linkStyle} href="#">
          Wed., Dec. 16, 3 p.m. EST: NASA Science Live: You Too Can Do NASA
          Science
        </a>
        <a className={linkStyle} href="#">
          Thu., Dec. 17, 3 p.m. EST: NASA Science Live: How To See Saturn and
          Jupiter's Great Conjunction
        </a>
        <a className={linkStyle} href="#">
          Fri., Dec. 18, 3 p.m. EST: ISS 20th Anniversary Panel, "Trailblazing
          International Partnerships"
        </a>
      </div>
      <div className="text-sm flex justify-self-end justify-between text-center">
        <a className="hover:underline" href="#">
          NASA TV Schedule
        </a>
        <a className="hover:underline" href="#">
          Launches and Landings
        </a>
      </div>
    </div>
  );
}

export default News;
