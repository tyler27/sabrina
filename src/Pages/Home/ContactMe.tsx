import styles from './Home.module.scss'
import React, { useState } from 'react'

export const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className={styles.contactMe}>
            <h1>Contact Me</h1>

            <div className={styles.contactForm}>
                <form
                    method="POST"
                    onSubmit={ (e) => {
                        e.preventDefault();
                        return window.open(`mailto:sabrinadelilaarts@gmail.com?subject=Sabrina Delila Arts Contact Form&body=name:${name} %0D%0A email:${email} %0D%0A message:${message}`)
                    }}
                >
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                        name="submitButton"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
