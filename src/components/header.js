import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faConciergeBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css'; // Create this file for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Royal Trip Adventures</h1>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">
                            <FontAwesomeIcon icon={faHome} className="icon" />
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link">
                            <FontAwesomeIcon icon={faConciergeBell} className="icon" />
                            <span>Services</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;