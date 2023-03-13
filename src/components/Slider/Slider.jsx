import React, { useRef, useState } from "react";
import sliderIMG from "./../../assets/images/SliderIMG.png";
import steam from "./../../assets/Social/steam.svg";
import origin from "./../../assets/Social/origin.svg";
import windows from "./../../assets/Social/windows.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src={sliderIMG} alt="" className="SwiperIMG" />
            <div className="swiperContent">
                <div className="swiper-leftContent">
                    <p className="swiperTitle">Hogwarts Legacy</p>
                    <div className="swiperIcons">
                        <img className="swiperIcon" src={steam} alt="" />
                        <img className="swiperIcon" src={origin} alt="" />
                        <img className="swiperIcon" src={windows} alt="" />
                    </div>
                </div>
                <div className="swiper-rightContent">
                    <a href="/" className="swiperDiscount">-50%</a>
                    <a href="/" className="swiperPrice">2799₽</a>
                </div>
                
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={sliderIMG} alt="" className="SwiperIMG" />
            <div className="swiperContent">
                <div className="swiper-leftContent">
                    <p className="swiperTitle">Hogwarts Legacy 2</p>
                    <div className="swiperIcons">
                        <img className="swiperIcon" src={steam} alt="" />
                        <img className="swiperIcon" src={origin} alt="" />
                        <img className="swiperIcon" src={windows} alt="" />
                    </div>
                </div>
                <div className="swiper-rightContent">
                    <a href="/" className="swiperDiscount">-50%</a>
                    <a href="/" className="swiperPrice">2799₽</a>
                </div>
                
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={sliderIMG} alt="" className="SwiperIMG" />
            <div className="swiperContent">
                <div className="swiper-leftContent">
                    <p className="swiperTitle">Hogwarts Legacy 3</p>
                    <div className="swiperIcons">
                        <img className="swiperIcon" src={steam} alt="" />
                        <img className="swiperIcon" src={origin} alt="" />
                        <img className="swiperIcon" src={windows} alt="" />
                    </div>
                </div>
                <div className="swiper-rightContent">
                    <a href="/" className="swiperDiscount">-50%</a>
                    <a href="/" className="swiperPrice">2799₽</a>
                </div>
                
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}