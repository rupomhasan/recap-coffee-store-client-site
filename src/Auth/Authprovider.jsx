import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loader, setLoader] = useState(true);
  const [admin, setAdmin] = useState(false);

  const userLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const socialUser = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const userLogout = () => {
    Swal.fire({
      title: "Do you want to LogOut",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        signOut(auth).then(() => {
          console.log("Logout succesfull");
          Swal.fire("SignOut", " ", "success");
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        return;
      }
    });
    return;
  };

  const deletedUser = () => {
    return deleteUser(auth.currentUser);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.email === "rupom.hasan607299@gmail.com") {
          console.log(user.email);
          setAdmin(true);
        } else setAdmin(false);

        setUser(true);
        setLoader(false);
      } else setUser(false);
    });
  }, []);

  const info = {
    user,
    createNewUser,
    socialUser,
    userLogin,
    userLogout,
    deletedUser,
    loader,
    admin,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

Authprovider.propTypes = {
  children: PropTypes.node,
};
export default Authprovider;
