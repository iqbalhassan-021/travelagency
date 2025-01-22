import React from 'react';

const Hero = () => {
    const heading = "HAJJ UMRAH";
    const headingWords = heading.split(' ');

    return (
        <div className="container">
            <div className="hero center">
                <div className="hero-text center">
                    <h1 id="heading" className={headingWords.length > 2 ? 'smallerFontSize' : 'largerFontSize'}>
                        {heading}
                    </h1>
                    <p>
                        Hajj and Umrah packages are available at low and affordable prices
                    </p>
                    <br />
                    <br />
                    <a href="#" className="no-decoration primary-button rounded">
                        Get Started
                    </a>
                </div>
                <br />
                <br />
            </div>
        </div>
    );
};

export default Hero;
