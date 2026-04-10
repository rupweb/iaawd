import React from 'react';
import openPopup from '../services/popupDisplay';
import '../styles/minute.css';

const Intro = () => {
    const petitionURL = "https://petition1.netlify.app/";

    return (
        <div className="justified-text">
            <h5>IAAWD charitable purposes</h5>
            <p>
                To advance the protection and welfare of agricultural workers with disabilities and their family members for the public benefit by:
                <ul>
                    <li>Advocating for equitable legal and property rights in agricultural settings.</li>
                    <li>Providing support and resources to disabled agricultural workers and their families to ensure their rights and welfare are upheld.</li>
                    <li>Promoting changes in legislation to protect and advance the rights of disabled agricultural workers.</li>
                </ul>
            </p>
            <p>
                To promote the relief of disabled agricultural workers and their family members through:
                <ul>
                    <li>Legal advocacy to challenge discriminatory practices and policies.</li>
                    <li>Supporting agricultural workers in navigating legal systems regarding inheritance, property rights, and employment discrimination.</li>
                    <li>Educating the public and policymakers about the challenges and rights of disabled agricultural workers.</li>
                </ul>
            </p>
            <p> 
                To create debates in Parliament about <a href={petitionURL} target="_blank" rel="noopener noreferrer">situations like this</a>.
            </p>
        </div>
    );
};

export default Intro;

