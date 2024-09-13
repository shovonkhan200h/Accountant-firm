import React from "react";
import { FaRegStar } from "react-icons/fa";
import { heroText } from "../Constant";


const BannerContent = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      
      <div className="flex items-center gap-3">
        {/* Div 1  */}
        <div className="flex text-yellow-500  border p-1 rounded-2xl">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <p>Rated 4.6/5 Stars by Many Happy Businesses</p>
      </div>

      <div className="block lg:text-[60px] font-semibold leading-tight tracking-tight">
        <h2>
          Tailored Accounting Services That Grow With Your Business – From
          Start-Up to Scale-Up
        </h2>
      </div>

      <div>
        <div>
          {heroText.map((item, index) => {
            return (
              <div
                className="flex gap-2 items-center font-semibold text-sm"
                key={index}
              >
                <a className="text-white">{item.icon}</a>
                <h2>{item.text}</h2>
              </div>
            );
          })}
        </div>

        <div className="border-b mt-5 mb-2"></div>

        <div>
          <div>
            <img />
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default BannerContent;
