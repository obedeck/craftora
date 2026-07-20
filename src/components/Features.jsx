import { motion } from "framer-motion";
import { business } from "../config/business";

export default function Features() {
  const features = [
    {
      icon: "☕",
      title: "Small Batch Crafted",
      description:
        "Every bottle is carefully prepared in small batches to maintain rich flavour, freshness, and consistency.",
    },

    {
      icon: "🧴",
      title: "Premium Bottled Brews",
      description:
        "Enjoy café-quality coffee in a convenient bottle, crafted for moments when you need great coffee anywhere.",
    },

    {
      icon: "🚚",
      title: "Fresh & Chilled Delivery",
      description:
        "Prepared fresh and delivered chilled to preserve the quality and taste of every brew.",
    },
  ];


  return (
    <motion.section

      id="about"

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
      bg-[#0b0b0b]
      text-white
      "
    >

      <div className="max-w-6xl mx-auto text-center">


        {/* TITLE */}

        <motion.h2

          initial={{
            opacity:0,
            y:20,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          transition={{
            duration:0.6,
          }}

          viewport={{
            once:true,
          }}

          className="
          text-3xl
          md:text-5xl
          font-serif
          "
        >

          About{" "}

          <span className="text-[#C69C6D]">
            {business.name}
          </span>

        </motion.h2>




        <p className="
          text-gray-400
          max-w-3xl
          mx-auto
          mt-6
          leading-relaxed
        ">

          At {business.name}, we believe great coffee should be more than a drink.
          It should be a fresh, convenient experience. Our bottled brews are
          carefully crafted using quality ingredients and prepared to deliver
          café-style flavour wherever you are.

        </p>






        {/* FEATURE CARDS */}


        <div className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-10
          mt-14
        ">


          {features.map((feature,index)=>(

            <motion.div

              key={index}

              initial={{
                opacity:0,
                y:40,
              }}

              whileInView={{
                opacity:1,
                y:0,
              }}

              transition={{
                duration:0.5,
                delay:index * 0.15,
              }}

              viewport={{
                once:true,
              }}

              whileHover={{
                y:-8,
              }}

              className="
              p-8
              bg-[#141414]
              border
              border-white/10
              rounded-2xl
              transition-all
              duration-300
              hover:border-[#C69C6D]/40
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]
              "

            >

              <div className="text-4xl">
                {feature.icon}
              </div>


              <h3 className="
                text-xl
                font-semibold
                mt-5
              ">
                {feature.title}
              </h3>



              <p className="
                text-gray-400
                mt-3
                leading-relaxed
                text-sm
              ">
                {feature.description}
              </p>


            </motion.div>


          ))}


        </div>



      </div>


    </motion.section>
  );
}