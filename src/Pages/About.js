import React from 'react'
import Notification from '../Components/Notification'
import Navbar from '../Components/NavBar'
import TitleBar from '../Components/TitleBar'

import Footer from '../Components/Footer'
import AboutComp from '../Components/AboutComp'

const Contact = () => {
  return (
    <div class="container">
        <Notification backgroundColor='white' Color='black'/>
        <Navbar backgroundColor='black'/>
        <div class="container">

            <div class="about-section">
                <TitleBar title="Contact Us"/>
            </div>

            <div class="about-text" style={{padding:'0%'}}>
               <AboutComp/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact