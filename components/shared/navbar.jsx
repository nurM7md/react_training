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

function NavBar() {
  const [modal, setmodal] = useState(false);


  const [cartsVisibilty, setCartVisible] = useState(false);
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
    
  
    const onQuantityChange = (productId, count) => {
      setProducts((oldState) => {
        const productsIndex = oldState.findIndex((item) => item.id === productId);
        if (productsIndex !== -1) {
          oldState[productsIndex].count = count;
        }
        return [...oldState];
      });
    };
  
    const onProductRemove = (product) => {
      setProducts((oldState) => {
        const productsIndex = oldState.findIndex(
          (item) => item.id === product.id
        );
        if (productsIndex !== -1) {
          oldState.splice(productsIndex, 1);
        }
        return [...oldState];
      });
    };

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
                <ShoppingCart
                  visibilty={cartsVisibilty}
                  products={productsInCart}
                  onClose={() => setCartVisible(false)}
                  onQuantityChange={onQuantityChange}
                  onProductRemove={onProductRemove}
                />
                <div className="navbar">
                  <button
                    className="btn shopping-cart-btn"
                    onClick={() => setCartVisible(true)}
                  >
                    <FiShoppingCart size={24} />
                    {productsInCart.length > 0 && (
                      <span className="product-count">
                        {productsInCart.length}
                      </span>
                    )}
                  </button>
                </div>
              </div>

              <div id="i2">
                <AiOutlineHeart />
              </div>
              <div id="i3">
                <BsPerson />
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
              <Nav.Link href="#" className="links">
                نبذة عنا
              </Nav.Link>
              <Nav.Link href="#" className="links">
                الخدمات
              </Nav.Link>
              <Nav.Link href="#" className="links">
                المنتجات
              </Nav.Link>
              <Nav.Link href="#" className="links">
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
