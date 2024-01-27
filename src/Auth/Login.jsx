import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Socal from "../Components/Common/Socal";
import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import Swal from "sweetalert2";

const Login = () => {
  const { userLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password).then((res) => {
      console.log(res.user.metadata.lastSignInTime);
      const user = {
        email,
        lastLoggedAt: res.user?.metadata?.lastSignInTime,
      };
      fetch("http://localhost:5000/users", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "SignIn successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div className="bg-[url('/src/assets/Image/11.png')] bg-cover ">
      <div className="max-w-screen-xl mx-auto px-3">
        <Link to="/" className="flex items-center gap-4 py-7 ">
          <FaArrowLeftLong className="text-3xl blur-[0.9px]" />
          <p className="text-[30px] font-Rancho blur-[0.9px]">Back to home</p>
        </Link>
        <div className="bg-[#f4f3f1] mt-10 mb-20 py-10">
          <div className="max-w-screen-lg mx-auto">
            <p className="text-[#374151] text-center font-Rancho text-4xl pb-5 blur-[0.7px]">
              Login Now
            </p>
            <form
              onSubmit={handleLogin}
              className="max-w-screen-sm mx-auto space-y-5 md:px-20"
            >
              <div className="space-y-3">
                <p className="font-semibold text-xl">Email</p>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="px-4 py-2 w-full block text-lg font-medium"
                />
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-xl ">Password</p>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="px-4 w-full block text-lg py-1"
                />
              </div>
              <p className="flex justify-end text-xl hover:link hover:font-semibold">
                Forgot Password
              </p>
              <input
                type="submit"
                value="Login"
                className="btn bg-[#d2b48c] hover:bg-[#d2b48c] text-2xl font-Rancho text-[#331a15] w-full "
              />
            </form>
          </div>
          <div className="text-center py-5">
            <p className="text-xl font-semibold">
              New to this site ?
              <Link to="/register" className="hover:font-bold hover:link">
                Please Register
              </Link>
            </p>
          </div>
          <Socal />
        </div>
      </div>
    </div>
  );
};

export default Login;
