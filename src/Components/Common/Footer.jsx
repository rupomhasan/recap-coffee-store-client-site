import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-cover bg-[url('/src/assets/Image/13.jpg')]">
        <div className="max-w-screen-lg mx-auto px-5 py-28">
          <img src="/src/assets/Image/logo1.png" className="w-14 pb-5" />
          <div className="md:flex gap-10 items-center space-y-10 md:space-y-0 ">
            <div className="space-y-5">
              <p className="text-4xl font-Rancho text-[#331a15] blur-[0.7px]">
                Espresso Emporium
              </p>
              <p className="text-[#1b1a1a] text-xl">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best comparnion.
              </p>
              <div className=" flex gap-3 text-4xl text-[#331a15]">
                <MdFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
              </div>
              <p className="text-4xl font-Rancho text-[#331a15] blur-[0.8px]">
                Get in Touch
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-5 text-2xl">
                  <FaPhoneAlt className="text-[#331a15]" />
                  <p className="text-[#1b1a1a]">01318044328</p>
                </div>
                <div className="flex items-center gap-5 text-2xl">
                  <IoMdMail className="text-[#331a15]" />
                  <p className="text-[#1b1a1a]">name@gamil.com</p>
                </div>{" "}
                <div className="flex items-center gap-5 text-2xl">
                  <IoLocationSharp className="text-[#331a15]" />
                  <p className="text-[#1b1a1a]">Rangpur , Bangladesh</p>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <p className="text-4xl font-Rancho text-[#331a15] blur-[0.7px] ">
                Contact with Us
              </p>
              <form className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="px-5 py-3 w-4/5 bg-white "
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="px-5 py-3 bg-white w-4/5"
                />
                <textarea
                  cols={25}
                  rows={6}
                  className="bg-white px-5 py-3"
                  placeholder="Message"
                />
                <input
                  type="submit"
                  className="border-[#331a15] border-2 hover:bg-[#e3b577] rounded-full px-5 font-Rancho text-2xl text-[#331a15]"
                  value="Send Message "
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/src/assets/Image/24.jpg')] bg-cover">
        <p className="text-white text-center md:text-2xl font-Rancho py-2">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
