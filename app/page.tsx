"use client";

import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Teams from "@/components/main/Teams";
import { ButtonContact } from "@/components/main/ButtonContact";
import Alliances from "@/components/main/Alliances";
import { Contact } from "lucide-react";
import Contactus from "@/components/main/Contactus";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col ">
        <Hero />
        <Teams />
        <Alliances/> 
        <Projects />
        
        <Contactus/>
        
        {/* <Skills />
        <Encryption />
        <Projects /> */}
      </div>
    </main>
  );
}
