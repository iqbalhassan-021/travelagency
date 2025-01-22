import React from 'react';

const BookVisaForm = () => {
  return (
    <div className="container" style={{ backgroundColor: '#800000' }}>
      <div className="body-cover" style={{ padding: '0%' }}>
        <div className="contact-us">
          <form className="contact-form">
            <div className="form-tab">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required name="name" placeholder="Your Name" />
            </div>
            <div className="form-tab">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" required name="phone" placeholder="Phone Number" />
            </div>
            <div className="form-tab">
              <label htmlFor="cnic">CNIC</label>
              <input type="text" id="cnic" required name="cnic" placeholder="CNIC" />
            </div>
            <div className="form-tab">
              <label htmlFor="for">Applying for?</label>
              <select name="for" id="for" required>
                <option value="myselfe">My Selfe</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-tab">
              <label htmlFor="tickets">Choose the ticket</label>
              <select name="tickets" id="tickets" required>
                <option value="ticket">Ticket</option>
                <option value="visa">Visa</option>
                <option value="consultancy">Consultancy</option>
              </select>
            </div>
            <div className="form-tab">
              <button type="submit" className="primary-button rounded">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookVisaForm;
