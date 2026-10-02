import MentorCard from './MentorCard'

const MentorList = ({ onBook, sectionRef }) => {

  const mentors = [
    {
      id: 1,
      name: 'Mnelisi',
      role: 'Software Development Mentor',
      speciality: 'React & JavaScript',
      image: 'https://i.pravatar.cc/150?img=12',
      available: true
    },
    {
      id: 2,
      name: 'Zinhle',
      role: 'Software Development Mentor',
      speciality: 'Web Development',
      image: 'https://i.pravatar.cc/150?img=47',
      available: true
    },
    {
      id: 3,
      name: 'Caleb',
      role: 'Development Mentor',
      speciality: 'Frontend Development',
      image: 'https://i.pravatar.cc/150?img=33',
      available: true
    },
    {
      id: 4,
      name: 'Thando',
      role: 'UI/UX Mentor',
      speciality: 'Design Systems',
      image: 'https://i.pravatar.cc/150?img=44',
      available: true
    },
    {
      id: 5,
      name: 'Lerato',
      role: 'Backend Mentor',
      speciality: 'Node.js & Express',
      image: 'https://i.pravatar.cc/150?img=32',
      available: true
    },
    {
      id: 6,
      name: 'Sipho',
      role: 'Full Stack Mentor',
      speciality: 'React & Node.js',
      image: 'https://i.pravatar.cc/150?img=11',
      available: true
    }
  ]

  return (
    <section ref={sectionRef} className="bg-slate-50 py-16">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-8 flex items-end justify-between">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Our Mentors
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Meet our mentors
            </h2>

            <p className="mt-3 text-slate-600">
              Choose a mentor and book a one-on-one session.
            </p>
          </div>
        </div>

        {/* Mentor Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

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
  )
}

export default MentorList