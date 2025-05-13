// // import { useState, useEffect } from "react";

// // import DesktopLeftBg from "../../assets/images/AfricanExperienceBg.png";
// // import MobileLeftBg from "../../assets/images/AfricanExperienceFullBg.png";

// // import Flights from "../../assets/images/africanExperiences/flights.svg";
// // import Cabs from "../../assets/images/africanExperiences/cabs.svg";
// // import Packages from "../../assets/images/africanExperiences/Packages.svg";
// // import Forex from "../../assets/images/africanExperiences/forex.svg";
// // import eSIM from "../../assets/images/africanExperiences/esim-Icon.svg";
// // import Hotels from "../../assets/images/africanExperiences/Hotels.svg";
// // import Rentals from "../../assets/images/africanExperiences/Rentals.svg";
// // import Tours from "../../assets/images/africanExperiences/Tours-icon.svg";
// // import Events from "../../assets/images/africanExperiences/event-icon.svg";
// // import Offers from "../../assets/images/africanExperiences/Offers.svg";
// // import Insurance from "../../assets/images/africanExperiences/Insurance.svg";
// // import Concierge from "../../assets/images/africanExperiences/concierge-black.svg";
// // import Ferries from "../../assets/images/africanExperiences/ferries.svg";
// // import Trains from "../../assets/images/africanExperiences/trains.svg";

// // import BannerBottom from "../../assets/images/banner-bottom.png";

// // // Using your existing AfricanExperienceData array
// // const AfricanExperienceData = [
// //   {
// //     image: Flights,
// //     title: "Flights",
// //   },
// //   {
// //     image: Cabs,
// //     title: "Cabs",
// //   },
// //   {
// //     image: Packages,
// //     title: "Packages",
// //   },
// //   {
// //     image: Forex,
// //     title: "Forex",
// //   },
// //   {
// //     image: eSIM,
// //     title: "eSIM",
// //   },
// //   {
// //     image: Hotels,
// //     title: "Hotels",
// //   },
// //   {
// //     image: Rentals,
// //     title: "Rentals",
// //   },
// //   {
// //     image: Tours,
// //     title: "Tours",
// //   },
// //   {
// //     image: Events,
// //     title: "Events",
// //   },
// //   {
// //     image: Offers,
// //     title: "Offers",
// //   },
// //   {
// //     image: Insurance,
// //     title: "Insurance",
// //   },
// //   {
// //     image: Concierge,
// //     title: "Concierge",
// //   },
// //   {
// //     image: Ferries,
// //     title: "Ferries",
// //   },
// //   {
// //     image: Trains,
// //     title: "Trains",
// //   },
// // ];

// // const AfricanExperience = () => {
// //   const [rotation, setRotation] = useState(0);
// //   // const [hoveredIndex, setHoveredIndex] = useState(null);

// //   // Optional: Auto-rotate the circle
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setRotation((prev) => (prev + 0.2) % 360);
// //     }, 50);

// //     return () => clearInterval(interval);
// //   }, []);

// //   // Circle properties
// //   const radius = 250;
// //   // const mobileRadius = 150;
// //   const iconSize = 55;
// //   // const mobileIconSize = 40;
// //   const totalIcons = AfricanExperienceData.length;

// //   return (
// //     <>
// //       <div className="relative hidden lg:block">
// //         <div className="overflow-hidden min-h-screen h-full w-full bg-gradient-to-r from-[#fad9cf] to-[#f28c72] relative text-black font-sans flex flex-col lg:flex-row items-center px-8 lg:px-20">
// //           {/* <div className="overflow-hidden min-h-screen h-full w-full bg-gradient-to-r from-[#fad9cf] to-[#f28c72] relative text-black font-sans flex flex-col lg:flex-row items-center px-8 lg:px-20 bg-[url('/AEDB.svg')] bg-no-repeat bg-center mx-auto"> */}
// //           {/* <div className="w-full bg-gradient-to-t from-[#fad9cf] to-[#f28c72] relative text-black font-sans flex items-center bg-[url('../../assets/images/africanExperiences/AEDB.svg')] bg-no-repeat bg-center bg-cover px-8 lg:px-20"> */}
// //           <div className="w-full lg:w-1/2 h-full font-jakarta relative">
// //             <img
// //               src={DesktopLeftBg}
// //               height={800}
// //               width={1200}
// //               alt="African Experience Background"
// //               className="absolute mix-blend-plus-lighter -left-20 -top-38"
// //             />
// //             <h1 className="font-black tracking-tight text-black @max-xs:text-2xl xl:text-[80px] leading-[150%] z-10">
// //               Live the <br /> African <br /> Experience
// //             </h1>
// //           </div>

