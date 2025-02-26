import React from 'react';
import { motion } from 'framer-motion';
import '../styles/service.css';

const ServicesSection = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="services-section"
        >
            <h2>Our Services</h2>
            <div className="services-grid">
                {[
                    { title: "Flight Booking", text: "Book your flights with ease and convenience." },
                    { title: "Accommodation Booking", text: "Find the best hotels and resorts for your stay." },
                    { title: "Tour Packages", text: "Explore curated tour packages for every destination." },
                    { title: "Destination Accommodation", text: "Stay in unique accommodations tailored to your needs." }
                ].map((service, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: index * 0.2, duration: 0.5 }} 
                        className="service-card"
                    >
                        <h3>{service.title}</h3>
                        <p>{service.text}</p>
                    </motion.div>
                ))}
            </div>

        </motion.div>
    );
};

export default ServicesSection;