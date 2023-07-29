import React from "react";
import { useEffect, useState } from "react";
import "./styles/basic.css";
import "./styles/main.css";
import "./styles/shoppingCart.css";
import "./../../shared/navbar";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    price: "800 ج.م",
    desc: "800 ج.م",
    name: "بلوزة قطنية بيضاء",
    image: require("./../../../assets/images/product-1.png"),
  },
  {
    id: 2,
    price: "800 ج.م",
    desc: "800 ج.م",
    name: "بلوزة قطنية بيضاء",
    image: require("./../../../assets/images/product-2.png"),
  },
  {
    id: 3,
    price: "800 ج.م",
    desc: "800 ج.م",
    name: "بلوزة قطنية بيضاء",
    image: require("./../../../assets/images/product-3.png"),
  },
  {
    id: 4,
    price: "800 ج.م",
    desc: "800 ج.م",
    name: "بلوزة قطنية بيضاء",
    image: require("./../../../assets/images/product-4.png"),
  },
  {
    id: 5,
    price: "800 ج.م",
    desc: "800 ج.م",
    name: "بلوزة قطنية بيضاء",
    image: require("./../../../assets/images/product-5.png"),
  },
  {
    id: 6,
    price: "800 ج.م",
    desc: "800 ج.م",
    name: "بلوزة قطنية بيضاء",
    image: require("./../../../assets/images/product-6.png"),
  },
  {
    id: 7,
    price: "800 ج.م",
    desc: "800 ج.م",
    name: "بلوزة قطنية بيضاء",
    image: require("./../../../assets/images/product-7.png"),
  },
  {
    id: 8,
    price: "800 ج.م",
    desc: "800 ج.م",
    name: "بلوزة قطنية بيضاء",
    image: require("./../../../assets/images/product-8.png"),
  },
];

const Basic = () => {
 

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <div className="basesec">
        <h1>أحدث المنتجات</h1>
      </div>

      <main>
        <div className="products">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img
                className="product-image"
                src={product.image}
                alt={product.image}
              />
              <ReactStars
                classNames="rate"
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />

              <div className="descreption">
                <div className="prices">
                  <h6 className="product-price">{product.price}</h6>
                  <h6 className="product-desc">{product.desc}</h6>
                </div>
                <Link to={`/Elmontagat/${product.id}`}>
                            <h4 className="product-name">{product.name}</h4>
                          </Link>
              </div>
              <div className="sizesbtns">
                <button>XL</button>
                <button >L</button>
                <button >M</button>
                <button >S</button>
                <button >XS</button>
              </div>

              <div className="buttons">
                <button
                  className="btn"
                  
                >
                  أضف الى العربة
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};
export default Basic;