// //           <div className="w-full lg:w-1/2 flex justify-center items-center py-12 lg:py-0">
// //             <div className="relative w-full max-w-xl aspect-square">
// //               {/* Center text */}
// //               <div className="absolute inset-0 right-[7%] flex items-center justify-center z-10">
// //                 {/* <p className="text-center text-xl lg:text-3xl font-medium max-w-xs">
// //                 Discover Local Options, <br /> Experience the Unexplored!
// //               </p> */}
// //                 <p className="text-center text-3xl">
// //                   Discover Local Options, <br /> Experience the Unexplored!
// //                 </p>
// //               </div>

// //               {/* Circle outline */}
// //               {/* <div className="absolute inset-0 border-2 border-orange-400 rounded-full"></div> */}

// //               {/* Icons positioned around the circle */}
// //               {AfricanExperienceData.map((item, index) => {
// //                 // Calculate position around the circle

// //                 const angle = (index * (360 / totalIcons) + rotation) % 360;
// //                 const radians = (angle * Math.PI) / 180;

// //                 // Calculate positions (center of circle + offset based on angle)
// //                 const top = `calc(50% - ${iconSize}px + ${
// //                   radius * Math.sin(radians)
// //                 }px)`;
// //                 const left = `calc(50% - ${iconSize}px + ${
// //                   radius * Math.cos(radians)
// //                 }px)`;

// //                 // const isHovered = hoveredIndex === index;
// //                 // ${
// //                 //   isHovered ? "scale-125" : "scale-100"
// //                 //   }
// //                 // ${
// //                 //   isHovered ? "text-black" : "text-gray-800"
// //                 // }
// //                 return (
// //                   <div
// //                     key={index}
// //                     className={`absolute transition-all duration-300 flex flex-col items-center hover:scale-125 ease-in-out

// //                   `}
// //                     style={{ top, left }}
// //                     // onMouseEnter={() => setHoveredIndex(index)}
// //                     // onMouseLeave={() => setHoveredIndex(null)}
// //                   >
// //                     <div className="p-2 rounded-full mb-2">
// //                       <img
// //                         src={item.image}
// //                         alt={item.title}
// //                         // width={iconSize}
// //                         // height={iconSize}
// //                         height={55}
// //                         width={55}
// //                         className="object-contain "
// //                       />
// //                     </div>
// //                     <p className={`text-[15px] font-medium font-sans `}>
// //                       {item.title}
// //                     </p>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //           {/* </div> */}
// //         </div>
// //         {/* paper element */}
// //         <img
// //           src={BannerBottom}
// //           alt="Decorative bottom banner"
// //           height={40}
// //           width={662}
// //           className="absolute bottom-[-40px] z-30 h-20 w-full object-cover"
// //         />
// //       </div>
// //       {/* mobile section */}
// //       <div className="relative lg:hidden ">
// //         <div className="overflow-hidden h-screen w-full bg-gradient-to-t from-[#fad9cf] to-[#f28c72] relative text-black font-sans flex flex-col items-center px-4">
// //           {/* <div className="overflow-hidden h-screen w-full bg-gradient-to-t from-[#fad9cf] to-[#f28c72] relative text-black font-sans flex flex-col items-center bg-[url('/assets/images/africanExperiences/africanExprenceMobileBg.svg')] bg-no-repeat bg-center bg-cover"> */}
// //           <div className="overflow-hidden h-screen w-full bg-gradient-to-t from-[#fad9cf] to-[#f28c72] relative text-black font-sans flex flex-col items-center ">
// //             <div className="font-jakarta h-full w-full flex justify-center items-center relative flex-1 mx-auto">
// //               <img
// //                 src={MobileLeftBg}
// //                 alt="African Experience Background"
// //                 className="mix-blend-screen opacity-50 absolute left-0 h-full w-full scale-125 inset-0 sm:scale-[130%] object-contain"
// //               />
// //               <h1 className="font-extrabold font-jakarta text-[36px] leading-[150%] stroke-black stroke-3">
// //                 Live the <br /> African <br /> Experience
// //               </h1>
// //             </div>
// //             <div className="mx-auto relative w-full flex flex-1">
// //               <div className="relative w-full">
// //                 {/* Center text */}
// //                 <div className="absolute inset-0 flex items-center justify-center z-10">
// //                   <p className="text-center text-base">
// //                     Discover Local Options, <br /> Experience the Unexplored!
// //                   </p>
// //                 </div>

