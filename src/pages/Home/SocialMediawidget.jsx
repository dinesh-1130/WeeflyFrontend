import React, { useEffect } from "react";
import PlayIcon from "../../assets/images/play-flaticon.png";
const SocialMediawidget = () => {
  useEffect(() => {
    // Check if the Elfsight script already exists to prevent duplicates
    if (
      !document.querySelector(
        'script[src="https://static.elfsight.com/platform/platform.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 mt-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-orange-600 font-bold text-2xl flex items-center gap-4">
          <img src={PlayIcon} alt="PlayIcon" className="h-[30px] w-[30px]" />
          <span>Media</span>
        </h2>
        <span className="text-orange-600 text-lg font-medium">
          Discover Cape Verde
        </span>
      </div>

      {/* Elfsight App Embed */}
      <div
        className="elfsight-app-b54e44d3-4ff0-4846-900b-7901c580d65a"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default SocialMediawidget;
