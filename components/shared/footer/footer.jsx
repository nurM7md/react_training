import React from "react";
import "./styles/footer.css";
import Link from "@mui/joy/Link";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

import { AiFillTwitterCircle } from "react-icons/ai";




const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
      <Link className="link">اتصل بنا </Link>
      <Link className="link">الشروط و الاحكام </Link>
      <Link className="link">نبذة عنا </Link>
      <Link className="link">السلة </Link>
      <Link className="link">المنتجات </Link>
      <Link className="link">الرئيسية </Link>
      </div>
      <div className="icons">
      <div >
        <FaWhatsappSquare className="whats" />
      </div>
      <div>
        <BsYoutube className="youtube" />
      </div>
      <div>
        <BsFacebook className="face" />
      </div>
      <div>
        <AiFillTwitterCircle className="twitter" />
      </div>

      

      </div>
      <h2>ابق على تواصل</h2>
      <h4>جميع حقوق النشر محفوظة لشركة سمارت كود</h4>
    </div>

  );
};

export default Footer;
