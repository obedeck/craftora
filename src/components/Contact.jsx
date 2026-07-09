import { motion } from "framer-motion";
import { business } from "../config/business";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-16 bg-[#0b0b0b] text-white text-center"
    >

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >

        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-serif">
          Get in <span className="text-[#C69C6D]">Touch</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">
          We’d love to hear from you. Visit us or reach out anytime.
        </p>


        {/* INFO GRID */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">


          {/* LOCATION */}
          <div className="bg-[#141414] p-6 rounded-2xl border border-white/10 hover:scale-[1.03] transition">

            <h3 className="font-semibold text-white text-lg">
              Location
            </h3>

            <p className="text-gray-400 mt-3">
              {business.location}
            </p>

          </div>



          {/* PHONE */}
          <div className="bg-[#141414] p-6 rounded-2xl border border-white/10 hover:scale-[1.03] transition">

            <h3 className="font-semibold text-white text-lg">
              Phone
            </h3>

            <p className="text-gray-400 mt-3">
              +{business.phone}
            </p>

          </div>



          {/* EMAIL */}
          <div className="bg-[#141414] p-6 rounded-2xl border border-white/10 hover:scale-[1.03] transition">

            <h3 className="font-semibold text-white text-lg">
              Email
            </h3>

            <p className="text-gray-400 mt-3">
              {business.email}
            </p>

          </div>


        </div>

      </motion.div>

    </section>
  );
}