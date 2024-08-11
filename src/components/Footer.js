import React from "react";
import img from "../images/Rectangle 16.png";
import { AiOutlineDelete } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa6";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import img2 from "../images/Chef-Matt-rev-white-high-res-1-2048x1365 2.png";

const Footer = () => {
  return (
    <div className="bg-[#130a04]">
      <footer className="relative flex justify-center md:justify-end lg:h-[60vh] md:h-[80vh] bg-[#130a04] h-[100vh]">
        <img
          src={img}
          alt="Footer"
          className="w-full md:w-[85%] h-[30vh] md:h-[50vh] lg:h-[60vh] object-cover"
        />
        <div className="absolute inset-0 flex flex-col text-white p-4 md:ml-60 md:mt-10 mt-10">
          <h1 className="text-2xl md:text-4xl border-b-4 border-white w-full md:w-[48%] pb-2">
            SIGN UP FOR SPECIAL PROMOTIONS
          </h1>
          <p className="text-lg md:text-2xl mb-6 mt-6">
            Get exclusive deals you won’t find anywhere else straight to your
            inbox!
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 opacity-75 w-full md:w-[50%] border-4 border-white text-white outline-none"
            />
            <button className="p-2 bg-orange-300 px-16 py-3 mt-4 md:mt-0">
              Subscribe
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-between mt-14 md:mt-10 lg:mt-10 px-5 gap-10 md:gap-0">
            {[
              {
                icon: <AiOutlineDelete className="text-3xl md:text-4xl" />,
                title: "FREE SHIPPING WORLDWIDE",
                description: "Guaranteed Delivery",
              },
              {
                icon: <FaHeadphones className="text-3xl md:text-4xl" />,
                title: "24/7 CUSTOMER SUPPORT",
                description: "Text Us 24/7 at 070-7782-9137",
              },
              {
                icon: (
                  <BsArrowUpRightCircleFill className="text-3xl md:text-4xl" />
                ),
                title: "EASY RETURNS",
                description: "Send Within 30 Days",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 text-xl md:text-2xl text-orange-300 mt-10 lg:mt-0"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <h1>{item.title}</h1>
                </div>
                <p className="mt-2 ml-11 text-lg md:text-xl text-white">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </footer>
      <hr className="border-b-8 border-orange-300 w-full md:mt-14" />
      <div className="w-full bg-[#130a04] flex items-center justify-center  mt-10 md:mt-0 ">
        <img
          src={img2}
          alt="Chef Matt"
          className="max-w-full md:max-w-[60%] max-h-[160px] object-contain mt-12"
        />
      </div>
    </div>
  );
};

export default Footer;
