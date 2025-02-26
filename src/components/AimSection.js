import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Aim.css';
import pic1 from '../uploads/p9.jpg';
import pic2 from '../uploads/p10.jpg';
import pic3 from '../uploads/pic4.jpeg';
import pic4 from '../uploads/pic6.jpeg';
import pic5 from '../uploads/pic5.jpeg';

const images = [pic1, pic2, pic3, pic4, pic5];

const AimSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup function
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="aim-vision-motto-section"
        >
            {/* Left Side: Aim, Vision, Motto */}
            <div className="left-container">
                {/* Aim and Vision Side by Side */}
                <div className="top-sections">
                    {/* Aim Section */}
                    <div className="content-section">
                        <h2>Our Aim</h2>
                        <p>We strive to bring people closer to nature, providing affordable and unforgettable travel experiences.</p>
                    </div>

                    {/* Vision Section */}
                    <div className="content-section">
                        <h2>Our Vision</h2>
                        <p>Our goal is to make adventure travel accessible to all. Experiencing the beauty of nature should be a right for everyone.</p>
                    </div>
                </div>

                {/* Motto Section Below */}
                <div className="content-section">
                    <h2>Our Motto</h2>
                    <p>"Exploring the world and keeping memories alive." Our trips are designed to create lifelong memories with every journey.</p>
                </div>
            </div>

            {/* Right Side: Image Carousel */}
            <div className="carousel-container" >
                <AnimatePresence>
                    <motion.img
                        key={currentImageIndex}
                        src={images[currentImageIndex]}
                        alt="Adventure destination"
                        className="carousel-image"
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default AimSection;
