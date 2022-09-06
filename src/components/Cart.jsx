import React, { useState, useEffect } from "react";
import { CartItem } from "./CartItem";

export const Cart = ({ cartArr, setCart }) => {
  const [total, setTotal] = useState(0);
  
  console.log(cartArr);
  const handlePrice = () => {
    let ans = 0;
    cartArr.map((i) => {
     return ans += i.amount * i.price;
    });
    setTotal(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <>
      {cartArr.map((item) => {
        return <CartItem item={item} key={item.id} setCart={setCart} cartArr={cartArr} />;
      })}
      <div>amount = {total}</div>
    </>
  );
};
// {cartArr.map((item) => (
//     <div className="cart_box" key={item.id}>
//       <div className="cart_img">
//         <img src={item.src} alt="jghf" />
//         <p>{item.name}</p>
//       </div>
//       {/* <div>
//         <button onClick={() => handleChange(item, 1)}>+</button>
//         <button>{item.amount}</button>
//         <button onClick={() => handleChange(item, -1)}>-</button>
//       </div>
//       <div>
//         <span>{item.price}</span>
//         <button onClick={() => handleRemove(item.id)}>Remove</button>
//       </div> */}
//     </div>
//   ))}
