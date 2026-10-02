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

  const [page, setPage] = useState('home')
  const [selectedMentor, setSelectedMentor] = useState(null)
  const [booking, setBooking] = useState(null)
  const [bookings, setBookings] = useState([])

  const bookMentor = (mentor) => {
    setSelectedMentor(mentor)
    setPage('booking')
  }

  const confirmBooking = (newBooking) => {
    setBooking(newBooking)
    setBookings([...bookings, newBooking])
    setPage('confirmed')
  }

  return (
    <>
      <Navbar
        onHome={() => setPage('home')}
        onMentors={() => setPage('home')}
        onBookMentor={() => setPage('home')}
        onMyBookings={() => setPage('bookings')}
      />

      {page === 'home' && (
        <>
          <Hero />

          <MentorList
            onBook={bookMentor}
          />
        </>
      )}

      {page === 'booking' && (
        <BookingForm
          mentor={selectedMentor}
          onConfirm={confirmBooking}
        />
      )}

      {page === 'confirmed' && (
        <BookingSummary
          booking={booking}
          onViewBookings={() => setPage('bookings')}
        />
      )}

      {page === 'bookings' && (
        <MyBookings
          bookings={bookings}
        />
      )}

      <Footer />
    </>
  )
}

export default App