import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 px-4 justify-between items-center text-white navbar">
      <img src={logo} alt="logo" className="w-[125px] h-[32px]" />
      <ul className="list-none hidden sm:flex justify-end items-center flex-1">
        {navLinks.map((item, index) => (
          <li
            key={item.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks - 1 ? "mr-0" : "mr-10"
            } `}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
          className="w-[28px] h-[28px] object-contain"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((item, index) => (
              <li
                key={item.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks - 1 ? "mr-0" : "mb-4"
                } `}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
