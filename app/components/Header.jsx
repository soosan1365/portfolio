import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className="w-11/12  max-w-3xl text-center mx-auto  
    flex flex-col items-center justify-center gap-4">
      <motion.div 
      initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.8 , type:"spring",stiffness:100}}
       className="mt-28">
        <Image src={assets.profile_img} alt="" className="rounded-full  w-[14rem]" />
      </motion.div>
      < motion.h3
       initial={{y:-20,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.6,delay:0.3}}

      className="flex  items-end gap-2 text-xl md:text-3xl mb-2 font-Ovo">
        hi! I'm Soosan Arabdashti
      </motion.h3>
      < motion.h1
       initial={{y:-30,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.8,delay:0.5}}
      className="text-3xl textgradient sm:text-6xl lg:text-[66px] font-Ovo">
        frontend Web developer
      </ motion.h1>
      <motion.p 
       initial={{opacity:0}} whileInView={{ opacity:1}} transition={{duration:0.6,delay:0.7}}
      className="max-w-2xl max-auto font-Ovo">
        I am a frontend developer from the Aryan land of Iran, who loves
        programming and web design and is developing my skills in this field.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
        initial={{y:30,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.6,delay:1}}
        href="#contact" className="px-10 py-3  text-xl button rounded-full flex items-center gap-2">
          Contact me
          <Image src={assets.right_arrow_white} alt="" className=" w-4 " />
        </motion.a>
        
        <motion.a
         initial={{y:30,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.6,delay:1.2}}
          href="/sample-resume.pdf"
          download
          className=" button px-10 py-3 text-xl rounded-full flex items-center gap-2"
        >
          my resume
          <Image src={assets.download_icon} alt="" className=" w-4" />
        </motion.a>
      </div>
    </div>
  );

};

export default Header;
