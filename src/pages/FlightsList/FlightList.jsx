import { useEffect, useState } from "react";

import {
  ArrowLeftRightIcon,
  MapPin,
  Search,
  ChevronDown,
  ChevronUp,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import TakeOffPlane from "../../assets/images/TakeOffPlane.svg";
import LandingPlane from "../../assets/images/LandingPlane.svg";
import DateFrom from "../../assets/images/DateFrom.svg";
import DateTo from "../../assets/images/DateTo.svg";
import TravelerIcon from "../../assets/images/TravelerIcon.svg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import flightsData from "../../assets/data/flights.json";

import TicketIcon from "../../assets/images/TicketIcon.svg";
import DepartureFlightIcon from "../../assets/images/WhiteFlightTakeoff.svg";
import NavFlightIcon from "../../assets/images/FlightIcon.svg";

import SunRiseIcon from "../../assets/images/SunRiseIcon.svg";
import SunSetIcon from "../../assets/images/SunSetIcon.svg";
import MoonRiseIcon from "../../assets/images/MoonRiseIcon.svg";
import MoonSetIcon from "../../assets/images/MoonSetIcon.svg";
import { useNavigate } from "react-router";

function FlightList() {
  return (
    <div className="relative">
      <SearchBox />
      <div className="min-h-screen px-4 xl:px-40 bg-neutral-100 flex relative py-[66px] gap-[43px] flex-col xl:flex-row">
        <div className="sticky top-0 flex-col gap-[29px] hidden xl:flex">
          <RecentlyBookedTickets />
          <FilterFlight />
        </div>
        <div className="flex-1 flex flex-col gap-[50px]">
          <div className="hidden xl:block">
            <FlightDatePicker />
          </div>
          <FlightResults />
        </div>
      </div>
    </div>
  );
}

export default FlightList;

// /////////////////////////////////////////////////
//
//  Flight Search Box
//
// ////////////////////////////////////////////////

const SearchBox = () => {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [travelClass, setTravelClass] = useState("Economy");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log({
      from,
      to,
      departureDate,
      returnDate,
      travelers,
      travelClass,
    });
  };
  return (
    <div className="border-t-2 border-b-2 px-4 xl:px-40 border-gray-200">
      <form onSubmit={handleSearch} className="bg-white rounded-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-row flex-1">
            {/* From Location */}
            <div className="flex items-center p-4 border-b md:border-b-0  border-gray-200 flex-1">
              <div className="mr-3"></div>
              <div>
                <label className="block text-xs text-gray-500">
                  <img
                    src={TakeOffPlane}
                    alt="TakeOffPlane"
                    height={32}
                    width={32}
                  />
                </label>
                <div className="flex items-center mt-3.5">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <select
                    name="leavingFrom"
                    id="leavingFrom"
                    className="block w-full placeholder:text-gray-400 text-black focus:outline-none appearance-none"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                  >
                    <option value="" disabled>
                      Leaving From
                    </option>
                    <option value="johannesburg">
                      Johannesburg, South Africa
                    </option>
                    <option value="cape-town">Cape Town, South Africa</option>
                    <option value="durban">Durban, South Africa</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Swap Icon */}
            <div className="md:flex items-center justify-center p-2 my-auto">
              <button
                type="button"
                onClick={() => {
                  const temp = from;
                  setFrom(to);
                  setTo(temp);
                }}
                className="bg-[#EE5128] rounded-full p-2"
              >
                {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        />
                      </svg> */}
                <ArrowLeftRightIcon className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* To Location */}
            <div className="flex items-center p-4 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
              <div className="mr-3"></div>
              <div>
                <label className="block text-xs text-black">
                  <img
                    src={LandingPlane}
                    alt="LandingPlane"
                    height={32}
                    width={32}
                  />
                </label>
                <div className="flex items-center mt-3.5">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <select
                    name="leavingFrom"
                    id="leavingFrom"
                    className="block w-full placeholder:text-gray-400 text-black focus:outline-none appearance-none"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                  >
                    <option value="" disabled>
                      Going to
                    </option>
                    <option value="johannesburg">
                      Johannesburg, South Africa
                    </option>
                    <option value="cape-town">Cape Town, South Africa</option>
                    <option value="durban">Durban, South Africa</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1">
            {/* Departure Date */}
            <div className="flex items-center p-4 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
              <div className="mr-3"></div>
              <div className="relative">
                <label className="block text-xs text-gray-500">
                  <img src={DateFrom} alt="DateFrom" height={32} width={32} />
                </label>
                <div className="flex items-center mt-3.5">
                  <DatePicker
                    selected={departureDate}
                    onChange={(date) => setDepartureDate(date)}
                    placeholderText="Date from"
                    className="block w-full placeholder:text-gray-400 text-black z-20 focus:outline-none"
                    dateFormat="MMM d, yyyy"
                    popperClassName="z-[50px]"
                    popperProps={{
                      positionFixed: true,
                    }}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400 absolute left-[65%] sm:left-[53%]  pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Return Date */}
            <div className="flex items-center p-4 border-b md:border-b-0 md:border-r border-gray-200 flex-1">
              <div className="mr-3"></div>
              <div className="relative w-full">
                <label className="block text-xs text-gray-500">
                  <img src={DateTo} alt="DateTo" height={32} width={32} />
                </label>
                <div className="flex items-center mt-3.5">
                  <DatePicker
                    selected={returnDate}
                    onChange={(date) => setReturnDate(date)}
                    placeholderText="Return Date"
                    className="block w-full placeholder:text-gray-400 text-black focus:outline-none"
                    dateFormat="MMM d, yyyy"
                    minDate={departureDate}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400 absolute left-[65%] sm:left-[55%] pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center sm:items-stretch">
            {/* Travelers */}
            <div className="flex items-center relative p-4 border-b-0 md:border-b-0 md:border-r border-gray-200 flex-1">
              <div className="mr-3"></div>
              <div>
                <label className="block text-xs text-gray-500">
                  {/* {travelers} Traveler{travelers > 1 ? "s" : ""} */}
                  <img
                    src={TravelerIcon}
                    alt="TravelerIcon"
                    height={32}
                    width={32}
                  />
                </label>
                <div className="flex items-center mt-3.5 relative">
                  <select
                    className="block w-full placeholder:text-gray-400 text-black focus:outline-none appearance-none bg-transparent"
                    value={travelClass}
                    onChange={(e) => setTravelClass(e.target.value)}
                  >
                    <option value="" className="text-gray-400">
                      Select
                    </option>
                    <option value="Economy">Economy</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business">Business</option>
                    <option value="First">First</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400 absolute right-0 pointer-events-none"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="p-4 my-auto md:my-0 md:p-0 flex justify-center items-center">
              <button
                type="submit"
                className=" text-[14px] font-jakarta sm:min-w-[200px] max-w-[200px] bg-[#FFE2DA] hover:bg-orange-600 text-black hover:text-white font-medium py-2 ml-8 px-8 rounded-md md:rounded-r-md flex items-center gap-2"
              >
                <Search />
                Search Flights
              </button>
              {/* <button type="submit" className=" flex items-center gap-[2px] bg-[]">
                <Search />
                Search Flights
              </button> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

// /////////////////////////////////////////////////
//
//  Recently Flight Booking Tickets
//
// ////////////////////////////////////////////////

const RecentlyBookedTickets = () => {
  return (
    <div className=" w-full bg-white rounded-lg p-4">
      {/* Recently booked header */}
      <div className="flex items-center mb-4 gap-[20px]">
        <div className="mr-2">
          <img src={TicketIcon} alt="TicketIcon" />
        </div>
        <h2 className="text-[18px] font-semibold text-gray-800 font-jakarta">
          Recently booked
        </h2>
      </div>

      {/* Flight info section */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <div className="flex items-center justify-center w-[53px] h-[53px] bg-orange-500 rounded-lg mr-3">
            <img src={DepartureFlightIcon} alt="DepartureFlightIcon" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[15px] font-medium font-jakarta text-gray-800">
              Departure Flight
            </h3>
            <p className="text-[14px] font-jakarta text-gray-500">
              Thu, 06 Jul, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-6"></div>

      {/* Airline details */}
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded mr-4">
          <div className="bg-red-600 w-10 h-10 flex items-center justify-center rounded">
            <span className="text-white text-xs font-bold">Emirates</span>
          </div>
        </div>
        <div>
          <h3 className="font-jakarta font-medium text-[15px] text-gray-800">
            Emirates
          </h3>
          <p className="text-base font-normal font-jakarta text-gray-500">
            1244595
          </p>
        </div>
      </div>

      {/* Flight times */}
      <div className="flex items-center justify-between mb-6">
        {/* Departure */}
        <div className="text-center">
          <p className="text-[19px] font-sans font-bold text-gray-800">06:00</p>
          <p className="font-sans text-[14px] font-base text-gray-500">
            Algeries
          </p>
        </div>

        {/* Flight duration */}
        <div className="flex flex-col items-center px-4">
          <div className="flex items-center w-24">
            <div className="h-px border-gray-300 border flex-grow border-dashed"></div>
            <div className="mx-1">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11.43a1 1 0 01.725-.962l5-1.429a1 1 0 001.17-1.409l-7-14z" />
              </svg> */}
              <img src={NavFlightIcon} alt="Navigation Flight icon" />
            </div>
            <div className="h-px border border-gray-300 flex-grow border-dashed"></div>
          </div>
          <p className="text-sm text-gray-500 mt-3">12hr</p>
        </div>

        {/* Arrival */}
        <div className="text-center">
          <p className="text-[19px] font-sans font-bold text-gray-800">19:00</p>
          <p className="font-sans text-[14px] font-base text-gray-600">
            Launda
          </p>
        </div>
      </div>

      {/* Reschedule button */}
      <button className="w-full py-3 font-jakarta bg-red-100 text-gray-800 font-medium rounded-lg hover:bg-red-200 transition-colors">
        Reschedule
      </button>
    </div>
  );
};

