import React from "react";
import img from "../images/Rectangle 16.png";
import { AiOutlineDelete } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa6";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import img2 from "../images/Chef-Matt-rev-white-high-res-1-2048x1365 2.png";

const Footer = () => {
  return (
    <div>
      <footer className="relative flex justify-center md:justify-end h-[130vh] bg-[#130a04]">
        <img
          src={img}
          alt="Footer"
          className="w-full md:w-[85%] h-[60vh] object-cover"
        />
        <div className="absolute inset-0 flex flex-col text-white p-4 md:ml-60 md:mt-40 mt-10">
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
          <div className="flex flex-col md:flex-row justify-between mt-14 md:mt-28 px-5 gap-10 md:gap-0">
            <div className="flex flex-col gap-2 text-xl md:text-2xl text-orange-300 mt-10 md:mt-20">
              <div className="flex items-center gap-2">
                <AiOutlineDelete className="text-3xl md:text-4xl" />
                <h1>FREE SHIPPING WORLDWIDE</h1>
              </div>
              <p className="mt-2 ml-11 text-lg md:text-xl text-white">
                Guaranteed Delivery
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xl md:text-2xl text-orange-300 mt-10 md:mt-20">
              <div className="flex items-center gap-2">
                <FaHeadphones className="text-3xl md:text-4xl" />
                <h1>FREE SHIPPING WORLDWIDE</h1>
              </div>
              <p className="mt-2 ml-11 text-lg md:text-xl text-white">
                Text Us 24/7 at 070-7782-9137
              </p>
            </div>
            <div className="flex flex-col gap-2 text-xl md:text-2xl text-orange-300 mt-10 md:mt-20">
              <div className="flex items-center gap-2">
                <BsArrowUpRightCircleFill className="text-3xl md:text-4xl" />
                <h1>FREE SHIPPING WORLDWIDE</h1>
              </div>
              <p className="mt-2 ml-11 text-lg md:text-xl text-white">
                Send Within 30 Days
              </p>
            </div>
          </div>
          <hr className="border-b-8 border-orange-300 w-full mt-10 md:mt-14" />
          <div className="bg-[#130a04] flex items-center justify-center mt-10 md:mt-0">
            <img
              src={img2}
              alt="Chef Matt"
              className="max-w-full md:max-w-[60%] max-h-[200px]"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
