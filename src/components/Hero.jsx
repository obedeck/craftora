import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero({ setCartOpen }) {

  const { scrollY } = useScroll();

  const backgroundY = useTransform(
    scrollY,
    [0, 500],
    [0, 120]
  );


  return (
    <section 
      className="
      relative
      w-full
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      md:px-16
      overflow-hidden
      "
    >


      {/* BACKGROUND */}

      <motion.div

        style={{
          y: backgroundY,
        }}

        className="
        absolute
        inset-0
        bg-cover
        bg-center
        scale-110
        "

        style={{
          backgroundImage:
          "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
          y: backgroundY,
        }}

      />



      {/* OVERLAY */}

      <div 
        className="
        absolute
        inset-0
        bg-black/70
        "
      />





      {/* HERO CONTENT */}

      <div 
        className="
        relative
        z-10
        max-w-6xl
        mx-auto
        w-full
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-12
        "
      >




        {/* TEXT */}

        <div className="max-w-3xl">


          <motion.p

            initial={{
              opacity:0,
              y:20,
            }}

            animate={{
              opacity:1,
              y:0,
            }}

            transition={{
              duration:0.6,
            }}

            className="
            tracking-[0.35em]
            text-[#C69C6D]
            text-sm
            mb-5
            uppercase
            "
          >
            Premium Bottled Coffee

          </motion.p>






          <motion.h1

            initial={{
              opacity:0,
              y:30,
            }}

            animate={{
              opacity:1,
              y:0,
            }}

            transition={{
              delay:0.2,
              duration:0.8,
            }}

            className="
            text-5xl
            md:text-7xl
            font-serif
            leading-tight
            "
          >

            Crafted Fresh.
            <br />
            Delivered Chilled.

          </motion.h1>






          <motion.p

            initial={{
              opacity:0,
            }}

            animate={{
              opacity:1,
            }}

            transition={{
              delay:0.5,
              duration:0.8,
            }}

            className="
            text-gray-300
            mt-8
            max-w-xl
            leading-relaxed
            text-lg
            "
          >

            Small-batch coffee, brewed fresh every day and sealed for maximum
            freshness. Enjoy café-quality bottled brews delivered right to your
            doorstep.

          </motion.p>






          {/* BUTTONS */}

          <motion.div

            initial={{
              opacity:0,
              y:20,
            }}

            animate={{
              opacity:1,
              y:0,
            }}

            transition={{
              delay:0.7,
            }}

            className="
            flex
            flex-wrap
            gap-4
            mt-10
            "

          >


            <motion.button

              onClick={() => setCartOpen(true)}

              whileHover={{
                y:-3,
                scale:1.03,
              }}

              whileTap={{
                scale:0.97,
              }}

              className="
              bg-[#C69C6D]
              text-black
              px-8
              py-3
              rounded-full
              font-semibold
              tracking-wide
              hover:shadow-[0_0_30px_rgba(198,156,109,0.45)]
              transition
              "

            >

              ORDER NOW

            </motion.button>




            <a

              href="#bottled"

              className="
              border
              border-white
              px-7
              py-3
              rounded-full
              hover:bg-white
              hover:text-black
              transition
              "

            >

              Explore Bottled Collection

            </a>



          </motion.div>






          {/* TRUST BADGES */}

          <motion.div

            initial={{
              opacity:0,
            }}

            animate={{
              opacity:1,
            }}

            transition={{
              delay:1,
            }}

            className="
            flex
            flex-wrap
            gap-8
            mt-12
            text-gray-300
            text-sm
            "

          >

            <div>
              ☕ Fresh Daily
            </div>


            <div>
              🧴 500ml Bottled Brews
            </div>


            <div>
              🚚 Delivered Chilled
            </div>


          </motion.div>



        </div>







        {/* FLOATING COFFEE IMAGE */}

        <motion.img

          src="/images/hero-coffee.png"

          alt="ONYX Coffee"

          initial={{
            opacity:0,
            x:80,
            y:40,
          }}

          animate={{
            opacity:1,
            x:0,
            y:[0,-15,0],
          }}

          transition={{
            duration:1,
            y:{
              repeat:Infinity,
              duration:4,
              ease:"easeInOut",
            },
          }}

          className="
          hidden
          md:block
          w-[320px]
          lg:w-[420px]
          drop-shadow-2xl
          "

        />



      </div>


    </section>
  );
}