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
      <div className="px-6 flex justify-between items-center pt-3 pb-8">
        <p className="text-primary-color font-semibold ">Price : {price}</p>
        <Link
          to={`/service-details/${id}`}
          className="text-primary-color font-semibold flex items-center gap-1 cursor-pointer"
        >
          <p>Details</p> <FaArrowRight className="" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
