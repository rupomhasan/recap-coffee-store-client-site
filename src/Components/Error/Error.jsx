import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3">
      <Link to="/" className="flex items-center gap-4 py-7 justify-center">
        <FaArrowLeftLong className="text-3xl blur-[0.9px]" />
        <p className="text-[30px] font-Rancho blur-[0.9px]">Back to home</p>
      </Link>
      <div className="flex justify-center">
        <img src="/src/assets/404/404.gif" alt="errorpage" />
      </div>
    </div>
  );
};

export default Error;
