import React,{useState} from "react";
import { motion } from "motion/react"


const Contact = () => {
  const [result, setResult] =useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "57fc1176-fde8-4364-80b7-a454d63f6955");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
    initial={{opacity:0}} whileInView={{ opacity:1}} transition={{duration:1}}
    id="contact" className="w-full  px-5 py-10 scroll-mt-20">
      <motion.h4
      initial={{y:-20,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5,delay:0.3}}

      className="text-center mb-2 text-lg font-Ovo">connect witm me</motion.h4>
      <motion.h2 
      initial={{y:-20,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5,delay:0.5}}
      className="textgradient text-center text-5xl font-Ovo">
        Get in touch
      </motion.h2>
      <motion.p
      initial={{opacity:0}} whileInView={{ opacity:1}} transition={{duration:0.5,delay:0.7}}
      className="text-center maw-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        II'd love to hear from you ! if you have questions,comments orfeedback ,
        please use the form below.
      </motion.p>
      <div className="container">
        <motion.div
        initial={{y:-20,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5}}
         className="drop dark:bg-slate-50">
          <div className="content    ">
            <motion.form
           initial={{opacity:0}} whileInView={{ opacity:1}} transition={{duration:0.5,delay:0.9}}

             onSubmit={onSubmit}>
              <motion.div 
               initial={{x:-50,opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.6,delay:1.1}}

              className="inputBox   ">
                <input 
                type="text" placeholder="Enter your name"  name="name"required />
              </motion.div>
              <motion.div
               initial={{x:50,opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.6,delay:1.2}}
              className="inputBox   ">
                <input
                type="email" placeholder="Enter your email" name="email" required />
              </motion.div>
              <motion.div
              initial={{y:100,opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.6,delay:1.2}}
               className="inputBox">
                <textarea
                  rows="6"
                  placeholder="Enter your message"name="message"
                  required
                ></textarea>
              </motion.div>
              <div className="inputBox font-Ovo">
                <motion.input
                 initial={{scale:1.05}} transition={{duration:0.9,delay:1.5 }}

                 type="submit" value="Submit"/>
              </div>
            </motion.form>
           
          </div>
        </motion.div>
      </div>
      <p
       className="ml-60"> {result}</p>
    
    </motion.div>
  );
};

export default Contact;
