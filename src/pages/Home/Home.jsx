import React from "react";
import TotalUser from "../../components/TotalUser/TotalUser";
import AOS from "aos";
import "aos/dist/aos.css";
import TeamMember from "../../components/TeamMember/TeamMember";
import Services from "../../components/Services/Services";
AOS.init();

const Home = () => {
  return (
    <>
      <div className="" data-aos="fade-up" data-aos-duration="1000">
        <Services />
      </div>
      <div data-aos="fade-right" data-aos-duration="2000">
        <TotalUser />
      </div>
      <div data-aos="fade-left" data-aos-duration="2000">
        <TeamMember />
      </div>
    </>
  );
};

export default Home;
