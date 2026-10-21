
import { useState } from "react";
import { useCart } from "../context/useCart";
import { motion } from "framer-motion";

const sizes = [
  { label: "16 oz", type: "Cup", price: 30 },
  { label: "22 oz", type: "Cup", price: 35 },
  { label: "500 ml", type: "Bottle", price: 35 },
];

const items = [
  {
    name: "Onyx Velvet",
    desc: "Caramel, cocoa, and a touch of cinnamon.",
    image: "/images/onyx-velvet.jpeg",
    available: true,
  },
  {
    name: "Caramel Macchiato",
    desc: "Rich caramel with espresso, milk, and foam.",
    image: "/images/caramel-macchiato.jpeg",
    available: true,
  },
  {
    name: "Spanish Latte",
    desc: "A sweet, smooth and creamy coffee experience.",
    image: "/images/spanish-latte.jpeg",
    available: true,
  },
  {
    name: "Mocha",
    desc: "Chocolate-infused coffee delight.",
    image: "/images/onyx-velvet.jpeg",
    available: true,
  },
  {
    name: "Vanilla Latte",
    desc: "A light, smooth vanilla taste.",
    image: "/images/vanilla-latte.jpeg",
    available: true,
  },
  {
    name: "Dalgona Whipped Coffee",
    desc: "Refreshing cold coffee for hot days.",
    image: "/images/dalgona-whipped-coffee.jpg",
    available: false,
  },
];

export default function Menu() {
  const { addToCart } = useCart();

  return (
    <motion.section
      id="menu"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#F8F4F0] px-6 py-24 md:px-16"
    >
      {/* MENU HEADER */}
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#A47B50]">
          The ONYX Collection
        </p>

        <h2 className="font-serif text-3xl text-[#3B2A23] md:text-4xl">
          Our Signature Menu
        </h2>

        <p className="mt-4 leading-relaxed text-gray-500">
          Crafted with passion, served with perfection.
        </p>
      </div>

      {/* DRINK CARDS */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <MenuCard
            key={item.name}
            item={item}
            index={index}
            addToCart={addToCart}
          />
        ))}
      </div>
    </motion.section>
  );
}

function MenuCard({ item, index, addToCart }) {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const unavailable = !item.available;

  function handleAddToCart() {
    addToCart({
      ...item,
      name: `${item.name} (${selectedSize.label} ${selectedSize.type})`,
      price: selectedSize.price,
    });
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={!unavailable ? { y: -5 } : {}}
      viewport={{ once: true }}
      className={`overflow-hidden rounded-2xl border border-[#EAE3DC] bg-white p-5 transition-shadow duration-300 hover:shadow-xl ${
        unavailable ? "opacity-70" : ""
      }`}
    >
      {/* DRINK IMAGE */}
      <div className="relative overflow-hidden rounded-xl">
        <motion.img
          src={item.image}
          alt={item.name}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="h-52 w-full object-cover"
        />

        {unavailable && (
          <span className="absolute right-3 top-3 rounded-full bg-black/80 px-3 py-1.5 text-xs font-semibold text-white">
            Coming Soon
          </span>
        )}
      </div>

      {/* DRINK DETAILS */}
      <div className="pt-5">
        <h3 className="font-serif text-xl font-bold text-[#3B2A23]">
          {item.name}
        </h3>

        <p className="mt-2 min-h-12 text-sm leading-relaxed text-gray-600">
          {item.desc}
        </p>

        {/* SIZE SELECTOR */}
        <div className="mt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
            Choose your size
          </p>

          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => {
              const isSelected = selectedSize.label === size.label;

              return (
                <button
                  key={size.label}
                  type="button"
                  disabled={unavailable}
                  onClick={() => setSelectedSize(size)}
                  aria-pressed={isSelected}
                  className={`rounded-full border px-3 py-2 text-sm transition-colors ${
                    isSelected
                      ? "border-[#C69C6D] bg-[#C69C6D] text-black"
                      : "border-[#E5DED6] bg-white text-[#3B2A23] hover:border-[#C69C6D]"
                  } disabled:cursor-not-allowed`}
                >
                  {size.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* PRICE AND SIZE TYPE */}
        <div className="mt-5 flex items-end justify-between border-t border-[#F0EBE6] pt-4">
          <div>
            <p className="text-xs text-gray-500">
              {selectedSize.type}
            </p>

            <p className="mt-1 text-2xl font-semibold text-[#3B2A23]">
              ₵{selectedSize.price.toFixed(2)}
            </p>
          </div>

          <span className="text-xs text-gray-400">
            {selectedSize.label}
          </span>
        </div>

        {/* ADD TO CART */}
        <button
          type="button"
          disabled={unavailable}
          onClick={handleAddToCart}
          className={`mt-5 w-full rounded-full py-3 font-semibold transition-all duration-300 ${
            unavailable
              ? "cursor-not-allowed bg-gray-300 text-gray-600"
              : "bg-[#C69C6D] text-black hover:-translate-y-0.5 hover:bg-[#B8895F] hover:shadow-lg"
          }`}
        >
          {unavailable
            ? "Currently Unavailable"
            : `Add to Cart · ₵${selectedSize.price}`}
        </button>
      </div>
    </motion.article>
  );
}
