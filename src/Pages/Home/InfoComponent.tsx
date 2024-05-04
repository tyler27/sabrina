import styles from './Home.module.scss'
import React from 'react'

export const InfoComponent = () => (
    <div className={styles.info}>
        <div className={styles.infoBlock}>
            <h1>Meet Sabrina D. Telis,</h1>
            <h2>Graphic Designer & Illustrator</h2>
            <p className={styles.introductionText}>Hello there!</p>
            <p className={styles.introductionText}>I am a freelance graphic designer based in Apollo Beach Florida.</p>

            <p className={styles.introductionText}>
                With 4 years of experience, I have published illustrations in books, magazines & marketing content. I
                received my AA in Fine Art & Graphic Design Certification with Honors in 2023. Come take a look around!
            </p>
        </div>
        <img
            className={styles.profilePicture}
            alt={'Picture of sabrina'}
            src={'public/assets/profile.png'}
        />
    </div>
)
