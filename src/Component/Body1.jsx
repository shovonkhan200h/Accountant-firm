import React from "react";
import { body1Text } from "../Constant";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Body1 = () => {
  const scrollToBannerEmail = () => {
    const bannerEmailSection = document.getElementById("home");
    if (bannerEmailSection) {
      bannerEmailSection.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };
  return (
    <section
      className="container mx-auto mt-10 h-auto mb-20 flex flex-col gap-10 items-center"
      id=""
    >
      <div className="flex flex-col justify-between gap-10 items-center">
        <div className="font-semibold text-center">
          <h2 className="text-lg lg:text-[48px] leading-[57px]">
            Achieve Financial Clarity in 3 Simple Steps
          </h2>
          <p>Uncomplicated and Stress-Free</p>
        </div>

        <div className="flex text-sm gap-3 w-full">
          {body1Text.map((item, id) => {
            return (
              <div className="grid gap-2" key={id}>
                <div className="flex justify-center text-[30px] lg:text-[70px]"><a>{item.icon}</a></div>
                <h2 className="font-semibold lg:text-lg">{item.heading}</h2>
                <p className="text-sm tracking-tighter lg:text-lg">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-center gap-3">
          <div className="flex text-yellow-500  border p-1 rounded-2xl">
          <FaStar /> {/* Full Star */}
          <FaStar /> {/* Full Star */}
          <FaStar /> {/* Full Star */}
          <FaStar /> {/* Full Star */}
          <FaStarHalfAlt /> {/* Half Star */}
          </div>
          <p>Rated 4.6/5 Stars by Many Happy Businesses</p>
        </div>

        <button
          onClick={scrollToBannerEmail}
          className="bg-gradient-to-r from-rose-500 to-blue-500 text-white rounded-xl p-2 border border-black"
        >
          Book your Free Consultation
        </button>
      </div>
    </section>
  );
};

export default Body1;
