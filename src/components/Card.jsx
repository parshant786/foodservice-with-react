import React from "react";

export const Card = ({ item ,handleAddToCart}) => {
  const { src, price, detail, name } = item;
  return (
    <>
      <div className="card">
        <img src={src} alt="img" className="cardImg" />
        <h4> price {price}/-</h4>
        <div className="card-name-detail">
          <p className="name">
            <b>{name}</b>
          </p>
          <p className="detail">{detail}</p>
        </div>
        <button className="card-btn" onClick={()=>{handleAddToCart(item)}}>buy now</button>
      </div>
    </>
  );
};
