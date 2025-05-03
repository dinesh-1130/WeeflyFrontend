import { useState } from "react";
import { Link } from "react-router";

import WeeFlyLogo from "../assets/Auth/OrangeWeeflyLogo.svg";
import ForgetPasswordBg from "../assets/Auth/ForgotPasswordBg.png";
import PhoneInput from "react-phone-input-2";

import LoginWithMobileBg from "../assets/Auth/Login-with-mobile-Bg.png";
import "react-phone-input-2/lib/style.css";

function LoginWithMobile() {
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    // Handle login logic here
    console.log("Submitting phone:", phone);
  };
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
            Login with mobile number
          </h1>
          <h1 className="font-jakarta font-normal text-[16px] text-[#555555] text-center max-w-[430px]">
            Please confirm your country code and enter your mobile number
          </h1>
          <form
            action=""
            onSubmit={handleSubmit}
            className="max-w-[430px] w-full"
          >
            {/* <div className="w-full">
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
            </div> */}

            <div className="mb-4 w-full">
              <label className="font-jakarta font-normal text-base text-[#555555]">
                Phone number
              </label>
              {/* <PhoneInput
                country={"in"}
                value={phone}
                onChange={setPhone}
                inputProps={{
                  name: "phone",
                  required: true,
                  // className:
                  //   "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent",
                  className:
                    "border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent",
                }}
                buttonStyle={{
                  borderTopLeftRadius: "0.375rem",
                  borderBottomLeftRadius: "0.375rem",
                }}
                containerStyle={{
                  width: "100%",
                }}
                dropdownStyle={{
                  width: "200px",
                }}
              /> */}
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={setPhone}
                inputClass="!w-full !pl-14 !pr-[20px] !py-[14px] !text-base !border !border-gray-300 !rounded-md !focus:outline-none !focus:ring-2 !focus:ring-orange-500"
                buttonClass="!bg-transparent !pl-3"
                containerClass="!w-full !rounded-md"
                dropdownClass="!w-48 !rounded-md"
              />
            </div>

            <button className="font-jakarta font-semibold text-[18px] w-full bg-[#EE5128] py-[14px] rounded-[8px] text-white mt-[40px] drop-shadow-xl drop-shadow-[#FD74014D]">
              Login now
            </button>
          </form>
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
          src={LoginWithMobileBg}
          alt="Login With Mobile Background"
          className="object-cover object-right w-full h-full"
        />
      </div>
    </div>
  );
}

export default LoginWithMobile;
