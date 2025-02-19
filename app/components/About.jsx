import { assets, infoList,toolsData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react"


const About = () => {
  return (
    <motion.div 
    initial={{opacity:0}} whileInView={{ opacity:1}} transition={{duration:1}}
    id="about" className="w-full px-[12%]  scroll-mt-20">
      <motion.h2
     initial={{y:-20,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5,delay:0.5}}

       className="text-center textgradient text-5xl font-Ovo pt-12 sm:mt-10">
        About me
      </motion.h2>
      <motion.div
      initial={{opacity:0}} whileInView={{ opacity:1}} transition={{duration:0.8}}

      className="sm:grid  gap-8 lg:grid-cols-2   w-full  lg:flex-row items-center  ">
        <motion.div
        initial={{scale:0.9,opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration:0.6}}

         className=" w-[300px] duser  mt-9 sm:mt-28 md:w-full  max-w-none">
          <Image src={assets.user_image} alt="user" className="user" />
        </motion.div>
        <div className="mt-24  ">
          <motion.div
                initial={{opacity:0}} whileInView={{ opacity:1}} transition={{duration:0.6,delay:0.8}}

          className="text-justify ">
          <input type="checkbox" id="check" />
          <p className=" max-w-3xl content1 leading-6 font-Ove inline-block  ">
            I graduated from a public university with a degree in environmental
            health, but unfortunately it was not my favorite field. After
            graduating, I worked as an expert in a hospital,A hospital whose
            accreditation was rejected I wanted to resign,Until...
          </p>
          <label  for="check">  
            Read more </label>
          <div className="content2 text-justify">
            <p className=" font-Ovo  ">
              I decided to stay instead of leaving and complete the
              accreditation team and upgrade the hospital to a higher rank. And
              after a year of continuous efforts with the help of the team, we
              succeeded and the hospital received the 2nd rank, and with more
              motivation, we put in all our efforts until the hospital reached
              the 1st rank. After years of working in the same hospital, after I
              decided to take the opportunity to learn programming, something I
              had wanted to do for years and I experienced the meaning of passion and
              interest in learning with the world of programming then, I resigned. People
              around me said that my work is wrong because the programming job
              market is saturated But even the learning path is full of
              enthusiasm for me. And I am sure that with a lot of effort and
              hope and improving my skills, I can change fate again.
              <label for ="check" > Show Less </label>
            </p>
            </div>
          </motion.div>
          <ul className=" box w-80 grid grid-cols-1 md:grid-cols-3 mt-4  ">
          {infoList.map(({ icon, iconDark, title, description }, index) => (
            <li className="  p-6   cursor-pointer " key={index}>
              <Image className=" w-6 mt-3 " src={icon} alt="" />
              <h3 className="  font-semibold">{title}</h3>
              <p className="leading-6 text-sm ">{description}</p>
            </li>
          
          ))}
        </ul>
        <motion.h4
        initial={{y:20,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5,delay:1.3}}

         className="my-4 font-semibold">Tools I Use</motion.h4>
        <motion.ul
        initial={{opacity:0}} whileInView={{ opacity:1}} transition={{duration:0.6,delay:1.5}}

        className="flex items-center gap-3 sm:gap-5" >
         {toolsData.map((tool,index)=>(
          <motion.li
          whileHover={{scale:1.05}}
          key={index} className=" tool flex items-center justify-center
          w-12 sm:w-14  aspect-square cursor-pointer hover:translate-y-1 duration-500  ">
           <Image  src={tool} alt='Tool' className="w-5 sm:w-7"/>
          </motion.li>
         ))}
        </motion.ul>
      
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
