import { useState } from "react";
import { useCart } from "../context/CartContext";
import { business } from "../config/business";

export default function Cart({ cartOpen, setCartOpen }) {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    total,
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [orderType, setOrderType] = useState("Pickup");
  const [notes, setNotes] = useState("");

  const sendWhatsApp = () => {
    if (cart.length === 0) return;

    let message = "☕ *CRAFTORA ORDER*\n\n";

    message += `👤 Customer: ${customerName || "Not provided"}\n`;
    message += `📦 Order Type: ${orderType}\n\n`;

    message += "*Items:*\n";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x${item.qty} = ₵${item.price * item.qty}\n`;
    });

    message += `\n💰 *Total: ₵${total}*\n`;

    if (notes) {
      message += `\n📝 Note: ${notes}\n`;
    }

    message += "\n📍 Please confirm my order.";

    const phone = business.phone;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };


  return (
    <div
      className={`fixed top-0 right-0 h-full w-[360px]
      bg-[#111] text-white shadow-2xl z-[200]
      transform transition-transform duration-300
      ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >

      {/* HEADER */}
      <div className="flex justify-between items-center p-5 border-b border-white/10">

        <h2 className="text-lg font-serif text-[#C69C6D]">
          Your Order
        </h2>

        <button
          onClick={() => setCartOpen(false)}
          className="text-white text-xl hover:text-red-400"
        >
          ✕
        </button>

      </div>



      {/* CONTENT */}
      <div className="p-4 overflow-y-auto h-[65%] space-y-4">


        {/* ITEMS */}
        {cart.length === 0 ? (

          <p className="text-gray-400 text-center mt-10">
            Your cart is empty
          </p>

        ) : (

          cart.map((item) => (

            <div
              key={item.name}
              className="bg-[#1c1c1c] p-4 rounded-xl"
            >

              <div className="flex justify-between items-center">

                <p className="font-semibold">
                  {item.name}
                </p>

                <span className="text-[#C69C6D]">
                  ₵{item.price * item.qty}
                </span>

              </div>


              <div className="flex items-center gap-3 mt-3">

                <button
                  onClick={() => decreaseQty(item.name)}
                  className="bg-white/10 px-3 py-1 rounded"
                >
                  -
                </button>


                <span>
                  {item.qty}
                </span>


                <button
                  onClick={() => increaseQty(item.name)}
                  className="bg-white/10 px-3 py-1 rounded"
                >
                  +
                </button>


                <button
                  onClick={() => removeFromCart(item.name)}
                  className="ml-auto text-red-400 text-sm"
                >
                  Remove
                </button>

              </div>

            </div>

          ))

        )}



        {/* CUSTOMER DETAILS */}

        {cart.length > 0 && (

          <div className="space-y-4 pt-4">

            <h3 className="text-[#C69C6D] font-semibold">
              Customer Details
            </h3>


            <input
              type="text"
              placeholder="Your name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full bg-[#1c1c1c] p-3 rounded-lg text-white outline-none"
            />


            <select
              value={orderType}
              onChange={(e) => setOrderType(e.target.value)}
              className="w-full bg-[#1c1c1c] p-3 rounded-lg text-white outline-none"
            >

              <option>
                Pickup
              </option>

              <option>
                Delivery
              </option>

            </select>


            <textarea
              placeholder="Order notes (optional)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-[#1c1c1c] p-3 rounded-lg text-white outline-none h-20"
            />

          </div>

        )}

      </div>



      {/* FOOTER */}

      <div className="absolute bottom-0 w-full p-5 border-t border-white/10 bg-[#111]">


        <div className="flex justify-between font-bold mb-4">

          <span>
            Total
          </span>

          <span className="text-[#C69C6D]">
            ₵{total}
          </span>

        </div>



        <button
          onClick={sendWhatsApp}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition"
        >
          📲 Order via WhatsApp
        </button>



        <button
          onClick={clearCart}
          className="w-full bg-white/10 hover:bg-white/20 py-2 rounded-full mt-3 transition"
        >
          Clear Cart
        </button>


      </div>


    </div>
  );
}