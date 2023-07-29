import React ,{ useState } from "react";
import NavBar from "../../components/shared/navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import signimg from "./../../assets/images/signup.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/sign.css";
//import { BsPerson } from "react-icons/bs";
//import { HiOutlineMail } from "react-icons/hi";
//import { AiOutlineLock } from "react-icons/ai";
import {ImLinkedin} from 'react-icons/im'
import { BsPinterest } from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";


const Sign = () => {

  const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password } = inpval;

        if (name === "") {
            toast.error(' name field is requred!',{
                position: "top-center",
            });
        } else if (email === "") {
             toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('plz enter valid email addres',{
                position: "top-center",
            });
        } else if (password === "") {
             toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('password length greater five',{
                position: "top-center",
            });
        } else {
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        }

    }




  return (
    <>
      
      <section className="signup">
        <div className="container mt-3">
          <section className="d-flex justify-content-between">
            <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
              <h2>Smart Shop</h2>
              <h3>انشاء حساب</h3>
              <p>انشئ حساب مجانى و استمتع به</p>
              <Form className="form">
                <Form.Group className=" col-lg-6" controlId="formBasicEmail">
                  <div className="detail">
                    
                  <Form.Control type="text" name="name" onChange={getdata} placeholder="الاسم" />
                  </div>
                </Form.Group>
                <Form.Group className=" col-lg-6" controlId="formBasicEmail">
                  <div className="detail">
                  
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={getdata}
                    placeholder="البريد الالكترونى"
                  />
                  </div>
                </Form.Group>

                <Form.Group className=" col-lg-6" controlId="formBasicPassword">
                  <div className="detail">
                  
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={getdata}
                    placeholder="كلمة المرور"
                  />
                  </div>
                </Form.Group>
                <Button
                  
                  className="col-lg-6 submit"
                  type="submit"
                  onClick={addData}
                >
                  انشاء حساب
                </Button>
              </Form>
              <p className="">
                Already Have an Account{" "}
                <span>
                  <NavLink to="/login">SignIn</NavLink>
                </span>{" "}
              </p>
              <p className="mt-3">
                 : او سجل الدخول عبر 
              </p>
              <div  >
                <ImLinkedin className="icon" style={{color: "blue" }}  />
                <BsPinterest className="icon" style={{color: "red"}} />
                <BsFacebook className="icon" style={{color: "blue"}} />
                <AiFillTwitterCircle className="icon" style={{color: "blue"}} />
              </div>
            </div>
            <div className="secright">
              <img src={signimg} alt="signimg" className="col-lg-4" />
            </div>
          </section>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};

export default Sign;
