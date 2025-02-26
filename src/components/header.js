import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faConciergeBell, faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            {/* TITLE AND HERO SECTION */}
            <div className="hero-section">
                <h1 className="header-title">Royal Trip Adventures</h1>
                <p className="header-subtitle">Explore the world with us – Your journey begins here!</p>
            </div>

            {/* NAVIGATION */}
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <FontAwesomeIcon icon={faHome} className="icon" />
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <FontAwesomeIcon icon={faConciergeBell} className="icon" />
                            <span>Services</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                            <span>About</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>
        </header>
    );
};

export default Header;