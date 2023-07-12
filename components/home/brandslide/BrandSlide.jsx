import React from "react";
import brand1 from "./../../../assets/images/tablogo1.png";
import brand2 from "./../../../assets/images/brandlogo2.png";
import brand3 from "./../../../assets/images/brandlogo4 (1).png";
import brand4 from "./../../../assets/images/brandlogo4.png";
import brand5 from "./../../../assets/images/brandlogo5 (1).png";
import brand6 from "./../../../assets/images/brandlogo5.png";
import brand7 from "./../../../assets/images/brandlogo6.png";
import img1 from "./../../../assets/images/man.png";
import img2 from "./../../../assets/images/woman-with-phone 1 (1).png";
import img3 from "./../../../assets/images/woman-with-phone 1.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles/brandslide.css";

// import required modules
import { Navigation } from "swiper/modules";

const BrandSlide = () => {
  return (
    <>
      <div className="brands">
        <h1>البراندات</h1>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper3">
        <SwiperSlide>
          <img src={brand6} alt="brand6" />
          <img src={brand1} alt="brand1" />
          <img src={brand3} alt="brand3" />
          <img src={brand7} alt="brand7" />
          <img src={brand2} alt="brand2" />
          <img src={brand5} alt="brand5" />
          <img src={brand4} alt="brand4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand6} alt="brand6" />
          <img src={brand1} alt="brand1" />
          <img src={brand3} alt="brand3" />
          <img src={brand7} alt="brand7" />
          <img src={brand2} alt="brand2" />
          <img src={brand5} alt="brand5" />
          <img src={brand4} alt="brand4" />
        </SwiperSlide>
      </Swiper>

      <div className="afterfooter">
        <div>
          <img src={img1} alt="img1" />
          <h4>مع اجمل صيحات الموضة و الفاشون</h4>
          <p>اطلالة فريدة مع افضل تشكيلة ملابس شبابى</p>
        </div>
        <div>
          <h4>اشترى اللى يخليك شيك</h4>
          <p>اطلالة فريدة مع افضل تشكيلة ملابس شبابى</p>
          <img src={img3} alt="img1" />
        </div>
        <div>
          <img src={img2} alt="img1" />
          <h4>استمتعى باجواء مبهرة فى الخروجات </h4>
          <p>اطلالة فريدة مع افضل تشكيلة ملابس شبابى</p>
        </div>
      </div>
    </>
  );
};

export default BrandSlide;
