import { business } from "../config/business";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white py-16 px-6 md:px-16 border-t border-white/10">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">


        {/* BRAND */}
        <div>
          <h2 className="font-serif text-2xl text-[#C69C6D]">
            {business.name}
          </h2>

          <p className="text-gray-400 mt-4 text-sm leading-relaxed">
            Crafted with passion, brewed with precision.
          </p>
        </div>



        {/* QUICK LINKS */}
        <div>
          <h3 className="text-[#C69C6D] font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">

            <li>
              <a
                href="#top"
                className="hover:text-[#C69C6D] transition"
              >
                Home
              </a>
            </li>


            <li>
              <a
                href="#menu"
                className="hover:text-[#C69C6D] transition"
              >
                Menu
              </a>
            </li>


            <li>
              <a
                href="#about"
                className="hover:text-[#C69C6D] transition"
              >
                About
              </a>
            </li>


            <li>
              <a
                href="#contact"
                className="hover:text-[#C69C6D] transition"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>



        {/* OPENING HOURS + CONTACT */}
        <div>

          <h3 className="text-[#C69C6D] font-semibold mb-4">
            Opening Hours
          </h3>


          <p className="text-gray-400 text-sm leading-relaxed">
            Monday - Friday: 9am - 4pm
            <br />
            Saturday: 12pm - 4pm
            <br />
            Sunday: Closed
          </p>


          <p className="text-gray-400 text-sm leading-relaxed mt-5">
            📍 {business.location}
            <br />
            📞 {business.phone}
          </p>


          <a
            href={`https://wa.me/${business.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-5
              bg-[#C69C6D]
              text-black
              px-5
              py-2
              rounded-full
              text-sm
              font-semibold
              hover:bg-[#b8895f]
              transition
            "
          >
            💬 WhatsApp Us
          </a>

        </div>


      </div>



      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 text-xs mt-12 border-t border-white/10 pt-6">

        © {new Date().getFullYear()} {business.name}. All rights reserved.

      </div>


    </footer>
  );
}