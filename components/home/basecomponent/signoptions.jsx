import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./styles/signoptions.css";
import { Link } from "react-router-dom";

const Signoptions = ({ visibilty, onClose }) => {
  return (
    <div
      className="modal2"
      style={{
        display: visibilty ? "block" : "none",
      }}
    >
      <div className="btnsoptions">
      <div >
        <button className="btn close-btn" onClick={onClose}>
          <AiFillCloseCircle size={20} />
        </button>
      </div>
      <div className="btns">
        <div>
       <Link to={"/Sign"}> <button >تسجيل جديد </button></Link>
        </div>
        <div>
        <Link to={"/Login"}> <button >تسجيل الدخول </button></Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Signoptions;
