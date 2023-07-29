import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

import { Container, Row } from "react-bootstrap";
import { BiSolidLeftArrow } from "react-icons/bi";
import im0 from "./../../../assets/images/Frame 9149.png";
import im1 from "./../../../assets/images/product-2.png";
import im2 from "./../../../assets/images/product-3.png";
import im3 from "./../../../assets/images/product-6.png";
//import Basiccompo from "./../../../components/home/basecomponent/basic";
import "./../../home/basecomponent/styles/basic.css";
import './../../home/basecomponent/styles/main.css'
import "./styles/Basic.css";
//import ProductsComponent from "./../../../components/Products/Products";
import { Link } from "react-router-dom";

const product = [
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

  const [productSizes, setProductSizes] = useState({});

  const handleSizeChange = (size, productId) => {
    setProductSizes((prevSizes) => ({
      ...prevSizes,
      [productId]: size,
    }));
  };

  const [priceRange, setPriceRange] = useState(0);

  return (
    <>
      <Container className="products">
        <div className="base">
          <Row className="">
            <div className={"parent col-lg-9"}>
              <div className="head d-flex gap-5">
                <div className="options">
                  <select name="option" id="option">
                    <option value="price">الاقل سعرا</option>
                    <option value="new"> الاحدث في الاسواق</option>
                  </select>
                  <p>ترتيب حسب </p>
                </div>
                <div className="nums">
                  <p>30</p>
                  <p>24</p>
                  <p>18</p>
                  <p>6</p>
                  <p>مشاهده</p>
                </div>
                <div className="im">
                  <span>
                    <img src={im0} alt="img" />
                  </span>
                  <p>عرض</p>
                </div>
              </div>
            </div>
            <div className="parentmain">
              <div className="mt-4 main2">
                <main2>
                  <div className="products">
                    {product.map((product) => (
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
                          <button >
                            XL
                          </button>
                          <button >
                            L
                          </button>
                          <button >
                            M
                          </button>
                          <button >
                            S
                          </button>
                          <button >
                            XS
                          </button>
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
                </main2>
              </div>
              <div className={`col-lg-3 secright`}>
                <div className="sec1">
                  <p>الفئات</p>
                  <span>
                    <BiSolidLeftArrow />
                  </span>
                </div>
                <div className={` optionsright `}>
                  <span>
                    <span>+</span>
                    الاكسسوارات
                  </span>
                  <span>
                    <span>+</span>
                    ملابس
                  </span>
                  <span>
                    <span>+</span>
                    الالكترونيات
                  </span>
                  <span>
                    <span>+</span>
                    الاثاث
                  </span>
                  <span>
                    <span>+</span>
                    الاحذية
                  </span>
                  <span>
                    <span>+</span>
                    المجوهرات
                  </span>
                  <span>
                    <span>+</span>
                    اخري
                  </span>
                </div>
                <div className=" sec2">
                  <div className={`mt-3 mb-2 `}>
                    <span>السعر</span>
                    <span>
                      <BiSolidLeftArrow />
                    </span>
                  </div>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    min="1"
                    max="1000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                  />
                  <div className="ranges">
                    <span>1000$</span>
                    <span>1$</span>
                  </div>
                </div>
                <div className="sec3">
                  <div className={`mt-2 mb-2 `}>
                    <span>المقاس</span>
                    <span>
                      <BiSolidLeftArrow />
                    </span>
                  </div>
                  <div className="sizes">
                    {["S", "M", "L", "XL", "XS"].map((size) => (
                      <button
                        key={size}
                        className={`size ${
                          productSizes[product.id] === size ? "selected" : ""
                        }`}
                        style={{
                          backgroundColor:
                            productSizes[product.id] === size
                              ? "#7FD3DF"
                              : "white",
                          color:
                            productSizes[product.id] === size ? "white" : "",
                        }}
                        onClick={() => handleSizeChange(size, product.id)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <div className={`mt-2 mb-2 colors `}>
                  <span>الالوان</span>
                  <span>
                    <BiSolidLeftArrow />
                  </span>
                </div>
                <div>
                  <ul className="colorstyle">
                    <li class="active" data-color="#ff9800"></li>
                    <li data-color="#e91e63"></li>
                    <li data-color="#2196f3"></li>
                    <li data-color="#f44336"></li>
                    <li data-color="#ffeb3b"></li>
                  </ul>
                </div>
                <div className="mt-2 mb-2">
                  <span>العلامه التجاريه</span>
                  <span>
                    <BiSolidLeftArrow />
                  </span>
                </div>
                <div className={` d-flex flex-column `}>
                  <span>سوني</span>
                  <span>لينوفو</span>
                  <span>جونسون & هاندسون</span>
                  <span>ابل</span>
                  <span>جوجل</span>
                  <span>المجوهرات</span>
                  <span>سامسونح</span>
                </div>
                <div className=" bestprod">
                  <div className="mt-4 mb-2">
                    <span>العناصر المميزه </span>
                    <span>
                      <BiSolidLeftArrow />
                    </span>
                  </div>
                  <div className="d-flex gap-3">
                    <div>
                      <p>فستان ازرق عصري للسيدات</p>
                      <span className="">800 ج.م</span>
                    </div>
                    <img src={im1} alt="im" />
                  </div>
                </div>
                <div className="bestprod">
                  <div className="mt-3 mb-3">
                    <span>العناصر المميزه </span>
                    <span>
                      <BiSolidLeftArrow />
                    </span>
                  </div>
                  <div className="d-flex gap-3">
                    <div>
                      <p>فستان ازرق عصري للسيدات</p>
                      <span className="">800 ج.م</span>
                    </div>
                    <img src={im2} alt="im" />
                  </div>
                </div>
                <div className="bestprod">
                  <div className="mt-3 mb-3">
                    <span>العناصر المميزه </span>
                    <span>
                      <BiSolidLeftArrow />
                    </span>
                  </div>
                  <div className="d-flex gap-3">
                    <div>
                      <p>فستان ازرق عصري للسيدات</p>
                      <span className="">800 ج.م</span>
                    </div>
                    <img src={im3} alt="im" />
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Basic;
