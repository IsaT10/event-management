import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { id, description, photo, price, title } = service || {};
  return (
    <div className="w-[300px] md:w-[350px] lg:w-5/6 mx-auto rounded overflow-hidden shadow-md pb-4">
      <img src={photo} alt=" " className="w-full h-[275px] object-cover" />
      <div className="px-6 pt-4">
        <div className="font-semibold  mb-2 uppercase">{title}</div>
      </div>
      <p>{description.slice(0, 80)}...read more</p>
      <div className="px-6 flex justify-between items-center pt-3 pb-6">
        <p className="text-primary-color font-semibold ">Price : {price}</p>
        <Link
          to={`/service-details/${id}`}
          // className="text-primary-color font-semibold flex items-center gap-1 cursor-pointer"
        >
          <button className="bg-primary-color   px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-sm text-white">
            Details
          </button>
          {/* <p>Details</p> <FaArrowRight className="" /> */}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
