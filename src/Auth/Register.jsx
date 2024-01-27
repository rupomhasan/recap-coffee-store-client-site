import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Socal from "../Components/Common/Socal";
import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import Swal from "sweetalert2";

const Register = () => {
  const { createNewUser } = useContext(AuthContext);

  const register = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.value;

    const user = { name, email };

    console.log(password, name, email, terms);
    createNewUser(email, password)
      .then((result) => {
        //Save data to backend

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => console.log(error));

        console.log(result);
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          console.log("name aded");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      })
      .catch((error) => console.log(error));
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
              Register Now
            </p>
            <form
              onSubmit={register}
              className="max-w-screen-sm mx-auto space-y-5 px-2 md:px-20"
            >
              <div className="space-y-3">
                <p className="font-semibold text-xl">Name</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="px-4 py-2 w-full block text-lg font-medium"
                />
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-xl">Email</p>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="px-4 py-2 w-full block text-lg font-medium"
                />
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-xl ">Password</p>
                <input
                  type="password"
                  name="password"
                  placeholder="Password must be 8 char"
                  className="px-4 w-full block text-lg py-1"
                />
              </div>
              <div className="flex gap-4 items-center">
                <input
                  id="terms"
                  type="checkbox"
                  name="terms"
                  className="w-4 h-4"
                  required
                />
                <p
                  htmlFor="terms"
                  className="flex  text-xl hover:link font-semibold"
                >
                  Terms & Condition
                </p>
              </div>
              <input
                type="submit"
                value="Register"
                className="btn bg-[#d2b48c] hover:bg-[#d2b48c] text-2xl font-Rancho text-[#331a15] w-full "
              />
            </form>
          </div>
          <div className="text-center py-5">
            <p className="text-xl font-semibold">
              Already Have ?
              <Link className="hover:font-bold hover:link" to="/login">
                Please Login
              </Link>
            </p>
          </div>
          <Socal />
        </div>
      </div>
    </div>
  );
};

export default Register;
