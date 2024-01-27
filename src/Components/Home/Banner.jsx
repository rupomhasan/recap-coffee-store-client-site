import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/Authprovider";

const Banner = () => {
  const { user, userLogout } = useContext(AuthContext);

  return (
    <div>
      <div className="flex items-center justify-end h-[85vh] bg-[url('/src/assets/Image/3.png')]  bg-cover">
        <div className="flex justify-between max-w-screen-2xl mx-auto  ">
          <div className="flex-1 text-white space-y-5 ">
            <p className=" text-4xl md:text-6xl font-Rancho md:py-5">
              Would you like a Cup of Delicious Coffee?
            </p>
            <div className="">
              <p className="max-w-2xl ">
                It's coffee time - Sip & Savor - Relaxation in every sip! Get
                the nostalgia back!! Your companion of every moment !!! Enjoy
                the beautiful moments and make then memorable.
              </p>
            </div>
            {!user ? (
              <Link to="/login">
                <button className=" md:mt-5 btn rounded-none bg-[#e3b577] font-Rancho text-2xl border-none hover:bg-none">
                  Login Now
                </button>
              </Link>
            ) : (
              <button
                onClick={userLogout}
                className=" md:mt-5 btn rounded-none bg-[#e3b577] font-Rancho text-2xl border-none hover:bg-none"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
