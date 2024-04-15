import React from "react";
import { useDarkMode } from '../js/darkModeContext.js';
import OffCanvas from './OffCanvas.jsx';

import '../styles/header.css';

const Header = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <nav className="navbar fixed-top shadow">
            <div className="container-fluid-centered">
                {/* Left-hand column */}
                <div className="left-column">
                    <button className="btn border-0 shadow-0 position-fixed px-1 py-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" >
                        <i className="bi bi-list"></i>
                    </button>
                </div>

                {/* Middle column */}
                <div className="middle-column">
                    <a className="navbar-brand" href="#">
                        <img src="images/dark.jpg" className="dark-logo" width={500} alt="Dark Logo" />
                        <img src="images/light.jpg" className="light-logo" width={500} alt="Light Logo" />
                    </a>
                </div>

                {/* Right-hand column */}
                <div className="right-column">
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="darkModeSwitch"
                            checked={isDarkMode}
                            onChange={() => toggleDarkMode()}
                        />
                        <label className="form-check-label" htmlFor="darkModeSwitch">
                            {isDarkMode ? <i className="bi bi-brightness-high"></i> : <i className="bi bi-moon-stars-fill"></i>}
                        </label>
                    </div>
                </div>
            </div>

            <OffCanvas />
        </nav>
    );
}

export default Header;
