import MentorCard from "./MentorCard";
import { mentors } from "../data/mentors";

const MentorList = ({ onBook }) => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Mentors
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Find the right mentor
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Choose a mentor based on the type of help you need.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor) => (
            <MentorCard
              key={mentor.id}
              mentor={mentor}
              onBook={onBook}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default MentorList;