import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import Cart from "./components/Cart";
import { useCart } from "./context/CartContext";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <div className="w-full min-h-screen bg-[#0b0b0b] text-white overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar setCartOpen={setCartOpen} />

      {/* HOME TARGET */}
      <section id="top" className="w-full">
        <Hero setCartOpen={setCartOpen} />
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="w-full">
        <Menu />
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="w-full">
        <Features />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="w-full">
        <Contact />
      </section>

      {/* FOOTER */}
      <Footer />

      {/* CART BUTTON */}
      <button
  onClick={() => {
    console.log("Cart clicked");
    setCartOpen(true);
  }}
  className="fixed top-24 right-6 bg-[#C69C6D] text-black px-5 py-3 rounded-full shadow-lg z-[110]"
>
  🛒 {itemCount}
</button>

      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />

    </div>
  );
}