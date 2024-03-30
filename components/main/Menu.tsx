"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import css from "../icons/css.png"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Solar",
    href: "/solar",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Tech Sales",
    href: "/techsales",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "B2B Leads Generation",
    href: "/leadsgeneration",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
]

export default function Menu() {
  return (
      <NavigationMenu id="Menu" >

      <NavigationMenuList >
     
        <NavigationMenuItem  >
          <Link   href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem >
          <NavigationMenuTrigger className="rounded-full ">Software Development</NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="grid grid-flow-row gap-10 p-10  md:w-[600px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">

              <li className="">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/webapp"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-2 text-lg font-medium">
                      Web App
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>

              <li className=" ">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/mobileapp"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Mobile App
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>

              <li className=" ">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/desktopapp"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Desktop App
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>

              <li className=" ">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/uiuxdesign"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      UI/UX Design
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem  >
          <Link   href="/softwareproducts" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Software Products
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      
        <NavigationMenuItem>
          <NavigationMenuTrigger className="rounded-full ">Sales and Marketing</NavigationMenuTrigger>
          
          <NavigationMenuContent  >
            
            <ul className="grid w-[400px]    gap-3 p-4   md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <Link 
                href={component.href}>
                <ListItem
                  key={component.title}
                  title={component.title}
                >
                  {component.description}
                </ListItem>
               </Link>

              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem >
          <Link   href="/hireitresource" legacyBehavior passHref>
            <NavigationMenuLink className="group inline-flex text-white h-10 w-max items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-yellow-600 px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
            Hire IT Experts
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>


      </NavigationMenuList>


    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li >
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none font-semibold space-y-1  p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground rounded-md focus:bg-accent focus:text-accent-foreground   ",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium  leading-none">{title}</div>
          <p className="line-clamp-2 text-sm  leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

