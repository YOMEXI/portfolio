import React from "react";

const Header = () => {
  return (
    <>
      <nav className="flex flex-row flex-wrap justify-between py-4 px-4 bg-black p4 text-white border-2">
        <div className="header_logo ">
          <a href="/">
            {" "}
            <i
              className="fa fa-briefcase fa-lg cursor-pointer hover:scale-150 hover:rotate-45"
              aria-hidden="true"
            ></i>
          </a>
        </div>
        <div className="header_nav ">
          <ul className=" flex flex-row  justify-around w-60 text-sm md:text-base md:w-96 pointer">
            <li
              className="transition-all 
              duration-300 ease-in rounded-full
               hover:bg-white hover:text-black px-2 py-1
               cursor-pointer"
            >
              <a href="/"> Home</a>
            </li>
            <li
              className="transition-all 
            duration-300 ease-in rounded-full
             hover:bg-white hover:text-black px-2 py-1 cursor-pointer"
            >
              <a href="/projects/Projects"> Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
