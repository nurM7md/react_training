import React from "react";
import { Link } from "react-router-dom";
import "./style/staticsec2.css";
import boysimg from './../../../assets/images/boys.png'
import girlsimg from './../../../assets/images/girls.png'

const Staticsec2 = () => {
  return (
    <div>
      <div className="cards">
        <div className="card1">
          <div className="title">
          <h4>خصم كبير</h4>
          <h2>فساتين بناتى</h2>
          <h5 className="link">تسوق الان</h5>
            </div>
          <div>
            <img src={girlsimg} alt="boysimg"/>
          </div>
        </div>
        <div className="card2">
          <div className="title2">
          <h2>ملابس اطفال</h2>
          <h5>خصم %50</h5>
          <h5 className="link2">تسوق الان</h5>
          </div>
          <div>
            <img src={boysimg} alt="boysimg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staticsec2;
