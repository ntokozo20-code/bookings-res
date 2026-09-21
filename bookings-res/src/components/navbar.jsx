const Navbar = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Melsoft<span className="text-blue-600">Mentor</span>
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="/mentors"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Mentors
          </a>

          <a
            href="/booking"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Book a Session
          </a>
        </div>

        {/* Button */}
        <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
          My Bookings
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
