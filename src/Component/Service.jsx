import React from "react";
import { abouts } from "../Constant";

const Service = () => {
  return (
    <section className="mb-10 py-5" id="ourservice">
      <h2 className="text-center  text-[30px] font-bold">Our Services</h2>
      <div className="border-b-2 mb-2 border-rose-900 "></div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid lg:grid-cols-5 gap-3 lg:gap-3 p-1 lg:p-0">
          {abouts.map((item) => {
            return (
              <div className="p-5  md:p-2 text-sm  flex flex-col gap-2 tracking-wider leading-4  border rounded shadow-md shadow-rose-950">
                <a className="lg:text-[40px] text-2xl">{item.icon}</a>
                <h2 className="font-semibold text-wrap">{item.heading}</h2>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
