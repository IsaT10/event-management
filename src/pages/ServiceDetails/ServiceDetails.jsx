import React from "react";
import { useParams } from "react-router-dom";
import useService from "../../hooks/useGetServices";
import Spinner from "../../components/Spinner/Spinner";

const ServiceDetails = () => {
  const { id } = useParams();
  const { service, error, loading } = useService(id);
  const { description, photo, price, title } = service || {};

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="my-8 lg:my-16">
          {error ? (
            <p className="text-center text-[#FF444A] text-3xl font-semibold mt-28">
              {error}
            </p>
          ) : (
            ""
          )}
          <div className="lg:flex gap-10">
            <div className="lg:w-1/2">
              <img
                className="w-full h-[500px] md:h-[560px] object-cover"
                src={photo}
                alt=""
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-2xl lg:text-3xl font-bold mt-5 lg:-mt-1 mb-5 ">
                {title}
              </h2>
              <p className="tracking-wider text-stone-500">{description}</p>
              <button className="bg-primary-color   px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-5 md:py-2.5  rounded-sm text-white mt-5">
                Book now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetails;
