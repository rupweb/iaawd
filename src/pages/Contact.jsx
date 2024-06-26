import React, { useState, useEffect } from 'react';
import { addFormData } from '../js/form.js'; 
import { fetchData } from '../js/s3.js';
import LayoutContainer from './Container.jsx';
import '../styles/minute.css'; 
import '../styles/contact.css'; 

const ContactPage = () => {
    // State for the contact form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Function to handle form changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(e);
        addFormData(formData.name, formData.email, formData.message)
            .then(() => {
                console.log('Data submitted to S3');
            })
            .catch(error => {
                console.error('Error submitting data:', error);
            });
    };

    useEffect(() => {
        fetchData()
            .then(() => {
                console.log('Form data fetched');
            })
            .catch(error => {
                console.error('Error fetching form data:', error);
            });
    }, []); 

    return (
        <LayoutContainer>
            <div>
                <div className="contact">
                    <h1>Contact IAAWD</h1>
                    <p>
                        Email: <a href="mailto:rupert@webstersystems.co.uk">rupert@webstersystems.co.uk</a>
                    </p>
                    <p>Did you ever do as much as 1 day's work in agriculture?</p>
                    <p>Do or have you suffered any serious disability?</p>
                    <br/>
                    <form id="theForm" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </LayoutContainer>
    );
}

export default ContactPage;

