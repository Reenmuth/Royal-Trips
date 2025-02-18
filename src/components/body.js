import React from 'react';
import AimSection from './AimSection';
import ServicesSection from './ServiceSection';
import MottoSection from './MottoSection';
import VisionSection from './VisionSection';
import EventsSection from './Event';
import '../styles/body.css';

const Body = () => {
    return (
        <div className="body">
            {/* Video Background Section */}
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src="/assets/videos/adventure-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay">
                    <h1>Explore the World with Royal Trip Adventures</h1>
                </div>
            </div>

            {/* Sections */}
            <AimSection />
            <ServicesSection />
            <MottoSection />
            <VisionSection />
            <EventsSection />
        </div>
    );
};

export default Body;