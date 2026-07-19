export default function DeliveryNotice() {
  return (
    <section
      className="
      py-20
      px-6
      md:px-16
      bg-[#141414]
      text-white
      "
    >

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-serif text-[#C69C6D]">
          ONYX Delivery Schedule
        </h2>


        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Freshly crafted in small batches and delivered chilled to your doorstep.
        </p>



        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          mt-12
        ">


          {/* MORNING */}
          <div
            className="
            bg-[#0b0b0b]
            border
            border-white/10
            rounded-2xl
            p-8
            "
          >

            <div className="text-4xl">
              ☀️
            </div>

            <h3 className="text-xl font-semibold mt-4">
              Morning Batch
            </h3>


            <p className="text-gray-400 mt-3">
              Orders close:
              <span className="text-[#C69C6D]">
                {" "}11:00 AM
              </span>
            </p>


            <p className="text-gray-400 mt-2">
              Delivery:
              <span className="text-[#C69C6D]">
                {" "}1:00 PM - 3:00 PM
              </span>
            </p>


          </div>



          {/* EVENING */}
          <div
            className="
            bg-[#0b0b0b]
            border
            border-white/10
            rounded-2xl
            p-8
            "
          >

            <div className="text-4xl">
              🌙
            </div>


            <h3 className="text-xl font-semibold mt-4">
              Evening Batch
            </h3>


            <p className="text-gray-400 mt-3">
              Orders close:
              <span className="text-[#C69C6D]">
                {" "}3:00 PM
              </span>
            </p>


            <p className="text-gray-400 mt-2">
              Delivery:
              <span className="text-[#C69C6D]">
                {" "}5:00 PM - 7:00 PM
              </span>
            </p>


          </div>


        </div>



        <p className="
          mt-10
          text-sm
          text-gray-500
        ">
          ☕ Orders are prepared fresh after confirmation.
          Delivery times may vary slightly depending on location.
        </p>


      </div>

    </section>
  );
}