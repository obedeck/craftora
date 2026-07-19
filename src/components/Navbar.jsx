import { useState } from "react";
import MenuDropdown from "./MenuDropdown";
import { business } from "../config/business";

export default function Navbar({ setCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative fixed w-full top-0 left-0 z-50 bg-[#0b0b0b]/80 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 md:px-16 h-20 flex items-center justify-between">


      {/* LOGO */}
<div className="flex items-center">

  <a 
    href="#top"
    className="flex items-center gap-3"
  >

    <img
      src="/images/onyx-icon.png"
      alt="ONYX Brew Co."
      className="w-10 h-10 object-contain"
    />

    <span className="text-white font-serif text-xl tracking-widest">
      {business.name}
    </span>

  </a>

</div>


        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-12 text-[12px] tracking-[0.25em] text-white/80 uppercase">

          <li>
            <a
              href="#top"
              className="hover:text-[#C69C6D] transition"
            >
              Home
            </a>
          </li>


          <li
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer hover:text-[#C69C6D] transition"
          >
            Menu
          </li>


          <li>
            <a
              href="#about"
              className="hover:text-[#C69C6D] transition"
            >
              About
            </a>
          </li>


          <li>
            <a
              href="#contact"
              className="hover:text-[#C69C6D] transition"
            >
              Contact
            </a>
          </li>

        </ul>



        {/* ORDER BUTTON */}
        <div className="flex items-center gap-4">

          <button
            onClick={() => setCartOpen(true)}
            className="
              hidden md:block
              border border-[#C69C6D]
              text-[#C69C6D]
              px-6 py-2
              rounded-full
              text-[11px]
              tracking-widest
              uppercase
              hover:bg-[#C69C6D]
              hover:text-black
              transition
            "
          >
            Order Now
          </button>


          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>

        </div>

      </div>



      {/* MENU DROPDOWN */}
      <MenuDropdown 
        open={menuOpen}
        setOpen={setMenuOpen}
      />

    </nav>
  );
}