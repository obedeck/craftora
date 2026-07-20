import { motion } from "framer-motion";
import { business } from "../config/business";

export default function Footer() {
  return (
    <motion.footer

      initial={{
        opacity:0,
        y:40,
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
      bg-[#0b0b0b]
      text-white
      py-16
      px-6
      md:px-16
      border-t
      border-white/10
      "

    >


      <div className="
        max-w-6xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-3
        gap-12
      ">



        {/* BRAND */}

        <div>


          <h2 className="
            font-serif
            text-3xl
            text-[#C69C6D]
          ">

            {business.name}

          </h2>



          <p className="
            text-gray-400
            mt-5
            text-sm
            leading-relaxed
            max-w-xs
          ">

            Premium bottled coffee crafted fresh,
            delivered chilled, and made for every moment.

          </p>




          <p className="
            text-gray-500
            mt-5
            text-sm
            italic
          ">

            "Crafted fresh. Delivered chilled."

          </p>


        </div>







        {/* QUICK LINKS */}

        <div>


          <h3 className="
            text-[#C69C6D]
            font-semibold
            mb-5
          ">
            Quick Links
          </h3>



          <ul className="
            space-y-3
            text-sm
            text-gray-400
          ">


            {[
              ["Home","#top"],
              ["Menu","#menu"],
              ["About","#about"],
              ["Contact","#contact"],
            ].map((link,index)=>(


              <li key={index}>

                <a

                  href={link[1]}

                  className="
                  hover:text-[#C69C6D]
                  transition
                  "

                >

                  {link[0]}

                </a>

              </li>


            ))}


          </ul>


        </div>







        {/* CONTACT */}

        <div>


          <h3 className="
            text-[#C69C6D]
            font-semibold
            mb-5
          ">

            Contact

          </h3>




          <p className="
            text-gray-400
            text-sm
            leading-relaxed
          ">

            📍 {business.location}

            <br />

            📞 {business.phone}

            <br />

            ✉️ {business.email}

          </p>






          <a

            href={`https://wa.me/${business.whatsapp}`}

            target="_blank"

            rel="noopener noreferrer"

            className="
            inline-block
            mt-6
            bg-[#C69C6D]
            text-black
            px-6
            py-3
            rounded-full
            text-sm
            font-semibold
            hover:bg-[#b8895f]
            hover:shadow-[0_0_30px_rgba(198,156,109,0.45)]
            transition
            "

          >

            💬 WhatsApp Us

          </a>



        </div>




      </div>







      {/* BOTTOM BAR */}


      <div className="
        text-center
        text-gray-500
        text-xs
        mt-14
        border-t
        border-white/10
        pt-6
      ">


        © {new Date().getFullYear()} {business.name}.
        All rights reserved.


      </div>



    </motion.footer>
  );
}