import React from "react";
import {
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
} from "../assets";
import { FadeIn } from "./FadeIn";

const Companies = () => {
  return (
    <FadeIn>
      <div className="pt-[50px] w-full">
        <div className="m-auto px-4 md:px-0 max-w-[600px] md:max-w-[1480px]">
          <h1 className="font-bold text-2xl text-center text-primary-dark-3">
            Prestigious Employers Proudly Hiring Our Top Graduates.
          </h1>
          <p className="text-center text-primary-dark-3 text-xl">
            Join the ranks of our successful graduates and take your place among
            industry leaders.
          </p>
          <div className="flex justify-center md:gap-8 pt-8">
            <div className="gap-2 grid grid-cols-2 md:grid-cols-4 companies-logos">
              <img src="/techbeaver.png" />
              <img src="/aladdin.svg" />
              <img src="/grazac.png" />
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default Companies;
