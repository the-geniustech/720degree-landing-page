import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { BiData } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { FaRegLightbulb, FaCogs, FaDatabase } from "react-icons/fa";
import { FadeIn } from "./FadeIn";

const ourSchools = [
  {
    id: 1,
    icon: <FaRegLightbulb className="mb-4 w-12 h-12 text-center" />,
    title: "School of Product",
    desc: "We offer you Product courses such as Product Design,Product management and Product marketing by equipping you with the right trainings and guidelines. Become a world class personnel and job-ready candidate in the product field.",
  },
  {
    id: 2,
    icon: <FaCogs className="mb-4 w-12 h-12 text-center" />,
    title: "School of Engineering",
    desc: "Begin your learning process in Front-End Web Development, Back-End Web Development and more. Discover career opportunities available for you. Speak to professionals and read through materials and the programme designed specifically for you.",
  },
  {
    id: 3,
    icon: <FaDatabase className="mb-4 w-12 h-12 text-center" />,
    title: "School of Data",
    desc: "Even as a newbie in the data analysis space, you can jumpstart your journey and hone your skills by kicking it off with the Axia Africa School of Data Analysis.",
  },
];

const Schools = () => {
  return (
    <FadeIn id="schools" className="relative py-10 w-full overflow-hidden">
      <video
        className="top-0 left-0 absolute w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div className="top-0 left-0 absolute bg-black bg-opacity-50 backdrop-blur-sm w-full h-full"></div>
      <div className="relative z-10 mx-auto max-w-[600px] md:max-w-[1480px] container">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl text-white uppercase md:leading-[72px]">
            Our Schools
          </h1>
          <p className="text-center text-lg text-white">
            Making sure that those interested in exploring various occupations
            can <br />
            readily access all the necessary resources they need to learn and
            grow
          </p>
        </div>
        <div className="gap-x-8 gap-y-14 grid md:grid-cols-2 py-8">
          {ourSchools.map((school, i) => (
            <SchoolCard
              key={school.id}
              icon={school.icon}
              title={school.title}
              desc={school.desc}
              num={i + 1}
            />
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default Schools;

function SchoolCard({ title, desc, num, icon }) {
  return (
    <Card
      className={`${num === 1 ? " md:justify-self-end" : ""} ${
        num === 3
          ? "md:justify-self-center md:col-span-full justify-center"
          : ""
      } mt-6 md:max-w-sm lg:max-w-md xl:max-w-lg text-primary-dark-2`}
    >
      <CardBody className="flex flex-col justify-center items-center">
        {icon}
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="text-blue-gray-600">{desc}</Typography>
      </CardBody>
      <CardFooter className="flex justify-center items-center pt-0">
        <a href="#" className="inline-block">
          <Button
            size="sm"
            variant="text"
            className="flex justify-center items-center gap-2"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
