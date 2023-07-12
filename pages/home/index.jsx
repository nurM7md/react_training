import React, { Fragment } from "react";

import NavBar from "../../components/shared/navbar";
import Hero from "../../components/home/hero";
import Staticsec from "../../components/home/staticsec/staticsec";
import Staticsec2 from "../../components/home/staticsec/staticsec2";
import Basic from "../../components/home/basecomponent/basic";
import CountdownTimer from "./../../components/home/countdowntimer/CountdownTimer";
import ProductSlider from "../../components/home/productslider/productslider";
import BrandSlide from "../../components/home/brandslide/BrandSlide";
import Footer from "../../components/shared/footer/footer";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Hero />
      <Staticsec />
      <Staticsec2 />
      <Basic />
      <CountdownTimer />
      <ProductSlider />
      <BrandSlide />
      <Footer />

    </Fragment>
  );
};

export default Home;
