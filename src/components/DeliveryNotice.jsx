import { motion } from "framer-motion";

export default function DeliveryNotice() {
  return (
    <motion.section

      initial={{
        opacity: 0,
        y: 60,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}

      viewport={{
        once: true,
        amount: 0.3,
      }}

      className="
      py-20
      px-6
      md:px-16
      bg-[#141414]
      text-white
      "
    >

      <div className="max-w-5xl mx-auto text-center">


        <motion.h2

          initial={{
            opacity: 0,
            y: 20,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.6,
          }}

          viewport={{
            once: true,
          }}

          className="text-3xl md:text-4xl font-serif text-[#C69C6D]"
        >
          ONYX Delivery Schedule
        </motion.h2>



        <motion.p

          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

          transition={{
            duration: 0.6,
            delay: 0.2,
          }}

          viewport={{
            once: true,
          }}

          className="text-gray-400 mt-4 max-w-2xl mx-auto"
        >
          Freshly crafted in small batches and delivered chilled to your doorstep.
        </motion.p>





        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          mt-12
          "
        >



          {/* MORNING */}

          <motion.div

            initial={{
              opacity: 0,
              x: -40,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.7,
            }}

            whileHover={{
              y: -6,
            }}

            viewport={{
              once: true,
            }}

            className="
            bg-[#0b0b0b]
            border
            border-white/10
            rounded-2xl
            p-8
            transition-all
            duration-300
            hover:border-[#C69C6D]/40
            hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
            "
          >

            <div className="text-4xl">
              ☀️
            </div>


            <h3 className="text-xl font-semibold mt-4">
              Morning Batch
            </h3>



            <p className="text-gray-400 mt-3">
              Orders close:
              <span className="text-[#C69C6D]">
                {" "}11:00 AM
              </span>
            </p>



            <p className="text-gray-400 mt-2">
              Delivery:
              <span className="text-[#C69C6D]">
                {" "}1:00 PM - 3:00 PM
              </span>
            </p>


          </motion.div>





          {/* EVENING */}

          <motion.div

            initial={{
              opacity: 0,
              x: 40,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.7,
              delay: 0.15,
            }}

            whileHover={{
              y: -6,
            }}

            viewport={{
              once: true,
            }}

            className="
            bg-[#0b0b0b]
            border
            border-white/10
            rounded-2xl
            p-8
            transition-all
            duration-300
            hover:border-[#C69C6D]/40
            hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
            "
          >

            <div className="text-4xl">
              🌙
            </div>



            <h3 className="text-xl font-semibold mt-4">
              Evening Batch
            </h3>




            <p className="text-gray-400 mt-3">
              Orders close:
              <span className="text-[#C69C6D]">
                {" "}3:00 PM
              </span>
            </p>




            <p className="text-gray-400 mt-2">
              Delivery:
              <span className="text-[#C69C6D]">
                {" "}5:00 PM - 7:00 PM
              </span>
            </p>


          </motion.div>


        </div>





        <motion.p

          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

          transition={{
            duration: 0.6,
            delay: 0.4,
          }}

          viewport={{
            once: true,
          }}

          className="
          mt-10
          text-sm
          text-gray-500
          "
        >
          ☕ Orders are prepared fresh after confirmation.
          Delivery times may vary slightly depending on location.
        </motion.p>



      </div>


    </motion.section>
  );
}