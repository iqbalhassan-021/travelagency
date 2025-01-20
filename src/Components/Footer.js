import React from 'react';

const Footer = () => {
    return (
        <div className="container footer">
            <div className="body-cover">
                <div className="footer">
                    <div className="grid-4x margin-20">
                        <div className="footer-card">
                            <a href="#" className="no-decoration">
                                <img src="assets/images/stars_logo_white.png" alt="site logo" className="logo" />
                            </a>
                        </div>
                        <div className="footer-card">
                            <h3>Quick Links</h3>
                            <a href="#" className="no-decoration">Home</a>
                            <a href="#" className="no-decoration">About</a>
                            <a href="#" className="no-decoration">Contact</a>
                            <a href="#" className="no-decoration">Visa</a>
                            <a href="#" className="no-decoration">Appointments</a>
                            <a href="#" className="no-decoration">Tickets</a>
                            <a href="#" className="no-decoration">Login</a>
                        </div>
                        <div className="footer-card">
                            <h3>Contact Links</h3>
                            <a href="#" className="no-decoration">Instagram</a>
                            <a href="#" className="no-decoration">Facebook</a>
                            <a href="#" className="no-decoration">Whatsapp</a>
                            <a href="#" className="no-decoration">@excellentsartrv</a>
                            <a href="#" className="no-decoration">055-5555555</a>
                            <a href="#" className="no-decoration">Developer</a>
                        </div>
                        <div className="footer-card">
                            <h3>Newsletter</h3>
                            <form className="sub">
                                <input type="email" name="email" id="email" placeholder="email" />
                                <button type="submit">
                                    <i className="fa-solid fa-check"></i>
                                </button>
                            </form>
                            <p>address</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
