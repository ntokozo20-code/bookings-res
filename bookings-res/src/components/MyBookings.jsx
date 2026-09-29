const MyBookings = ({ bookings }) => {

  return (
    <section className="min-h-screen bg-gray-50 py-16">

      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <div className="mb-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            My Bookings
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Your Bookings
          </h1>

          <p className="mt-2 text-gray-600">
            View and manage your upcoming mentorship sessions.
          </p>

        </div>

        {/* Bookings */}
        <div className="space-y-4">

          {bookings.length === 0 ? (

            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">

              <h2 className="text-xl font-semibold text-gray-900">
                No bookings yet
              </h2>

              <p className="mt-2 text-gray-600">
                Book a session with a mentor to see it here.
              </p>

            </div>

          ) : (

            bookings.map((booking, index) => (

              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >

                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

                  {/* Booking Information */}
                  <div>

                    <h2 className="text-lg font-bold text-gray-900">
                      {booking.mentor}
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                      {booking.sessionType}
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                      {booking.date} • {booking.time}
                    </p>

                  </div>

                  {/* Status */}
                  <div>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                      Upcoming
                    </span>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </section>
  )
}

export default MyBookings