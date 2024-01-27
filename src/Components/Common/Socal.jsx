import { MdFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Auth/Authprovider";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Socal = () => {
  const { socialUser } = useContext(AuthContext);
  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  const socialLogin = (provider) => {
    socialUser(provider)
      .then((res) => {
        console.log(res);
        const user = {
          name: res.user?.displayName,
          email: res.user?.email,
          photo: res.user?.photoURL,
          lastSignInTime: res.user?.metadata?.lastSignInTime,
        };
        fetch("http://localhost:5000/users", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      className="max-w-xs mx-auto px-2
    "
    >
      <div className="flex gap-5 items-center  mt-5">
        <p className="w-full h-[1px] bg-[#374151]"></p>
        <p className="text-center text-[#374151] text-xl font-semibold">Or</p>
        <p className="w-full h-[1px] bg-[#374151]"></p>
      </div>
      <div className="  flex items-center  justify-between  ">
        <div>
          <p className="text-[#374151] font-semibold text-xl ">Login in with</p>
        </div>
        <div className="flex gap-3">
          <MdFacebook
            onClick={() => socialLogin(facebookProvider)}
            className="text-4xl"
          />
          <FcGoogle
            onClick={() => socialLogin(googleProvider)}
            className="text-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Socal;
