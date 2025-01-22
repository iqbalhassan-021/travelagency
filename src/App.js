import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Tickets from './Pages/Tickets';
import BookTickets from './Pages/BookTickets';
import Visa from './Pages/Visa';
import BookVisa from './Pages/BookVisa';
import Appointments from './Pages/Appointments';
import BookAppointment from './Pages/BookAppointment';
import TicketBooking from './Pages/TicketBooking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/book-tickets" element={<BookTickets />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/book-visa" element={<BookVisa />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/book-ticket" element={<TicketBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
