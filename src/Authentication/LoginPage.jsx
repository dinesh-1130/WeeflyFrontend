import WeeFlyLogo from "../assets/Auth/OrangeWeeflyLogo.svg";
import MailIcon from "../assets/Auth/MailIcon.svg";
import LockIcon from "../assets/Auth/LockIcon.svg";
import FacebookIcon from "../assets/Auth/FBIcon.svg";
import GoogleIcon from "../assets/Auth/GoogleIcon.svg";
import AppleIcon from "../assets/Auth/AppleIcon.svg";
import LoginBg from "../assets/Auth/LoginBg.png";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { Link } from "react-router";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="h-screen flex relative overflow-hidden">
      <div
        data-aos="fade-right"
        className="left-section w-full xl:w-1/2 h-full bg-white flex flex-col px-[24px] xl:px-[136px]"
      >
        {/* Add form or content here */}
        <div className=" h-full flex flex-col items-center justify-center gap-[15px]">
          <img
            src={WeeFlyLogo}
            alt="WeeFly Logo"
            className="h-[70px] w-[92px]"
          />
          <h1 className="font-jakarta font-semibold text-[24px]">
            Login into your account
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
            <div className="w-full mt-[10px]">
              <label
                htmlFor=""
                className="font-jakarta font-normal text-base text-[#555555]"
              >
                Password
              </label>
              <div className="relative bg-[#F1F3F6] flex rounded-l-[8px] w-full mt-[14px]">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="px-[20px] py-[14px] w-full outline-[#EE5128] relative"
                />

                <div
                  className="my-auto px-2"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <Eye /> : <EyeClosed />}
                </div>
                <div className="px-[20px] py-[14px] rounded-[8px] bg-[#EE5128] grid place-items-center">
                  <img src={LockIcon} alt="Mail Icon" />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-[10px]">
              <Link
                to={"/ForgotPassword"}
                className="font-sans font-bold text-[14px] underline text-[#EE5128] underline-[#EE5128]"
              >
                Forgot Password
              </Link>
            </div>

            <button className="font-jakarta font-semibold text-[18px] w-full bg-[#EE5128] py-[14px] rounded-[8px] text-white mt-[20px] drop-shadow-xl drop-shadow-[#FD74014D]">
              Login now
            </button>
          </form>
          <div className="flex items-center w-full gap-[11px] mt-[10px] max-w-[430px]">
            <div className="h-[2px] w-full bg-[#C2C2C2]"></div>
            <p className="text-[#C2C2C2]">OR</p>
            <div className="h-[2px] w-full bg-[#C2C2C2]"></div>
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
          <p className="mt-[30px] font-jakarta font-normal text-[16px]">
            Don’t have an account?{" "}
            <Link
              to={"/SignUp"}
              className="font-bold text-[18px] text-[#EE5128]"
            >
              Signup
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
          src={LoginBg}
          alt="Login Background"
          className="object-cover object-center w-full h-full"
        />
      </div>
    </div>
  );
}

export default LoginPage;
