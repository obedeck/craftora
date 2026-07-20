import { motion } from "framer-motion";
import { business } from "../config/business";

export default function Contact() {

  const contactItems = [
    {
      icon: "📍",
      title: "Location",
      value: business.location,
    },

    {
      icon: "📞",
      title: "Phone",
      value: `+${business.phone}`,
      link: `tel:+${business.phone}`,
    },

    {
      icon: "✉️",
      title: "Email",
      value: business.email,
      link: `mailto:${business.email}`,
    },
  ];


  return (

    <motion.section

      id="contact"

      initial={{
        opacity:0,
        y:50,
      }}

      whileInView={{
        opacity:1,
        y:0,
      }}

      transition={{
        duration:0.8,
      }}

      viewport={{
        once:true,
        amount:0.2,
      }}

      className="
      py-24
      px-6
      md:px-16
      bg-[#0b0b0b]
      text-white
      text-center
      "

    >


      <div className="max-w-6xl mx-auto">



        {/* HEADER */}

        <h2 className="
          text-3xl
          md:text-5xl
          font-serif
        ">

          Get in{" "}

          <span className="text-[#C69C6D]">
            Touch
          </span>

        </h2>



        <p className="
          text-gray-400
          mt-5
          max-w-xl
          mx-auto
          leading-relaxed
        ">

          Have questions about our coffee, delivery, or orders?
          We would love to hear from you.

        </p>






        {/* CONTACT CARDS */}


        <div className="
          mt-14
          grid
          grid-cols-1
          md:grid-cols-3
          gap-10
        ">


          {contactItems.map((item,index)=>(


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
              bg-[#141414]
              p-8
              rounded-2xl
              border
              border-white/10
              hover:border-[#C69C6D]/40
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]
              transition-all
              "

            >


              <div className="
                text-3xl
                mb-4
              ">
                {item.icon}
              </div>



              <h3 className="
                font-semibold
                text-lg
              ">
                {item.title}
              </h3>



              {
                item.link ?

                <a

                  href={item.link}

                  className="
                  text-gray-400
                  mt-3
                  block
                  hover:text-[#C69C6D]
                  transition
                  "

                >
                  {item.value}
                </a>

                :

                <p className="
                  text-gray-400
                  mt-3
                ">
                  {item.value}
                </p>

              }



            </motion.div>


          ))}


        </div>





        {/* WHATSAPP BUTTON */}


        <motion.a

          href={`https://wa.me/${business.whatsapp}`}

          target="_blank"

          rel="noopener noreferrer"

          whileHover={{
            scale:1.05,
          }}

          className="
          inline-block
          mt-14
          bg-[#C69C6D]
          text-black
          px-8
          py-3
          rounded-full
          font-semibold
          hover:shadow-[0_0_30px_rgba(198,156,109,0.45)]
          transition
          "

        >

          Chat With ONYX

        </motion.a>



      </div>


    </motion.section>

  );
}