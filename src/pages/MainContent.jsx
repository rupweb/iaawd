import React from 'react';
import LayoutContainer from './Container';
import Intro from './Intro';
import '../styles/maincontent.css';

const MainContent = () => {
  const petitionURL = "https://petition.parliament.uk/petitions/660652/sponsors/new?token=hZuO_OZnPgrugYjO67EE";

  return (
    <LayoutContainer>
      <div className="main-content">
        <div className="content-row align-items-center">
          <a href={petitionURL} target="_blank" rel="noopener noreferrer" className="qr-image-container">
            <img src="images/qr-code.jpg" alt="QR Code" className="img-fluid qr-col" />
          </a>
          <h1 className="left-title">International Association for Agricultural Workers with Disabilities</h1>
        </div>
        {/* intro */}
        <Intro />
      </div>
    </LayoutContainer>
  );
}

export default MainContent;





