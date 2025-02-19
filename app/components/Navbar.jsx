import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenoRef = useRef();
  const openMenu = () => {
    sideMenoRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenoRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY >50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
        flex items-center justify-between z-50 ${
          isScroll
            ? "bg-[#f6efe1] bg-opacity-50 backdrop-blur-3xl shadow-[1px_1px_2px_#f8ecbe] dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top" className="logo">
          <Image src={assets.logo} alt="" className=" w-28 " />
        </a>
        <ul
          className="hidden list md:flex item-center gap-6 lg:gap-8
            rounded-lg
             px-12 py-3 bg-white shadow-sm bg-opacity-50"
        >
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="list rounded-lg  hidden lg:flex items-center gap-3 px-10
                py-2.5  ml-4 font-Ovo"
          >
            contact
            <Image src={assets.arrow_icon} className="w-3" alt="" />
          </a>
          <button className="md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>
        {/* --------------mobile menu------------ */}
        <ul
          ref={sideMenoRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
            top-0 bottom-0 w-64 z-50 h-screen  bg-[#f6eace] transition duration-500
            dark:bg-darkTheme dark:text-white"
        >
          <div className="absolite right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" onClick={closeMenu} className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu} className="font-Ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu} className="font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu} className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
