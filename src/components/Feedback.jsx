import React from "react";
import { FadeIn } from "./FadeIn";

const Feedback = () => {
  return (
    <FadeIn
      id="testimonial"
      className="dark:bg-dark pt-20 lg:pt-[120px] pb-10 lg:pb-20"
    >
      <div className="mx-auto container">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="px-4 w-full">
            <div className="mb-[60px] lg:mb-[70px] max-w-[510px]">
              <h2 className="mb-3 font-bold text-3xl text-dark sm:text-4xl md:text-[40px] dark:text-white leading-[1.2]">
                What our Students Says
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                See what our graduates are saying! Read testimonials from our
                alumni who have transformed their careers through our intensive
                bootcamp.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center -mx-4">
          <SingleTestimonial
            image="/damilola.jpeg"
            name="Damilola Bajebo"
            position="Frontend developer."
            details="Attending 720Degree Hub Bootcamp was a game-changer for my career. The immersive learning experience, coupled with expert mentorship, equipped me with the skills and confidence I needed to secure a high-paying tech job. I highly recommend this bootcamp to anyone serious about transforming their future."
          />
          <SingleTestimonial
            image="/hakeem.jpg"
            name="Hakeem Olaogun"
            position="Full-stack Developer."
            details="The 6-week intensive program at 720Degree Hub Bootcamp was challenging yet incredibly rewarding. The hands-on training and supportive community of like-minded individuals made learning enjoyable and effective. I'm now working at a top tech firm, all thanks to the bootcamp!"
          />
          <SingleTestimonial
            image="/roqeeb.jpeg"
            name="Roqeeb Shobiye"
            position="Software Engineer."
            details="720Degree Hub Bootcamp exceeded all my expectations. The blend of in-person and online learning, along with continuous mentor support and motivation, ensured I mastered the latest tech skills. This bootcamp truly set me on the path to financial freedom and career success."
          />
          <SingleTestimonial
            image="/jemima.jpg"
            name="Jemima Afuape"
            position="Founder @ Poettry."
            details="Enrolling in 720Degree Hub Bootcamp was the best decision I've ever made. The comprehensive curriculum, state-of-the-art facilities, and personalized guidance prepared me thoroughly for the tech industry. My career prospects have soared, and I couldn't be happier with the outcome."
          />
        </div>
      </div>
    </FadeIn>
  );
};

export default Feedback;

const SingleTestimonial = ({ image, name, position, details }) => {
  return (
    <div className="px-4 w-full md:w-1/2">
      <div className="relative bg-white dark:bg-dark-2 shadow-testimonial-6 dark:shadow-none mb-10 md:px-6 md:py-10 p-8 sm:p-10 lg:p-10 rounded-[10px] overflow-hidden">
        <div className="flex items-center mb-8">
          <div className="mr-5 rounded w-full max-w-[80px] md:max-w-[60px] lg:max-w-[80px] h-20 md:h-[60px] lg:h-20 overflow-hidden">
            <img
              src={image}
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full">
            <h5 className="mb-1 font-semibold text-dark text-lg dark:text-white">
              {name}
            </h5>
            <p className="text-body-color text-xs dark:text-dark-6">
              {position}
            </p>
          </div>
        </div>
        <p className="text-base text-body-color dark:text-dark-6">
          “{details}”
        </p>
        <div>
          <span className="top-0 right-0 absolute">
            <svg
              width="104"
              height="102"
              viewBox="0 0 104 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M28.707 23.8032C31.0493 22.4301 33.9507 22.4301 36.293 23.8032L56.4389 35.6133C58.7351 36.9594 60.1458 39.4218 60.1458 42.0835V65.9165C60.1458 68.5782 58.7351 71.0406 56.4388 72.3867L36.293 84.1968C33.9507 85.5699 31.0493 85.5699 28.707 84.1968L8.56115 72.3867C6.26492 71.0406 4.85417 68.5782 4.85417 65.9165V42.0835C4.85417 39.4218 6.26492 36.9594 8.56115 35.6133L28.707 23.8032Z"
                stroke="#3056D3"
              />
              <path
                opacity="0.6"
                d="M105.25 12.7424C107.571 11.4027 110.429 11.4027 112.75 12.7424L144.587 31.1236C146.908 32.4634 148.337 34.9393 148.337 37.6188V74.3812C148.337 77.0607 146.908 79.5366 144.587 80.8764L112.75 99.2576C110.429 100.597 107.571 100.597 105.25 99.2576L73.4128 80.8764C71.0923 79.5366 69.6628 77.0607 69.6628 74.3812V37.6188C69.6628 34.9393 71.0923 32.4634 73.4128 31.1236L105.25 12.7424Z"
                stroke="#13C296"
              />
              <path
                opacity="0.6"
                d="M59.25 -23.2576C61.5705 -24.5973 64.4295 -24.5973 66.75 -23.2576L82.1327 -14.3764C84.4532 -13.0366 85.8827 -10.5607 85.8827 -7.8812V9.8812C85.8827 12.5607 84.4532 15.0366 82.1327 16.3764L66.75 25.2576C64.4295 26.5973 61.5705 26.5973 59.25 25.2576L43.8673 16.3764C41.5468 15.0366 40.1173 12.5607 40.1173 9.8812V-7.8812C40.1173 -10.5607 41.5468 -13.0366 43.8673 -14.3764L59.25 -23.2576Z"
                stroke="#F98B69"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
