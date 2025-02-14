import React, { useState } from 'react';
import "./AdminPanel.css"

const AdminPanel = () => {
    const [activeSection, setActiveSection] = useState('tickets');

    return (
        <div className="admin-container">
            <div className="sidebar">
                <h2>Admin Panel</h2>
                <ul>
                    <li onClick={() => setActiveSection('tickets')}>Tickets</li>
                    <li onClick={() => setActiveSection('visa')}>Visa</li>
                    <li onClick={() => setActiveSection('homepage')}>Homepage</li>
                    <li onClick={() => setActiveSection('appointments')}>Appointments</li>
                    <li onClick={() => setActiveSection('customers')}>Customers</li>
                    <li onClick={() => setActiveSection('settings')}>Settings</li>
                </ul>
            </div>
            <div className="main-content">
                {activeSection === 'tickets' && (
                    <section>
                        <h2>Tickets Management</h2>
                        <form>
                            <input type="text" placeholder="Ticket Name" required />
                            <input type="text" placeholder="Price" required />
                            <input type="text" placeholder="Destination" required />
                            <input type="date" required />
                            <input type="number" placeholder="Available Seats" required />
                            <input type="text" placeholder="Airline Name" required />
                            <input type="text" placeholder="Class Type (Economy, Business)" required />
                            <button type="submit">Add Ticket</button>
                        </form>
                    </section>
                )}
                {activeSection === 'visa' && (
                    <section>
                        <h2>Visa Management</h2>
                        <form>
                            <input type="text" placeholder="Country" required />
                            <textarea placeholder="Required Documents" required></textarea>
                            <input type="text" placeholder="Price" required />
                            <input type="text" placeholder="Processing Time" required />
                            <input type="text" placeholder="Visa Type (Tourist, Business)" required />
                            <button type="submit">Add Visa</button>
                        </form>
                    </section>
                )}
                {activeSection === 'homepage' && (
                    <section>
                        <h2>Homepage Management</h2>
                        <form>
                            <input type="text" placeholder="Hero Text" required />
                            <input type="text" placeholder="Headline" required />
                            <textarea placeholder="About Us" required></textarea>
                            <input type="text" placeholder="Facebook Link" required />
                            <input type="text" placeholder="Instagram Link" required />
                            <input type="text" placeholder="Twitter Link" required />
                            <button type="submit">Update Homepage</button>
                        </form>
                    </section>
                )}
                {activeSection === 'appointments' && (
                    <section>
                        <h2>Appointments Management</h2>
                        <form>
                            <select required>
                                <option value="">Select Appointment Type</option>
                                <option value="Work Visa">Work Visa</option>
                                <option value="Study Visa">Study Visa</option>
                                <option value="Tourist Visa">Tourist Visa</option>
                            </select>
                            <input type="text" placeholder="Country" required />
                            <input type="text" placeholder="Price" required />
                            <input type="date" required />
                            <input type="text" placeholder="Consultant Name" required />
                            <button type="submit">Add Appointment</button>
                        </form>
                    </section>
                )}
                {activeSection === 'customers' && (
                    <section>
                        <h2>Customer Management</h2>
                        <form>
                            <input type="text" placeholder="Customer Name" required />
                            <input type="email" placeholder="Email" required />
                            <input type="text" placeholder="Phone Number" required />
                            <textarea placeholder="Customer Notes"></textarea>
                            <button type="submit">Add Customer</button>
                        </form>
                    </section>
                )}
                {activeSection === 'settings' && (
                    <section>
                        <h2>Settings</h2>
                        <form>
                            <input type="password" placeholder="Change Password" required />
                            <input type="text" placeholder="Admin Contact Email" required />
                            <button type="submit">Save Settings</button>
                        </form>
                    </section>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
