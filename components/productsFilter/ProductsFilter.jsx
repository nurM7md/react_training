// import React, { useState } from "react";
// import "./ProductsFilter.css";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { Pagination } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Col, Container, Row } from "react-bootstrap";

// import Rate from "rc-rate";
// import "rc-rate/assets/index.css";
// import { FaStar } from "react-icons/fa";
// import ProductImag from "../../assets/Rectangle 3677.png";
// import ProductImag01 from "../../assets/Rectangle 3677 (1).png";
// import ProductImag02 from "../../assets/Rectangle 3677 (2).png";
// import ProductImag03 from "../../assets/Rectangle 3677 (3).png";
// import ProductImag05 from "../../assets/Rectangle 3677 (5).png";
// import ProductImag06 from "../../assets/Rectangle 3677 (6).png";
// import ProductImag07 from "../../assets/Rectangle 3677 (7).png";
// import ProductImag08 from "../../assets/Rectangle 3677 (8).png";

// const products = [
//   {
//     id: 1,
//     name: "بلوزه قطنيه حريمي",
//     image: ProductImag,
//     price: 150,
//     rating: 0, // تقييم المنتج الافتراضي
//     selectedSize: "", // الحجم المحدد للمنتج الافتراضي
//   },
//   {
//     id: 2,
//     name: "بلوزه قطنيه حريمي",
//     image: ProductImag01,
//     price: 150,
//     rating: 0,
//     selectedSize: "",
//   },
//   {
//     id: 3,
//     name: "بنطال جينز",
//     image: ProductImag02,
//     price: 150,
//     rating: 0,
//     selectedSize: "",
//   },
//   {
//     id: 4,
//     name: "بنطال جينز",
//     image: ProductImag03,
//     price: 150,
//     rating: 0,
//     selectedSize: "",
//   },
//   {
//     id: 5,
//     name: "بنطال جينز",
//     image: ProductImag08,
//     price: 150,
//     rating: 0,
//     selectedSize: "",
//   },
//   {
//     id: 6,
//     name: "بنطال جينز",
//     image: ProductImag05,
//     price: 150,
//     rating: 0,
//     selectedSize: "",
//   },
//   {
//     id: 7,
//     name: "بنطال جينز",
//     image: ProductImag06,
//     price: 150,
//     rating: 0,
//     selectedSize: "",
//   },
//   {
//     id: 8,
//     name: "بنطال جينز",
//     image: ProductImag07,
//     price: 150,
//     rating: 0,
//     selectedSize: "",
//   },
// ];

// const ProductsFilter = () => {
//   const [productRatings, setProductRatings] = useState({});
//   const [productSizes, setProductSizes] = useState({});
//   const handleSizeChange = (size, productId) => {
//     setProductSizes((prevSizes) => ({
//       ...prevSizes,
//       [productId]: size,
//     }));
//   };

//   const handleRatingChange = (value, productId) => {
//     setProductRatings((prevRatings) => ({
//       ...prevRatings,
//       [productId]: value,
//     }));
//   };
//   return (
//     <div>
//       <Container>
//         <Row className="proSwiper_filter">
//           <Col className="col-10">
//             <Swiper
//               pagination={true}
//               navigation={true}
//               modules={[Navigation, Pagination]}
//               className="products_swiper"
//             >
//               <SwiperSlide>
//                 <div className="products_card d-flex flex-wrap justify-content-between">
//                   {products.map((product) => (
//                     <div key={product.id} className="product-card">
//                       <img src={product.image} alt={product.name} />
//                       <div className="data_flex d-flex justify-content-between">
//                         <p className="price">ج.م {product.price}</p>
//                         <div className="data">
//                           <div className="star_rating">
//                             <Rate
//                               className="star"
//                               character={({ index }) => (
//                                 <FaStar
//                                   style={{
//                                     color:
//                                       index < productRatings[product.id]
//                                         ? "gold"
//                                         : "gray",
//                                   }}
//                                 />
//                               )}
//                               count={5}
//                               allowHalf
//                               value={productRatings[product.id]}
//                               onChange={(value) =>
//                                 handleRatingChange(value, product.id)
//                               }
//                             />
//                           </div>
//                           <h3>{product.name}</h3>
//                           <div className="sizes">
//                             {["S", "M", "L", "XL", "XS"].map((size) => (
//                               <button
//                                 key={size}
//                                 className={`size ${
//                                   productSizes[product.id] === size
//                                     ? "selected"
//                                     : ""
//                                 }`}
//                                 style={{
//                                   backgroundColor:
//                                     productSizes[product.id] === size
//                                       ? "#7FD3DF"
//                                       : "white",
//                                   color:
//                                     productSizes[product.id] === size
//                                       ? "white"
//                                       : "",
//                                 }}
//                                 onClick={() =>
//                                   handleSizeChange(size, product.id)
//                                 }
//                               >
//                                 {size}
//                               </button>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>2</SwiperSlide>
//               <SwiperSlide>3</SwiperSlide>
//             </Swiper>
//           </Col>
//           <Col className="list_filter col-2 text-center">
//             <div className="title">
//             <h3>تسوق عبر الفئات</h3>

