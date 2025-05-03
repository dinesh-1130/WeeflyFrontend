import { useLocation, useNavigate } from "react-router";

import TakeOffPlane from "../../assets/images/TakeOffPlane.svg";
import AirIndiaLogo from "../../assets/images/AirIndiaLogo.svg";
import FlightLogo from "../../assets/images/FlightIcon.svg";

import White_Concierge from "../../assets/images/ReviewYourBooking/White_Concierage.svg";
import White_Money_Exchange from "../../assets/images/ReviewYourBooking/white_money_exchange.svg";
import White_eSim from "../../assets/images/ReviewYourBooking/white_eSim.svg";
import White_Extra_Luggage from "../../assets/images/ReviewYourBooking/White_Extra_luggage.svg";
import White_Visa_Process from "../../assets/images/ReviewYourBooking/White_Visa_process.svg";
import { useEffect, useState } from "react";

const ServicesOfferedIcons = [
  {
    Image: White_Concierge,
    label: "Concierge",
  },
  {
    Image: White_Money_Exchange,
    label: "Money exchange",
  },
  {
    Image: White_eSim,
    label: "E-sim / Internet",
  },
  {
    Image: White_Extra_Luggage,
    label: "Extra luggage",
  },
  {
    Image: White_Visa_Process,
    label: "Visa process",
  },
];

