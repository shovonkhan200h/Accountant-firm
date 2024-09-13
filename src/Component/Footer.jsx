import React from "react";
import { abouts } from "../Constant";
import Map from "./Map";

const Footer = () => {
  const scrollToBannerEmail = () => {
    const bannerEmailSection = document.getElementById("home");
    if (bannerEmailSection) {
      bannerEmailSection.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };
  return (
    <footer className="w-full  bg-black text-white">
      <div className="container mx-auto">
        <div className="flex w-full gap-5 p-5">
          <div className="w-full flex flex-col gap-5">
            <h2 className="font-semibold text-[20px]">About Us</h2>
            <p className="tracking-tighter">
              Welcome to Farid & Co-Accountants and Business Advisers. Farid &
              Co is a proactive and tax specialised accountancy practice. Give
              us a call or drop us an email anytime you require assistance. Also
              you can follow us on social media.
            </p>
          </div>

          <div className="w-full flex flex-col gap-5">
            <h2 className="font-semibold text-[20px]">Services</h2>
            {abouts.map((item, id) => (
              <div>
                <ul className="font-medium">
                  <li>{item.heading}</li>
                </ul>
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col gap-5">
            <h2 className="font-semibold">Our Location</h2>
            <Map />
            <button onClick={scrollToBannerEmail} className="p-2 bg-gradient-to-r from-rose-500 to-blue-500 text-white rounded-xl">Get Free Call</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
