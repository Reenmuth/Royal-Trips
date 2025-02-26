import React from 'react';
import { motion } from 'framer-motion';
import '../styles/event.css';
import pic1 from '../uploads/pic3.jpg';
//import pic2 from '../uploads/pic5.jpg';
import pic3 from '../uploads/pic3.jpg';
import pic2 from '../uploads/pic2.jpg';
import pic4 from '../uploads/pic1.png';
import pic5 from '../uploads/pic5.jpeg';



const EventsSection = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="events-section"
        >
            <h2>Upcoming Events</h2>
            <div className="events-grid">
                {[
                    { img: pic3, title: "Karuru Waterfall, Aberdare", text: "Experience the breathtaking views of Kenya’s tallest waterfall, surrounded by lush greenery in Aberdare National Park." },  
                    { img: pic2, title: "Diani", text: "Enjoy the white sandy beaches and crystal-clear waters of Diani, a tropical paradise on Kenya’s coastline." },  
                    { img: pic4, title: "Namanga Border", text: "Explore the vibrant cross-border town of Namanga, a gateway between Kenya and Tanzania with stunning views of Mount Kilimanjaro." },  
                    { img: pic5, title: "Mt. Longonot", text: "Hike to the rim of Mt. Longonot and take in the spectacular panoramic views of the Great Rift Valley." }
                    
                ].map((event, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: index * 0.2, duration: 0.5 }} 
                        className="event-card"
                    >
                        <img src={event.img} alt={event.title} />
                        <h3>{event.title}</h3>
                        <p>{event.text}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default EventsSection;
