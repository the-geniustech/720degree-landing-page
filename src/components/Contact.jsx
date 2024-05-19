import React from "react";
import { FadeIn } from "./FadeIn";

const Contact = () => {
  return (
    <>
      <FadeIn
        id="contact"
        className="relative z-10 py-20 lg:py-[120px] text-primary-dark-1"
      >
        <div className="mx-auto container">
          <div className="bg-white dark:bg-dark-2">
            <div className="flex flex-wrap items-stretch">
              <div className="w-full lg:w-7/12">
                <div className="relative flex w-full h-full overflow-hidden">
                  <div className="flex items-end h-full">
                    <img
                      src="/720lecture.jpg"
                      alt="image"
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="md:block right-0 bottom-14 left-0 absolute hidden mx-auto px-5 w-full max-w-[560px]">
                    <div className="md:inline-flex flex-wrap items-center bg-white dark:bg-dark-2 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)] px-4 md:px-4 lg:px-0 xl:px-4 py-9 rounded w-full">
                      <div className="border-stroke dark:border-dark-3 mb-4 md:mb-0 px-3 md:border-r">
                        <h5 className="font-semibold text-dark text-lg dark:text-white">
                          Email
                        </h5>
                        <p className="text-base text-body-color dark:text-dark-6">
                          connect@720degreehub.com
                        </p>
                      </div>
                      <div className="border-stroke dark:border-dark-3 mb-4 md:mb-0 px-3">
                        <h5 className="font-semibold text-dark text-lg dark:text-white">
                          Phone
                        </h5>
                        <p className="text-base text-body-color dark:text-dark-6">
                          +234 815 1562 577
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary w-full lg:w-5/12">
                <div className="px-8 lg:px-14 2xl:px-70 py-14 sm:p-[70px] w-full">
                  <h2 className="mb-9 font-semibold text-3xl text-white sm:text-4xl dark:text-white leading-tight sm:leading-tight">
                    Begin Your <br />
                    Tech Career!
                  </h2>
                  <form name="contact" method="POST" data-netlify="true">
                    <InputBox
                      labelTitle="Your Name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                    />
                    <InputBox
                      labelTitle="Your Email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <TextArea
                      labelTitle="Your Message"
                      row="5"
                      placeholder="Enter your message"
                      name="message"
                      defaultValue=""
                    />
                    <div>
                      <button
                        type="submit"
                        className="border-2 border-primary-dark bg-white hover:bg-opacity-90 px-7 py-3 rounded-md text-primary-dark transition cursor-pointer"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Contact;

const InputBox = ({ type, placeholder, name, labelTitle }) => {
  return (
    <div className="mb-5">
      <label className="block mb-2.5 font-medium text-base text-white dark:text-white">
        {labelTitle}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="border-stroke border-white focus:border-white dark:border-dark-3 bg-transparent focus-visible:shadow-none px-5 py-3 border rounded-md w-full text-base text-white dark:text-dark-6 outline-none"
      />
    </div>
  );
};

const TextArea = ({ row, placeholder, name, defaultValue, labelTitle }) => {
  return (
    <>
      <div className="mb-6">
        <label className="block mb-2.5 font-medium text-base text-white dark:text-white">
          {labelTitle}
        </label>
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="border-stroke border-white focus:border-white dark:border-dark-3 bg-transparent focus-visible:shadow-none px-5 py-3 border rounded-md w-full text-base text-white dark:text-dark-6 outline-none resize-none"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};
