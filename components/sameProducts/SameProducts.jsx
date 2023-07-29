import React, { useState } from 'react'
import style from './SameProducts.module.css'
import ProductImag from './../../assets/images/product-1.png';
import ProductImag01 from './../../assets/images/product-2.png';
import ProductImag02 from './../../assets/images/product-3.png';
import ProductImag03 from './../../assets/images/product-4.png';
import ProductImag08 from './../../assets/images/product-5.png'

import Rate from 'rc-rate';
import { FaStar } from 'react-icons/fa';
const product = [
    {
      id: 1,
      name: 'بلوزه قطنيه حريمي',
      image: ProductImag,
      price: 150,
      rating: 0, // تقييم المنتج الافتراضي
      selectedSize: '', // الحجم المحدد للمنتج الافتراضي
    },
    {
      id: 2,
      name: 'بلوزه قطنيه حريمي',
      image: ProductImag01,
      price: 150,
      rating: 0,
      selectedSize: '',
    },
    {
      id: 3,
      name: 'بنطال جينز',
      image: ProductImag02,
      price: 150,
      rating: 0,
      selectedSize: '',
    },
    {
      id: 4,
      name: 'بنطال جينز',
      image: ProductImag03,
      price: 150,
      rating: 0,
      selectedSize: '',
    },
    {
      id: 5,
      name: 'بنطال جينز',
      image: ProductImag08,
      price: 150,
      rating: 0,
      selectedSize: '',
    },
  ];
const SameProducts = () => {
    const [productSizes, setProductSizes] = useState({});

    const [productRatings, setProductRatings] = useState({});
  
  const handleRatingChange = (value, productId) => {
    setProductRatings((prevRatings) => ({
      ...prevRatings,
      [productId]: value,
    }));
  };
    const handleSizeChange = (size, productId) => {
      setProductSizes((prevSizes) => ({
        ...prevSizes,
        [productId]: size,
      }));
    };
  return (
       <section className={style.products}>
      <h2 className={style.products_title}>منتجات مشابهة </h2>
      <div className={`${style.products_card} d-flex flex-wrap`}>
        {product.map((product) => (
          <div key={product.id} className={style.product_card}>
            <div className={style.add_div}>
            <img src={product.image} alt={product.name} />
              <button className={style.add_btn}>اضافه الي العربه</button>
            </div>
            <div className="data_flex d-flex justify-content-between">
              <p className={style.price}>ج.م {product.price}</p>
              <div className={style.data}>
                <div className={style.star_rating}>
                  <Rate
                    className={style.star}
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
                <div className={style.sizes}>
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
        ))}
      </div>
      
    </section> 
  )
}

export default SameProducts