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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="tracking-[0.35em] text-[#C69C6D] text-sm mb-5 uppercase"
        >
          Premium Bottled Coffee
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif leading-tight max-w-3xl"
        >
          Crafted Fresh.
          <br />
          Delivered Chilled.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 mt-8 max-w-xl leading-relaxed text-lg"
        >
          Small-batch coffee, brewed fresh every day and sealed for maximum
          freshness. Enjoy café-quality bottled brews delivered right to your
          doorstep.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">

          <button
            onClick={() => setCartOpen(true)}
            className="bg-[#C69C6D] text-black px-7 py-3 rounded-full hover:scale-105 transition font-semibold"
          >
            Order Now
          </button>

          <a
            href="#bottled"
            className="border border-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Explore Bottled Collection
          </a>

        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap gap-8 mt-12 text-gray-300 text-sm">

          <div>☕ Fresh Daily</div>

          <div>🧴 500ml Bottled Brews</div>

          <div>🚚 Delivered Chilled</div>

        </div>

      </div>
    </section>
  );
}