import React from "react";
import "./styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>تسوق احدث المنتجات العصرية</h1>
        <div className="links">
          <Link to="/Elmontagat" className="Link1">المنتجات</Link>
          <p>/</p>
          <Link to="/" className="Link2">الرئيسية</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
