import img1 from "../../assets/alex-engelman--LCRyAc0WfE-unsplash.jpg";
import img2 from "../../assets/alex-engelman-CjswHPy7PAU-unsplash.jpg";
import img3 from "../../assets/alex-engelman-k2pxBTCyq30-unsplash.jpg";
import img4 from "../../assets/emanuel-ekstrom-I45hdPF5Na0-unsplash.jpg";
import img5 from "../../assets/james-thomas-7u1SFd5AL7I-unsplash.jpg";
import img6 from "../../assets/marcel-ardivan-VKKwYp0GYMI-unsplash.jpg";
import img7 from "../../assets/muktasim-azlan-pPfOLOK0oeI-unsplash.jpg";
import img8 from "../../assets/saif71-com-yxvKiAlrS6c-unsplash.jpg";
import img9 from "../../assets/stem-list-ryRU-cd1yas-unsplash.jpg";
// import img10 from "../../assets/"

const Gallery = () => {
  return (
    <>
      <div className="grid grid-cols-6 md:grid-cols-10  grid-flow-dense my-8 gap-3 md:gap-4">
        <figure className="flex items-center justify-center col-span-6 sm:col-span-3  md:col-span-4 sm:row-span-2">
          <img
            className="w-full h-full align-middle inline-block object-cover rounded-md"
            src={img1}
            alt=""
          />
        </figure>
        {/* <div className="row-span-3 col-span-3"> */}
        <figure className="col-span-3 sm:col-span-3">
          <img
            className="max-w-full h-[300px] align-middle inline-block object-cover rounded-md "
            src={img2}
            alt=""
          />
        </figure>
        {/* </div> */}
        <figure className="col-span-3">
          <img
            className="w-full h-[300px] align-middle inline-block object-cover rounded-md  "
            src={img3}
            alt=""
          />
        </figure>
        <figure className="col-span-6">
          <img
            className="w-full h-[300px] align-middle inline-block object-cover rounded-md  "
            src={img4}
            alt=""
          />
        </figure>
        <figure className="col-span-3">
          <img
            className="max-w-full h-[300px] align-middle inline-block object-cover rounded-md  "
            src={img5}
            alt=""
          />
        </figure>
        <figure className="col-span-3">
          <img
            className="w-full h-[300px] align-middle inline-block object-cover rounded-md  "
            src={img6}
            alt=""
          />
        </figure>
        <figure className="col-span-3 sm:col-span-2 md:col-span-4 md:row-span-2">
          <img
            className="max-w-full h-full align-middle inline-block object-cover rounded-md  "
            src={img7}
            alt=""
          />
        </figure>
        <figure className="col-span-3 sm:col-span-2 md:col-span-3">
          <img
            className="max-w-full h-[300px] align-middle inline-block object-cover rounded-md  "
            src={img8}
            alt=""
          />
        </figure>
        <figure className="col-span-6 sm:col-span-2 md:col-span-3">
          <img
            className="max-w-full h-[300px] align-middle inline-block object-cover rounded-md  "
            src={img9}
            alt=""
          />
        </figure>
        <figure></figure>
      </div>
    </>
  );
};

export default Gallery;
