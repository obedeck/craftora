import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

const coffees = {
  hot: [
    { name: "Espresso", price: 25, image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300" },
    { name: "Cappuccino", price: 35, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300" },
    { name: "Latte", price: 40, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300" },
    { name: "Mocha", price: 45, image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=300" },
  ],

  iced: [
    { name: "Iced Coffee", price: 38, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300" },
    { name: "Cold Brew", price: 42, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300" },
    { name: "Iced Latte", price: 40, image: "https://images.unsplash.com/photo-1461988360015-0e2a9d8c4c69?w=300" },
    { name: "Frappé", price: 45, image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=300" },
  ],
};

export default function MenuDropdown({ open }) {
  const { addToCart } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="
absolute left-1/2 top-full -translate-x-1/2 
z-[60]
w-[90%] max-w-5xl
max-h-[75vh]
overflow-y-auto
bg-[#0b0b0b]
border border-white/10
rounded-3xl
shadow-2xl
p-6
"
        >

          {/* TITLE */}
          <h2 className="text-center text-white text-3xl font-serif mb-10">
            Our Menu
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

            {/* HOT */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6 border-b border-white/10 pb-2">
                Hot Coffees
              </h3>

              <div className="space-y-5">
                {coffees.hot.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 bg-[#141414] rounded-2xl p-3 hover:bg-[#1f1f1f] transition"
                  >
                    <img
                      src={item.image}
                      className="w-14 h-14 object-cover rounded-xl flex-shrink-0"
                    />

                    <div className="flex-1 flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-medium text-sm">
                          {item.name}
                        </h4>
                        <p className="text-gray-300 text-xs">
                          ₵{item.price}
                        </p>
                      </div>

                      <button
                        onClick={() => addToCart(item)}
                        className="bg-[#C69C6D] text-black px-3 py-1.5 rounded-full text-xs hover:scale-105 transition"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ICED */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6 border-b border-white/10 pb-2">
                Iced Coffees
              </h3>

              <div className="space-y-5">
                {coffees.iced.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 bg-[#141414] rounded-2xl p-3 hover:bg-[#1f1f1f] transition"
                  >
                    <img
                      src={item.image}
                      className="w-14 h-14 object-cover rounded-xl flex-shrink-0"
                    />

                    <div className="flex-1 flex justify-between items-center">
                      <div>
                        <h4 className="text-white font-medium text-sm">
                          {item.name}
                        </h4>
                        <p className="text-gray-300 text-xs">
                          ₵{item.price}
                        </p>
                      </div>

                      <button
                        onClick={() => addToCart(item)}
                        className="bg-[#C69C6D] text-black px-3 py-1.5 rounded-full text-xs hover:scale-105 transition"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}