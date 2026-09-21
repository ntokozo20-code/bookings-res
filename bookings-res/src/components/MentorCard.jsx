const MentorCard = ({ mentor, onBook }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="p-6">

        <div className="flex items-center gap-4">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="h-16 w-16 rounded-full object-cover"
          />

          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {mentor.name}
            </h3>

            <p className="text-sm text-gray-500">
              {mentor.role}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-500">
            Speciality
          </p>

          <p className="mt-1 font-semibold text-gray-900">
            {mentor.speciality}
          </p>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              mentor.available ? "bg-green-500" : "bg-gray-400"
            }`}
          />

          <span className="text-sm text-gray-600">
            {mentor.available ? "Available for bookings" : "Currently unavailable"}
          </span>
        </div>

        <button
          onClick={() => onBook(mentor)}
          disabled={!mentor.available}
          className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Book Session
        </button>

      </div>
    </div>
  );
};

export default MentorCard;