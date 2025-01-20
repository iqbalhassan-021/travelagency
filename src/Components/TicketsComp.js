import React from 'react';

const TicketsComp = () => {
  return (
    <div className="tickets-container">
      <div className="ticket">
        <div className="headline-container">
          <h2>
            <i className="fa-solid fa-earth-americas"></i>
            B O A R D I N G - P A S S
          </h2>
        </div>
        <div className="tickrt-info">
          <div className="ticket-tab">
            <h2>
              <i className="fa-solid fa-plane"></i>
              DEPARTURE
            </h2>
            <h3>7:54am</h3>
            <h3>Washington, DC</h3>
            <h3>DC</h3>
          </div>

          <div className="ticket-tab">
            <h2>
              <i className="fa-solid fa-plane"></i>
              ARRIVAL
            </h2>
            <h3>11:54am</h3>
            <h3>Los Angeles</h3>
            <h3>LAX</h3>
          </div>

          <div className="ticket-tab">
            <h2>
              <i className="fa-solid fa-user"></i>
              Passenger Name
            </h2>
            <p><strong>Flight : </strong>xyz</p>
            <p><strong>Gate : </strong>xyz</p>
            <p><strong>Boarding : </strong>xyz</p>
            <p><strong>Seat : </strong>xyz</p>
          </div>

          <div className="ticket-tab">
            <a href="#" className="no-decoration primary-button">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsComp;
