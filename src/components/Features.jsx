import { business } from "../config/business";

export default function Features() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-16 bg-[#0b0b0b] text-center text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-serif mb-14">
          Why Choose{" "}
          <span className="text-[#C69C6D]">
            {business.name}?
          </span>
        </h2>


        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">


          {/* CARD 1 */}
          <div className="p-8 bg-[#141414] border border-white/10 rounded-2xl hover:scale-[1.03] transition duration-300">
            <div className="text-4xl">☕</div>

            <h3 className="text-xl font-semibold mt-4">
              Premium Beans
            </h3>

            <p className="text-gray-400 mt-3 leading-relaxed text-sm">
              Carefully selected beans from the best farms around the world.
            </p>
          </div>


          {/* CARD 2 */}
          <div className="p-8 bg-[#141414] border border-white/10 rounded-2xl hover:scale-[1.03] transition duration-300">
            <div className="text-4xl">🌍</div>

            <h3 className="text-xl font-semibold mt-4">
              Ethically Sourced
            </h3>

            <p className="text-gray-400 mt-3 leading-relaxed text-sm">
              We support farmers and sustainable coffee production.
            </p>
          </div>


          {/* CARD 3 */}
          <div className="p-8 bg-[#141414] border border-white/10 rounded-2xl hover:scale-[1.03] transition duration-300">
            <div className="text-4xl">👨‍🍳</div>

            <h3 className="text-xl font-semibold mt-4">
              Expert Baristas
            </h3>

            <p className="text-gray-400 mt-3 leading-relaxed text-sm">
              Professionally trained baristas crafting every cup perfectly.
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}