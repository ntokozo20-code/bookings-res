import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MentorList from './components/MentorList'
import BookingForm from './components/BookingForm'
import BookingSummary from './components/BookingSummary'
import Footer from './components/Footer'

function App() {

  const [selectedMentor, setSelectedMentor] = useState(null)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  const handleBooking = (mentor) => {
    setSelectedMentor(mentor)
    setBookingConfirmed(false)
  }

  const handleConfirmBooking = () => {
    setBookingConfirmed(true)
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

        {bookingConfirmed && (
          <BookingSummary
            mentor={selectedMentor}
          />
        )}

      </main>

      <Footer />

    </>
  )
}

export default App