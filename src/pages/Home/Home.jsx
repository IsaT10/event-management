import React from "react";
import TotalUser from "../../components/TotalUser/TotalUser";
import TeamMember from "../../components/TeamMember/TeamMember";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <>
      <Services />
      <TotalUser />
      <TeamMember />
    </>
  );
};

export default Home;
