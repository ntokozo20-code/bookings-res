const BookingSummary = ({ booking, onViewBookings }) => {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-8">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <span className="text-2xl text-green-600">✓</span>
      </div>

      <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
        Booking Confirmed
      </h1>

      <p className="mt-3 text-sm text-gray-600 sm:text-base">
        Your mentorship session has been successfully reserved.
      </p>

      <div className="mt-8 rounded-xl bg-gray-50 p-5 text-left">

        <div className="flex flex-col gap-2 border-b border-gray-200 pb-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-gray-500">Mentor</span>
          <span className="font-semibold">{booking.mentor}</span>
        </div>

        <div className="flex flex-col gap-2 border-b border-gray-200 py-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-gray-500">Date</span>
          <span className="font-semibold">{booking.date}</span>
        </div>

        <div className="flex flex-col gap-2 pt-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-gray-500">Time</span>
          <span className="font-semibold">{booking.time}</span>
        </div>

      </div>

      <button
        type="button"
        onClick={onViewBookings}
        className="mt-6 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        View My Bookings
      </button>

    </div>
  );
};

export default BookingSummary;