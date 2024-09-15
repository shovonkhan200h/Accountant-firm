import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { heroText } from "../Constant";

const BannerContent = () => {
  return (
    <div className="text-sm flex flex-col gap-5 mb-5">
      <div className="w-full flex  items-center gap-2">
        {/* Div 1  */}
        <div className="flex border text-yellow-500 p-1 rounded-3xl">
          <FaStar /> {/* Full Star */}
          <FaStar /> {/* Full Star */}
          <FaStar /> {/* Full Star */}
          <FaStar /> {/* Full Star */}
          <FaStarHalfAlt /> {/* Half Star */}
        </div>
        <div>
          <p className="text-sm">Rated 4.6/5 Stars by Many Happy Businesses</p>
        </div>
      </div>

      {/* Div 2  */}
      <div className="">
        <h2 className="font-semibold lg:text-[60px] leading-none">
          Tailored Accounting Services That Grow With Your Business – From
          Start-Up to Scale-Up
        </h2>
      </div>

      {/* Div 3  */}
      <div className="text-[12px] lg:text-lg md:text-sm font-medium">
        {heroText.map((item, index) => {
          return (
            <div key={index} className="flex gap-2">
              <a>{item.icon}</a>
              <h2>{item.text}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannerContent;
