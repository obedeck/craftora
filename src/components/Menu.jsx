import { useCart } from "../context/useCart";
import { motion } from "framer-motion";

export default function Menu() {
  const { addToCart } = useCart();

  const items = [
    {
      name: "Onyx Velvet",
      price: 35,
      desc: "Caramel, cocoa, and a touch of cinnamon.",
      image: "/images/onyx-velvet.jpeg",
      available: true,
    },
    {
      name: "Caramel Macchiato",
      price: 35,
      desc: "Rich caramel,Perfect balance of espresso, milk, and foam.",
      image: "/images/caramel-macchiato.jpeg",
      available: true,
    },
    {
      name: "Spanish Latte",
      price: 35,
      desc: "Sweet, Smooth and creamy coffee experience.",
      image: "/images/spanish-latte.jpeg",
      available: true,
    },
    {
      name: "Mocha",
      price: 35,
      desc: "Chocolate-infused coffee delight.",
      image: "/images/onyx-velvet.jpeg",
      available: true,
    },
    {
      name: "Vanilla Latte",
      price: 35,
      desc: "Light, smooth vanilla taste.",
      image: "/images/vanilla-latte.jpeg",
      available: true,
    },
    {
      name: "Dalgona whipped coffee",
      price: 35,
      desc: "Refreshing cold coffee for hot days.",
      image: "/images/dalgona-whipped-coffee.jpg",
      available: false,
    },
  ];


  return (
    <motion.section

      id="menu"

      initial={{
        opacity: 0,
        y: 50,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.8,
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      className="
      py-24
      px-6
      md:px-16
      bg-[#F8F4F0]
      "

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

      <div className="
      max-w-6xl
      mx-auto
      grid
      grid-cols-1
      md:grid-cols-3
      gap-10
      ">


        {items.map((item, index) => (


          <motion.div


            key={index}


            initial={{
              opacity: 0,
              y: 40,
            }}


            whileInView={{
              opacity: 1,
              y: 0,
            }}


            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}


            whileHover={{
              y: -8,
            }}


            viewport={{
              once: true,
            }}


            className={`
              bg-white
              p-6
              rounded-2xl
              border
              border-[#eee]
              transition-all
              duration-300
              hover:border-[#C69C6D]/50
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
              ${!item.available ? "opacity-70" : ""}
            `}


          >



            {/* IMAGE */}

            <div className="relative">


              <motion.img

                src={item.image}

                alt={item.name}


                whileHover={{
                  scale: 1.05,
                }}


                transition={{
                  duration: 0.4,
                }}


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






            {/* DETAILS */}


            <h3 className="text-xl font-bold text-[#3B2A23]">
              {item.name}
            </h3>




            <p className="text-gray-600 mt-3 leading-relaxed">
              {item.desc}
            </p>




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
                py-3
                rounded-full
                font-semibold
                transition-all
                duration-300


                ${
                  item.available

                  ?

                  `
                  bg-[#C69C6D]
                  text-black
                  hover:bg-[#b8895f]
                  hover:-translate-y-1
                  hover:shadow-[0_0_25px_rgba(198,156,109,0.45)]
                  `

                  :

                  `
                  bg-gray-300
                  text-gray-600
                  cursor-not-allowed
                  `
                }

              `}

            >

              {
                item.available
                ? 
                "Add to Cart"
                :
                "Unavailable"
              }


            </button>




          </motion.div>


        ))}


      </div>


    </motion.section>
  );
}