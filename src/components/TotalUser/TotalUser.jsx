import React from "react";
import SectionHeading from "../../utils/SectionHeading";
import "./TotalUser.css";

const TotalUser = () => {
  return (
    <div className="my-10">
      <SectionHeading>Total User</SectionHeading>
      <div className="user_bg h-[200px] flex items-center justify-around text-white">
        <div className="flex flex-col gap-5 items-center">
          <span className="text-5xl font-semibold border-b-[3px] pb-4">
            532
          </span>
          <p className="font-semibold tracking-wider">EVENTS ORGANIZED</p>
        </div>
        <div className="flex flex-col gap-5 items-center ">
          <span className="text-5xl font-semibold border-b-[3px] pb-4">
            16543
          </span>
          <p className="font-semibold tracking-wider">ACTIVE USERS</p>
        </div>
        <div className="flex flex-col gap-5 items-center ">
          <span className="text-5xl font-semibold border-b-[3px] pb-4">
            70969
          </span>
          <p className="font-semibold tracking-wider">Total User</p>
        </div>
      </div>
    </div>
  );
};

export default TotalUser;
