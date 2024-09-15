import React from "react";
import { whyUstext } from "../Constant";
import { SiNike } from "react-icons/si";

const Whyus = () => {
  return (
    <section className="container mx-auto mb-20" id="whyus">
      <h2 className="text-center  text-[30px] font-bold">Why Clients choose us</h2>
      <div className="border-b-2 border-rose-900 mt-2 mb-5 "></div>
        <div className="grid grid-cols-2 gap-5 lg:grid lg:grid-cols-4">
           {
            whyUstext.map((item)=>{
              return <div className="flex flex-col gap-5 w-full border px-2">
                <img src={item.img} className="w-full h-[80px] lg:h-[200px] object-cover"/>
                <h2 className="tracking-tight text-center font-bold text-sm lg:text-lg">{item.heading}</h2>
                  {
                    item.text.split("/n").map((line,id)=>(
                      <ul>
                        <li key={id} className="text-[11px] md:text-sm lg:text-lg">{line}</li>
                      </ul>
                    ))
                  }
              </div>
            })
           }
        </div>
    </section>
  );
};

export default Whyus;
