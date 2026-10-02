import { useState } from 'react'
import './App.css'

import Navbar from './components/navbar'
import Hero from './components/hero'
import MentorList from './components/MentorList'
import BookingForm from './components/BookingForm'
import BookingSummary from './components/BookingSummary'
import MyBookings from './components/MyBookings'
import Footer from './components/footer'

function App() {

  const [selectedMentor, setSelectedMentor] = useState(null)
  const [booking, setBooking] = useState(null)
  const [bookings, setBookings] = useState([])
  const [page, setPage] = useState('home')

  const handleBook = (mentor) => {
    setSelectedMentor(mentor)
    setPage('booking')
  }

  const handleConfirmBooking = (newBooking) => {
    setBooking(newBooking)

    setBookings([...bookings, newBooking])

    setPage('confirmed')
  }

  const handleViewBookings = () => {
    setPage('bookings')
  }

  const handleHome = () => {
    setPage('home')
  }

  return (
    <>
      <Navbar onMyBookings={handleViewBookings} />

      <main>

        {page === 'home' && (
          <>
            <Hero />
            <MentorList onBook={handleBook} />
          </>
        )}

        {page === 'booking' && (
          <BookingForm
            mentor={selectedMentor}
            onConfirm={handleConfirmBooking}
          />
        )}

        {page === 'confirmed' && (
          <BookingSummary
            booking={booking}
            onViewBookings={handleViewBookings}
          />
        )}

        {page === 'bookings' && (
          <MyBookings bookings={bookings} />
        )}

      </main>

      <Footer />
    </>
  )
}

export default App