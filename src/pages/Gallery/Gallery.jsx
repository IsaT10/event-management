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
      <div class="grid grid-cols-12 grid-rows-5 gap-4">
        <div class="col-span-6 row-span-2 bg-blue-200">Column 1</div>
        <div class="col-span-3 bg-green-200">Column 2</div>
        <div class="col-span-3 bg-red-200">Column 3</div>

        <div class="col-span-4 row-span-3 bg-yellow-200">Column 1</div>
        <div class="col-span-4 bg-purple-200">Column 2</div>
        <div class="col-span-4 bg-pink-200">Column 3</div>

        <div class="col-span-2 bg-orange-200">Column 1</div>
        <div class="col-span-4 row-span-2 bg-indigo-200">Column 2</div>
        <div class="col-span-3 row-span-2 bg-teal-200">Column 3</div>
        <div class="col-span-3 bg-cyan-200">Column 4</div>

        <div class="col-span-6 row-span-2 bg-lime-200">Column 1</div>
        <div class="col-span-3 bg-rose-200">Column 2</div>
        <div class="col-span-3 row-span-3 bg-violet-200">Column 3</div>

        <div class="col-span-4 bg-amber-200">Column 1</div>
        <div class="col-span-4 bg-emerald-200">Column 2</div>
        <div class="col-span-4 bg-gray-200">Column 3</div>
      </div>

      <div className="grid grid-cols-12 grid-rows-5  gap-8 grid-flow-row">
        <figure className=" col-span-3">
          <img className="h-[250px] object-cover " src={img1} alt="" />
        </figure>
        {/* <div className="row-span-3 col-span-3"> */}
        <figure className="col-span-4 row-span-2">
          <img className="h-[250px] object-cover" src={img2} alt="" />
        </figure>
        {/* </div> */}
        <figure className="  ">
          <img className="h-[250px] object-cover " src={img3} alt="" />
        </figure>
        <figure className="">
          <img className="h-[250px] object-cover " src={img4} alt="" />
        </figure>
        <figure className="">
          <img className="h-[250px] object-cover " src={img5} alt="" />
        </figure>
        <figure className="">
          <img className="h-[250px] object-cover " src={img6} alt="" />
        </figure>
        <figure className="">
          <img className="h-[250px] object-cover " src={img7} alt="" />
        </figure>
        <figure className="">
          <img className="h-[250px] object-cover " src={img8} alt="" />
        </figure>
        <figure className="">
          <img className="h-[250px] object-cover " src={img9} alt="" />
        </figure>
        <figure></figure>
      </div>
    </>
  );
};

export default Gallery;
