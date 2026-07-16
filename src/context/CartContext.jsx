import { createContext, useState } from "react";
import { business } from "../config/business";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);


  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);

      if (existing) {
        return prev.map((i) =>
          i.name === item.name
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };


  const increaseQty = (name) => {
    setCart((prev) =>
      prev.map((i) =>
        i.name === name
          ? { ...i, qty: i.qty + 1 }
          : i
      )
    );
  };


  const decreaseQty = (name) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.name === name
            ? { ...i, qty: i.qty - 1 }
            : i
        )
        .filter((i) => i.qty > 0)
    );
  };


  const removeFromCart = (name) => {
    setCart((prev) =>
      prev.filter((i) => i.name !== name)
    );
  };


  const clearCart = () => {
    setCart([]);
  };


  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );


  const itemCount = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );


  // WhatsApp order message generator
  const formatOrderMessage = () => {

    if (cart.length === 0) {
      return "Cart is empty";
    }


    let message = `☕ *${business.name.toUpperCase()} ORDER*\n\n`;


    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x${item.qty} = ₵${item.price * item.qty}\n`;
    });


    message += `\n💰 *Total: ₵${total}*\n\n`;
    message += "📍 Please confirm my order.";


    return message;
  };


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        total,
        itemCount,
        formatOrderMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}