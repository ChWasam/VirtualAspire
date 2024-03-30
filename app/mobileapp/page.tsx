"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Link from "next/link";

const mobileapp = () => {
  return (
<motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-start justify-start gap-5  px-20  mt-20  w-full z-[20]"
      id="mobileapp"
    >


      <motion.div
        variants={slideInFromTop}
        className="w-full h-full flex border rounded-lg border-[#7042f88b] opacity-[0.9] shadow-[#2A0E61]/50   gap-x-3"
      >
      <video
        autoPlay
        muted
        loop
        className=" h-600 w-600 w-full h-full justify-center items-center "
      >
        <source src="/mobapp.mp4" type="video/mp4" />
      </video>
      </motion.div>

      <motion.div className=" h-full w-full flex flex-col gap-5 justify-center m-auto ">

        <motion.div
          variants={slideInFromRight(0.5)}
          className="flex flex-col   text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, dolor sint est a ea ab molestias quo quidem recusandae voluptates inventore, nemo sed. Facere magni voluptas, saepe rerum commodi a ducimus illum ipsam, eos ipsum corrupti ullam error doloribus quod architecto ea adipisci! Reprehenderit dolores unde, reiciendis ipsum debitis laborum.
        </motion.p>
        <motion.p
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center  text-white border border-[#7042f88b] opacity-[0.9] shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md hover:bg-red-600 hover:border-red-600  cursor-pointer rounded-lg max-w-[200px] z-[20]"
        >
          <Link href="#Contactus">Learn More!</Link>
          
        </motion.p>
        
      </motion.div>





    </motion.div>
  );
};

export default mobileapp;

