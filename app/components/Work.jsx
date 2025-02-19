import { workData, assets  } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react"


const Work = (isDarkMode) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
       initial={{y:-20,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5,delay:0.3}}

      className="text-center mb-2 text-lg font-Ovo">my protfolio</motion.h4>
      <motion.h2
      initial={{y:-20,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5,delay:0.5}}

      className="textgradient text-center text-5xl font-Ovo">
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{opacity:0}} whileInView={{ opacity:1}} transition={{delay:0.7, duration:0.5}}

      className="text-center maw-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        welcome to my web development protfolio Explore a collection of projects
        showcasing my expertise in front-end development
      </motion.p>
      {/* Add my work items here */}
      <motion.div
        initial={{opacity:0}} whileInView={{ opacity:1}} transition={{delay:0.9, duration:0.6}}
      className="grid grid-cols-auto my-10 gap-5 dark:text-white">
        {workData.map((project, index) => (
          <motion.div
          initial={{scale:1.05}} transition={{duration:0.3}}

            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative
            cursor-pointer group "
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12  rounded-md absolute bottom-5
             left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 ">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              
              </div>
              <div className="border rounded-full border-black w-9 aspect-square
              flex items-center justify-center shadow-[1px_1px_0px_#0004] 
               group-hover:bg-amber-200 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
