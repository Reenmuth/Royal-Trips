import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Quick Links Section */}
                <div className="footer-section quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><strong>Email:</strong> brainmwenda529@gmail.com</li>
                        <li><strong>Phone:</strong> +254 710509927</li>
                        <li><strong>Address:</strong> juja</li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="footer-section social-media">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="icon" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="icon" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="icon" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="icon" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Royal Trip Adventures. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;