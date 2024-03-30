import { Socials } from "@/constants";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'

import { ButtonContact } from "./ButtonContact";
import { SheetMenu } from "./SheetMenu";

export default function Navbar() {
    return (
        <header className='grid grid-cols-[auto,auto] lg:grid-cols-[auto,auto,auto] justify-between items-center w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-3' id="Navbar">
            <div className="flex justify-center items-center gap-x-3">
                <SheetMenu/>
               
                   
                   <Link 
                   href={"/"}
                   className="h-auto w-auto flex flex-row items-center"
                   >
                    <Image
                        src="/glaxy.png"
                        alt="logo"
                        width={70}
                        height={70}
                        className="cursor-pointer hover:animate-slowspin"
                    />

                    <span className="font-bold ml-[10px] hidden md:block text-orange-300">
                    VirtualAspire
                    </span>
                    </Link>

            </div>

            

            <div className="hidden lg:flex font-semibold justify-center gap-x-3">
          <div className="flex items-center justify-around w-full h-auto border border-[#7042f861]  bg-[#0300145e] ml-8 px-[20px] py-[7px]  rounded-full   text-orange-600">

            <Menu  />

          </div>
        </div>


        <div className="flex flex-row gap-5 items-center justify-self-start">

<Link href ="/contactus"> <ButtonContact/> </Link>

    <Link 
    target="_blank"
    href='https://instagram.com/'
    >
    <Image
      src='/instagram.svg'
      alt='Instagram'
      key='Instagram'
      width={30}
      height={30}
    />
    </Link>

    <Link 
    target="_blank"
    href='https://www.facebook.com/'
    >
    <Image
      src='/facebook.svg'
      alt='Facebook'
      key='Facebook'
      width={30}
      height={30}
    />
    </Link>

    <Link 
    target="_blank"
    href='https://www.youtube.com/'
    >
    <Image
      src='/youtube.svg'
      alt='Youtube'
      key='Youtube'
      width={30}
      height={30}
    />
    </Link>

</div>
                
                {/* <a
                    href="/"
                >
                    <Image
                        src="/glaxy.png"
                        alt="logo"
                        width={70}
                        height={70}
                        className="cursor-pointer hover:animate-slowspin"
                    />

                </a> */}

  


        </header>
    )
}
