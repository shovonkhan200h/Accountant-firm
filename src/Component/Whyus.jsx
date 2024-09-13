import React from "react";
import { whyUstext } from "../Constant";
import { SiNike } from "react-icons/si";

const Whyus = () => {
  return (
    <section className="container mx-auto mb-20" id="whyus">
      <h2 className="text-center mt-20 mb-10 text-[30px]">Why Clients choose us</h2>
      <div className="flex gap-5">
        {whyUstext.map((item, id) => {
          return (
            <div key={item.id} className="flex flex-col gap-5 text-center border p-5 relative">
              
              <div className="w-full">
                <img src={item.img} className="w-full h-[200px] object-cover"/>
              </div>

              <div className="w-full">
                <h3 className="font-semibold">{item.heading}</h3>
              </div>

              <div className="w-full">
                
                <ul>
                  {item.text.split("\n").map((line, index) => (
                    <li key={id} className="mt-5">{line}</li>
                  ))}
                </ul>
              </div>

              <div className="absolute inset-x-0 -bottom-5 bg-yellow-400 p-2 rounded-2xl">
                <button className="">Get Started</button>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Whyus;
