import React from "react";

export const CartItem = ({ item, setCart, cartArr }) => {
  const handleIncrement = () => {
    const itemIndex = cartArr.indexOf(item);

    setCart((pre) => {
      pre[itemIndex].amount = pre[itemIndex].amount + 1;
      return [...pre];
    });
  };
  const handleDecrement = () => {
    const itemIndex = cartArr.indexOf(item);

    setCart((pre) => {
      pre[itemIndex].amount = pre[itemIndex].amount - 1;
      return [...pre];
    });
    if (item.amount === 0) {
      setCart((pre) => {
        pre[itemIndex].amount = 1;
        return [...pre];
      });
      handleRemove();

    }
  };
  const handleRemove = () => {
    const arr = cartArr.filter((i) => i.id !== item.id);
    setCart([...arr]);
  };
  return (
    <div>
      <div key={item.id} className="cart-item">
        <img src={item.src} alt="ggb" className="cart-img" />
        <span>{item.name} </span>
        <span>
          <button onClick={handleIncrement}>+</button>
          {item.amount}
          <button onClick={handleDecrement}>-</button>
        </span>
        <button onClick={handleRemove}>remove</button>
        <span>{item.price}</span>
      </div>
    </div>
  );
};
