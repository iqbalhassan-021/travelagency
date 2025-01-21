import React from 'react'
import Notification from '../Components/Notification'
import Navbar from '../Components/NavBar'
import TitleBar from '../Components/TitleBar'

import Footer from '../Components/Footer'
import BookTicketForm from '../Components/BookTicketForm'

const BookVisaPage = () => {
  return (
    <div class="container">
        <Notification backgroundColor='white' Color='black'/>
        <Navbar backgroundColor='black'/>
        <div class="container">

            <div class="about-section">
                <TitleBar title="Book a Visa"/>
            </div>

            <div class="about-text" style={{padding:'0px'}}>
              <BookTicketForm/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default BookVisaPage