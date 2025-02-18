import React from 'react';
import { Fade } from 'react-reveal';
import '../styles/service.css';

const ServicesSection = () => {
    return (
        <Fade bottom>
            <div className="services-section">
                <h2>Our Services</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <h3>Flight Booking</h3>
                        <p>Book your flights with ease and convenience.</p>
                    </div>
                    <div className="service-card">
                        <h3>Accommodation Booking</h3>
                        <p>Find the best hotels and resorts for your stay.</p>
                    </div>
                    <div className="service-card">
                        <h3>Tour Packages</h3>
                        <p>Explore curated tour packages for every destination.</p>
                    </div>
                    <div className="service-card">
                        <h3>Destination Accommodation</h3>
                        <p>Stay in unique accommodations tailored to your needs.</p>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default ServicesSection;