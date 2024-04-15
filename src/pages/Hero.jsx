import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/hero.css';

const Hero = () => {

    const petitionURL = "https://petition.parliament.uk/petitions/660652/sponsors/new?token=hZuO_OZnPgrugYjO67EE";

    return (
        <div className="hero-content">
            <Row>
                <Col>
                <a href={petitionURL} target="_blank" rel="noopener noreferrer">
                    <img src="images/taunton trees 1.gif" alt="Taunton Trees" className="img-fluid img-fixed-height" />
                </a>

                <a href={petitionURL} target="_blank" rel="noopener noreferrer">
                    <img src="images/taunton trees 2.gif" alt="Taunton Trees" className="img-fluid img-fixed-height" />
                </a>

                <a href={petitionURL} target="_blank" rel="noopener noreferrer">
                    <img src="images/lourdes2.jpg" alt="Persons with Disabilities" className="img-fluid img-fixed-height" />
                </a>

                <a href={petitionURL} target="_blank" rel="noopener noreferrer">
                    <img src="images/taunton trees 3.gif" alt="Taunton Trees" className="img-fluid img-fixed-height" />
                </a>

                <a href={petitionURL} target="_blank" rel="noopener noreferrer">
                    <img src="images/taunton trees 4.gif" alt="Taunton Trees" className="img-fluid img-fixed-height" />
                </a>
                </Col>
            </Row>
        </div>
    );
};

export default Hero;
