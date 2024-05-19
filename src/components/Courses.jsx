import React from "react";
import { FaArrowRight, FaCircle } from "react-icons/fa";
import { courses } from "../data/Courses";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { FadeIn } from "./FadeIn";
import { Link } from "react-scroll";

const Courses = () => {
  return (
    <>
      <FadeIn id="career" className="w-full">
        <div className="m-auto px-4 py-24 sm:pt-20 sm:pb-36 w-full max-w-[600px] md:max-w-[1480px]">
          <div className="text-center container">
            <h1 className="py-3 font-bold text-3xl">
              Most Trending <span className="text-[#20B486]">Programs</span>
            </h1>
            <p className="mb-20 sm:mb-36 text-[#6D737A]">
              Here are some trending programs that we offer, which you can
              choose from. <br />
              Enroll and kickstart your tech career.
            </p>
          </div>

          <CardContainer>
            {courses.map((course, i) => (
              <CardDefault key={i} course={course} />
            ))}
          </CardContainer>
        </div>
      </FadeIn>
    </>
  );
};

const CardContainer = ({ children }) => {
  return (
    <div className="gap-20 md:gap-x-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container">
      {children}
    </div>
  );
};

const CardDefault = React.memo(({ course }) => {
  return (
    <Card>
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={course.linkImg}
          alt={`${course.title} illustration`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {course.title}
        </Typography>
        <Typography>{course.description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          <Button className="relative flex justify-start items-center bg-transparent shadow-none hover:shadow-none w-full text-primary-dark !overflow-visible">
            <span className="z-50 mr-2">Enroll now</span>
            <FaArrowRight className="z-10 text-base" />
            <FaCircle className="-top-2 left-0 z-10 absolute text-6xl text-primary-light" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
});

export default Courses;
