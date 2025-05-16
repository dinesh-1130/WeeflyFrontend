import WeeFlyLogo from "../assets/Auth/OrangeWeeflyLogo.svg";
import MobileIcon from "../assets/Auth/MobileIcon.svg";
import ForgetPasswordBg from "../assets/Auth/ForgotPasswordBg.png";
import MailIcon from "../assets/Auth/MailIcon.svg";
import { Link, useNavigate } from "react-router";
import { AlignRight, ArrowLeft, X } from "lucide-react";
// import { Link, useNavigate } from "react-router";
// import { HandleGoogleLogin } from "../features/firebase";
import { useState } from "react";

const NavLinks = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/" },
  { label: "Services", link: "/#ServicesOffered" },
  { label: "News", link: "/#newsSection" },
  { label: "Media", link: "/" },
  { label: "Contact Us", link: "/Contact" },
];

function ForgotPassword() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="h-screen flex relative overflow-hidden">
      <div
        className={`fixed h-full transition-all duration-300 origin-right left-0 bg-black/40 backdrop-blur-md z-20 overflow-hidden ${
          isMenuOpen ? "w-full lg:w-1/2" : "w-0"
        }`}
      >
        <div className="w-full z-50 top-0 px-10 xl:px-40 font-sans h-20 flex justify-between items-center text-white">
          <div className="text-2xl font-bold">
            <p
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <span>
                <ArrowLeft />
              </span>
              <span> Back</span>
            </p>
          </div>
          <div className="" onClick={() => setIsMenuOpen(false)}>
            <X className="h-8 w-8 -rotate-90" />
          </div>
        </div>
        <div className="flex flex-col text-right top-0 px-10 xl:px-40 text-3xl font-medium text-white gap-5 mt-5">
          {NavLinks.map((link, index) => (
            <Link
              to={link.link}
              key={index}
              onClick={() => setIsMenuOpen(false)}
              className="transition duration-300 hover:underline hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div
        data-aos="fade-right"
        className="left-section w-full xl:w-1/2 h-full bg-white flex flex-col px-[24px] xl:px-[136px]"
      >
        {/* menu */}
        <div className="w-full z-50 top-0 font-sans h-20 flex justify-between items-center text-primary">
          <div
            className="font-bold flex items-center gap-1 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <span>
              <ArrowLeft />
            </span>
            <span>Back</span>
          </div>
          <div className="" onClick={() => setIsMenuOpen(true)}>
            <AlignRight className="h-8 w-8" />
          </div>
        </div>
        {/* Add form or content here */}
        <div className=" h-full flex flex-col items-center justify-center gap-[15px]">
          <img
            src={WeeFlyLogo}
            alt="WeeFly Logo"
            className="h-[70px] w-[92px]"
          />
          <h1 className="font-jakarta font-semibold text-[24px]">
            Forgot password?
          </h1>
          <h1 className="font-jakarta font-normal text-[16px] text-[#555555] text-center max-w-[430px]">
            Enter your Registered Email address and we’ll send a link to reset
            password
          </h1>
          <form action="" className="max-w-[430px] w-full">
            <div className="w-full">
              <label
                htmlFor=""
                className="font-jakarta font-normal text-base text-[#555555]"
              >
                Email address
              </label>
              <div className="relative bg-[#F1F3F6] flex rounded-l-[8px] w-full mt-[14px]">
                <input
                  type="email"
                  placeholder="alex@email.com"
                  className="px-[20px] py-[14px] w-full outline-[#EE5128]"
                />
                <div className="px-[20px] py-[14px] rounded-[8px] bg-[#EE5128] grid place-items-center">
                  <img src={MailIcon} alt="Mail Icon" />
                </div>
              </div>
            </div>

            <button className="font-jakarta font-semibold text-[18px] w-full bg-[#EE5128] py-[14px] rounded-[8px] text-white mt-[40px] drop-shadow-xl drop-shadow-[#FD74014D]">
              Login now
            </button>
          </form>
          <p className="mt-[30px] font-jakarta font-normal text-[16px]">
            Didn't receive code?
            <Link to={"#"} className="font-bold text-[18px] text-[#EE5128]">
              Resend
            </Link>
          </p>
          <p className="font-jakarta font-normal text-[16px]">
            Are you a business?
            <Link
              to={"/#travel-section"}
              className="font-bold pl-1 text-[18px] text-[#EE5128]"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="right-section hidden xl:block xl:w-1/2 h-full bg-black relative"
      >
        {/* <div className=""></div> */}
        <img
          src={ForgetPasswordBg}
          alt="ForgetPassword Background"
          className="object-cover object-center w-full h-full"
        />
      </div>
    </div>
  );
}

export default ForgotPassword;
