export default function Testimonials() {
  return (
    <section className="py-20 bg-white text-center">

      <h2 className="text-3xl font-serif text-coffee mb-12">
        What Our Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-10">

        <div className="p-6 shadow-lg rounded-2xl">
          <p className="text-gray-600">
            “Best coffee in town! The espresso is rich and perfectly balanced.”
          </p>
          <h4 className="mt-4 font-bold text-coffee">— Ama K.</h4>
        </div>

        <div className="p-6 shadow-lg rounded-2xl">
          <p className="text-gray-600">
            “The atmosphere feels premium and the latte is amazing every time.”
          </p>
          <h4 className="mt-4 font-bold text-coffee">— Kwame B.</h4>
        </div>

        <div className="p-6 shadow-lg rounded-2xl">
          <p className="text-gray-600">
            “Craftora Coffee is my daily stop. Highly recommend the iced coffee!”
          </p>
          <h4 className="mt-4 font-bold text-coffee">— Esi M.</h4>
        </div>

      </div>

    </section>
  );
}