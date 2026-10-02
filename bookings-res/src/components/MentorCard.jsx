const MentorCard = ({ mentor, onBook }) => {

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">

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

        <span className="h-2 w-2 rounded-full bg-green-500"></span>

        <span className="text-xs text-slate-500">
          Available
        </span>

      </div>

      {/* Button */}
      <button
        onClick={() => onBook(mentor)}
        className="mt-5 w-full rounded-lg border border-blue-600 px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-600 hover:text-white"
      >
        Book mentor
      </button>

    </div>
  )
}

export default MentorCard