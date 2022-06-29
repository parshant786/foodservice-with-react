import React from "react";
import { Link } from "react-router-dom";

export const ProductNavBar = ({show,setShow,cartItems}) => {
  return (
    <nav className="product-nav">
      <div className="nav_box">
        <div className="my_shop"  onClick={()=>{setShow(false)}}>My Shoping</div>
        <div className="cart">
          {" "}
          <Link to={"/"}>home</Link>
          <span onClick={()=>{setShow(true)}}>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{cartItems}</span>
        </div>
      </div>
    </nav>
  );
};
