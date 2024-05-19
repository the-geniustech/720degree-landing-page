import React from "react";
import { FadeIn } from "./FadeIn";
import { Link } from "react-scroll";

const CTA = () => {
  return (
    <FadeIn id="about" className="mx-auto mt-24 mb-36 md:px-6">
      <div className="container">
        <div className="flex flex-wrap items-center">
          <div className="mb-12 lg:mb-0 grow-0 w-full lg:w-5/12 basis-auto shrink-0">
            <div className="flex lg:py-12">
              <img
                src="/720students.jpg"
                className="z-[10] shadow-lg dark:shadow-black/20 lg:ml-[50px] rounded-lg w-full h-96"
                alt="image"
              />
            </div>
          </div>
          <div className="bg-primary px-6 py-16 lg:pl-12 rounded-lg w-full lg:w-7/12 h-full text-white">
            <div className="lg:pl-12">
              <h2 className="mb-6 font-bold text-3xl">
                Want to crack the code to a 7-figure income? You're not alone!
              </h2>
              <p className="mb-6">
                Tech skills are the keys to unlocking wealth and financial
                freedom. But, let's face it - getting started can be daunting.
                Fear not!
              </p>
              <p className="mb-6">
                <strong>720Degree Hub Bootcamp</strong> is here to bridge the
                gap.
              </p>
              <p className="mb-6">
                Imagine immersing yourself in a 6-week intensive bootcamp,
                surrounded by like-minded individuals, and mentored by industry
                experts. And, yes! You get to live and learn inside our
                state-of-the-art housing facility.
              </p>
              <p className="mb-6">
                But that's not all! Our program continues online for another 8
                weeks, ensuring you're equipped with the latest skills and
                knowledge. Plus, you'll have a personal mentor guiding you every
                step of the way - even after graduation!
              </p>
              <p className="mb-6">
                And, to top it off, our program is approved by the Ministry of
                Education and NCS Nigeria Computer Society. So, what are you
                waiting for? Take the first step towards a lucrative tech
                career. Send us a DM or click the link below to secure your spot
                at 720Degree Hub Bootcamp.
              </p>
              <p className="mb-6">
                <strong>Limited space available.</strong>
              </p>
              <p className="mb-6">Let's code your way to success!</p>
              <button
                type="button"
                className="border-2 border-neutral-50 hover:border-neutral-100 focus:border-neutral-100 active:border-neutral-200 hover:bg-neutral-100 hover:bg-opacity-10 px-7 pt-3 pb-2.5 rounded-full font-medium text-neutral-50 text-sm hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200 uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  role="button"
                >
                  Sign up now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default CTA;
