const Navbar = ({ onHome, onMentors, onBookMentor, onMyBookings }) => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Melsoft<span className="text-blue-600">Mentor</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center gap-3 text-sm sm:gap-6 lg:gap-8">
          <button
            type="button"
            onClick={onHome}
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </button>

          <button
            type="button"
            onClick={onMentors}
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Mentors
          </button>

          <button
            type="button"
            onClick={onBookMentor}
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Book mentor
          </button>
        </div>

        {/* Button */}
        <button
          type="button"
          onClick={onMyBookings}
          className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
        >
          My Bookings
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
