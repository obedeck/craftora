import { useCart } from "../context/useCart";
import { motion } from "framer-motion";

export default function BottledMenu() {
  const { addToCart } = useCart();

  const bottledItems = [
    {
      name: "Vanilla Latte",
      price: 45,
      size: "500ml Bottle",
      desc: "Smooth espresso blended with creamy milk and a touch of vanilla sweetness.",
      storage: "Keep refrigerated",
      preOrder: true,
      image: "/images/vanilla-latte.jpeg",
      available: true,
    },

    {
      name: "Ice Mocha",
      price: 50,
      size: "500ml Bottle",
      desc: "A rich blend of espresso, chocolate, and milk served chilled.",
      storage: "Keep refrigerated",
      preOrder: true,
      image: "/images/ice-mocha.jpeg",
      available: true,
    },

    {
      name: "Cinnamon Latte",
      price: 50,
      size: "500ml Bottle",
      desc: "Creamy latte infused with warm cinnamon notes for a unique flavour.",
      storage: "Keep refrigerated",
      preOrder: true,
      image: "/images/cinnamon-latte.png",
      available: true,
    },
  ];


  return (
    <section
      id="bottled"
      className="py-24 px-6 md:px-16 bg-[#0b0b0b] text-white"
    >

      {/* HEADER */}
      <div className="text-center mb-14 max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-serif">
          ONYX Signature Bottled Brews
        </h2>

        <p className="text-gray-400 mt-5 leading-relaxed">
          Slow-crafted coffee, sealed fresh and delivered chilled.
        </p>

        <p className="text-[#C69C6D] mt-3 text-sm tracking-widest uppercase">
          Available in 500ml bottles
        </p>

      </div>



      {/* PRODUCTS */}

      <motion.div
        className="
        max-w-6xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-3
        gap-10
        "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >


        {bottledItems.map((item, index) => (

          <motion.div

            key={index}

            initial={{
              opacity: 0,
              y: 30
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.4,
              delay: index * 0.1
            }}

            viewport={{
              once: true
            }}

            whileHover={{
              y: -8,
            }}

            className="
              bg-[#141414]
              border
              border-white/10
              rounded-3xl
              overflow-hidden
              p-6
              transition-all
              duration-300
              hover:border-[#C69C6D]/40
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]
            "

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
                h-72
                object-cover
                rounded-2xl
                "

              />



              {/* PREORDER BADGE */}

              {item.preOrder && (

                <span
                  className="
                  absolute
                  top-4
                  left-4
                  bg-[#C69C6D]
                  text-black
                  text-xs
                  font-semibold
                  px-4
                  py-2
                  rounded-full
                  "
                >
                  Pre-order for Freshness
                </span>

              )}



              {!item.available && (

                <span
                  className="
                  absolute
                  top-4
                  right-4
                  bg-black/80
                  text-white
                  text-xs
                  px-4
                  py-2
                  rounded-full
                  "
                >
                  Unavailable
                </span>

              )}

            </div>





            {/* DETAILS */}

            <div className="mt-6">


              <h3 className="text-2xl font-serif">
                {item.name}
              </h3>



              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                {item.desc}
              </p>




              <div className="mt-4 space-y-2 text-sm text-gray-400">

                <p>
                  🧴 {item.size}
                </p>


                <p>
                  ❄️ {item.storage}
                </p>


              </div>




              <div className="flex justify-between items-center mt-5">

                <span className="text-[#C69C6D] text-xl font-semibold">
                  ₵{item.price}
                </span>


                <span className="text-gray-500 text-sm">
                  Fresh Batch
                </span>


              </div>





              {/* BUTTON */}

              <button

                disabled={!item.available}

                onClick={() => addToCart(item)}

                className={`

                mt-6
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
                  bg-gray-700
                  text-gray-400
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


            </div>


          </motion.div>


        ))}


      </motion.div>





      {/* FOOTNOTE */}

      <p
      className="
      text-center
      text-gray-500
      text-sm
      mt-12
      "
      >
        ☕ Prepared in small batches to maintain freshness and quality.
      </p>


    </section>
  );
}