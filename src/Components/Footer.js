import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({marginTop}) => {
    return (
        <div className="container footer">
            <div className="body-cover">
                <div className="footer">
                    <div className="grid-4x" style={{marginTop}}>
                        <div className="footer-card">
                            <Link to="/" className="no-decoration">
                                <img src="assets/images/stars_logo_white.png" alt="site logo" className="logo" />
                            </Link>
                        </div>
                        <div className="footer-card">
                            <h3>Quick Links</h3>
                            <Link to="/" className="no-decoration">Home</Link>
                            <Link to="/about" className="no-decoration">About</Link>
                            <Link to="/contact" className="no-decoration">Contact</Link>
                            <Link to="/visa" className="no-decoration">Visa</Link>
                            <Link to="/appointments" className="no-decoration">Appointments</Link>
                            <Link to="/tickets" className="no-decoration">Tickets</Link>
                            <Link to="/login" className="no-decoration">Login</Link>
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
