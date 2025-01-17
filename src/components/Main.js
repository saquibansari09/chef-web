import React, { useState } from "react";

import img from "../images/slide4_image 1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const slide_imgs = [
  "/imgs/slide_1.png",
  "/imgs/slide_1.png",
  "/imgs/slide_1.png",
];
const Main = () => {
  const [swiper1, setswiper1] = useState(null);

  return (
    <div className="bg-black">
      <div>
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
            <SwiperSlide className="relative z-40 h-[500px] w-full" key={i}>
              <div className="flex-1 flex flex-col items-center justify-center">
                <img
                  src={img}
                  alt="First"
                  className=" h-[100vh] w-full object-cover"
                />

                <div className="absolute bottom-14">
                  <button className="sm:px-20 p-8 py-4 font-bold border-[4px] text-2xl text-white">
                    Meet Chef Matt
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Main;
