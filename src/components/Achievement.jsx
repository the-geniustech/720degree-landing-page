import React from "react";
import { achievement } from "../assets";
import { SlGraduation } from "react-icons/sl";
import { FiVideo } from "react-icons/fi";
import { SlPeople } from "react-icons/sl";
import { FadeIn } from "./FadeIn";

const Achievement = () => {
  return (
    <>
      <FadeIn className="border-primary-light-2 border-y bg-primary-light-3 shadow-blue-gray-100 py-24 w-full text-primary-dark">
        <div className="items-center grid md:grid-cols-2 max-w-[600px] md:max-w-[1480px] container">
          <div className="flex flex-col justify-self-end md:justify-center">
            <h1 className="font-bold text-3xl md:leading-[72px]">
              Our <span className="text-[#20B486]">Achievements</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Join us in celebrating our vibrant community, innovative
              partnerships, dynamic events, and cutting-edge tech hubs. Be part
              of our success!
            </p>

            <div className="grid grid-cols-2 py-16">
              <div className="flex py-6">
                <div className="bg-[#E9F8F3] p-4 rounded-xl">
                  <SlGraduation size={30} style={{ color: "#1A906B" }} />
                </div>
                <div className="px-3">
                  <h1 className="font-semibold text-2xl">100+</h1>
                  <p className="text-[#6D737A]">Members</p>
                </div>
              </div>
              <div className="flex py-6">
                <div className="bg-[#FFFAF5] p-4 rounded-xl">
                  <FiVideo size={30} style={{ color: "#FFC27A" }} />
                </div>
                <div className="px-3">
                  <h1 className="font-semibold text-2xl">8</h1>
                  <p className="text-[#6D737A]">Startups</p>
                </div>
              </div>
              <div className="flex py-6">
                <div className="bg-[#FFEEF0] p-4 rounded-xl">
                  <SlGraduation size={30} style={{ color: "#ED4459" }} />
                </div>
                <div className="px-3">
                  <h1 className="font-semibold text-2xl">2</h1>
                  <p className="text-[#6D737A]">Hubs</p>
                </div>
              </div>
              <div className="flex py-6">
                <div className="bg-[#F0F7FF] p-4 rounded-xl">
                  <SlPeople size={30} style={{ color: "#0075FD" }} />
                </div>
                <div className="px-3">
                  <h1 className="font-semibold text-2xl">8+</h1>
                  <p className="text-[#6D737A]">Events</p>
                </div>
              </div>
            </div>
          </div>

          <img src={achievement} className="order-first md:order-last m-auto" />
        </div>
      </FadeIn>
    </>
  );
};

export default Achievement;
