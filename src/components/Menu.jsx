import { useCart } from "../context/useCart";
import { motion } from "framer-motion";

export default function Menu() {
  const { addToCart } = useCart();

  const items = [
    {
      name: "Espresso",
      price: 25,
      desc: "Strong and rich shot of pure coffee.",
      image: "/images/espresso.jpg",
      available: false,
    },
    {
      name: "Cappuccino",
      price: 35,
      desc: "Perfect balance of espresso, milk, and foam.",
      image: "/images/cappuccino.jpg",
      available: true,
    },
    {
      name: "Vanilla Latte",
      price: 40,
      desc: "Smooth and creamy coffee experience.",
      image: "/images/latte.jpg",
      available: true,
    },
    {
      name: "Mocha",
      price: 45,
      desc: "Chocolate-infused coffee delight.",
      image: "/images/mocha.jpg",
      available: true,
    },
    {
      name: "Americano",
      price: 30,
      desc: "Smooth espresso diluted for a lighter taste.",
      image: "/images/americano.jpg",
      available: false,
    },
    {
      name: "Iced Coffee",
      price: 38,
      desc: "Refreshing cold coffee for hot days.",
      image: "/images/iced-coffee.jpg",
      available: true,
    },
  ];

  return (
    <section
      id="menu"
      className="py-24 px-6 md:px-16 bg-[#F8F4F0]"
    >

      {/* HEADER */}
      <div className="text-center mb-14 max-w-2xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-serif text-[#3B2A23]">
          Our Signature Menu
        </h2>

        <p className="text-gray-500 mt-4 leading-relaxed">
          Crafted with passion, served with perfection.
        </p>

      </div>


      {/* GRID */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        {items.map((item, index) => (

          <motion.div
            key={index}

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.4,
              delay: index * 0.1
            }}

            whileHover={{ scale: 1.05 }}

            viewport={{ once: true }}

            className={`
              bg-white
              p-6
              rounded-2xl
              shadow-sm
              border
              border-[#eee]
              hover:shadow-xl
              transition
              ${!item.available && "opacity-70"}
            `}
          >

            {/* COFFEE IMAGE */}
            <div className="relative">

              <img
                src={item.image}
                alt={item.name}
                className="
                  w-full
                  h-48
                  object-cover
                  rounded-xl
                  mb-5
                "
              />


              {!item.available && (
                <span
                  className="
                    absolute
                    top-3
                    right-3
                    bg-black/80
                    text-white
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                  "
                >
                  Unavailable
                </span>
              )}

            </div>


            {/* COFFEE NAME */}
            <h3 className="text-xl font-bold text-[#3B2A23]">
              {item.name}
            </h3>


            {/* DESCRIPTION */}
            <p className="text-gray-600 mt-3 leading-relaxed">
              {item.desc}
            </p>


            {/* PRICE */}
            <p className="mt-4 font-semibold text-[#C69C6D] text-lg">
              ₵{item.price}
            </p>


            {/* BUTTON */}
            <button
              disabled={!item.available}
              onClick={() => addToCart(item)}
              className={`
                mt-5
                w-full
                py-2
                rounded-full
                font-semibold
                transition

                ${
                  item.available
                    ? `
                    bg-[#C69C6D]
                    text-black
                    hover:bg-[#b8895f]
                    `
                    : `
                    bg-gray-300
                    text-gray-600
                    cursor-not-allowed
                    `
                }
              `}
            >
              {item.available ? "Add to Cart" : "Unavailable"}
            </button>


          </motion.div>

        ))}

      </motion.div>

    </section>
  );
}