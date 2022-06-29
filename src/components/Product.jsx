import React, { useState } from "react";

import productList from "../products/list";
import { Card } from "./Card";
import { Cart } from "./Cart";
import { ProductNavBar } from "./ProductNavBar";

export const Product = () => {
  const [show, setShow] = useState(false);
  const [cartArr, setCart] = useState([]);
  const handleAddToCart = (item) => {
    const index = cartArr.indexOf(item);
    if (index !== -1) return;
    setCart([ ...cartArr, item ]);
  };
  return (
    <div className="productListPage">
      <ProductNavBar show={show} setShow={setShow} cartItems={cartArr.length} />
      {show ? (
        <Cart cartArr={cartArr} setCart={setCart} />
      ) : (
        <div className="listContainer">
          {productList.map((item) => {
            return <Card item={item} key={item.id} handleAddToCart={handleAddToCart} />;
          })}
        </div>
      )}
    </div>
  );
};
