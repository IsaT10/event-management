import React from "react";
import SectionHeading from "../../utils/SectionHeading";
import Membercard from "./Membercard";
import img1 from "../../assets/user1.jpg";
import img2 from "../../assets/user2.jpg";
import img3 from "../../assets/user3.jpg";
import img4 from "../../assets/user4.jpg";

const TeamMember = () => {
  return (
    <div className="my-20">
      <SectionHeading>Our Team Members</SectionHeading>

      <div className="flex gap-6 flex-wrap justify-between">
        <Membercard img={img1} skill={"Business Manager"}>
          Latham
        </Membercard>
        <Membercard img={img2} skill={"Marketing"}>
          Sadik
        </Membercard>
        <Membercard img={img3} skill={"Photographer"}>
          Tamim
        </Membercard>
        <Membercard img={img4} skill={"Visual Desiger"}>
          Sakib
        </Membercard>
      </div>
    </div>
  );
};

export default TeamMember;
