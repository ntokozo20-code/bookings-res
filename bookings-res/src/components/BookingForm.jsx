import { useState } from 'react'

const BookingForm = ({ mentor, onConfirm }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sessionType: 'Project Assistance',
    date: '',
    time: '09:00 - 09:30',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const booking = {
      mentor: mentor.name,
      ...formData
    }

    onConfirm(booking)
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10 sm:py-16">

      <div className="mx-auto max-w-3xl px-4 sm:px-6">

        <div className="mb-8">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Reserve a Session
          </p>

          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            Book with {mentor?.name}
          </h1>

          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Choose a date and time for your one-on-one mentorship session.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8"
        >

          {/* Student Name */}
          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {/* Email */}
          <div className="mt-5">

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {/* Session Type */}
          <div className="mt-5">

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Session Type
            </label>

            <select
              name="sessionType"
              value={formData.sessionType}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            >
              <option>Project Assistance</option>
              <option>Code Review</option>
              <option>General Mentorship</option>
              <option>Career Guidance</option>
            </select>

          </div>

          {/* Date */}
          <div className="mt-5">

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Date
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {/* Time */}
          <div className="mt-5">

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Available Time
            </label>

            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            >
              <option>09:00 - 09:30</option>
              <option>10:00 - 10:30</option>
              <option>11:00 - 11:30</option>
              <option>13:00 - 13:30</option>
              <option>14:00 - 14:30</option>
              <option>15:00 - 15:30</option>
            </select>

          </div>

          {/* Message */}
          <div className="mt-5">

            <label className="mb-2 block text-sm font-medium text-gray-700">
              What do you need help with?
            </label>

            <textarea
              name="message"
              rows="4"
              placeholder="Briefly explain what you would like help with..."
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-8 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Confirm Booking
          </button>

        </form>

      </div>

    </section>
  )
}

export default BookingForm