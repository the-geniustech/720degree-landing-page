import React from "react";
import { logo } from "../assets";
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";
import { FadeIn } from "./FadeIn";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <FadeIn className="border-gray-2 py-24 border-t w-full">
      <div className="gap-8 grid max-[780px]:grid-cols-2 md:grid-cols-5 max-w-[600px] md:max-w-[1480px] container">
        <div className="col-span-2">
          <img src="/720logo.png" className="h-14" />
          <h3 className="mt-10 font-bold text-2xl text-primary-dark">
            Contact Us
          </h3>
          <h3 className="py-2 text-primary-dark-1">Call : +234 815 1562 577</h3>
          <h3 className="py-2 text-primary-dark-3">
            ADUN House, <br />
            National Library Building, Ake <br />
            Abeokuta, Ogun State, Nigeria
          </h3>
          <h3 className="py-2 text-primary-dark">
            Email: connect@720degreehub.com
          </h3>
          <div className="flex gap-4 py-4 text-primary-dark">
            <div className="bg-[#E9F8F3] p-4 rounded-xl">
              <FaFacebookF size={25} />
            </div>
            <div className="bg-[#E9F8F3] p-4 rounded-xl">
              <FaDribbble size={25} />
            </div>
            <div className="bg-[#E9F8F3] p-4 rounded-xl">
              <FaLinkedinIn size={25} />
            </div>
            <div className="bg-[#E9F8F3] p-4 rounded-xl">
              <FaInstagram size={25} />
            </div>
            <div className="bg-[#E9F8F3] p-4 rounded-xl">
              <FaBehance size={25} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-2xl text-primary-dark">Explore</h3>
          <ul className="py-6 text-primary-dark-1">
            <li className="py-2">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-primary-dark-1 underline-offset-4 hover:underline cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="career"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-primary-dark-1 underline-offset-4 hover:underline cursor-pointer"
              >
                Career
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="schools"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-primary-dark-1 underline-offset-4 hover:underline cursor-pointer"
              >
                Schools
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-primary-dark-1 underline-offset-4 hover:underline cursor-pointer"
              >
                Why 720degree Hub?
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-2xl text-primary-dark">
            Featured Courses
          </h3>
          <ul className="py-6 text-primary-dark-1">
            <li className="py-2">Product Design</li>
            <li className="py-2">Data Science</li>
            <li className="py-2">Backend Development</li>
            <li className="py-2">Product Management</li>
            <li className="py-2">Front-End Development</li>
            <li className="py-2">Data Analytics</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-2xl text-primary-dark">Schools</h3>
          <ul className="py-6 text-primary-dark-1">
            <li className="py-2">School of Product</li>
            <li className="py-2">School of Engineering</li>
            <li className="py-2">School of Data</li>
          </ul>
        </div>

        {/* <div className="max-[780px]:col-span-2">
          <h3 className="font-bold text-2xl">Subscribe</h3>
          <h3 className="py-2 text-primary-dark-1">
            Be in the know. <br />
            Subscribe for exclusive updates straight to your inbox. <br />
            Join now for insider access!
          </h3>
          <form className="py-4">
            <input
              className="bg-[#F2F3F4] p-4 focus:outline-none rounded w-full"
              placeholder="Email here"
            />
            <button className="bg-primary-dark my-4 px-5 py-3 rounded-md max-[780px]:w-full font-medium text-white">
              Subscribe Now
            </button>
          </form>
        </div> */}
      </div>
    </FadeIn>
  );
};

export default Footer;
