import styles from './Home.module.scss'
import React from 'react'

export const ContactMe = () => {
    return (
        <div className={styles.contactMe}>
            <h1>Contact Me</h1>

            <div className={styles.contactForm}>
                <form
                    method="POST"
                    action="mailto: sabrinadelilaarts@gmail.com"
                >
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
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
