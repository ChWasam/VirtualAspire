"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (

 
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-20 w-full z-[20]"
      id="HeroContent"
    >
      <div className=" h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="flex Welcome-box  border rounded-full border-[#7042f88b] opacity-[0.9]"
        >
    
            <SparklesIcon className="text-orange-300 m-[10px] h-7 w-7" />
            <h1 className=" flex items-center justify-center text-orange-300 Welcome-text font-bold text-[15px]">
              SOFTWARE DEVELOPMENT AND B2B SALES GENERATION
            </h1>
 
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          {/* I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills. */}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quam
          deleniti tenetur, fuga accusamus quos maiores neque corporis odio
          modi.
        </motion.p>
        <motion.p
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center  text-white border border-[#7042f88b] opacity-[0.9] shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md hover:bg-red-600 hover:border-red-600  cursor-pointer rounded-lg max-w-[200px]"
        >
          <Link href="#Contactus">Learn More!</Link>
          
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full  justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>

  );
};

export default HeroContent;
