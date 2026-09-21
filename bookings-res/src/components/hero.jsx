const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Melsoft Academy
          </p>

          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Book a one-on-one session with a mentor.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Need help with a project, coding problem or something you're
            struggling with? Choose a mentor and reserve a session that works
            for you.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
              Find a Mentor
            </button>

            <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100">
              How It Works
            </button>
          </div>
        </div>

        <div className="rounded-2xl bg-blue-600 p-8 text-white">
          <h2 className="text-2xl font-bold">
            Get help when you need it.
          </h2>

          <p className="mt-4 text-blue-100">
            Select a mentor, choose an available time and reserve your
            one-on-one session.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="font-semibold">01 — Choose a mentor</p>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <p className="font-semibold">02 — Pick a time</p>
            </div>

            <div className="rounded-xl bg-white/10 p-4">
              <p className="font-semibold">03 — Confirm booking</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;