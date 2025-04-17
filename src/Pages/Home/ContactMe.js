import styles from './Home.module.scss';
import React, { useState } from 'react';
export const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (React.createElement("div", { className: styles.contactMe },
        React.createElement("h1", null, "Contact Me"),
        React.createElement("div", { className: styles.contactForm },
            React.createElement("form", { method: "POST", onSubmit: (e) => {
                    e.preventDefault();
                    return window.open(`mailto:sabrinadelilaarts@gmail.com?subject=Sabrina Delila Arts Contact Form&body=name:${name} %0D%0A email:${email} %0D%0A message:${message}`);
                } },
                React.createElement("input", { name: "name", type: "text", placeholder: "Name", onChange: (e) => setName(e.target.value), value: name }),
                React.createElement("input", { name: "email", type: "email", placeholder: "Email", onChange: (e) => setEmail(e.target.value) }),
                React.createElement("textarea", { name: "message", placeholder: "Message", onChange: (e) => setMessage(e.target.value) }),
                React.createElement("button", { name: "submitButton", type: "submit" }, "Submit")))));
};
//# sourceMappingURL=ContactMe.js.map