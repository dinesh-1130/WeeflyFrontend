import WeeFlyLogo from "../assets/Auth/OrangeWeeflyLogo.svg";
import MobileIcon from "../assets/Auth/MobileIcon.svg";
import ForgetPasswordBg from "../assets/Auth/ForgotPasswordBg.png";

import { Link } from "react-router";

function ForgotPassword() {
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
            Forgot password?
          </h1>
          <h1 className="font-jakarta font-normal text-[16px] text-[#555555] text-center max-w-[430px]">
            Enter your Registered Mobile Number and we’ll send a link to reset
            password
          </h1>
          <form action="" className="max-w-[430px] w-full">
            <div className="w-full">
              <label
                htmlFor=""
                className="font-jakarta font-normal text-base text-[#555555]"
              >
                Mobile number
              </label>
              <div className="relative bg-[#F1F3F6] flex rounded-l-[8px] w-full mt-[14px]">
                <input
                  type="email"
                  placeholder="+91 | "
                  className="px-[20px] py-[14px] w-full outline-[#EE5128]"
                />
                <div className="px-[20px] py-[14px] rounded-[8px] bg-[#EE5128] grid place-items-center">
                  <img src={MobileIcon} alt="Mobile Icon" />
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
