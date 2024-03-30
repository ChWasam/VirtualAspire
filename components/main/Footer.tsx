import React from "react";
import StarsCanvas from "@/components/main/StarBackground";
import Image from "next/image";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobile,
 
} from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";

const Footer = () => {
  const instagramUrl = "https://instagram.com/";
  const facebookUrl = "https://www.facebook.com/Qasim.Ali.Shah/";
  const linkedinUrl = "https://www.linkedin.com/in/chwasam/";

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]" id="Footer">
      <div className="w-full flex flex-col items-center justify-center m-auto ">
        <div className="w-full h-full flex flex-row items-start justify-around flex-wrap z-[20]">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="flex  gap-x-1">
              <Link href="/" className="h-auto w-auto flex flex-row items-center">
                <Image
                  src="/glaxy.png"
                  alt="logo"
                  width={70}
                  height={70}
                  className="cursor-pointer hover:animate-slowspin"
                />

                <span className="font-bold ml-[10px] text-gray-300">
                  VirtualAspire
                </span>
              </Link>
            </div>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Address</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaLocationArrow />
              <span className="text-[15px] ml-[6px]">
                white street, Vernon City, Connecticut
              </span>
            </p>
            <div className="font-bold text-[16px]">Phone Number</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaMobile />
              <span className="text-[15px] ml-[6px]">+923315439051</span>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <FaInstagram />
              <span className="text-[15px] ml-[6px]">
                <Link
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
              </span>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <FaFacebook />
              <span className="text-[15px] ml-[6px]">
                <Link
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Link>
              </span>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <FaLinkedin />
              <span className="text-[15px] ml-[6px]">
                <Link
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </Link>
              </span>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Services</div>

            <p className="flex flex-row items-center my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                <Link href="/webapp">WEB APP</Link>
              </span>
            </p>

            <p className="flex flex-row items-center my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                <Link href="/softwareproducts">SOFTWARE PRODUCTS</Link>
              </span>
            </p>

            <p className="flex flex-row items-center my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                <Link href="/leadsgeneration">B2B Leads Generation</Link>
              </span>
            </p>

            <p className="flex flex-row items-center my-[5px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                {/* <Link href="/hireitexperts"> */}
                  <Button
                    type="submit"
                    className="group inline-flex text-white h-10 w-max items-center justify-center  bg-gradient-to-r from-red-600 to-yellow-600 px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    <Link href="/hireitresource"> Hire IT Experts </Link>
                  </Button>
                {/* </Link> */}
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; VirtualAspire. All Rights Reserved 2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
