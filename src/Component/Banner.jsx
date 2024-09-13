import React from "react";
import BannerEmail from "./BannerEmail";
import BannerContent from "./BannerContent";
import { headerItem } from "../Constant";


const Banner = () => {
  return (
    <div id="home" className="text-white relative h-screen bg-gradient-to-r from-rose-500 to-blue-500 items-center justify-center grid grid-cols-2 px-5 gap-4">
      <BannerContent/>
      <div className="w-full" >
        <BannerEmail/>
      </div>
      <div className="h-[40px] bg-black absolute inset-x-0 bottom-0 flex justify-evenly items-center">
        {
          headerItem.map((item,id)=>{
            return <div className="flex items-center gap-2 font-semibold justify-center" key={id}>
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
