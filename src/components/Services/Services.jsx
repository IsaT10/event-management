import React from "react";
import useService from "../../hooks/useGetServices";
import ServiceCard from "./ServiceCard";
import SectionHeading from "../../utils/SectionHeading";

const Services = () => {
  const { services } = useService();
  return (
    <div className="my-12">
      <SectionHeading>Our Services</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
        {services.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Services;