function ReviewYourBooking() {
  const navigate = useNavigate();
  const location = useLocation();
  const [flight, setFlight] = useState(null);
  useEffect(() => {
    if (location.state && location.state.flight) {
      setFlight(location.state.flight);
    }
  }, [location]);
  return (
    <div className="">
      <div className="flex flex-col gap-[25px]">
        {/* Leaving Ticket */}
        <div className="">
          <h3 className="py-[16px] px-[44px] rounded-t-[17px] bg-[#FFE2DA] font-jakarta font-semibold text-[25px]">
            Flight Details
          </h3>
          <div className="px-[44px] py-[38px] rounded-b-[17px] bg-white">
            <div className="">
              <h4 className="text-[20px] font-jakarta font-semibold items-center justify-center xl:justify-start xl:items-start flex gap-[8px]">
                <span>Leaving From</span>
                <img src={TakeOffPlane} alt="Take off plane" />
              </h4>

              <div className="max-w-[636px] font-jakarta font-semibold text-base text-white bg-[#EE5128] rounded-[7px] flex flex-col lg:flex-row items-center justify-between px-[22px] py-[14px] my-[24px]">
                <p>Algeria - Angola | 1 Stop</p>
                <p>
                  Duration : <span>16h 12m</span>
                </p>
              </div>

              <div className="flex flex-col lg:flex-row items-center font-sans">
                <div className="mb-[40px] lg:mb-[0px]">
                  <img src={AirIndiaLogo} alt="air India logo" />
                  <div className="flex items-center gap-[14px]">
                    <p className="font-sans font-normal text-[15px] text-neutral-500">
                      1244595
                    </p>
                    <p className="rounded-[5px] bg-[#008905] text-white font-sans text-base font-normal px-[13px] py-[4px]">
                      Business
                    </p>
                  </div>
                </div>
                <div className="flex-1 items-center w-full">
                  <div className="flex xl:px-[84px]">
                    {/* start time */}
                    <div className="px-[20px] xl:px-[44px]">
                      <p className="text-[25px] xl:text-[38px] font-bold">
                        06:00
                      </p>
                      <p className="font-normal text-[13px] lg:text-[20px] text-neutral-500">
                        Algeries
                      </p>
                    </div>
                    <div className="flex-1 py-[40px] relative ">
                      <div className="relative border border-neutral-200 border-dashed h-px">
                        <div className="absolute bg-neutral-200 size-4 rounded-full -left-2 -top-2 border-2 border-white"></div>
                        <div className="absolute bg-neutral-200 size-4 rounded-full -right-2 -top-2 border-2 border-white"></div>
                      </div>
                      <div className="flex flex-col items-center gap-[8px] absolute -top-[13px] left-1/3">
                        <p className="font-normal text-[17px] text-neutral-500">
                          16h 12m
                        </p>
                        <img
                          src={FlightLogo}
                          alt="Plane"
                          className="h-[41px] w-[41px]"
                        />
                        <p className="rounded-[5px] bg-[#008905] text-white font-sans text-base font-normal px-[13px] py-[4px]">
                          Refundable
                        </p>
                      </div>
                    </div>
                    {/* End time */}
                    <div className="px-[20px] xl:px-[44px]">
                      <p className="text-[25px] xl:text-[38px] font-bold">
                        19:00
                      </p>
                      <p className="font-normal text-[13px] xl:text-[20px] text-neutral-500">
                        Launda
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative my-[50px]">
                <div className="h-px border border-dashed border-neutral-200"></div>
                <div className="size-10 bg-neutral-100 absolute -top-[20px] -left-[60px] rounded-full"></div>
                <div className="size-10 bg-neutral-100 absolute -top-[20px] -right-[60px] rounded-full"></div>
              </div>

              <div className="flex gap-[42px] text-[18px] font-normal font-sans">
                <p>Flight Details</p>
                <p className="hidden xl:block">Price Details</p>
                <p className="hidden xl:block">Policy</p>
                <p className="hidden xl:block">Refund</p>
                <p className="hidden xl:block">Reschedule</p>
              </div>
            </div>
          </div>
        </div>
        {/* Returning Ticket */}
        <div className="px-[44px] py-[38px] rounded-[17px] bg-white">
          <div className="">
            <h4 className="text-[20px] font-jakarta font-semibold flex items-center justify-center xl:justify-start xl:items-start gap-[8px]">
              <span>Returning From</span>
              <img src={TakeOffPlane} alt="Take off plane" />
            </h4>

            <div className="max-w-[636px] font-jakarta font-semibold text-base text-white bg-[#EE5128] rounded-[7px] flex flex-col lg:flex-row items-center justify-between px-[22px] py-[14px] my-[24px]">
              <p>Algeria - Angola | 1 Stop</p>
              <p>
                Duration : <span>16h 12m</span>
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center w-full font-sans">
              <div className="mb-[40px] lg:mb-[0px]">
                <img src={AirIndiaLogo} alt="air India logo" />
                <div className="flex items-center gap-[14px]">
                  <p className="font-sans font-normal text-[15px] text-neutral-500">
                    1244595
                  </p>
                  <p className="rounded-[5px] bg-[#008905] text-white font-sans text-base font-normal px-[13px] py-[4px]">
                    Business
                  </p>
                </div>
              </div>
              <div className="flex-1 items-center w-full">
                <div className="flex px-0 xl:px-[84px]">
                  {/* start time */}
                  <div className="px-[20px] xl:px-[44px]">
                    <p className="text-[25px] xl:text-[38px] font-bold">
                      06:00
                    </p>
                    <p className="font-normal text-[13px] xl:text-[20px] text-neutral-500">
                      Algeries
                    </p>
                  </div>
                  <div className="flex-1 py-[40px] relative ">
                    <div className="relative border border-neutral-200 border-dashed h-px">
                      <div className="absolute bg-neutral-200 size-4 rounded-full -left-2 -top-2 border-2 border-white"></div>
                      <div className="absolute bg-neutral-200 size-4 rounded-full -right-2 -top-2 border-2 border-white"></div>
                    </div>
                    <div className="flex flex-col items-center gap-[8px] absolute -top-[13px] left-1/3">
                      <p className="font-normal text-[17px] text-neutral-500">
                        16h 12m
                      </p>
                      <img
                        src={FlightLogo}
                        alt="Plane"
                        className="h-[41px] w-[41px]"
                      />
                      <p className="rounded-[5px] bg-[#008905] text-white font-sans text-base font-normal px-[13px] py-[4px]">
                        Refundable
                      </p>
                    </div>
                  </div>
                  {/* End time */}
                  <div className="px-[20px] xl:px-[44px]">
                    <p className="text-[25px] xl:text-[38px] font-bold">
                      19:00
                    </p>
                    <p className="font-normal text-[13px] xl:text-[20px] text-neutral-500">
                      Launda
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative my-[50px]">
              <div className="h-px border border-dashed border-neutral-200"></div>
              <div className="size-10 bg-neutral-100 absolute -top-[20px] -left-[60px] rounded-full"></div>
              <div className="size-10 bg-neutral-100 absolute -top-[20px] -right-[60px] rounded-full"></div>
            </div>

            <div className="flex gap-[42px] text-[18px] font-normal font-sans">
              <p>Flight Details</p>
              <p className="hidden xl:block">Price Details</p>
              <p className="hidden xl:block">Policy</p>
              <p className="hidden xl:block">Refund</p>
              <p className="hidden xl:block">Reschedule</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[17px] px-[44px] py-[38px] mt-[30px]">
        <div className="flex flex-col xl:flex-row justify-between xl:items-center items-start gap-[40px]">
          <p className="font-sans text-[17px] font-normal bg-[#FFE2DA] rounded-[13px] px-[28px] py-[14px]">
            Weefly pro Enjoy Zero Convenience Fee and More @ $2000 rupees
          </p>
          <div className="flex gap-[12px] items-center">
            <input
              type="checkbox"
              name="add-now"
              className="accent-[#EE5128] size-[20px]"
            />
            <p className="font-medium font-jakarta text-[21px]">Add now</p>
          </div>
        </div>
        <div className="grid grid-cols-3 xl:grid-cols-5  w-full justify-between mt-[42px]">
          {ServicesOfferedIcons.map((service) => (
            <div className="flex flex-col items-center gap-[21px] mt-[21px]">
              <div className="size-[55px] bg-[#EE5128] rounded-full flex justify-center items-center">
                <img src={service.Image} alt={service.label} />
              </div>
              <p className="font-jakarta text-center text-[13px] xl:text-[17px] font-medium">
                {service.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button
        className="font-jakarta font-semibold text-[15px] bg-[#EE5128] rounded-[5px] text-white px-[37px] py-[14px] tracking-wide mt-[57px]"
        onClick={() =>
          navigate("/booking/TravelersDetails", {
            state: {
              flight,
            },
          })
        }
      >
        Continue Booking
      </button>
    </div>
  );
}

export default ReviewYourBooking;
