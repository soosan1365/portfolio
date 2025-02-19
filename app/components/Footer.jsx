import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Footer = ({isDarkMode}) => {
  return (
    <div>
      <div className="mt-20 ">
        <a href="#top" className="logo2  ">
          <Image src={assets.logo} alt="" className="  mx-auto  w-28 " />
        </a>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
          soosan.adh@gmail.com
        </div>
      </div> 
      <p className=" button mt-2 mx-[10%] h-[2px]"> </p>
      <div className="text-center sm:flex items-center justify-between  mx-[10%] py-6">
        <p>Tannks for taking the time to visit</p>
        <ul className=" flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/soosan1365">
              GitHup
            </a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
