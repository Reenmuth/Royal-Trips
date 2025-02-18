import React from 'react';
import { Fade } from 'react-reveal';
import '../styles/motto.css';

const MottoSection = () => {
    return (
        <Fade bottom>
            <div className="motto-section">
                <h2>Our Motto</h2>
                <p>Exploring the world and keeping memories alive.</p>
            </div>
        </Fade>
    );
};

export default MottoSection;