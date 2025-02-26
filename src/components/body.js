import React, { useState, useEffect } from 'react';
import AimSection from './AimSection';
import ServicesSection from './ServiceSection';
import EventsSection from './Event';
import ManagerWelcome from './MottoSection';
import '../styles/body.css';
import adventureVideo from '../uploads/v7.mp4';

const destinations = [
    "Explore the World with Royal Trip Adventures",
    "Join us for an epic adventure to Mt. Longonot",
    "Discover the beauty of Hell's Gate National Park",
    "Experience breathtaking views at Mount Kenya",
    "Safari and nature walks in diani",
    "Unforgettable hikes at Aberdare Ranges",
];

const Body = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentText = destinations[index];
        let typingSpeed = isDeleting ? 50 : 100; // Typing speed

        if (!isDeleting && charIndex === currentText.length) {
            // Pause before starting to delete
            setTimeout(() => setIsDeleting(true), 1500);
            return;
        }

        if (isDeleting && charIndex === 0) {
            // Move to next text after deleting
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % destinations.length);
            return;
        }

        const timeout = setTimeout(() => {
            setText(currentText.substring(0, charIndex + (isDeleting ? -1 : 1)));
            setCharIndex((prevChar) => prevChar + (isDeleting ? -1 : 1));
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index]);

    return (
        <div className="body">
            {/* Video Background Section */}
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src={adventureVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay">
                    <h1 className="typing-effect">{text}<span className="cursor">|</span></h1>
                </div>
            </div>

            {/* Sections */}
            <ManagerWelcome />
            <AimSection />
            <ServicesSection />
            <EventsSection />
        </div>
    );
};

export default Body;
