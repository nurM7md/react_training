import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
//import { FaStar } from 'react-icons/fa';
import './Products.css';
import ProductImag from './../../assets/images/boys.png';
import ProductImag01 from './../../assets/images/boys.png';
import ProductImag02 from './../../assets/images/boys.png';
import ProductImag03 from './../../assets/images/boys.png';
import ProductImag05 from './../../assets/images/boys.png';
import ProductImag06 from './../../assets/images/boys.png';
import ProductImag07 from './../../assets/images/boys.png';
import ProductImag08 from './../../assets/images/boys.png';
import { Link } from 'react-router-dom';


const products = [
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
  {
    id: 6,
    name: 'بنطال جينز',
    image: ProductImag05,
    price: 150,
    rating: 0,
    selectedSize: '',
  },
  {
    id: 7,
    name: 'بنطال جينز',
    image: ProductImag06,
    price: 150,
    rating: 0,
    selectedSize: '',
  },
  {
    id: 8,
    name: 'بنطال جينز',
    image: ProductImag07,
    price: 150,
    rating: 0,
    selectedSize: '',
  },
];

const Products = () => {
 
  const [productSizes, setProductSizes] = useState({});

  const handleSizeChange = (size, productId) => {
    setProductSizes((prevSizes) => ({
      ...prevSizes,
      [productId]: size,
    }));
  };

  

  return (
    <Container className="products">
      <h2 className="products_title">احدث المنتجات</h2>
      <div className="products_card d-flex flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className='add_div'>
            <img src={product.image} alt={product.name} />
              <button className='add_btn'>اضافه الي العربه</button>
            </div>
            <div className="data_flex d-flex justify-content-between">
              <p className="price">ج.م {product.price}</p>
              <div className="data">
                <div className="star_rating">
                  
                </div>
                <Link  to={`/products/${product.id}`}><h3>{product.name}</h3></Link>
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
        ))}
      </div>
      
    </Container>
  );
};

export default Products;

