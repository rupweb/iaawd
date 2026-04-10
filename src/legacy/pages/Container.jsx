import React from 'react';
import { useDarkMode } from '../js/darkModeContext.js';
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';
import Hero from './Hero.jsx'; 
import { Container } from 'react-bootstrap';

import '../styles/container.css';

const LayoutContainer = ({ children }) => {
  const { isDarkMode } = useDarkMode(); // Context to get mode

  return (
    <div className={isDarkMode ? 'darkMode' : 'lightMode'}>
      <div className="header-container">
        <Header />
      </div>
      <div className="hero-container">
        <Hero />
      </div>
      <div className="custom-container">
        <Container fluid>
          <div className="children-container">
            {children}
          </div>
        </Container>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default LayoutContainer;
