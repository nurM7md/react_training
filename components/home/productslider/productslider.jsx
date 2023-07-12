import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
//import "./../basecomponent/styles/main.css";
import "./styles/productslider.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";

const products = [
  {
    id: 1,
    price: "800 ج.م",
    desc: "800 ج.م",
    category:"men",
    name: "بلوزة قطنية بيضاء",
    image: require("./../../../assets/images/product-3.png"),
  },
  {
    id: 2,
    price: "800 ج.م",
    desc: "800 ج.م",
    category:"women",

    name: "بلوزة قطنية بيضاء",
    image: require("./../../../assets/images/product-4.png"),
  },
  {
    id: 3,
    price: "800 ج.م",
    desc: "800 ج.م",
    category:"child",

    name: "بلوزة قطنية بيضاء",
    image: require("./../../../assets/images/product-6.png"),
  },
];
const girlsproducts = [
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
    image: require("./../../../assets/images/product-5.png"),
  },
];
const childproducts = [
  {
    id: 1,
    price: "800 ج.م",
    desc: "800 ج.م",
    name: "بلوزة قطنية بيضاء",
    image: require("./../../../assets/images/product-5.png"),
  },
  {
    id: 2,
    price: "800 ج.م",
    desc: "800 ج.م",
    name: "بلوزة قطنية بيضاء",
    image: require("./../../../assets/images/boys.png"),
  },
  {
    id: 3,
    price: "800 ج.م",
    desc: "800 ج.م",
    name: "بلوزة قطنية بيضاء",
    image: require("./../../../assets/images/girls.png"),
  },
];

const ProductSlider = () => {
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);
  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([...productsInCart, newProduct]);
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const [items, setItems] = useState(products);
    const filtercategory =(categoryItem)=>{
        const result = products.filter((currentCategory)=>{
            return currentCategory.category == categoryItem;
        });
        setItems(result);
       
    }

  return (
    <>
      <section className="productslide">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper2">
        <SwiperSlide>
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
                    <h4 className="product-name">{product.name}</h4>
                  </div>
                  <div className="sizesbtns">
                    <button onClick={() => addProductToCart(product)}>
                      XL
                    </button>
                    <button onClick={() => addProductToCart(product)}>L</button>
                    <button onClick={() => addProductToCart(product)}>M</button>
                    <button onClick={() => addProductToCart(product)}>S</button>
                    <button onClick={() => addProductToCart(product)}>
                      XS
                    </button>
                  </div>

                  <div className="buttons">
                    <button
                      className="btn"
                      onClick={() => addProductToCart(product)}
                    >
                      أضف الى العربة
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </SwiperSlide>
        <SwiperSlide>
          <main>
            <div className="products">
              {girlsproducts.map((product) => (
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
                    <h4 className="product-name">{product.name}</h4>
                  </div>
                  <div className="sizesbtns">
                    <button onClick={() => addProductToCart(product)}>
                      XL
                    </button>
                    <button onClick={() => addProductToCart(product)}>L</button>
                    <button onClick={() => addProductToCart(product)}>M</button>
                    <button onClick={() => addProductToCart(product)}>S</button>
                    <button onClick={() => addProductToCart(product)}>
                      XS
                    </button>
                  </div>

                  <div className="buttons">
                    <button
                      className="btn"
                      onClick={() => addProductToCart(product)}
                    >
                      أضف الى العربة
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </SwiperSlide>
        <SwiperSlide>
          <main>
            <div className="products">
              {childproducts.map((product) => (
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
                    <h4 className="product-name">{product.name}</h4>
                  </div>
                  <div className="sizesbtns">
                    <button onClick={() => addProductToCart(product)}>
                      XL
                    </button>
                    <button onClick={() => addProductToCart(product)}>L</button>
                    <button onClick={() => addProductToCart(product)}>M</button>
                    <button onClick={() => addProductToCart(product)}>S</button>
                    <button onClick={() => addProductToCart(product)}>
                      XS
                    </button>
                  </div>

                  <div className="buttons">
                    <button
                      className="btn"
                      onClick={() => addProductToCart(product)}
                    >
                      أضف الى العربة
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </SwiperSlide>
      </Swiper>
      <div className="sections">
        <h2>تسوق عبر الفئات</h2>
        <div className="secbtns">
        <div>
        <button onClick={()=> filtercategory('men')}>رجالى</button>
        </div>
        <div>
        <button onClick={()=> filtercategory('women')}>حريمي</button>
        </div>
        <div>
        <button onClick={()=> filtercategory('child')}>اطفال</button>
        </div>
        <div>
        <button>اكسسورات</button>
        </div>
        <div>
        <button>العاب</button>
        </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default ProductSlider;
