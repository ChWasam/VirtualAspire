import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Link from "next/link";

const Alliances = () => {
  
  const settings = {
   
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    centerMode: true,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1424,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1124,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
            
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        }
      ]
  };

  return (
<div
      className="flex flex-col items-center justify-center z-[20]"
      id="Alliances"
    >
    <div>
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600 pt-20">
        Alliances
      </h1>
      </div>

      <div>
      <h1 className="text-[20px] font-medium text-transparent bg-clip-text text-white">
      We are proud to collaborate with some of the leading organizations in our partner network
      </h1>
      </div>

      <div className="w-[80%] m-auto">
        <div className="mt-10">

<Slider {...settings} >

<div>

<Link 
           href={"/"}
           className="h-auto w-auto flex flex-col items-center justify-center"
           >
            <Image
                src="/css.png"
                alt="logo"
                width={120}
                height={120}
                className="cursor-pointer hover:animate-slowspin"
            />
</Link>
</div>


<div>

<Link 
           href={"/"}
           className="h-auto w-auto flex flex-col items-center justify-center"
           >
            <Image
                src="/framer.png"
                alt="logo"
                width={120}
                height={120}
                className="cursor-pointer hover:animate-slowspin"
            />
</Link>
</div>


<div>

<Link 
           href={"/"}
           className="h-auto w-auto flex flex-col items-center justify-center"
           >
            <Image
                src="/Firebase.png"
                alt="logo"
                width={80}
                height={80}
                className="cursor-pointer hover:animate-slowspin"
            />
</Link>
</div>


<div>

        <Link 
                   href={"/"}
                   className="h-auto w-auto flex flex-col items-center justify-center"
                   >
                    <Image
                        src="/glaxy.png"
                        alt="logo"
                        width={120}
                        height={120}
                        className="cursor-pointer hover:animate-slowspin"
                    />
        </Link>
</div>


<div>

<Link 
           href={"/"}
           className="h-auto w-auto flex flex-col items-center justify-center"
           >
            <Image
                src="/graphql.png"
                alt="logo"
                width={120}
                height={120}
                className="cursor-pointer hover:animate-slowspin"
            />
</Link>
</div>

<div>

<Link 
           href={"/"}
           className="h-auto w-auto flex flex-col items-center justify-center"
           >
            <Image
                src="/css.png"
                alt="logo"
                width={120}
                height={120}
                className="cursor-pointer hover:animate-slowspin"
            />
</Link>
</div>


<div>

<Link 
           href={"/"}
           className="h-auto w-auto flex flex-col items-center justify-center"
           >
            <Image
                src="/framer.png"
                alt="logo"
                width={120}
                height={120}
                className="cursor-pointer hover:animate-slowspin"
            />
</Link>
</div>


<div>

<Link 
           href={"/"}
           className="h-auto w-auto flex flex-col items-center justify-center"
           >
            <Image
                src="/Firebase.png"
                alt="logo"
                width={80}
                height={80}
                className="cursor-pointer hover:animate-slowspin"
            />
</Link>
</div>


</Slider>

        </div>

      </div>

</div>



  );
};

export default Alliances;

