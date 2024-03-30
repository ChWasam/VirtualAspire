"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Link from "next/link";

const techsales = () => {
  return (
<motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-start justify-start gap-5  px-20  mt-[80px]  w-full z-[20]"
      id="techsales"
    >
      <motion.div
        variants={slideInFromTop}
        className="w-full h-full flex  border rounded-lg border-[#7042f88b] opacity-[0.9] shadow-[#2A0E61]/50   gap-x-3"
      >
      <video
        autoPlay
        muted
        loop
        className=" h-600 w-600 w-full h-full justify-center items-center z-[20]  "
      >
        <source src="/tech.mp4" type="video/mp4" />
      </video>
      </motion.div>

      <motion.div className=" h-full w-full flex flex-col gap-5 justify-center m-auto ">

        <motion.div
          variants={slideInFromRight(0.5)}
          className="flex flex-col gap-6  text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam reiciendis vero, veniam ex non? Quis alias aspernatur veniam! Unde vel saepe, tempora optio, nobis a ad dignissimos aliquam ea facilis, sint maiores recusandae asperiores velit aut ullam voluptatum corporis laborum error! Quas commodi animi ab, officiis vero laborum, nulla fugiat possimus quaerat itaque omnis velit. Laboriosam, placeat iste exercitationem harum autem unde provident excepturi? Similique provident in inventore praesentium!
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

export default techsales;

