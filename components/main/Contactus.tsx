import React from "react";

import Image from "next/image";
import Link from "next/link";
import { ButtonContact } from "./ButtonContact";

const Contactus = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-auto   h-auto overflow-hidden rounded-full shadow-lg border border-[#2A0E61]  z-[20] py-10 md:py-16 md:mx-20  backdrop-blur-sm "
      id="Contactus"
    >

        <h1  className="text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600 ">
        Get in touch with us
        </h1>

        <p className="text-[20px] m-4 font-medium text-transparent bg-clip-text text-white">
        See how ourServices can work for you
        </p>

        <Link href ="/contactus"> <ButtonContact/> </Link>


    </div>
  );
};

export default Contactus ;
