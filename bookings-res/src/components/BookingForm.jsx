const BookingForm = ({ mentor }) => {
  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-3xl px-6">

        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Reserve a Session
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Book with {mentor?.name}
          </h1>

          <p className="mt-2 text-gray-600">
            Choose a date and time for your one-on-one mentorship session.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

          {/* Student Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Email */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Session Type */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Session Type
            </label>

            <select className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
              <option>Project Assistance</option>
              <option>Code Review</option>
              <option>General Mentorship</option>
              <option>Career Guidance</option>
            </select>
          </div>

          {/* Date */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Date
            </label>

            <input
              type="date"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Time */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Available Time
            </label>

            <select className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
              <option>09:00 - 09:30</option>
              <option>10:00 - 10:30</option>
              <option>11:00 - 11:30</option>
              <option>13:00 - 13:30</option>
              <option>14:00 - 14:30</option>
              <option>15:00 - 15:30</option>
            </select>
          </div>

          {/* Message */}
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              What do you need help with?
            </label>

            <textarea
              rows="4"
              placeholder="Briefly explain what you would like help with..."
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Submit */}
          <button className="mt-8 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Confirm Booking
          </button>

        </div>
      </div>
    </section>
  );
};

export default BookingForm;