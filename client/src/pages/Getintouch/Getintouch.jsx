import React, { useState } from 'react';
import Confetti from './Confetti';
import './getintouch.css';

const GetInTouch = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        fetch('https://formspree.io/f/manwrnnb', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ subject, message }),
        })
        .then(response => {
            if (response.ok) {
                setEmailSent(true);
                setSubject('');
                setMessage('');
                setTimeout(() => setEmailSent(false), 3000); 
            }
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div id="getintouch-container">
            <h1>Let&apos;s connect!</h1>

            <p>Interested in collaborating or have a query? Drop me a message—I’d love to hear from you!</p>
            <div className="contact-form">
                <form onSubmit={sendEmail}>
                    <label>Objet:</label>
                    <input 
                        type="text" 
                        name="subject" 
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)} 
                        required 
                    />
                    <label>Message:</label>
                    <textarea 
                        name="message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        required 
                    />
                    <button type="submit">Send</button>
                </form>
                {emailSent && <p>Your message has been sent successfully!</p>}
            </div>
            <Confetti />
        </div>
    );
};

export default GetInTouch;
