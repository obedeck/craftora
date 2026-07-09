import { motion } from "framer-motion";

export default function Hero({ setCartOpen }) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full text-center md:text-left">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="tracking-[0.3em] text-[#C69C6D] text-sm mb-4"
        >
          SPECIALTY COFFEE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif leading-tight"
        >
          Crafted to Perfection.
        </motion.h1>

        <p className="text-gray-300 mt-6 max-w-lg mx-auto md:mx-0 leading-relaxed">
          Experience the art of coffee making with premium beans, expert roasters and a passion for the perfect cup.
        </p>

        <div className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start">

          <button
  onClick={() => setCartOpen(true)}
  className="bg-[#C69C6D] text-black px-6 py-3 rounded-full hover:scale-105 transition"
>
  ORDER NOW
</button>

          <a
  href="#menu"
  className="border border-white px-6 py-3 rounded-full hover:scale-105 transition inline-block"
>
  VIEW MENU
</a>

        </div>

      </div>
    </section>
  );
}