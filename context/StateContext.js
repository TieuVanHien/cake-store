import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const onAdd = (product, qty) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * qty);
    setTotalQty((prevTotalQty) => prevTotalQty + qty);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + qty,
          };
        return cartProduct;
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = qty;
      setCartItems([...cartItems, { ...product }]);
    }

    alert(`${qty} ${product.name} added to the cart.`);
  };

  const plusQty = () => {
    setQuantity((prevQty) => prevQty + 1);
  };
  const minusQty = () => {
    setQuantity((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQty,
        quantity,
        setShowCart,
        plusQty,
        minusQty,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
