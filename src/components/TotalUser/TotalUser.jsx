import React from "react";
import SectionHeading from "../../utils/SectionHeading";
import "./TotalUser.css";

const TotalUser = () => {
  return (
    <div className="my-10">
      <SectionHeading>Total User</SectionHeading>
      <div className="user_bg  flex items-center justify-around text-white">
        <div className="flex flex-col gap-3 md:gap-5 items-center">
          <span className="text-3xl lg:text-5xl font-semibold border-b-[3px] pb-1 md:pb-4">
            532
          </span>
          <p className="font-semibold text-xs lg:text-base lg:tracking-wider">
            EVENTS ORGANIZED
          </p>
        </div>
        <div className="flex flex-col gap-3 md:gap-5 items-center ">
          <span className="text-3xl lg:text-5xl font-semibold border-b-[3px] pb-1 md:pb-4">
            16543
          </span>
          <p className="font-semibold text-xs lg:text-base lg:tracking-wider">
            ACTIVE USERS
          </p>
        </div>
        <div className="flex flex-col gap-3 md:gap-5 items-center ">
          <span className="text-3xl lg:text-5xl font-semibold border-b-[3px] pb-1 md:pb-4">
            70969
          </span>
          <p className="font-semibold text-xs lg:text-base lg:tracking-wider">
            TOTAL USERS
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalUser;