// //                 {/* Circle outline */}

// //                 {/* Icons positioned around the circle */}
// //                 {AfricanExperienceData.map((item, index) => {
// //                   // Calculate position around the circle
// //                   const totalIcons = AfricanExperienceData.length;
// //                   const radius = 160;
// //                   const size = 40;
// //                   // const angle = index * (360 / totalIcons) * (Math.PI / 180);
// //                   // const top = `calc(50% - ${size / 2}px + ${
// //                   //   radius * Math.sin(angle)
// //                   // }px)`;
// //                   // const left = `calc(50% - ${size / 2}px + ${
// //                   //   radius * Math.cos(angle)
// //                   //   }px)`;

// //                   const angle = (index * (360 / totalIcons) + rotation) % 360;
// //                   const radians = (angle * Math.PI) / 180;
// //                   // Calculate positions (center of circle + offset based on angle)
// //                   const top = `calc(50% - ${size}px + ${
// //                     radius * Math.sin(radians)
// //                   }px)`;
// //                   const left = `calc(50% - ${size}px + ${
// //                     radius * Math.cos(radians)
// //                   }px)`;
// //                   return (
// //                     <div
// //                       key={index}
// //                       className={`absolute transition-all duration-300 flex flex-col items-center

// //                   `}
// //                       style={{ top, left }}
// //                       // onMouseEnter={() => setHoveredIndex(index)}
// //                       // onMouseLeave={() => setHoveredIndex(null)}
// //                     >
// //                       <div className="p-2 rounded-full">
// //                         <img
// //                           src={item.image}
// //                           alt={item.title}
// //                           // width={iconSize}
// //                           // height={iconSize}
// //                           height={size}
// //                           width={size}
// //                           className="object-contain"
// //                         />
// //                       </div>
// //                       <p className={`text-[9px] font-medium font-sans `}>
// //                         {item.title}
// //                       </p>
// //                     </div>
// //                   );
// //                 })}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <img
// //           src={BannerBottom}
// //           alt="Decorative bottom banner"
// //           height={40}
// //           width={662}
// //           className="absolute bottom-[-36px] z-30 h-20 w-full object-cover"
// //         />
// //       </div>
// //     </>
// //   );
// // };

// // export default AfricanExperience;

// import { useState, useEffect } from "react";

// import DesktopLeftBg from "../../assets/images/new-3.png";
// import MobileLeftBg from "../../assets/images/AfricanExperienceFullBg.png";
// import NewBg from "../../assets/images/new-pic.png"
// import Flights from "../../assets/images/africanExperiences/flights.svg";
// import Cabs from "../../assets/images/africanExperiences/cabs.svg";
// import Packages from "../../assets/images/africanExperiences/Packages.svg";
// import Forex from "../../assets/images/africanExperiences/forex.svg";
// import eSIM from "../../assets/images/africanExperiences/esim-Icon.svg";
// import Hotels from "../../assets/images/africanExperiences/Hotels.svg";
// import Rentals from "../../assets/images/africanExperiences/Rentals.svg";
// import Tours from "../../assets/images/africanExperiences/Tours-icon.svg";
// import Events from "../../assets/images/africanExperiences/event-icon.svg";
// import Offers from "../../assets/images/africanExperiences/Offers.svg";
// import Insurance from "../../assets/images/africanExperiences/Insurance.svg";
// import Concierge from "../../assets/images/africanExperiences/concierge-black.svg";
// import Ferries from "../../assets/images/africanExperiences/ferries.svg";
// import Trains from "../../assets/images/africanExperiences/trains.svg";

