import { ArrowUpRight } from "lucide-react";

import DesktopTopWrap from "../../assets/images/travel/Vector.png";
import MobileTopWrap from "../../assets/images/travel/Topwrap.png";
import BackgroundPattern from "../../assets/images/travel/bg-pattern.png";

import LeftImage from "../../assets/images/travel/travel.png";
import RightImage from "../../assets/images/travel/Vector-2.png";

import DesktopBottomWrap from "../../assets/images/travel/bottopwrap.png";
import MobileBottomWrap from "../../assets/images/travel/bottomwrap.png";
export default function TravelSection() {
  return (
    <section className="relative">
      <div className="relative">
        {/* ✅ Desktop Top Wrap */}
        <div className="absolute top-[-25px] left-0 w-full z-30 hidden md:block">
          <img
            src={DesktopTopWrap}
            alt="Top Wrap"
            width={1920}
            height={100}
            className="w-full object-cover"
          />
        </div>

        {/* ✅ Mobile Top Wrap */}
        <div className="absolute top-[-44px] left-0 w-full z-30 md:hidden">
          <img
            src={MobileTopWrap}
            alt="Top Wrap Mobile"
            width={1920}
            height={60}
            className="w-full object-cover h-[90px]"
          />
        </div>

        {/* ✅ Background */}
        <div
          className="relative bg-cover bg-center px-4 sm:px-6 md:px-8 lg:px-24 pt-20 pb-20 lg:pt-10 lg:pb-10 z-10"
          style={{
            backgroundImage: `url('${BackgroundPattern}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        >
          {/* ✅ Desktop Layout (starts at lg) */}
          <div className="hidden [@media(min-width:1367px)]:flex w-full max-w-[1350px] mx-auto items-center justify-between gap-8 px-8 py-24 relative z-20">
            {/* Left: Image */}
            <div className="w-1/2 -translate-x-[-55px] relative">
              <img
                src={LeftImage}
                alt="Traveler"
                width={600}
                height={400}
                className="rounded-xl object-cover w-full h-auto"
              />
            </div>

            {/* Right: Vector Card */}
            <div className="relative w-1/2 max-w-[600px] translate-x-[-90px]">
              <img
                src={RightImage}
                alt="Curved Card"
                width={650}
                height={450}
                className="w-full object-cover drop-shadow-[0_10px_212px_rgba(0,0,0,0.2)]"
              />

              {/* Inside the card */}
              <div className="absolute top-0 left-0 w-full h-full px-10 py-10 z-10 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl lg:text-[38px] font-jakarta text-[#0F172A] leading-snug mb-6">
                    Be Part Of The African
                    <br />
                    <span className="font-semibold text-black lg:text-[40px]">
                      Travel Tech Revolution
                    </span>
                  </h2>

                  <div className="grid grid-cols-2 gap-5 mb-6 font-lato">
                    {[
                      "Become an Agent",
                      "Register as Vendor",
                      "Apply for Partnership",
                    ].map((text) => (
                      <div
                        key={text}
                        className={`flex items-center justify-start gap-x-3 ${
                          text === "Apply for Partnership" ? "mt-[4px]" : ""
                        }`}
                      >
                        {/* Text + Underline */}
                        <div className="flex flex-col">
                          <span className="text-[#F15623] font-semibold text-[18px] lg:text-[22px] xl:text-[22px] leading-[1.2] whitespace-nowrap">
                            {text}
                          </span>
                          <span className="block h-[1px] w-full bg-[#F15623] mt-[2px]" />
                        </div>

                        <a
                          href="/your-link"
                          className="flex items-center justify-center rounded-full border border-[#F15623] text-[#F15623] hover:bg-[#F15623] hover:text-white transition"
                          style={{
                            width: "32px",
                            height: "32px",
                            minWidth: "32px",
                            minHeight: "32px",
                          }}
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ✅ Contact Button — aligned under curve */}
                <div className="absolute -bottom-4 right-15 z-30 translate-y-[-28px]">
                  <button className="min-w-[160px] bg-[#F15623] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d54417] transition shadow-md font-lato text-base whitespace-nowrap">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Final Mobile Layout (300px to 700px) */}
          <div className="block md:hidden w-full px-4 relative z-20">
            {/* Top Travel Image */}
            <div
              className="rounded-xl overflow-hidden mb-[-36px] mx-auto max-w-[100%]"
              style={{ maxWidth: "370px" }}
            >
              <img
                src="/assets/travel/travel.png"
                alt="Traveler"
                width={367}
                height={460}
                className="object-cover w-full h-[340px] sm:h-[340px] rounded-xl"
              />
            </div>

            {/* Vector Card */}
            <div className="relative mx-auto w-full max-w-[370px]">
              <img
                src={RightImage}
                alt="Curved Card"
                width={369}
                height={209}
                className="w-full h-[195px] max-[420px]:h-[190px] object-cover rounded-t-[12px] drop-shadow-[0_10px_212px_rgba(0,0,0,0.2)]"
              />

              {/* Inside Card */}
              <div className="absolute top-0 left-0 w-full h-full px-4 pt-4 pb-3 z-10 flex flex-col justify-between">
                <div>
                  {/* Heading */}
                  <h2 className="text-left leading-snug mb-3">
                    <div className="text-[18px] text-[#0F172A] font-semi-bold whitespace-nowrap">
                      Be Part Of The African
                    </div>
                    <span className="text-[20px] text-black font-bold whitespace-nowrap tracking-tighter -mr-3">
                      Travel Tech Revolution
                    </span>
                  </h2>

                  {/* CTA Buttons */}
                  <div className="grid grid-cols-2 gap-x-3 gap-y-3">
                    {[
                      "Become an Agent",
                      "Register as Vendor",
                      "Apply for Partnership",
                    ].map((text, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="flex items-center gap-[4px]">
                          <span className="text-[#F15623] font-semibold text-[12px] min-[400px]:text-[13px] leading-snug block whitespace-normal break-words [@media(min-width:351px)]:whitespace-nowrap">
                            {text}
                            <div className="h-[1px] bg-[#F15623] mt-[2px]" />
                          </span>
                          <a
                            href="/your-link"
                            className={`w-[24px] h-[24px] flex items-center justify-center rounded-full border border-[#F15623] text-[#F15623] hover:bg-[#F15623] hover:text-white transition ${
                              idx === 0 || idx === 2 ? "ml-[2px]" : ""
                            } ${idx === 1 ? "ml-[10px]" : ""}`}
                          >
                            <ArrowUpRight size={12} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Us Button */}
            <div className="relative w-full max-w-[370px] mx-auto">
              <div className="absolute -top-9 sm:-bottom-12 right-6 sm:right-6 z-30">
                <button className="bg-[#F15623] text-white px-4 sm:px-5 py-2 rounded-full font-medium hover:bg-[#d54417] transition shadow font-lato text-xs sm:text-sm">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ipad air + mini      */}
        <div className="hidden md:flex lg:hidden w-full px-6 py-12 justify-center items-start gap-6 relative z-20">
          <div className="absolute inset-0 z-0">
            <img
              src={BackgroundPattern}
              alt="Background Pattern"
              className="object-cover object-bottom w-full h-full"
            />
          </div>

          {/* Travel Image */}
          <div className="w-[58%] translate-x-4">
            <img
              src={LeftImage}
              alt="Traveler"
              width={500}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>

          {/* Vector Card */}
          <div
            className="relative"
            style={{
              width: "420px",
              height: "230px",
              transform: "translate(-59px, 100px)",
            }}
          >
            <img
              src={RightImage}
              alt="Curved Card"
              sizes="420px"
              className="object-contain drop-shadow-[0_10px_212px_rgba(0,0,0,0.2)] w-full h-full"
            />

            {/* Inside Vector Card */}
            <div className="absolute top-[30px] left-0 w-full h-full px-5 pt-4 pb-4 z-10 flex flex-col justify-between">
              <div>
                {/* Heading */}
                <div className="flex flex-col leading-snug mb-6">
                  <span className="text-[15px] text-[#0F172A] font-medium whitespace-nowrap">
                    Be Part Of The African
                  </span>
                  <span className="text-[17px] text-black font-bold whitespace-nowrap -mr-[2px]">
                    Travel Tech Revolution
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {[
                    "Become an Agent",
                    "Register as Vendor",
                    "Apply for Partnership",
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-[5px]">
                      <span className="text-[#F15623] font-semibold text-[13px] leading-tight block whitespace-nowrap">
                        {text}
                        <div className="h-[1px] bg-[#F15623] mt-[2px]" />
                      </span>
                      <a
                        href="/your-link"
                        className="w-[26px] h-[26px] flex items-center justify-center rounded-full border border-[#F15623] text-[#F15623] hover:bg-[#F15623] hover:text-white transition"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us Button */}
          <div className="absolute bottom-[105px] right-[110px] z-30 [@media(min-width:820px)]:bottom-[125px] [@media(min-width:1024px)]:bottom-[140px]">
            <button className="bg-[#F15623] text-white px-5 py-2 rounded-full font-medium hover:bg-[#d54417] transition shadow font-lato text-sm whitespace-nowrap">
              Contact us
            </button>
          </div>
        </div>

        {/* ipad pro */}
        <div className="hidden lg:flex [@media(min-width:1367px)]:hidden w-full px-8 py-16 justify-center items-start gap-8 relative z-20">
          <div className="absolute inset-0 z-0">
            <img
              src={BackgroundPattern}
              alt="Background Pattern"
              className="object-cover object-bottom w-full h-full"
            />
          </div>

          {/* Travel Image */}
          <div className="w-[52%] translate-x-4">
            <img
              src={LeftImage}
              alt="Traveler"
              width={500}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>

          {/* Vector Card */}
          <div
            className="relative"
            style={{
              width: "420px",
              height: "230px",
              transform: "translate(-105px, 170px)",
            }}
          >
            <img
              src={RightImage}
              alt="Curved Card"
              sizes="420px"
              className="object-contain drop-shadow-[0_10px_212px_rgba(0,0,0,0.2)] w-full h-full"
            />

            {/* Inside Vector Card */}
            <div className="absolute top-[30px] left-0 w-full h-full px-5 pt-4 pb-4 z-10 flex flex-col justify-between">
              <div>
                {/* Heading */}
                <div className="flex flex-col leading-snug mb-6">
                  <span className="text-[15px] text-[#0F172A] font-medium whitespace-nowrap">
                    Be Part Of The African
                  </span>
                  <span className="text-[17px] text-black font-bold whitespace-nowrap -mr-[2px]">
                    Travel Tech Revolution
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {[
                    "Become an Agent",
                    "Register as Vendor",
                    "Apply for Partnership",
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-[5px]">
                      <span className="text-[#F15623] font-semibold text-[13px] leading-tight block whitespace-nowrap">
                        {text}
                        <div className="h-[1px] bg-[#F15623] mt-[2px]" />
                      </span>
                      <a
                        href="/your-link"
                        className="w-[26px] h-[26px] flex items-center justify-center rounded-full border border-[#F15623] text-[#F15623] hover:bg-[#F15623] hover:text-white transition"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us Button */}
          <div className="absolute bottom-[105px] right-[190px] z-30 [@media(min-width:820px)]:bottom-[195px] [@media(min-width:1024px)]:bottom-[140px]">
            <button className="bg-[#F15623] text-white px-5 py-2 rounded-full font-medium hover:bg-[#d54417] transition shadow font-lato text-sm whitespace-nowrap">
              Contact us
            </button>
          </div>
        </div>

        {/* ✅ Desktop Bottom Wrap */}
        <div className="absolute bottom-[-26px] left-0 w-full z-40 hidden md:block">
          <img
            src={DesktopBottomWrap}
            alt="Bottom Wrap"
            width={1920}
            height={100}
            className="w-full object-cover"
          />
        </div>

        {/* ✅ Mobile Bottom Wrap */}
        <div className="absolute bottom-[-38px] w-full z-30 md:hidden">
          <img
            src={MobileBottomWrap}
            alt="Bottom Wrap Mobile"
            width={1920}
            height={60}
            className="w-full object-cover h-[90px]"
          />
        </div>
      </div>
    </section>
  );
}
