import React, { Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import logo from "./../../assets/images/Vector.png";
import "./../shared/navbar.css";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import ShoppingCart from "./../home/basecomponent/ShoppingCart";
import "./../home/basecomponent/styles/shoppingCart.css";
import Signoptions from "../home/basecomponent/signoptions";
import { useSelector } from "react-redux";

function NavBar() {
  const [modal, setmodal] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [cartsVisibilty, setCartVisible] = useState(false);
  const [signVisibilty, setSignVisible] = useState(false);
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );

  return (
    <Fragment>
      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        <ModalHeader className="modalheader" toggle={() => setmodal(!modal)}>
          Search Bar
        </ModalHeader>
        <ModalBody className="modalbody">
          <form className="searchbar">
            <div>
              <label>عن ماذا تبحث؟</label>
            </div>
            <div>
              <BsSearch id="searchicon" />
              <input
                type="text"
                name="search"
                placeholder="...اكتب كلمة البحث"
              ></input>
            </div>
          </form>
        </ModalBody>
      </Modal>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <div className="icons">
              <div className="App">
                <div className="navbar">
                  <button className="btn shopping-cart-btn">
                    <FiShoppingCart size={24} />

                    <span className="product-count">
                      {totalQuantity}
                    </span>
                  </button>
                </div>
              </div>

              <div id="i2">
                <AiOutlineHeart />
              </div>
              <div id="i3">
                <Signoptions
                  visibilty={signVisibilty}
                  onClose={() => setSignVisible(false)}
                />
                <div>
                  <BsPerson onClick={() => setSignVisible(true)} />
                </div>
              </div>
              <div id="i4" onClick={() => setmodal(true)}>
                <BsSearch />
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" id="menu">
              <Nav.Link href="#" className="links">
                اتصل بنا
              </Nav.Link>
              <Nav.Link href="#" className="links">
                المدونة
              </Nav.Link>
              <Nav.Link href="#" className="links">
                الشروط و الاحكام
              </Nav.Link>
              <Nav.Link href="/basket" className="links">
                السلة
              </Nav.Link>
              <Nav.Link href="#" className="links">
                الخدمات
              </Nav.Link>
              <Nav.Link href="/Elmontagat" className="links">
                المنتجات
              </Nav.Link>
              <Nav.Link href="/" className="links">
                الرئيسية
              </Nav.Link>

              <img src={logo} title="logo" alt="something wrong" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
}
export default NavBar;
