import React from "react";

const SectionHeading = ({ children }) => {
  return (
    <div className="text-base md:text-xl font-semibold uppercase border-l-primary-color border-l-8 mb-5 pl-2.5">
      {children}
    </div>
  );
};

export default SectionHeading;
