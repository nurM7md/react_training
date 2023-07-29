import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/SingleProduct.css';
import Products from './../assets/fake_data/Products';
import { Container } from 'react-bootstrap'
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { FaStar } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import detlis_imag01 from './../assets/images/product-1.png'
import detlis_imag02 from './../assets/images/product-2.png'
import detlis_imag03 from './../assets/images/product-3.png'
import detlis_imag04 from './../assets/images/product-4.png'
import detlis_imag05 from './../assets/images/product-5.png'


import socialImageF from './../assets/images/brandlogo4 (1).png'
import socialImageT from './../assets/images/brandlogo4.png'
import socialImageW from './../assets/images/boys.png'
import socialImageY from './../assets/images/product-1.png'
import SameProducts from '../components/sameProducts/SameProducts';
import Footer from './../components/shared/footer/footer';
import NavBar from '../components/shared/navbar';
import Header from '../components/ELmontagat/Header/Header';
import Lastcomp from '../components/ELmontagat/lastcomp/Lastcomp';

const SingleProduct = () => {
  const [productRatings, setProductRatings] = useState({})

  const handleRatingChange = (value, productId) => {
    setProductRatings((prevRatings) => ({
      ...prevRatings,
      [productId]: value,
    }));
  };

  const { id } = useParams();
  const product = Products.find((p) => p.id === parseInt(id, 10))
  console.log(id);
  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
    <Container>
      <NavBar />
      <div className='head'>
      <Header />
      </div>
      {/* end hero section */}
      <div className="pro_details d-flex justify-content-between gap-3">
        <div className="details_left">
          <h3>{product.name}</h3>
          <span className='price'>{product.price}</span>
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
          <p className='p_single'>مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق</p>

          <div className="colors d-flex gap-2">
            <span>
              <img src={detlis_imag01} alt="image" />
            </span>
            <span>
              <img src={detlis_imag02} alt="image" />
            </span>
            <span>
              <img src={detlis_imag03} alt="image" />
            </span>
            <span>
              <img src={detlis_imag04} alt="image" />
            </span>
          </div>

          <div className="weight d-flex gap-2">
            <span>
              2 كيلو
            </span>
            <span>
              3 كيلو
            </span>
            <span>
              3 كيلو
            </span>
          </div>
          <div className="options_details d-flex gap-4">
            <button>اضف للسله</button>
            <span className='g_span d-flex gap-3'>
              <span className='neg'>-</span>
              <span className='num'>1</span>
              <span className='plus'>+</span>
            </span>
          </div>

          <div className="fav d-flex gap-2 justify-content-end">
            <span>اضف للمفضله</span>
            <span><AiOutlineHeart /></span>
          </div>
          <button className='bay_btn'>اشتري الان </button>
          <div className='social'>
            <p>شارك عبر مواقع التواصل الاجتماعي </p>
            <div className="social_icon">
              <img src={socialImageW} alt="social_image" />
              <img src={socialImageF} alt="social_image" />
              <img src={socialImageY} alt="social_image" />
              <img src={socialImageT} alt="social_image" />
            </div>
          </div>
        </div>
        <div className="details_right">
          <img src={product.image} alt="image" className='g_img' />
          <div className="image_details d-flex gap-2">
            <img src={detlis_imag01} alt="image" />
            <img src={detlis_imag02} alt="image" />
            <img src={detlis_imag03} alt="image" />
            <img src={detlis_imag04} alt="image" />
          </div>
        </div>

      </div>
      <section className='description'>
        <ul className='d-flex justify-content-center gap-5'>
          <li>
            <a href="">  تقييمات المنتج</a>
          </li>
          <li>
            <a href="">  معلومات اضافية</a>
          </li>
          <li>
            <a href="">  الوصف </a>
          </li>
        </ul>
        <div className="des_product d-flex justify-content-between gap-3">

          <div className='des_left'>
            <h3 className='add'>اضف تقييم</h3>
            <div className='d-flex gap-4 justify-content-end'>
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
            <span className='voice'>
              تقيمك
            </span>
            </div>
            <form action="">
              <input  type="text" placeholder='عنوان التقييم' />
              <br />
              <textarea type="text" placeholder='اكتب تقييمك هنا' />
              <br />
              <input type="email" placeholder='بريدك الالكتروني' />
              <input type="text" placeholder='اسمك' />
              <br />
                    <button>أضف الآن</button>
            </form>

          </div>
          <div className='des_right '>
            <span>تعليقات</span>
            <div className='g_comment d-flex gap-4 align-items-center mb-5'>

              <div>
                <h3>منتج رائع. التعبئة والتغليف كانت جيدة أيضا!</h3>
                <p>مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق</p>
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
                <div className='d-flex gap-4 justify-content-end mt-3'>
                  <span className='date'> 9 اغسطس, 2022 </span>
                  <span className='name'>
                    احمد بلال
                  </span>

                </div>
              </div>
              <img src={detlis_imag05} alt="image" />
            </div>
            <div className='g_comment d-flex gap-4 align-items-center mb-5'>

              <div>
                <h3>منتج رائع. التعبئة والتغليف كانت جيدة أيضا!</h3>
                <p>مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق</p>
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
                <div className='d-flex gap-4 justify-content-end mt-3'>
                  <span className='date'> 9 اغسطس, 2022 </span>
                  <span className='name'>
                    احمد بلال
                  </span>

                </div>
              </div>
              <img src={detlis_imag05} alt="image" />
            </div>
            <div className='g_comment d-flex gap-4 align-items-center mb-5'>

              <div>
                <h3>منتج رائع. التعبئة والتغليف كانت جيدة أيضا!</h3>
                <p>مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق</p>
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
                <div className='d-flex gap-4 justify-content-end mt-3'>
                  <span className='date'> 9 اغسطس, 2022 </span>
                  <span className='name'>
                    احمد بلال
                  </span>

                </div>
              </div>
              <img src={detlis_imag05} alt="image" />
            </div>
          </div>
        </div>
      </section>
       <Lastcomp />
    </Container>
    <section className='mt-5'>
    <Footer/>
    </section>

    </>
  );
};

export default SingleProduct;

