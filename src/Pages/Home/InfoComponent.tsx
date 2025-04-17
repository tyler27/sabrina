import styles from './Home.module.scss'
import React from 'react'

export const InfoComponent = () => (
    <div className={styles.info}>
        <div className={styles.infoBlock}>
            <h1>Meet Sabrina D. Telis,</h1>
            <h2>Graphic Designer & Illustrator</h2>
            <p className={styles.introductionText}>Welcome!</p>
            <p className={styles.introductionText}>I'm a freelance graphic designer based in Apollo Beach, Florida, with a passion for visual storytelling.</p>

            <p className={styles.introductionText}>
                Over the past five years, I've had the opportunity to create illustrations for books, magazines, and marketing campaigns. In 2023, I earned my Associate of Arts in Fine Art along with a Graphic Design Certification—with Honors.
                Take a look around and explore my work!
            </p>
        </div>
        <img
            className={styles.profilePicture}
            alt={'Picture of sabrina'}
            src={'public/assets/profile.png'}
        />
    </div>
)
