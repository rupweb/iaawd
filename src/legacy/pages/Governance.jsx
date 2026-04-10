import React from 'react';
import LayoutContainer from './Container';
import '../styles/maincontent.css';

const Governance = () => {
  return (
    <LayoutContainer>
      <div className="main-content">
        <div className="content-row align-items-center">
          <h1 className="left-title">Governing Document</h1>
        </div>
        <br />
        <iframe 
          src="/IAAWD Governing Document.pdf" 
          style={{ width: '100%', height: '1000px' }} 
          frameBorder="1"
          title="Governing Document"
        >
          This browser does not support PDFs. Please download the PDF to view it.
        </iframe>
      </div>
    </LayoutContainer>
  );
}

export default Governance;