// import BannerBottom from "../../assets/images/banner-bottom.png";

// // Using your existing AfricanExperienceData array
// const AfricanExperienceData = [
//   {
//     image: Flights,
//     title: "Flights",
//   },
//   {
//     image: Cabs,
//     title: "Cabs",
//   },
//   {
//     image: Packages,
//     title: "Packages",
//   },
//   {
//     image: Forex,
//     title: "Forex",
//   },
//   {
//     image: eSIM,
//     title: "eSIM",
//   },
//   {
//     image: Hotels,
//     title: "Hotels",
//   },
//   {
//     image: Rentals,
//     title: "Rentals",
//   },
//   {
//     image: Tours,
//     title: "Tours",
//   },
//   {
//     image: Events,
//     title: "Events",
//   },
//   {
//     image: Offers,
//     title: "Offers",
//   },
//   {
//     image: Insurance,
//     title: "Insurance",
//   },
//   {
//     image: Concierge,
//     title: "Concierge",
//   },
//   {
//     image: Ferries,
//     title: "Ferries",
//   },
//   {
//     image: Trains,
//     title: "Trains",
//   },
// ];

// const AfricanExperience = () => {
//   const [rotation, setRotation] = useState(0);
//   // const [hoveredIndex, setHoveredIndex] = useState(null);

//   // Optional: Auto-rotate the circle
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRotation((prev) => (prev + 0.2) % 360);
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   // Circle properties
//   const radius = 250;
//   // const mobileRadius = 150;
//   const iconSize = 55;
//   // const mobileIconSize = 40;
//   const totalIcons = AfricanExperienceData.length;

//   return (
//     <>
//       <div className="relative w-full hidden lg:block bg-gradient-to-r from-[#fad9cf] to-[#f28c72]">
//         <div className="overflow-hidden h-full w-full  relative text-black font-sans flex flex-col lg:flex-row items-center px-8 lg:px-20 py-20">
//           {/* <img src={NewBg} alt="bg" className="absolute object-fill  left-0  h-full  w-full " /> */}
//           <img src={NewBg} alt="bg" className="absolute inset-0 w-full h-full object-fill z-0" />

//           <div className="w-full lg:w-1/2 font-jakarta relative">
//             <img
//               src={DesktopLeftBg}
//               alt="African Experience Background"
//               className="absolute mix-blend-plus-lighter -left-30 -top-38 w-[140%] max-w-none"
//             />

//             <h1 className="font-black tracking-tight text-black @max-xs:text-xl xl:text-[60px] mt-7 text-[36px] leading-[140%] ml-[200px] z-20 -translate-x-[10%]">
//               Live the <br /> African <br /> Experience
//             </h1>
//           </div>

//           <div className="w-full lg:w-1/2 flex justify-center items-center py-12 lg:py-0 ml-[220px] mt-1">
//             <div className="relative w-full max-w-xl aspect-square">
//               {/* Center text */}
//               <div className="absolute inset-0 right-[7%] flex items-center justify-center z-10">
//                 {/* <p className="text-center text-xl lg:text-3xl font-medium max-w-xs">
//                 Discover Local Options, <br /> Experience the Unexplored!
//               </p> */}
//                 <p className="text-center text-3xl">
//                   Discover Local Options, <br /> Experience the Unexplored!
//                 </p>
//               </div>

//               {/* Circle outline */}
//               {/* <div className="absolute inset-0 border-2 border-orange-400 rounded-full"></div> */}

//               {/* Icons positioned around the circle */}
//               {AfricanExperienceData.map((item, index) => {
//                 // Calculate position around the circle

//                 const angle = (index * (360 / totalIcons) + rotation) % 360;
//                 const radians = (angle * Math.PI) / 180;

