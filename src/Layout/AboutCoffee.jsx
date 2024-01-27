import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const AboutCoffee = () => {
  const coffee = useLoaderData();
  const { name, suppliler, category, chef, taste, price, photo } = coffee;

  return (
    <div className="bg-[url('/src/assets/Image/11.png')] bg-cover ">
      <div className="max-w-screen-xl mx-auto px-3">
        <Link to="/" className="flex items-center gap-4 py-7 ">
          <FaArrowLeftLong className="text-3xl blur-[0.9px]" />
          <p className="text-[30px] font-Rancho blur-[0.9px]">Back to home</p>
        </Link>
        <div className="bg-[#f4f3f1] mt-10 mb-20 py-10">
          <div className="flex items-center  max-w-screen-lg mx-auto">
            <div className="flex-1">
              <img src={photo} />
            </div>
            <div className="flex-1 text-[#331a15]">
              <p className="text-4xl font-Rancho my-5  blur-[0.8px]">
                Niceties
              </p>
              <div className="space-y-1">
                <p className=" font-semibold text-xl">
                  Name : <span className="font-medium">{name}</span>
                </p>
                <p className=" font-semibold text-xl">
                  Chef : <span className="font-medium">{chef}</span>
                </p>
                <p className=" font-semibold text-xl">
                  Price :{"     "}
                  <span className="font-medium"> {price} Taka</span>
                </p>
                <p className=" font-semibold text-xl">
                  Supplier :
                  <span className="font-medium">{suppliler}</span>
                </p>
                <p className=" font-semibold text-xl">
                  Taste : <span className="font-medium">{taste}</span>
                </p>
                <p className=" font-semibold text-xl">
                  Category :
                  <span className="font-medium">{category}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCoffee;
