import { ImLocation } from "react-icons/im";
import { MdAttachEmail, MdPhoneInTalk } from "react-icons/md";

const Contact = () => {
  return (
    <div className="lg:flex gap-8 my-14 ">
      <div className="w-full lg:w-1/2 flex flex-col gap-12 mb-20 lg:mb-4">
        <div className="flex items-start gap-4 px-6 py-6 md:px-7 md:py-10 rounded-md shadow-md">
          <ImLocation className="text-primary-color text-3xl md:text-4xl mt-1.5" />
          <div>
            <h2
              style={{ WebkitTextStroke: "0.9px black" }}
              className="text-2xl sm:text-3xl md:text-4xl uppercase stroke-slate-800 font-extrabold text-transparent"
            >
              Location
            </h2>
            <p className="mt-4">Jom Jom Tower, Uttora,Dhaka</p>
          </div>
        </div>
        <div className="flex items-start gap-4 px-6 py-6 md:px-7 md:py-10 rounded-md shadow-md ">
          <MdPhoneInTalk className="text-primary-color text-3xl md:text-4xl mt-1.5" />
          <div>
            <h2
              style={{ WebkitTextStroke: "0.9px black" }}
              className="text-2xl sm:text-3xl md:text-4xl uppercase stroke-slate-800 font-extrabold text-transparent"
            >
              Phone
            </h2>
            <p className="mt-4 mb-1">+012 3456 789102</p>
            <p>+012 3456 789102</p>
          </div>
        </div>
        <div className="flex items-start gap-4 px-6 py-6 md:px-7 md:py-10 rounded-md shadow-md">
          <MdAttachEmail className="text-primary-color text-3xl md:text-4xl mt-1.5" />
          <div>
            <h2
              style={{ WebkitTextStroke: "0.9px black" }}
              className="text-2xl sm:text-3xl md:text-4xl uppercase stroke-slate-800 font-extrabold text-transparent"
            >
              Email
            </h2>
            <p className="mt-4 mb-1">info@example.com </p>
            <p>support@example.com</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className=" px-12 pb-10 shadow-md rounded-md">
          <h2
            style={{ WebkitTextStroke: "0.9px black" }}
            className="text-2xl sm:text-3xl md:text-4xl uppercase stroke-slate-800 font-extrabold text-transparent mb-9"
          >
            Write a message
          </h2>
          <input
            type="text"
            placeholder="YOUR NAME"
            className="input input-bordered w-full text-sm"
          />
          <input
            type="email"
            placeholder="YOUR EMAIL"
            className="input input-bordered outline-1 w-full text-sm mt-6"
          />
          <input
            type="text"
            placeholder="YOUR PHONE"
            className="input input-bordered w-full text-sm mt-6"
          />
          <input
            type="text"
            placeholder="SUBJECT"
            className="input input-bordered w-full text-sm mt-6"
          />
          <textarea
            type="text"
            placeholder="WRITE MESSAGE"
            className="textarea textarea-bordered w-full h-36 md:h-56 text-sm mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
