const BookingSummary = ({ booking }) => {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <span className="text-2xl text-green-600">✓</span>
      </div>

      <h1 className="mt-6 text-3xl font-bold text-gray-900">
        Booking Confirmed
      </h1>

      <p className="mt-3 text-gray-600">
        Your mentorship session has been successfully reserved.
      </p>

      <div className="mt-8 rounded-xl bg-gray-50 p-5 text-left">

        <div className="flex justify-between border-b border-gray-200 pb-3">
          <span className="text-gray-500">Mentor</span>
          <span className="font-semibold">{booking.mentor}</span>
        </div>

        <div className="flex justify-between border-b border-gray-200 py-3">
          <span className="text-gray-500">Date</span>
          <span className="font-semibold">{booking.date}</span>
        </div>

        <div className="flex justify-between pt-3">
          <span className="text-gray-500">Time</span>
          <span className="font-semibold">{booking.time}</span>
        </div>

      </div>

      <button className="mt-6 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
        View My Bookings
      </button>

    </div>
  );
};

export default BookingSummary;