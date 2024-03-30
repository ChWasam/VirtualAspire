import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="Hero">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 bg-center absolute h-full w-full object-cover "
      >
        <source src="/cave.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
