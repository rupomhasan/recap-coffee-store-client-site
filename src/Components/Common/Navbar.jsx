import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../Auth/Authprovider";
import { RiLogoutBoxLine } from "react-icons/ri";

const Navbar = () => {
  const { user, userLogout, admin } = useContext(AuthContext);

  return (
    <div className="py-2 bg-[url('/src/assets/Image/15.jpg')] bg-cover">
      <div className="flex justify-between  items-center max-w-screen-xl mx-auto">
        {admin && (
          <div className="navbar-start flex-1">
            <ul
              tabIndex={0}
              className=" hidden md:flex text-white font-Rancho justify-evenly flex-1"
            >
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/addCoffee">AddCoffee</Link>
              </li>
              <li>
                <Link to="/user">Users</Link>
              </li>
            </ul>
            <div className="dropdown md:hidden flex-1 ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <FiMenu className="text-white font-Rancho font-bold text-3xl" />
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Homepage</a>
                </li>
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>About</a>
                </li>
              </ul>
            </div>
          </div>
        )}
        <div className="flex justify-center gap-3 items-center flex-1">
          <img className="w-14" src="/src/assets/Image/logo1.png" alt="logo" />
          <p className="text-white font-Rancho text-xl md:text-3xl lg:text-5xl">
            Espresso Emporium
          </p>
        </div>
        <div className=" flex justify-end text-white flex-1">
          {!user ? (
            <Link to="/login" className="btn btn-ghost btn-circle">
              <IoIosLogIn className="text-2xl" />
            </Link>
          ) : (
            <button onClick={userLogout} className="btn btn-ghost btn-circle">
              <RiLogoutBoxLine className="text-2xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
