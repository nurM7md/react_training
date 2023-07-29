import React,{useState} from "react";
import "./styles/cart.css";
import { useEffect } from 'react';
import img from './../../../assets/images/product-1.png'


const Cart = ({cart, setCart, handleChange}) => {

    const [price, setPrice] = useState(0);

    const handlePrice = ()=>{
        let ans = 0;
        cart?.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart?.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    })


 

  return (
    <>
      <section className="parent">
        
        <section className="leftside">
          <h2>الكوبون</h2>
          <p>ادخل رمز الكوبون الخاص بك اذا كان لديك واحد</p>
          <div className="btns1">
            <button>تأكيد الكوبون</button>
            <button>رمز الكوبون</button>
          </div>
          <h3>ملحوظة</h3>
          <p>اضافة ملحوظة للبائع</p>
          <textarea
            placeholder="اكتب ملحوظتك هنا..."
            cols={65}
            rows={8}
          ></textarea>
          <h6>المجموع الفرعى</h6>
          <h6>المجموع الاجمالى</h6>
          <p>الشحن و الضرائب محسوبة عند الدفع</p>
          <div className="btns2">
            <button id="btn1">الدفع</button>
            <button id="btn2">تحديث السلة</button>
          </div>
        </section>

        <section className="rightside">
          <h1>سلة التسوق</h1>
          <div className="titles">
            <h2>المجموع</h2>
            <h2>الكمية</h2>
            <h2>السعر</h2>
            <div>
              <h3>المنتج</h3>
            </div>
          </div>
          <article>
            <div className="cart_box">
              <div className="cart_img">
              <div className="btnsnum">
                <button> + </button>
                <button>1</button>
                <button> - </button>
              </div>
              </div>
              <span>price</span>
             
              <div>
                
                <div className="prodimg">
                <p>title</p>
                <img src={img} />
                <button>x</button>
                </div>
                
              </div>
            </div>

            <div className="total">
              <span>Total Price of your Cart</span>
              <span>Rs - 0</span>
            </div>
          </article>
          
        </section>
      </section>
    </>
  );
};

export default Cart;
