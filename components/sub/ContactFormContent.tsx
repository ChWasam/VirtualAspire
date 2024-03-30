"use client";


import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";



import React, { useState } from "react";

const ContactFormContent = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-20 w-full z-[20]"
      id="HeroContent"
    >
      <div className=" h-full w-full flex flex-col gap-2 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-gray-200 max-w-[600px] w-auto h-auto    "
        >
    
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600">
              {" "}
              Let&apos;s Connect {" "}
            </span>
            <p className="text-[16px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolore! Dolor dolorum quae iure, vero minus corrupti animi error ipsum.
            </p>
 
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="grid md:grid-cols-2 my-12 md:my-12 py-2  relative"
        >
 <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#03001417] backdrop-blur-md border border-[#7042f88b] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="ch.wasam@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#03001417] backdrop-blur-md border border-[#7042f88b] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#03001417] backdrop-blur-md border border-[#7042f88b] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="py-2 button-primary text-center  text-white border border-[#7042f88b] opacity-[0.9] shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md  cursor-pointer rounded-lg max-w-[200px]"
            >
              Send Message
            </button>
          </form>
        )}
      </div>


   </motion.div>
      </div>

    </motion.div>
  );
};

export default ContactFormContent;
