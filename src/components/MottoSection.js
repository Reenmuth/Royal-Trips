import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import pic1 from '../uploads/p12.jpeg'; // Manager's actual image
import '../styles/motto.css'; // Ensure this file is created for styling

const ManagerWelcome = () => {
    const messages = [
        "Welcome to Royal Trip Adventures!",
        "We bring you unforgettable travel experiences.",
        "Join us on an epic journey to explore the world.",
        "Our goal is to make adventure travel accessible to all."
    ];

    const [currentMessage, setCurrentMessage] = useState('');
    const [messageIndex, setMessageIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (isDeleting) {
                setCurrentMessage((prev) => prev.slice(0, -1));
            } else {
                setCurrentMessage(messages[messageIndex].slice(0, currentMessage.length + 1));
            }

            if (!isDeleting && currentMessage === messages[messageIndex]) {
                setTimeout(() => setIsDeleting(true), 1500); // Wait before starting to delete
            }

            if (isDeleting && currentMessage === '') {
                setIsDeleting(false);
                setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length); // Cycle through messages
            }
        }, isDeleting ? 50 : 100);

        return () => clearInterval(typingInterval);
    }, [currentMessage, isDeleting, messageIndex, messages]);

    return (
        <motion.div 
            className="manager-welcome-container"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
        >
            <div className="manager-welcome-left">
                <img 
                    src={pic1} // Actual image of the manager
                    alt="Manager"
                    className="manager-image"
                />
            </div>
            <div className="manager-welcome-right">
                <h2>Our Manager's Message</h2>
                <p>{currentMessage}</p>
            </div>
        </motion.div>
    );
};

export default ManagerWelcome;
