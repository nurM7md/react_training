import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import signimg from "./../assets/images/login.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./loginstyle/login.css";
import {ImLinkedin} from 'react-icons/im'
import { BsPinterest } from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";


const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("useryoutube");
    console.log(getuserArr);

    const { email, password } = inpval;
    if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");

          localStorage.setItem("user_login", JSON.stringify(userlogin));

          history("/Home");
        }
      }
    }
  };

  return (
    <>
      <section className="login">
        <div className="container mt-3">
          <section className="d-flex justify-content-between">
            <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
              <h2>Smart Shop</h2>
              <h3>انشاء حساب</h3>
              <p>انشئ حساب مجانى و استمتع به</p>
              <Form>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={getdata}
                    placeholder="Enter email"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={getdata}
                    placeholder="Password"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className="col-lg-6 submit"
                  onClick={addData}
                 
                  type="submit"
                >
                  تسجيل الدخول
                </Button>
              </Form>
              <p className="mt-3">
                 : او سجل الدخول عبر 
              </p>
              <div >
                <ImLinkedin className="ic" style={{color: "blue"}}  />
                <BsPinterest className="ic" style={{color: "red"}} />
                <BsFacebook className="ic" style={{color: "blue"}} />
                <AiFillTwitterCircle className="ic" style={{color: "blue"}} />
              </div>
            </div>
            <div className="secright">
              <img src={signimg} alt="signimg" className="col-lg-6" />
            </div>
          </section>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default Login;