//                 // Calculate positions (center of circle + offset based on angle)
//                 const top = `calc(50% - ${iconSize}px + ${
//                   radius * Math.sin(radians)
//                 }px)`;
//                 const left = `calc(50% - ${iconSize}px + ${
//                   radius * Math.cos(radians)
//                 }px)`;

//                 // const isHovered = hoveredIndex === index;
//                 // ${
//                 //   isHovered ? "scale-125" : "scale-100"
//                 //   }
//                 // ${
//                 //   isHovered ? "text-black" : "text-gray-800"
//                 // }
//                 return (
//                   <div
//                     key={index}
//                     className={`absolute transition-all duration-300 flex flex-col items-center hover:scale-125 ease-in-out

//                   `}
//                     style={{ top, left }}
//                     // onMouseEnter={() => setHoveredIndex(index)}
//                     // onMouseLeave={() => setHoveredIndex(null)}
//                   >
//                     <div className="p-2 rounded-full mb-2">
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         // width={iconSize}
//                         // height={iconSize}
//                         height={55}
//                         width={55}
//                         className="object-contain "
//                       />
//                     </div>
//                     <p className={`text-[15px] font-medium font-sans `}>
//                       {item.title}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* paper element */}
//         <img
//           src={BannerBottom}
//           alt="Decorative bottom banner"
//           height={40}
//           width={662}
//           className="absolute bottom-[-40px] z-30 h-20 w-full object-cover"
//         />
//       </div>
//       {/* mobile section */}
//       <div className="relative lg:hidden ">
//         <div className="overflow-hidden h-screen w-full bg-gradient-to-t from-[#fad9cf] to-[#f28c72] relative text-black font-sans flex flex-col items-center px-4">
//           {/* <div className="overflow-hidden h-screen w-full bg-gradient-to-t from-[#fad9cf] to-[#f28c72] relative text-black font-sans flex flex-col items-center bg-[url('/assets/images/africanExperiences/africanExprenceMobileBg.svg')] bg-no-repeat bg-center bg-cover"> */}
//           <div className="overflow-hidden h-screen w-full bg-gradient-to-t from-[#fad9cf] to-[#f28c72] relative text-black font-sans flex flex-col items-center ">
//             <div className="font-jakarta h-full w-full flex justify-center items-center relative flex-1 mx-auto">
//               <img
//                 src={MobileLeftBg}
//                 alt="African Experience Background"
//                 className="mix-blend-screen opacity-50 absolute left-0 h-full w-full scale-125 inset-0 sm:scale-[130%] object-contain"
//               />
//               <h1 className="font-extrabold font-jakarta text-[36px] leading-[150%] stroke-black stroke-3">
//                 Live the <br /> African <br /> Experience
//               </h1>
//             </div>
//             <div className="mx-auto relative w-full flex flex-1">
//               <div className="relative w-full">
//                 {/* Center text */}
//                 <div className="absolute inset-0 flex items-center justify-center z-10">
//                   <p className="text-center text-base">
//                     Discover Local Options, <br /> Experience the Unexplored!
//                   </p>
//                 </div>

//                 {/* Circle outline */}

//                 {/* Icons positioned around the circle */}
//                 {AfricanExperienceData.map((item, index) => {
//                   // Calculate position around the circle
//                   const totalIcons = AfricanExperienceData.length;
//                   const radius = 160;
//                   const size = 40;
//                   // const angle = index * (360 / totalIcons) * (Math.PI / 180);
//                   // const top = `calc(50% - ${size / 2}px + ${
//                   //   radius * Math.sin(angle)
//                   // }px)`;
//                   // const left = `calc(50% - ${size / 2}px + ${
//                   //   radius * Math.cos(angle)
//                   //   }px)`;

//                   const angle = (index * (360 / totalIcons) + rotation) % 360;
//                   const radians = (angle * Math.PI) / 180;

//                   // Calculate positions (center of circle + offset based on angle)
//                   const top = `calc(50% - ${size}px + ${
//                     radius * Math.sin(radians)
//                   }px)`;
//                   const left = `calc(50% - ${size}px + ${
//                     radius * Math.cos(radians)
//                   }px)`;
//                   return (
//                     <div
//                       key={index}
//                       className={`absolute transition-all duration-300 flex flex-col items-center

