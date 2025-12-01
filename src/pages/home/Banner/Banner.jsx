import React from "react";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Logo from "../../../Components/Logo/Logo";
const Banner = () => {
  return (
    <div className="relative w-full">
      {/* Carousel Background */}
      <div className="relative">
        <Carousel
          autoPlay={true}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          <div>
            <img
              src={bannerImg1}
              alt="Banner 1"
              className="w-full h-[500px] lg:h-[600px] object-cover"
            />
          </div>
          <div>
            <img
              src={bannerImg2}
              alt="Banner 2"
              className="w-full h-[500px] lg:h-[600px] object-cover"
            />
          </div>
          <div>
            <img
              src={bannerImg3}
              alt="Banner 3"
              className="w-full h-[500px] lg:h-[600px] object-cover"
            />
          </div>
        </Carousel>

        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="h-full flex items-end pl-6 lg:pl-8 pb-8 lg:pb-12">
            <div className="pointer-events-auto">
              {/* Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <button className="bg-[#c8ff00] text-[#004d4d] px-8 py-3.5 rounded-full font-semibold hover:bg-[#b3e600] transition-colors flex items-center gap-2 shadow-lg">
                  Track Your Parcel
                  <span className="bg-[#004d4d] text-white rounded-full w-7 h-7 flex items-center justify-center text-lg">
                    →
                  </span>
                </button>
                <button className="bg-white text-[#004d4d] px-8 py-3.5 rounded-full font-semibold border-2 border-gray-300 hover:border-[#004d4d] transition-colors shadow-md">
                  Be A Rider
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
