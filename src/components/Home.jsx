import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss";

export const Home = () => {
  return (
    <div className="container">
      <div className="container-right">
        <div className="container-sign-in-up">
          <Link to={"/product"} className="product-btn">
            <button>products</button>
          </Link>
          <Link to={"/signIn"}>
            <button>sign in</button>{" "}
          </Link>
          <Link to={"/signUp"}>
            <button>sign up</button>
          </Link>
        </div>
        <div className="data-container">
          <img src={require("../img/logo.jpeg")} className="logo" alt="logo" />
          <div className="from-container">
            <h1>fresh and healthy food</h1>
            <form>
              <input type="text" placeholder="search your city" />
              <button type="submit">search</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container-img">
        <img src={require("../img/foodImg.jpeg")} className="mainImg" alt="foodimg" />
      </div>
    </div>
  );
};
