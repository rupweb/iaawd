import React from 'react';
import { NavLink } from 'react-router-dom';

const OffCanvas = () => {
    return (
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-body">
                <span type="button" data-bs-dismiss="offcanvas" aria-label="Close" className="w-100"><i className="bi bi-x-lg float-end"></i></span>
                <ul className="p-0 list-inline">
                    <li><NavLink to="/" className="text-decoration-none" role="button"><i className="bi bi-speedometer2 d-block"></i>Introduction</NavLink></li>
                    <li><NavLink to="/contact" className="text-decoration-none" role="button"><i className="bi bi-envelope d-block"></i>Get in Touch</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default OffCanvas;
