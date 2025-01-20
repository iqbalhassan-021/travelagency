import React from 'react';

const SearchTickets = () => {
    return (
        <div className="container">
            <div className="body-cover">
                <div className="search-form-holder center">
                    <form className="search-form rounded">
                        <div className="search-tab">
                            <label htmlFor="flightDate">Flight Date</label>
                            <select name="flightDate" id="flightDate">
                                <option value="10-10-24">10-10-24</option>
                                <option value="11-10-24">11-10-24</option>
                                <option value="12-10-24">12-10-24</option>
                            </select>
                        </div>
                        <div className="search-tab">
                            <label htmlFor="flight">Flight</label>
                            <select name="flight" id="flight">
                                <option value="flight1">Flight 1</option>
                                <option value="flight2">Flight 2</option>
                                <option value="flight3">Flight 3</option>
                            </select>
                        </div>
                        <div className="search-tab">
                            <label htmlFor="flightTime">Flight Time</label>
                            <select name="flightTime" id="flightTime">
                                <option value="morning">Morning</option>
                                <option value="afternoon">Afternoon</option>
                                <option value="evening">Evening</option>
                            </select>
                        </div>
                        <div className="search-tab">
                            <label htmlFor="destination">Flight Destination</label>
                            <select name="destination" id="destination">
                                <option value="new-york">New York</option>
                                <option value="london">London</option>
                                <option value="paris">Paris</option>
                            </select>
                        </div>
                        <button type="submit" className="rounded-button rounded">GO</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchTickets;
