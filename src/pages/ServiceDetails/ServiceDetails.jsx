import React from "react";
import { useParams } from "react-router-dom";
import useService from "../../hooks/useGetServices";

const ServiceDetails = () => {
  const { id } = useParams();
  const { service, error, loading } = useService(id);
  console.log(service);
  console.log(id);
  const { description, photo, price, title } = service || {};

  return (
    <>
      {loading ? (
        <h5>loading...</h5>
      ) : (
        <div className="mb-8">
          {error ? (
            <p className="text-center text-[#FF444A] text-3xl font-semibold mt-28">
              {error}
            </p>
          ) : (
            ""
          )}

          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="leading-8 text-stone-500">{description}</p>
        </div>
      )}
    </>
  );
};

export default ServiceDetails;
