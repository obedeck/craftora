
import { useState } from "react";
import { useCart } from "../context/useCart";
import { business } from "../config/business";

const deliverySlots = [
  "Midday Delivery (11 AM - 2 PM)",
  "Afternoon Delivery (2 PM - 5 PM)",
];

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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [orderType, setOrderType] = useState("Order Now");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliverySlot, setDeliverySlot] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  const today = new Date();
  const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const sendWhatsApp = () => {
    if (cart.length === 0) return;

    if (!customerName.trim() || !phoneNumber.trim() || !location.trim()) {
      alert("Please enter your name, phone number and delivery location.");
      return;
    }

    if (
      orderType === "Pre-order" &&
      (!deliveryDate || !deliverySlot)
    ) {
      alert("Please select your preferred delivery date and time window.");
      return;
    }

    const messageLines = [
      "☕ *ONYX BREW ORDER*",
      "",
      `👤 Customer: ${customerName.trim()}`,
      `📞 Phone: ${phoneNumber.trim()}`,
      `📦 Order Type: ${orderType}`,
    ];

    if (orderType === "Pre-order") {
      messageLines.push(
        `📅 Preferred Delivery Date: ${deliveryDate}`,
        `⏰ Preferred Delivery Window: ${deliverySlot}`
      );
    } else {
      messageLines.push(
        "⚡ Delivery: Earliest available time, subject to confirmation"
      );
    }

    messageLines.push(
      `📍 Delivery Location: ${location.trim()}`,
      "",
      "*Items:*"
    );

    cart.forEach((item, index) => {
      messageLines.push(
        `${index + 1}. ${item.name} x${item.qty} = ₵${(
          item.price * item.qty
        ).toFixed(2)}`
      );
    });

    messageLines.push(
      "",
      `💰 *Total: ₵${Number(total).toFixed(2)}*`
    );

    if (notes.trim()) {
      messageLines.push("", `📝 Notes: ${notes.trim()}`);
    }

    messageLines.push(
      "",
      "Please confirm my order and the delivery time. Thank you!"
    );

    const message = messageLines.join("\n");
    const url = `https://wa.me/${
      business.whatsapp
    }?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-[380px]
      bg-[#111] text-white shadow-2xl z-[200]
      transform transition-transform duration-300
      ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* HEADER */}
      <div className="flex justify-between items-center p-5 border-b border-white/10">
        <h2 className="text-lg font-serif text-[#C69C6D]">
          Your Order
        </h2>

        <button
          type="button"
          onClick={() => setCartOpen(false)}
          className="text-xl hover:text-[#C69C6D]"
          aria-label="Close cart"
        >
          ✕
        </button>
      </div>

      {/* CART CONTENT */}
      <div className="p-4 overflow-y-auto h-[calc(100%-190px)] space-y-4">
        {cart.length === 0 ? (
          <p className="text-gray-400 text-center mt-10">
            Your cart is empty
          </p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.name}
                className="bg-[#1c1c1c] p-4 rounded-xl"
              >
                <div className="flex justify-between gap-3">
                  <p className="text-sm">{item.name}</p>

                  <span className="text-[#C69C6D] whitespace-nowrap">
                    ₵{(item.price * item.qty).toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <button
                    type="button"
                    onClick={() => decreaseQty(item.name)}
                    className="bg-white/10 px-3 py-1 rounded"
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    type="button"
                    onClick={() => increaseQty(item.name)}
                    className="bg-white/10 px-3 py-1 rounded"
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.name)}
                    className="ml-auto text-red-400 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* CUSTOMER DETAILS */}
            <div className="space-y-4 pt-4">
              <h3 className="text-[#C69C6D] font-semibold">
                Customer Details
              </h3>

              <input
                type="text"
                placeholder="Your name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-[#1c1c1c] p-3 rounded-lg outline-none focus:ring-1 focus:ring-[#C69C6D]"
              />

              <input
                type="tel"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full bg-[#1c1c1c] p-3 rounded-lg outline-none focus:ring-1 focus:ring-[#C69C6D]"
              />

              <label className="block text-sm text-gray-300">
                How would you like your order?
              </label>

              <select
                value={orderType}
                onChange={(e) => {
                  setOrderType(e.target.value);
                  setDeliverySlot("");
                  setDeliveryDate("");
                }}
                className="w-full bg-[#1c1c1c] p-3 rounded-lg"
              >
                <option value="Order Now">
                  Earliest Available Delivery
                </option>
                <option value="Pre-order">Schedule a Pre-order</option>
              </select>

              {orderType === "Pre-order" && (
                <>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">
                      Preferred delivery date
                    </label>

                    <input
                      type="date"
                      min={localToday}
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      className="w-full bg-[#1c1c1c] p-3 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2">
                      Preferred delivery window
                    </label>

                    <select
                      value={deliverySlot}
                      onChange={(e) => setDeliverySlot(e.target.value)}
                      className="w-full bg-[#1c1c1c] p-3 rounded-lg"
                    >
                      <option value="">Choose a delivery window</option>

                      {deliverySlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              <input
                type="text"
                placeholder="Delivery location / address"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-[#1c1c1c] p-3 rounded-lg outline-none focus:ring-1 focus:ring-[#C69C6D]"
              />

              <textarea
                placeholder="Order notes (optional)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#1c1c1c] p-3 rounded-lg h-20 outline-none focus:ring-1 focus:ring-[#C69C6D]"
              />

              <div className="bg-[#1c1c1c] p-4 rounded-lg text-sm text-gray-400 leading-relaxed">
                ☕ Orders are accepted throughout working hours. Choose a
                delivery window for pre-orders, or request the earliest
                available delivery. All delivery times are subject to
                confirmation via WhatsApp.
              </div>
            </div>
          </>
        )}
      </div>

      {/* CHECKOUT FOOTER */}
      <div className="absolute bottom-0 w-full p-5 border-t border-white/10 bg-[#111]">
        <div className="flex justify-between mb-4 font-bold">
          <span>Total</span>

          <span className="text-[#C69C6D]">
            ₵{Number(total).toFixed(2)}
          </span>
        </div>

        <button
          type="button"
          onClick={sendWhatsApp}
          disabled={cart.length === 0}
          className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-40 disabled:cursor-not-allowed py-3 rounded-full font-semibold text-black transition"
        >
          📲 Send Order via WhatsApp
        </button>

        <button
          type="button"
          onClick={clearCart}
          disabled={cart.length === 0}
          className="w-full bg-white/10 hover:bg-white/20 disabled:opacity-40 py-2 rounded-full mt-3"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
