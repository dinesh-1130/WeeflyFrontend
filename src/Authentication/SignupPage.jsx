import WeeFlyLogo from "../assets/Auth/OrangeWeeflyLogo.svg";
import UserIcon from "../assets/Auth/UserIcon.svg";
import MobileIcon from "../assets/Auth/MobileIcon.svg";
import MailIcon from "../assets/Auth/MailIcon.svg";
import LockIcon from "../assets/Auth/LockIcon.svg";
import FacebookIcon from "../assets/Auth/FBIcon.svg";
import GoogleIcon from "../assets/Auth/GoogleIcon.svg";
import AppleIcon from "../assets/Auth/AppleIcon.svg";
import SignUpBg from "../assets/Auth/SignUpBg.png";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { Link } from "react-router";

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="h-screen flex relative overflow-hidden">
      <div
        data-aos="fade-right"
        className="left-section w-full xl:w-1/2 h-full bg-white flex flex-col px-[24px] xl:px-[136px]"
      >
        {/* Add form or content here */}
        <div className=" h-full flex flex-col items-center justify-center gap-[15px] xl:gap-[10px]">
          <img
            src={WeeFlyLogo}
            alt="WeeFly Logo"
            className="h-[70px] w-[92px]"
          />
          <h1 className="font-jakarta font-semibold text-[24px]">
            Create an account
          </h1>
          <form
            action=""
            className="max-w-[430px] w-full flex flex-col gap-[10px] xl:gap-[5px]"
          >
            <div className="w-full">
              <label
                htmlFor=""
                className="font-jakarta font-normal text-base text-[#555555]"
              >
                Name
              </label>
              <div className="relative bg-[rgb(241,243,246)] flex rounded-l-[8px] w-full mt-[14px] xl:mt-[5px]">
                <input
                  type="text"
                  placeholder="Alex"
                  className="px-[20px] py-[14px] xl:py-[10px] w-full outline-[#EE5128]"
                />
                <div className="px-[20px] py-[14px] xl:py-[10px] xl:px-[10px] rounded-[8px] bg-[#EE5128] grid place-items-center">
                  <img src={UserIcon} alt="Mail Icon" />
                </div>
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="font-jakarta font-normal text-base text-[#555555]"
              >
                Mobile number
              </label>
              <div className="relative bg-[#F1F3F6] flex rounded-l-[8px] w-full mt-[14px] xl:mt-[5px]">
                <input
                  type="tel"
                  placeholder="+91 | "
                  className="px-[20px] py-[14px] xl:py-[10px] w-full outline-[#EE5128]"
                />
                <div className="px-[20px] py-[14px] xl:py-[10px] xl:px-[10px] rounded-[8px] bg-[#EE5128] grid place-items-center">
                  <img src={MobileIcon} alt="Mail Icon" />
                </div>
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor=""
                className="font-jakarta font-normal text-base text-[#555555]"
              >
                Email address
              </label>
              <div className="relative bg-[#F1F3F6] flex rounded-l-[8px] w-full mt-[14px] xl:mt-[5px]">
                <input
                  type="email"
                  placeholder="alex@email.com"
                  className="px-[20px] py-[14px] xl:py-[10px] w-full outline-[#EE5128]"
                />
                <div className="px-[20px] py-[14px] xl:py-[10px] xl:px-[10px] rounded-[8px] bg-[#EE5128] grid place-items-center">
                  <img src={MailIcon} alt="Mail Icon" />
                </div>
              </div>
            </div>
            <div className="w-full mt-[10px]">
              <label
                htmlFor=""
                className="font-jakarta font-normal text-base text-[#555555]"
              >
                Password
              </label>
              <div className="relative bg-[#F1F3F6] flex rounded-l-[8px] w-full mt-[14px] xl:mt-[5px]">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="px-[20px] py-[14px] xl:py-[10px] xl:px-[10px]  w-full outline-[#EE5128] relative"
                />

                <div
                  className="my-auto px-2"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <Eye /> : <EyeClosed />}
                </div>
                <div className="px-[20px] py-[14px] xl:py-[10px] xl:px-[10px] rounded-[8px] bg-[#EE5128] grid place-items-center">
                  <img src={LockIcon} alt="Mail Icon" />
                </div>
              </div>
            </div>
            <button className="font-jakarta font-semibold text-[18px] w-full bg-[#EE5128] py-[14px] xl:py-[10px] rounded-[8px] text-white mt-[20px] drop-shadow-xl drop-shadow-[#FD74014D]">
              Login now
            </button>
          </form>
          <div className="flex items-center w-full gap-[11px] mt-[10px] max-w-[430px]">
            <div className="h-px w-full bg-[#C2C2C2]"></div>
            <p className="text-[#C2C2C2]">OR</p>
            <div className="h-px w-full bg-[#C2C2C2]"></div>
          </div>
          <div className="flex gap-[8px]">
            <div className="px-[37px] py-[15px] border border-[#E8ECF4] rounded-[8px]">
              <img src={FacebookIcon} alt="Facebook icon" />
            </div>
            <div className="px-[37px] py-[15px] border border-[#E8ECF4] rounded-[8px]">
              <img src={GoogleIcon} alt="Google icon" />
            </div>
            <div className="px-[37px] py-[15px] border border-[#E8ECF4] rounded-[8px]">
              <img src={AppleIcon} alt="Apple icon" />
            </div>
          </div>
          <p className="mt-[30px] xl:mt-[5px] font-jakarta font-normal text-[16px]">
            Already have an account?
            <Link
              to={"/Login"}
              className="font-bold text-[18px] text-[#EE5128]"
            >
              Login
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
          src={SignUpBg}
          alt="SignUp Background"
          className="object-cover object-right w-full h-full"
        />
      </div>
    </div>
  );
}

export default SignupPage;
