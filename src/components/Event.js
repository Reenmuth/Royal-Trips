import React from 'react';
import { Fade } from 'react-reveal';
import '../styles/event.css';

const EventsSection = () => {
    return (
        <Fade bottom>
            <div className="events-section">
                <h2>Upcoming Events</h2>
                <div className="events-grid">
                    <div className="event-card">
                        <img src="/assets/images/event1.jpg" alt="Event 1" />
                        <h3>Adventure in the Alps</h3>
                        <p>Join us for an unforgettable trekking experience in the Swiss Alps.</p>
                    </div>
                    <div className="event-card">
                        <img src="/assets/images/event2.jpg" alt="Event 2" />
                        <h3>Beach Getaway</h3>
                        <p>Relax and unwind on the pristine beaches of Bali.</p>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default EventsSection;