// /////////////////////////////////////////////////
//
//  Flight Filter results
//
// ////////////////////////////////////////////////

const FilterFlight = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [priceRange, setPriceRange] = useState(7000);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-white rounded-lg font-jakarta">
      {/* Filter Header */}
      <div
        className="flex items-center justify-between p-4 cursor-pointer "
        onClick={toggleFilter}
      >
        <h2 className="font-medium text-gray-800">Filter</h2>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      <div className="h-px bg-gray-300 mx-4 "></div>

      {/* Filter Content */}
      {isOpen && (
        <div className="px-4 pb-4 mt-[18px]">
          {/* Preferred Class */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Preferred class
            </h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-orange-600"
                  defaultChecked
                />
                <span className="ml-2 text-sm">Business (20)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="w-5 h-5 accent-orange-600" />
                <span className="ml-2 text-sm text-gray-500">Economy (60)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="w-5 h-5 accent-orange-600" />
                <span className="ml-2 text-sm text-gray-500">
                  First class (10)
                </span>
              </label>
            </div>
          </div>
          <div className="h-px bg-gray-300 px-4 my-[18px]"></div>

          {/* Airlines */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Airlines</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                {/* <input
                  type="checkbox"
                  className="w-4 h-4 accent-orange-500"
                  defaultChecked
                /> */}
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-orange-600"
                  defaultChecked
                />
                <span className="ml-2 text-sm">Emirates</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="w-5 h-5 accent-orange-600" />
                <span className="ml-2 text-sm text-gray-500">Air India</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="w-5 h-5 accent-orange-600" />
                <span className="ml-2 text-sm text-gray-500">Air France</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="w-5 h-5 accent-orange-600" />
                <span className="ml-2 text-sm text-gray-500">Emirates</span>
              </label>
            </div>
          </div>

          <div className="h-px bg-gray-300 px-4 my-[18px]"></div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Price range
            </h3>
            <input
              type="range"
              min="2000"
              max="10000"
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w-full accent-orange-500 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between mt-2">
              <span className="text-xs text-gray-500">$2000</span>
              <span className="text-xs text-gray-500">$10,000</span>
            </div>
          </div>

          <div className="h-px bg-gray-300 px-4 my-[18px]"></div>

          {/* Leaving at */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Leaving at
            </h3>
            <p className="text-xs text-gray-500 mb-2">Departure to Algeria</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-100 rounded p-2 flex flex-col items-center">
                {/* <Sun size={16} className="text-gray-400" /> */}
                <img
                  src={SunRiseIcon}
                  alt="Sun Rise Icon"
                  className="h-5 w-5"
                />
                <span className="text-xs text-gray-400 mt-1">Before 6AM</span>
              </div>
              <div className="bg-gray-100 rounded p-2 flex flex-col items-center">
                <img src={SunSetIcon} alt="Sun Set Icon" className="h-5 w-5" />
                {/* <Sun size={16} className="text-gray-400" /> */}
                <span className="text-xs text-gray-400 mt-1">6AM - 12PM</span>
              </div>
              <div className="bg-gray-100 rounded p-2 flex flex-col items-center">
                <img
                  src={MoonRiseIcon}
                  alt="Moon Rise Icon"
                  className="h-5 w-5"
                />
                {/* <Sun size={16} className="text-gray-400" /> */}
                <span className="text-xs text-gray-400 mt-1">12PM - 6PM</span>
              </div>
              <div className="bg-gray-100 rounded p-2 flex flex-col items-center">
                <img
                  src={MoonSetIcon}
                  alt="Moon set Icon"
                  className="h-5 w-5"
                />
                {/* <Moon size={16} className="text-gray-400" /> */}
                <span className="text-xs text-gray-400 mt-1">6AM - 12PM</span>
              </div>
            </div>
          </div>

          {/* Arrival */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Arrival to Angola
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-100 rounded p-2 flex flex-col items-center">
                <img
                  src={SunRiseIcon}
                  alt="Sun Rise Icon"
                  className="h-5 w-5"
                />
                <span className="text-xs text-gray-400 mt-1">Before 6AM</span>
              </div>
              <div className="bg-gray-100 rounded p-2 flex flex-col items-center">
                <img src={SunSetIcon} alt="Sun Set Icon" className="h-5 w-5" />
                <span className="text-xs text-gray-400 mt-1">6AM - 12PM</span>
              </div>
              <div className="bg-gray-100 rounded p-2 flex flex-col items-center">
                <img
                  src={MoonRiseIcon}
                  alt="Moon Rise Icon"
                  className="h-5 w-5"
                />
                <span className="text-xs text-gray-400 mt-1">12PM - 6PM</span>
              </div>
              <div className="bg-gray-100 rounded p-2 flex flex-col items-center">
                <img
                  src={MoonSetIcon}
                  alt="Moon Set Icon"
                  className="h-5 w-5"
                />
                <span className="text-xs text-gray-400 mt-1">6AM - 12PM</span>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-300 px-4 my-[18px]"></div>

          {/* Stops */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Stops</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-orange-600"
                  defaultChecked
                />
                <span className="ml-2 text-sm">Non - Stop</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="w-5 h-5 accent-orange-600" />
                <span className="ml-2 text-sm text-gray-500">1 Stop</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="w-5 h-5 accent-orange-600" />
                <span className="ml-2 text-sm text-gray-500">2+ Stop</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// /////////////////////////////////////////////////
//
//  Flight Date picker
//
// ////////////////////////////////////////////////

const FlightDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentWeek, setCurrentWeek] = useState([]);
  const [flightPrices, setFlightPrices] = useState({});

  const formatToKey = (date) => date.toISOString().split("T")[0];

  useEffect(() => {
    const fetchFlightPrices = () => {
      const today = new Date();
      const prices = {};
      for (let i = 0; i < 90; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dateKey = formatToKey(date);
        const basePrice = 2000;
        const variation = Math.floor(Math.random() * 200) - 100;
        prices[dateKey] = basePrice + variation;
      }
      return prices;
    };
    setFlightPrices(fetchFlightPrices());
  }, []);

  useEffect(() => {
    const generateDates = (start) => {
      const allDates = [];
      for (let i = 0; i < 7; i++) {
        const date = new Date(start);
        date.setDate(start.getDate() + i);
        allDates.push(date);
      }
      return allDates;
    };

    const today = new Date();
    const allDates = generateDates(today);
    setCurrentWeek(allDates);
    if (!selectedDate && allDates.length > 0) {
      setSelectedDate(formatToKey(allDates[0]));
    }
  }, []);

  const navigatePrevious = () => {
    const prevStartDate = new Date(currentWeek[0]);
    prevStartDate.setDate(prevStartDate.getDate() - 7);
    const prevDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(prevStartDate);
      date.setDate(prevStartDate.getDate() + i);
      prevDates.push(date);
    }
    setCurrentWeek(prevDates);
    setSelectedDate(formatToKey(prevDates[0]));
  };

  const navigateNext = () => {
    const nextStartDate = new Date(currentWeek[0]);
    nextStartDate.setDate(nextStartDate.getDate() + 7);
    const nextDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(nextStartDate);
      date.setDate(nextStartDate.getDate() + i);
      nextDates.push(date);
    }
    setCurrentWeek(nextDates);
    setSelectedDate(formatToKey(nextDates[0]));
  };

  const formatDate = (date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return {
      dayOfWeek: days[date.getDay()],
      month: months[date.getMonth()],
      day: date.getDate(),
      year: date.getFullYear(),
    };
  };

  const getPrice = (date) => {
    const key = formatToKey(date);
    return flightPrices[key] || 2000;
  };

  const formatPrice = (price) => `$ ${price.toLocaleString()}`;

  return (
    <div
      className="w-full flex items-center font-sans overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.12)] bg-white rounded-[12px]"
      style={{ top: "200px", left: "580px" }}
    >
      {/* Left Arrow */}
      <button
        onClick={navigatePrevious}
        className="flex items-center justify-center w-[35px] h-[84.794px] bg-[#EE5128] rounded-l-[12px] focus:outline-none"
        style={{ border: "none" }}
      >
        <ChevronLeft size={20} color="white" />
      </button>

      {/* Date Boxes */}
      <div className="flex w-full items-center overflow-hidden bg-transparent">
        {currentWeek.map((date, index) => {
          const formattedDate = formatDate(date);
          const dateKey = formatToKey(date);
          const isSelected = selectedDate === dateKey;
          const price = getPrice(date);

          return (
            <div
              key={index}
              onClick={() => setSelectedDate(dateKey)}
              className="w-full relative cursor-pointer hover:bg-gray-100 transition-all duration-150"
              style={{
                // width: "100.91px",
                height: "84.794px",
                borderRight:
                  index === currentWeek.length - 1
                    ? "none"
                    : "0.85px solid #CCCCCC",
              }}
            >
              <div
                className="absolute w-full flex flex-col items-center justify-center text-center"
                style={{
                  // width: "100.91px",
                  height: "100%",
                  top: 0,
                  left: 0,
                }}
              >
                <p className="text-[14px] font-normal text-black leading-none">
                  {formattedDate.dayOfWeek}, {formattedDate.month}{" "}
                  {String(formattedDate.day).padStart(2, "0")}
                </p>
                <p
                  className={`text-[13px] font-bold mt-[6.89px] h-[18px] flex items-center justify-center ${
                    isSelected ? "text-green-600" : "text-gray-400"
                  }`}
                  style={{ width: "48px", lineHeight: "18px" }}
                >
                  {formatPrice(price)}
                </p>
              </div>

              {isSelected && (
                <div
                  className="absolute w-2 h-2 bg-[#EE5128] rounded-full left-1/2 -translate-x-1/2"
                  style={{ top: "65.5px" }}
                ></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={navigateNext}
        className="flex items-center justify-center w-[35px] h-[84.794px] bg-[#EE5128] rounded-r-[12px] focus:outline-none"
        style={{ border: "none" }}
      >
        <ChevronRight size={20} color="white" />
      </button>
    </div>
  );
};

// /////////////////////////////////////////////////
//
//  Flight Results
//
// ////////////////////////////////////////////////
const FlightResults = () => {
  const [flights, setFlights] = useState([]);
  const [selectedFlightId, setSelectedFlightId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setFlights(flightsData);
  }, []);

  const handleSelectFlight = (id) => {
    setSelectedFlightId((prevId) => (prevId === id ? null : id));
  };
  return (
    <div className="flex flex-col items-center space-y-6 font-sans relative">
      <div className="w-full flex items-center justify-between">
        {/* Heading Left */}
        <h1 className="text-[25.44px] font-[600] leading-[100%] font-jakarta">
          Flights from Algeria to Angola
        </h1>

        {/* Sort by Right */}
        <div className=" flex items-center gap-2 font-jakarta text-[14px] font-semibold text-black cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="7" y1="12" x2="17" y2="12" />
            <line x1="11" y1="18" x2="13" y2="18" />
          </svg>
          <span>Sort by</span>
        </div>
      </div>

      {flights.map((flight) => {
        const isSelected = selectedFlightId === flight.id;

        return (
          <div
            key={flight.id}
            className={`w-full min-h-[150.13px] rounded-md cursor-pointer transition duration-300 flex flex-col justify-between ${
              isSelected
                ? "border border-[#EE5128] bg-white shadow-sm"
                : "border border-gray-200 bg-white"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              handleSelectFlight(flight.id);
            }}
          >
            {/* Top Row */}
            <div className="flex items-center flex-col lg:flex-row justify-between px-4 min-h-[60px] pt-6 pb-6 xl:pb-0 gap-[30px]">
              {/* Logo + Flight Info */}
              <div className="flex flex-col justify-start items-center xl:items-start min-w-[170px] relative">
                <img
                  src={flight.logo}
                  alt={flight.airline}
                  className="w-[140.19px] h-[60.15px] object-contain xl:mb-[45px] ml-2"
                />
                <div className="absolute top-[48px] left-[18px] flex items-center space-x-2">
                  <span className="text-[13px] text-gray-500 leading-none">
                    {flight.flightNumber}
                  </span>
                  <span className="text-[12px] bg-[#008905] text-white px-[10px] py-[2px] rounded font-semibold leading-[19px]">
                    {flight.class}
                  </span>
                </div>
              </div>

              {/* Departure - Flight Path - Arrival */}
              <div className="flex items-center justify-center gap-[40px] ml-4">
                {/* Departure */}
                <div className="text-center">
                  <p className="text-[22px] font-bold text-black leading-tight">
                    {flight.departureTime}
                  </p>
                  <p className="text-[13px] text-gray-500 leading-tight mt-[2px]">
                    {flight.departureCity}
                  </p>
                </div>

                {/* Path */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                    <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                    <span className="text-black text-sm">✈</span>
                    <div className="border-t border-dashed w-8 border-gray-300 mx-2" />
                    <span className="w-[6px] h-[6px] bg-gray-300 rounded-full" />
                  </div>
                  <span className="text-[12px] text-gray-400 mt-[4px]">
                    {flight.duration}
                  </span>
                </div>

                {/* Arrival */}
                <div className="text-center">
                  <p className="text-[22px] font-bold text-black leading-tight">
                    {flight.arrivalTime}
                  </p>
                  <p className="text-[13px] text-gray-500 leading-tight mt-[2px]">
                    {flight.arrivalCity}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="text-right space-y-[2px] w-[152px] h-[31px]">
                <p className="text-[#EE5128] text-[26px] font-black leading-none font-sans mr-6">
                  {flight.currency}
                  {flight.price.toLocaleString()}
                  <span className="text-[12px] text-black font-normal">
                    /pax
                  </span>
                </p>
                <p className="text-[13px] text-gray-400 line-through font-normal leading-none mr-6 font-sans">
                  {flight.currency}
                  {flight.originalPrice.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Bottom Row */}
            <div
              className={`border-t px-4 py-[30px] xl:py-[20px] flex items-center justify-between text-sm font-medium ${
                isSelected ? "border-[#EE5128]" : "border-gray-200"
              }`}
            >
              <div
                className={`flex space-x-14 ${
                  isSelected ? "text-[#EE5128]" : "text-bold"
                } font-sans`}
              >
                <div className="flex items-center space-x-1 ml-2">
                  <span>Flight Details</span>
                  <ChevronDown size={14} />
                </div>
                <div className="hidden lg:flex items-center space-x-1">
                  <span>Price Details</span>
                  <ChevronDown size={14} />
                </div>
                <span className="hidden lg:flex">Policy</span>
                <span className="hidden lg:flex">Refund</span>
                <span className="hidden lg:flex">Reschedule</span>
              </div>

              {isSelected ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/booking/ReviewYourBooking", {
                      state: { flight },
                    });
                  }}
                  className="bg-[#EE5128] text-white px-4 py-1.5 rounded font-jakarta font-semibold"
                >
                  Book now
                </button>
              ) : (
                <button
                  onClick={(e) => e.stopPropagation()}
                  className="bg-gray-300 text-white px-4 py-1.5 rounded font-jakarta font-semibold cursor-not-allowed"
                  disabled
                >
                  Book now
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
