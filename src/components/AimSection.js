import React from 'react';
import { Fade } from 'react-reveal';
import '../styles/Aim.css';

const AimSection = () => {
    return (
        <Fade bottom>
            <div className="aim-section">
                <h2>Our Aim</h2>
                <p>Exploring the world and keeping memories alive.</p>
                <div className="image-grid">
                    <img src="/assets/images/aim1.jpg" alt="Aim 1" />
                    <img src="/assets/images/aim2.jpg" alt="Aim 2" />
                    <img src="/assets/images/aim3.jpg" alt="Aim 3" />
                </div>
            </div>
        </Fade>
    );
};

export default AimSection;