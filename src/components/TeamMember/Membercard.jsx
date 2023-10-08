import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Membercard = ({ img, children, skill }) => {
  return (
    <div className="w-[300px] mx-auto relative rounded overflow-hidden shadow-lg">
      <img className="w-[300px] h-[300px] object-cover" src={img} alt="Card" />
      <div className="absolute inset-0 flex items-center justify-center bg-primary-color opacity-0 hover:opacity-75 transition-opacity duration-300">
        <div className="text-white flex gap-4">
          <FaFacebook className="text-2xl cursor-pointer" />
          <FaInstagramSquare className="text-2xl cursor-pointer" />
          <FaLinkedin className="text-2xl cursor-pointer" />
          <FaTwitter className="text-2xl cursor-pointer" />
        </div>
      </div>
      <div className="px-4 py-2 md:px-6 ">
        <div className="font-bold text-lg md:text-xl text-center">
          {children}
        </div>
      </div>
      <h6 className="text-center text-stone-400 mb-3">{skill}</h6>
    </div>
  );
};

export default Membercard;
