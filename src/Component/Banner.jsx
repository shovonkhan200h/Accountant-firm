import React from "react";
import BannerEmail from "./BannerEmail";
import BannerContent from "./BannerContent";
import { headerItem } from "../Constant";


const Banner = () => {
  return (
    <div id="home" className="relative w-full min-h-screen bg-gradient-to-r from-rose-500 to-blue-500 items-center justify-center flex gap-4 p-5">
      
      <div className="w-full">
      <BannerContent/>
      </div>
      
      <div className="w-full">
        <BannerEmail/>
      </div>

      <div className="h-[50px] bg-black absolute inset-x-0 -bottom-5 flex justify-evenly items-center">
        {
          headerItem.map((item,id)=>{
            return <div className="flex px-2 items-center gap-2 font-semibold justify-center text-white text-[12px] md:text-sm lg:text-lg" key={id}>
              <a>{item.icon}</a>
              <h>{item.text}</h>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default Banner;
