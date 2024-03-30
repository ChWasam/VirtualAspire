import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ButtonContact } from "./ButtonContact";




export function SheetMenu() {
  return (
    
    <Sheet>
     
      <SheetTrigger>
        <HamburgerMenuIcon className="lg:hidden h-10 w-10 text-white bg-red-600 py-1  rounded-xl  " />
      </SheetTrigger>
   
      
      <SheetContent side={"left"} className="w-auto overflow-y-scroll   text-red-500 bg-[#04030a] ">
                 <div className="flex  gap-x-1 ">
                 
                <Link
                    href="/"
                    className="h-auto w-auto flex flex-row items-center "
                >
                  <SheetClose>
                    <Image
                        src="/glaxy.png"
                        alt="logo"
                        width={70}
                        height={70}
                        className="cursor-pointer hover:animate-slowspin"
                    />
                    </SheetClose>

                    <SheetClose>
                    <span className="font-bold ml-[10px] text-gray-300">
                    VirtualAspire
                    </span>
                    </SheetClose>

                </Link>
                
            </div>
            <br />
     
        <div className="flex flex-col gap-y-5 ">

         
          <Link href="/" className="text-xl font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 hover:text-white">
          <SheetClose>
          Home
          </SheetClose>
          </Link>
          
         


        <Accordion type="single" collapsible className="w-full" id="AccordionMenu1">
        

        <AccordionItem value="item-1">
        </AccordionItem>
              
        
        <AccordionItem value="item-2">
          <AccordionTrigger>Software Development</AccordionTrigger>
          <AccordionContent >
          <Link href="/webapp" className="text-xl font-medium transition-all hover:underline hover:text-white [&[data-state=open]>svg]:rotate-180">
          <SheetClose >
            WEB APP
          </SheetClose>
          </Link>
          <br />
          <br />
          <Link href="/mobileapp" className="text-xl font-medium transition-all hover:underline hover:text-white [&[data-state=open]>svg]:rotate-180">
          <SheetClose>
            MOBILE APP
            </SheetClose>
          </Link>
          <br />
          <br />
          <Link href="/desktopapp" className="text-xl font-medium transition-all hover:underline hover:text-white [&[data-state=open]>svg]:rotate-180">
          <SheetClose>
            DESKTOP APP
          </SheetClose>
          </Link>
          <br />
          <br />
          <Link href="/uiuxdesign" className="text-xl font-medium transition-all hover:underline hover:text-white [&[data-state=open]>svg]:rotate-180">
          <SheetClose>
            UI/UX DESIGN
          </SheetClose>
          </Link>
          </AccordionContent>
        </AccordionItem>

      </Accordion>
      

          <Link href="/softwareproducts" className="text-xl font-medium transition-all hover:underline hover:text-white [&[data-state=open]>svg]:rotate-180">
          <SheetClose>
          Software Products
          </SheetClose>
          </Link>



          <Accordion type="single" collapsible className="w-full" id="AccordianMenu2">
        

        <AccordionItem value="item-1">
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger>Sales and Marketing</AccordionTrigger>
          <AccordionContent >
          <Link href="/solar" className="text-xl font-medium transition-all hover:underline hover:text-white [&[data-state=open]>svg]:rotate-180">
          <SheetClose>

            Solar
          </SheetClose>

          </Link>
          <br />
          <br />
          <Link href="/techsales" className="text-xl font-medium transition-all hover:underline hover:text-white [&[data-state=open]>svg]:rotate-180">
          <SheetClose>

            Tech Sales

          </SheetClose>

          </Link>
          <br />
          <br />
          <Link href="/leadsgeneration" className="text-xl font-medium transition-all hover:underline hover:text-white [&[data-state=open]>svg]:rotate-180">
          <SheetClose>

          B2B Leads Generation

          </SheetClose>

          </Link>
          <br />
          <br />

          </AccordionContent>
        </AccordionItem>
      </Accordion>
          
          <br />
          <br />
          <br />
          <br />
          <br />

         
           
         

         
          <div className="flex gap-5">
         
          <Link href="/contactus">
            {" "}

            <SheetClose asChild>
            <ButtonContact />
            </SheetClose>

            {" "}
          </Link> 


          <SheetClose asChild>
          <Link href="/hireitresource">
          <Button type="submit" className="group inline-flex text-white h-10 w-max items-center justify-center  bg-gradient-to-r from-red-600 to-yellow-600 px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" >
          Hire IT Experts 
          

            </Button>
            </Link>
            </SheetClose>
           </div>

            
        </div>

       
      </SheetContent>
    </Sheet>
  );
}
