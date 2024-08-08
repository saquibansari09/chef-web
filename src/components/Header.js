import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import img from "../images/Chef-Matt-rev-white-high-res-1-2048x1365 2.png";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="relative z-50">
      {/* Sidebar */}
      <div
        className={`min-w-[375px] h-[100vh] fixed bg-[#130a04] text-white top-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-10`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-6 p-2 text-white"
        >
          {isOpen ? (
            <XMarkIcon className="h-10 w-10" />
          ) : (
            <Bars3Icon className="h-10 w-10" />
          )}
        </button>
        <div className="pt-8">
          <img src={img} alt="" className="w-64 h-36 " />
        </div>

        <nav className="mt-2">
          <ul>
            <li className="py-3 px-8 text-xl text-orange-400">
              <a href="#home">HOME</a>
            </li>
            <li className="py-3 px-8 text-xl">
              <a href="#services">PRODUCT</a>
            </li>
            <li className="py-3 px-8 text-xl">
              <a href="#about">MEET CHEF MATT</a>
            </li>
            <li className="py-3 px-8 text-xl">
              <a href="#contact">FAQ</a>
            </li>
            <li className="py-3 px-8 text-xl">
              <a href="#contact">CONNECT WITH US</a>
            </li>
          </ul>
          <div className="mt-36 text-xl">
            <h1 className="mb-4 px-8">
              TEXT SUPPORT 24/7
              <span className="font-normal underline text-orange-500 ml-2">
                070-7782-9137
              </span>
            </h1>
            <hr className="border-2 w-full mb-4" />
            <div className="flex items-center justify-between gap-2 px-8">
              <div className="flex items-center gap-2">
                <ShoppingCartIcon className="h-6 w-6" />
                <p className="text-xl">CART</p>
              </div>
              <div className="flex items-center gap-2">
                <HeartIcon className="h-6 w-6" />
                <p className="text-xl">WISHLIST</p>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Toggle Button */}
      <div className="fixed h-[100vh] w-[150px] overlay-bg">
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-8 p-4 text-white"
        >
          {isOpen ? (
            <XMarkIcon className="h-10 w-10" />
          ) : (
            <Bars3Icon className="h-10 w-10" />
          )}
        </button>

        <div className="h-full flex items-center justify-center">
          <img
            className="transform rotate-[-90deg] scale-150"
            src="/imgs/sign.png"
            style={{ width: "700px" }}
            alt="sign"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