//                   `}
//                       style={{ top, left }}
//                       // onMouseEnter={() => setHoveredIndex(index)}
//                       // onMouseLeave={() => setHoveredIndex(null)}
//                     >
//                       <div className="p-2 rounded-full">
//                         <img
//                           src={item.image}
//                           alt={item.title}
//                           // width={iconSize}
//                           // height={iconSize}
//                           height={size}
//                           width={size}
//                           className="object-contain"
//                         />
//                       </div>
//                       <p className={`text-[9px] font-medium font-sans `}>
//                         {item.title}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//         <img
//           src={BannerBottom}
//           alt="Decorative bottom banner"
//           height={40}
//           width={662}
//           className="absolute bottom-[-36px] z-30 h-20 w-full object-cover"
//         />
//       </div>
//     </>
//   );
// };

// export default AfricanExperience;

import { Dot } from "lucide-react";
import BannerBottom from "../../assets/images/banner-bottom.png";
import DesktopLeftBg from "../../assets/images/new-3.png";

const NewsDatas = [
  {
    time: "4 hours",
    Title:
      "TUI launches direct low-cost flights from the UK to Agadir, boosting Morocco tourism and making African travel more affordable for European tourists.",
  },
  {
    time: "4 hours",
    Title:
      "United and Delta Airlines expand services to Africa with new routes to Ghana, Senegal, and Morocco, strengthening U.S.–Africa air connectivity.",
  },
  {
    time: "4 hours",
    Title:
      "Ethiopian Airlines reveals Vision 2035 strategy to double fleet size, increase destinations, and become one of the world’s top 20 global carriers.",
  },
];

const AfricanExperience_Section = () => {
  return (
    <div className="h-screen bg-red-50 relative w-full bg-gradient-to-r from-[rgb(250,217,207)] to-[#f28c72] px-4 overflow-hidden">
      <div className="max-w-7xl h-full mx-auto flex flex-col-reverse lg:flex-row">
        <div className="left news-section h-full w-full flex items-center justify-start">
          {/* News component */}
          <NEWSSection newsData={NewsDatas} />
        </div>
        <div className="right image-section h-full w-full relative flex justify-center items-center">
          <span className="font-jakarta font-semibold text-[18px] lg:text-[30px] text-center lg:leading-[35px] pl-8">
            {/* Discover Local Options, <br /> Experience the Unexplored! */}
            All Your African Travel <br /> Needs in One Platform!
          </span>
          <img
            src={DesktopLeftBg}
            alt="African Experience Background"
            className="absolute mix-blend-plus-lighter lg:scale-[120%] w-full object-center object-cover"
          />
        </div>
      </div>
      <img
        src={BannerBottom}
        alt="Decorative bottom banner"
        height={40}
        width={662}
        className="absolute bottom-[-39px] z-30 h-20 w-full object-cover"
      />
    </div>
  );
};

export default AfricanExperience_Section;

const NEWSSection = ({ newsData }) => {
  return (
    <>
      <div
        className="h-full flex flex-col items-start justify-center"
        data-aos="fade-left"
      >
        <div className="flex items-center justify-between w-full">
          <div className="bg-gradient-to-r to-[#fad9cf]/0 from-[#f28c72] px-6 p-4 max-w-fit uppercase font-semibold font-jakarta">
            featured news
          </div>
          <a
            href=""
            className="uppercase text-sm hover:underline font-jakarta font-medium text-primary"
          >
            View more
          </a>
        </div>
        <div className="max-h-[70%] lg:max-h-[70%] overflow-y-scroll no-scrollbar flex flex-col gap-4 mt-10">
          {newsData.map((news, index) => (
            <div className="p-4 group" key={index}>
              {/* <div className="h-px max-w-[200px] bg-black"></div> */}
              <div className="mb-2 flex text-sm font-jakarta items-center gap-1">
                Weefly<span className="text-xs"> NEWS</span> <Dot /> {news.time}
                ago
              </div>
              <p className="font-jakarta text-xl font-semibold text-black/50 transition-colors duration-150 max-w-[400px] text-justify leading-tight line-clamp-3 group-hover:text-black">
                {news.Title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
