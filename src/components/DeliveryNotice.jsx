
import { motion } from "framer-motion";

const deliveryOptions = [
  {
    icon: "🛍️",
    title: "Order Throughout the Day",
    description:
      "Place your order anytime during our working hours. No morning or evening batch deadlines.",
    label: "OPEN FOR ORDERS",
  },
  {
    icon: "🕒",
    title: "Scheduled Delivery",
    description:
      "Planning ahead? Choose your preferred delivery window when placing a pre-order.",
    windows: ["11:00 AM – 2:00 PM", "2:00 PM – 5:00 PM"],
  },
  {
    icon: "⚡",
    title: "Need It Sooner?",
    description:
      "Request the earliest available delivery. We'll confirm your delivery time via WhatsApp.",
    label: "SUBJECT TO AVAILABILITY",
  },
];

export default function DeliveryNotice() {
  return (
    <motion.section
      id="delivery"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#141414] px-6 py-20 text-white md:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#C69C6D]">
            Freshness, On Your Time
          </p>

          <h2 className="font-serif text-3xl text-[#C69C6D] md:text-4xl">
            ONYX Delivery
          </h2>

          <p className="mt-4 leading-relaxed text-gray-400">
            Freshly crafted in small batches and delivered chilled to your
            doorstep. Order during our working hours and choose what works
            best for you.
          </p>
        </div>

        {/* DELIVERY OPTIONS */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {deliveryOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 transition-all duration-300 hover:border-[#C69C6D]/50 hover:shadow-xl"
            >
              <div className="text-4xl" aria-hidden="true">
                {option.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {option.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                {option.description}
              </p>

              {option.windows && (
                <div className="mt-5 space-y-3">
                  {option.windows.map((window) => (
                    <div
                      key={window}
                      className="rounded-lg border border-[#C69C6D]/20 bg-[#C69C6D]/10 px-4 py-3 text-sm font-medium text-[#C69C6D]"
                    >
                      🕒 {window}
                    </div>
                  ))}
                </div>
              )}

              {option.label && (
                <p className="mt-5 text-xs font-semibold tracking-wider text-[#C69C6D]">
                  {option.label}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* DELIVERY NOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-3xl rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center"
        >
          <p className="text-sm leading-relaxed text-gray-400">
            ☕ All delivery windows are preferences rather than guaranteed
            arrival times. We'll confirm your order and delivery time via
            WhatsApp before dispatch.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
