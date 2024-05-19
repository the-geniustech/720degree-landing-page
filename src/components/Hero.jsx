import React, { useState } from "react";
import Navbar from "./Navbar";
import { FadeIn } from "./FadeIn";
import { Link } from "react-scroll";

const Hero = ({ onSetModalOpen }) => {
  return (
    <>
      <FadeIn id="home" className="bg-primary mt-20">
        <Navbar />
        <div className="relative bg-[50%] bg-[url('/720entrance.jpg')] bg-cover bg-no-repeat h-[660px] overflow-hidden">
          <div className="top-0 right-0 bottom-0 left-0 absolute bg-[hsla(0,0%,0%,0.75)] bg-fixed w-full h-full overflow-hidden">
            <div className="flex justify-center items-center h-full">
              <div className="px-6 md:px-12 text-center text-primary-light-2">
                <h1 className="mt-6 mb-16 font-bold text-4xl md:text-5xl xl:text-6xl tracking-tight">
                  Unlock your tech career in <br />
                  <span>just 6 weeks!</span>
                </h1>
                <Link
                  className="inline-block border-2 border-neutral-50 hover:border-neutral-100 focus:border-neutral-100 active:border-neutral-200 hover:bg-neutral-500 hover:bg-opacity-10 md:mr-2 mb-2 md:mb-0 px-[46px] pt-[14px] pb-[12px] rounded-full font-medium text-neutral-50 text-sm hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200 uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  role="button"
                  onClick={() => onSetModalOpen((modalOpen) => !modalOpen)}
                >
                  Get started
                </Link>
                <Link
                  className="inline-block hover:bg-neutral-500 hover:bg-opacity-20 px-12 pt-4 pb-3.5 rounded-full font-medium text-neutral-50 text-sm hover:text-neutral-200 focus:text-neutral-200 active:text-neutral-300 uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  role="button"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-2.5 md:-mt-4 lg:-mt-6 xl:-mt-6 h-[50px] text-primary dark:text-neutral-800 origin-[top_center] scale-[2]">
          <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </FadeIn>
    </>
  );
};

export default Hero;
