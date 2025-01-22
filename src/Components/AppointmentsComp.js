import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentsComp = () => {
    const packages = [
        {
            country: "Country Name 1",
            price: "00.000",
            documents: ["doc 1", "doc 2", "doc 3", "doc 4", "doc 5", "doc 6"],
        },
        {
            country: "Country Name 2",
            price: "00.000",
            documents: ["doc 1", "doc 2", "doc 3", "doc 4", "doc 5", "doc 6"],
        },
        {
            country: "Country Name 3",
            price: "00.000",
            documents: ["doc 1", "doc 2", "doc 3", "doc 4", "doc 5", "doc 6"],
        },
        {
            country: "Country Name 4",
            price: "00.000",
            documents: ["doc 1", "doc 2", "doc 3", "doc 4", "doc 5", "doc 6"],
        },
    ];

    return (
        <div className="container">
            <p className="section-heading">Available Packages</p>
            <div className="body-cover">
                <div className="grid-4x">
                    {packages.map((pkg, index) => (
                        <div className="visa-card" key={index}>
                            {/* Country Name */}
                            <div className="countery">
                                <h2>{pkg.country}</h2>
                            </div>
                            
                            {/* Price */}
                            <div className="price">
                                <h1>{pkg.price}</h1>
                            </div>
                            
                            {/* Documents */}
                            <div className="docs">
                                {pkg.documents.map((doc, docIndex) => (
                                    <p key={docIndex}>{doc}</p>
                                ))}
                            </div>
                            
                            {/* Book Now Button */}
                            <div className="book">
                                  <Link to="/book-appointment"className="no-decoration primary-button rounded">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppointmentsComp;
