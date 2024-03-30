import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chaudhry Wasam Ur Rehman - 03315439051",
  description: "This is our company portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-white bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
         <StarsCanvas />
        <Navbar/>
        
        {children}
        <Footer />
       
      </body>
    </html>
  );
}

