import React, { useState } from "react";
import { Link } from "react-scroll";
import { FadeIn } from "./FadeIn";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn className="top-0 left-0 z-50 fixed flex items-center bg-white shadow-lg backdrop-blur-2xl w-full sh">
      <div className="mx-auto container">
        <div className="relative flex justify-between items-center -mx-4">
          <div className="px-4 w-60 max-w-full">
            <a href="/#" className="block py-5 w-full">
              <img src="/720logo.png" alt="logo" className="w-full" />
            </a>
          </div>
          <div className="flex justify-between items-center px-4 w-full">
            <div>
              <button
                onClick={() => setOpen(!open)}
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="block relative bg-primary-dark dark:bg-white my-[6px] w-[30px] h-[2px]"></span>
                <span className="block relative bg-primary-dark dark:bg-white my-[6px] w-[30px] h-[2px]"></span>
                <span className="block relative bg-primary-dark dark:bg-white my-[6px] w-[30px] h-[2px]"></span>
              </button>
              <nav
                className={`absolute right-4 top-full z-50 w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="home">Home</ListItem>
                  <ListItem NavLink="career">Career</ListItem>
                  <ListItem NavLink="schools">Schools</ListItem>
                  <ListItem NavLink="about">Why 720degree Hub?</ListItem>
                </ul>
              </nav>
            </div>
            <div className="sm:flex justify-end hidden pr-16 lg:pr-0">
              <Link
                activeClass="text-primary-light-3"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-primary hover:bg-opacity-90 px-7 py-3 rounded-lg font-medium text-base text-white cursor-pointer"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

const ListItem = ({ children, NavLink }) => {
  return (
    <li>
      <Link
        activeClass="text-primary"
        to={NavLink}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="lg:inline-flex flex lg:ml-12 py-2 font-medium text-base text-primary-dark hover:text-primary underline-offset-8 underline-primary hover:underline cursor-pointer"
      >
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
