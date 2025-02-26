import React from 'react';
import { motion } from 'framer-motion';

const VisionSection = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="vision-section"
        >
            <h2>Our Vision</h2>
            <p>Making everyone experience the beauty and nature at an affordable fee.</p>
        </motion.div>
    );
};

export default VisionSection;
