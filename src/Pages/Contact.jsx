import React, { useState } from 'react';
import '../Styles/contact.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Contact = () => {
    const [confirmation, setConfirmation] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch('/Backend/form.php', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                setConfirmation('Thank you for your submission! Your form has been sent successfully.');
                form.reset();
            } else {
                setConfirmation('There was a problem sending your email. Please try again.');
            }
        } catch (error) {
            setConfirmation('There was a problem sending your email. Please try again.');
        }
    };

    return (
        <>
            <Header />
            <div className="section">
                <div className="right">
                    <h3>Get in Touch</h3>
                    <h4>Connect with Us for Expert Assistance</h4>
                    <form id="contact-form" onSubmit={handleSubmit} >
                        <div className="input-row">
                            <div className="input">
                                <label htmlFor="first_name">First Name:</label>
                                <input type="text" id="first_name" name="first_name" required />
                                <span className="error-message" id="first-name-error"></span>
                            </div>
                            <div className="input">
                                <label htmlFor="last_name">Last Name:</label>
                                <input type="text" id="last_name" name="last_name" required />
                                <span className="error-message" id="last-name-error"></span>
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                                <span className="error-message" id="email-error"></span>
                            </div>
                            <div className="input">
                                <label htmlFor="phone">Phone Number:</label>
                                <input type="tel" id="phone" name="phone" required />
                                <span className="error-message" id="phone-error"></span>
                            </div>
                        </div>
                        <div className="input">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                            <span className="error-message" id="message-error"></span>
                        </div>
                        <button type="submit" className="submit-button" name="submit">Submit</button>
                    </form>
                    {confirmation && <div className="confirmation"><p>{confirmation}</p></div>}
                </div>
                <div className="left">
                    <h3>Contact Info</h3>
                    <div className="contact-section">
                        <h4>Office Address</h4>
                        <p>Landstrasse 61, 5415 Nussbaumen, Switzerland</p>
                    </div>
                    <div className="contact-section">
                        <h4>Telephone</h4>
                        <p><a href="tel:+18145032233">18145032233</a></p>
                    </div>
                    <div className="contact-section">
                        <h4>Mail Us</h4>
                        <p><a href="mailto:support@saepes.com">support@saepes.com</a></p>
                    </div>
                    <div className="contact-section">
                        <h4>Opening Hours</h4>
                        <p>Mon-Fri: 19:00-7:00</p>
                        <p>Sat-Sun: Closed</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
