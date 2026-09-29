const MentorCard = ({ mentor, onBook }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-md">

      {/* Mentor Information */}
      <div className="flex items-center gap-4">

        <img
          src={mentor.image}
          alt={mentor.name}
          className="h-14 w-14 rounded-full object-cover"
        />

        <div>
          <h3 className="text-base font-bold text-slate-900">
            {mentor.name}
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            {mentor.role}
          </p>
        </div>

      </div>

      {/* Speciality */}
      <div className="mt-4">

        <p className="text-sm font-medium text-slate-700">
          {mentor.speciality}
        </p>

      </div>

      {/* Availability */}
      <div className="mt-4 flex items-center gap-2">

        <span
          className={`h-2 w-2 rounded-full ${
            mentor.available
              ? 'bg-green-500'
              : 'bg-gray-400'
          }`}
        ></span>

        <span className="text-xs text-slate-500">
          {mentor.available
            ? 'Available'
            : 'Unavailable'}
        </span>

      </div>

      {/* Button */}
      <button
        onClick={() => onBook(mentor)}
        disabled={!mentor.available}
        className={`mt-5 w-full rounded-lg border px-4 py-2 text-sm font-semibold transition ${
          mentor.available
            ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            : 'cursor-not-allowed border-slate-200 text-slate-400'
        }`}
      >
        book mentor
      </button>

    </div>
  )
}

export default MentorCard