//             </div>
//             <span>رجالي</span>
//             <hr />
//             <span>حريمي</span>
//             <hr />
//             <span>اطفال</span>
//             <hr />
//             <span>اكسسوارات</span>
//             <hr />
//             <span>العاب</span>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default ProductsFilter;







import React, { useState } from "react";
import "./ProductsFilter.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";




import { Col, Container, Row } from "react-bootstrap";

import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import { FaStar } from "react-icons/fa";
import ProductImag from "./../../assets/images/product-1.png";
import ProductImag01 from "./../../assets/images/product-2.png";
import ProductImag02 from "./../../assets/images/product-3.png";
import ProductImag03 from "./../../assets/images/product-4.png";
import ProductImag05 from "./../../assets/images/product-5.png";
import ProductImag06 from "./../../assets/images/product-1.png";
import ProductImag07 from "./../../assets/images/product-2.png";
import ProductImag08 from "./../../assets/images/product-3.png";

const products = [
  {
    id: 1,
    name: "بلوزه قطنيه حريمي",
    image: ProductImag,
    price: 150,
    rating: 0,
    selectedSize: "",
  },
  {
    id: 2,
    name: "بلوزه قطنيه حريمي",
    image: ProductImag01,
    price: 150,
    rating: 0,
    selectedSize: "",
  },
  {
    id: 3,
    name: "بنطال جينز",
    image: ProductImag02,
    price: 150,
    rating: 0,
    selectedSize: "",
  },
  {
    id: 4,
    name: "بنطال جينز",
    image: ProductImag03,
    price: 150,
    rating: 0,
    selectedSize: "",
  },
  {
    id: 5,
    name: "بنطال جينز",
    image: ProductImag08,
    price: 150,
    rating: 0,
    selectedSize: "",
  },
  {
    id: 6,
    name: "بنطال جينز",
    image: ProductImag05,
    price: 150,
    rating: 0,
    selectedSize: "",
  },
  {
    id: 7,
    name: "بنطال جينز",
    image: ProductImag06,
    price: 150,
    rating: 0,
    selectedSize: "",
  },
  {
    id: 8,
    name: "بنطال جينز",
    image: ProductImag07,
    price: 150,
    rating: 0,
    selectedSize: "",
  },
];

const ProductsFilter = () => {
  const [productRatings, setProductRatings] = useState({});
  const [productSizes, setProductSizes] = useState({});
  const handleSizeChange = (size, productId) => {
    setProductSizes((prevSizes) => ({
      ...prevSizes,
      [productId]: size,
    }));
  };

  const handleRatingChange = (value, productId) => {
    setProductRatings((prevRatings) => ({
      ...prevRatings,
      [productId]: value,
    }));
  };
  return (
    <div className="my-5 py-5">
      <Container>
        <Row className="proSwiper_filter">
          <Col className=" pro_fcol col-10 col-lg-10 col-md-12 col-sm-12  text-center ">
            <Swiper
              slidesPerView={3}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="products_swiper"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
              
                    <div className="product-card_f">
            <img src={product.image} alt={product.name} />
            <div className="data_flex d-flex justify-content-between">
              <p className="price">ج.م {product.price}</p>
              <div className="data">
                <div className="star_rating">
                  <Rate
                    className="star"
                    character={({ index }) => (
                      <FaStar
                        style={{
                          color:
                            index < productRatings[product.id] ? 'gold' : 'gray',
                        }}
                      />
                    )}
                    count={5}
                    allowHalf
                    value={productRatings[product.id]}
                    onChange={(value) => handleRatingChange(value, product.id)}
                  />
                </div>
                <h3>{product.name}</h3>
                <div className="sizes">
                  {['S', 'M', 'L', 'XL', 'XS'].map((size) => (
                    <button
                      key={size}
                      className={`size ${
                        productSizes[product.id] === size ? 'selected' : ''
                      }`}
                      style={{
                        backgroundColor:
                          productSizes[product.id] === size ? '#7FD3DF' : 'white',
                          color: productSizes[product.id] === size ? "white": '',
                      }}
                      onClick={() => handleSizeChange(size, product.id)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
                  
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col className="list_filter col-2 col-md-2 col-sm-12 text-center">
            <div className="title">
              <h3>تسوق عبر الفئات</h3>
            </div>
         <div className="list_mflex">
         <span>رجالي</span>
            <hr />
            <span>حريمي</span>
            <hr />
            <span>اطفال</span>
            <hr />
            <span>اكسسوارات</span>
            <hr />
            <span>العاب</span>
         </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductsFilter;
