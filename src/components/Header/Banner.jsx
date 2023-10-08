import React from "react";

const Banner = () => {
  return (
    <div className="h-[95vh] bg-heroImg flex flex-col justify-center xl:px-32 px-4">
      <div className=" ">
        <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-semibold uppercase pb-9 md:leading-normal lg:leading-relaxed">
          Organization <br /> & Management <br /> of
          <span className="text-primary-color"> Sports Events</span>
        </h1>
        <div className="flex gap-8 text-white font-semibold">
          <button className="bg-primary-color   px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-5 md:py-2.5  rounded-sm">
            Book now
          </button>
          <button className="bg-transparent border-2 text-sm md:text-base border-primary-color rounded-sm px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-5 md:py-2.5 text-primary-color">
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
