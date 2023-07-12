import React, { Fragment } from "react";
import mainphoto from "./../../../assets/images/main.png";
import secphoto from "./../../../assets/images/man.png";
import thirdphoto from "./../../../assets/images/girl.png";
import "./styles/hero.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <Fragment>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="main">
            <div>
              <img src={mainphoto} title="mainphoto" alt="something wrong" />
            </div>
            <div className="submain">
              <h4>براندات نسائي عالمية</h4>
              <h1>احدث ادوات الجمال</h1>
              <h4>براندات نسلئي عالمية</h4>
              <button>أكتشف الان</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main">
            <div>
              <img src={secphoto} title="secphoto" alt="something wrong" />
            </div>
            <div className="submain">
              <h4>براندات رجالي عالمية</h4>
              <h1>احدث ادوات الجمال</h1>
              <h4>براندات رجالى عالمية</h4>
              <button>أكتشف الان</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="main">
            <div>
              <img src={thirdphoto} title="mainphoto" alt="something wrong" />
            </div>
            <div className="submain">
              <h4>براندات اطفال عالمية</h4>
              <h1>احدث ادوات الجمال</h1>
              <h4>براندات اطفال عالمية</h4>
              <button>أكتشف الان</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Fragment>
  );
};

export default Hero;
