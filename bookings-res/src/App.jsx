import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/hero'
import MentorList from './components/MentorList'
import BookingForm from './components/BookingForm'
import BookingSummary from './components/BookingSummary'
import Footer from './components/Footer'

function App() {

  const [selectedMentor, setSelectedMentor] = useState(null)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const [booking, setBooking] = useState(null)

  const handleBooking = (mentor) => {
    setSelectedMentor(mentor)
    setBooking(null)
    setBookingConfirmed(false)
  }

  const handleConfirmBooking = (newBooking) => {
    setBooking(newBooking)
    setBookingConfirmed(true)
  }

  const handleViewBookings = () => {
    setBooking(null)
    setSelectedMentor(null)
    setBookingConfirmed(false)
  }

  return (
    <>

      <Navbar />

      <main>

        {!selectedMentor && !bookingConfirmed && (
          <>
            <Hero />

            <MentorList
              onBook={handleBooking}
            />
          </>
        )}

        {selectedMentor && !bookingConfirmed && (
          <BookingForm
            mentor={selectedMentor}
            onConfirm={handleConfirmBooking}
          />
        )}

        {bookingConfirmed && booking && (
          <BookingSummary
            booking={booking}
            onViewBookings={handleViewBookings}
          />
        )}

      </main>

      <Footer />

    </>
  )
}

export default App