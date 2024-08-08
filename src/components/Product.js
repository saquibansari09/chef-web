import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import "swiper/css/pagination";
import "swiper/css";
import img from "../images/—Pngtree—five thai sweet basil leaves_4231023 1.png";

const slide_imgs = [
  "/imgs/slide_1.png",
  "/imgs/slide_1.png",
  "/imgs/slide_1.png",
];

const Product = () => {
  const swiperRef = useRef();
  const [swiper1, setswiper1] = useState(null);

  return (
    <div className="bg-[#130a04] pl-8 md:pl-56 pt-28 relative">
      <div className="flex flex-col justify-start ">
        <div className="absolute -top-32">
          <img
            src={img}
            alt="Thai Sweet Basil Leaves"
            className="w-[150px] h-[150px] md:w-[300px] md:h-[300px]"
          />
        </div>

        <h1 className="text-yellow-900 text-2xl md:text-4xl mb-4 border-b-4 md:border-b-8 border-yellow-900 w-[80%] md:w-[48%] pb-2 md:pb-6">
          CHEF MATT PRODUCTS
        </h1>
        <p className="text-white text-lg md:text-xl max-w-full md:max-w-2xl">
          Shop Gourmet Chef Quality products from the Chef Matt brand. Chef it
          yourself and Thank us later.
        </p>
      </div>

      <div className="flex h-[300px] md:h-[500px] items-center justify-center">
        <MdKeyboardDoubleArrowLeft
          onClick={() => swiperRef.current.slidePrev()}
          className="text-6xl md:text-9xl text-white cursor-pointer"
        />
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full md:w-3/4"
        >
          <SwiperSlide>
            <img
              src="/imgs/Group 45.png"
              alt="item1"
              className="w-full h-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/imgs/Group 46.png"
              alt="item1"
              className="w-full h-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/imgs/Group 47.png"
              alt="item1"
              className="w-full h-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/imgs/Group 48.png"
              alt="item1"
              className="w-full h-auto"
            />
          </SwiperSlide>
        </Swiper>
        <MdOutlineKeyboardDoubleArrowRight
          onClick={() => swiperRef.current.slideNext()}
          className="text-6xl md:text-9xl text-white cursor-pointer"
        />
      </div>

      <div className="relative h-[300px] md:h-[500px]">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => setswiper1(swiper)}
        >
          {slide_imgs.map((v, i) => (
            <SwiperSlide
              className="relative h-[300px] md:h-[500px] w-full"
              key={i}
            >
              <img className="w-full h-full object-cover" src={v} alt="item1" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white p-4">
                <h1 className="text-2xl md:text-4xl text-black border-b-2 md:border-b-4 border-black text-center pb-2 md:pb-6">
                  ONLINE ONLY
                </h1>

                <p className="text-black flex items-center justify-center text-center text-sm md:text-lg font-medium mt-2 md:mt-5">
                  GET 20% OFF YOUR ORDER OF $50 OR MORE <br />
                  Use code “Chef20”
                </p>
                <button className="px-10 py-2 md:px-20 md:py-4 text-black border-2 border-black text-sm md:text-lg font-bold mt-5 md:mt-10">
                  Shop Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
