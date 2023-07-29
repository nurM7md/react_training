import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import "./styles/lastcomp.css";

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
];

const Lastcomp = () => {
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
      <div className="basesec">
        <h1>منتجات مشابهه</h1>
      </div>
      <main3 className="main3">
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
                <h4 className="product-name">{product.name}</h4>
              </div>
              <div className="sizesbtns">
                <button onClick={() => addProductToCart(product)}>XL</button>
                <button onClick={() => addProductToCart(product)}>L</button>
                <button onClick={() => addProductToCart(product)}>M</button>
                <button onClick={() => addProductToCart(product)}>S</button>
                <button onClick={() => addProductToCart(product)}>XS</button>
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
      </main3>
    </>
  );
};

export default Lastcomp;
