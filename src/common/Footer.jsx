import React from 'react';
import '../styles/footer.css';

function Footer() {
    const petitionURL = "https://petition.parliament.uk/petitions/660652/sponsors/new?token=hZuO_OZnPgrugYjO67EE";

    return (
        <footer className="border-top py-3 w-100 mt-5 text-center">
            <a 
              href={petitionURL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="sign-petition-link"
            >
                Please sign petition here
            </a>
            <span className="text-muted">© 2024 Rupert St John Webster</span>
        </footer>
    );
}

export default Footer;
