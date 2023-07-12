import React, { Fragment } from "react";
import { SlPresent } from "react-icons/sl";
import "./style/staticsec.css";
import { LuWallet } from "react-icons/lu";
import { GoDeviceMobile } from "react-icons/go";
import carimage from "./../../../assets/images/Group 8955.svg";



const Staticsec = () => {
  return (
    <Fragment>
      <div className="boxes">
      <div className="box1">
        <div>
          <h3>عروض حصرية</h3>
          <p>خصومات كبيرة على منتجاتنا</p>
        </div>
        <div>
          <SlPresent className="icon" />
        </div>
      </div>

      <div className="box1">
        <div>
          <h3>استرجاع الاموال </h3>
          <p>استرجاع امن للاموال و الاستبدال</p>
        </div>
        <div>
          <LuWallet className="icon" />
        </div>
      </div>

      <div className="box1">
        <div>
          <h3>دعم فنى </h3>
          <p>دعم على مدار الساعة</p>
        </div>
        <div>
          <GoDeviceMobile className="icon" />
        </div>
      </div>

      <div className="box1">
        <div>
          <h3>توصيل مجانى</h3>
          <p>للطلبات اعلى من 200 جنيه </p>
        </div>
        <div>
          <img src={carimage} alt="carphoto" className="icon" />
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default Staticsec;
