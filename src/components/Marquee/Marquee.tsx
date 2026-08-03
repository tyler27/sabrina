import React from 'react'
import { marqueeWords } from '../../data/site'
import styles from './Marquee.module.scss'

const sparkleColours = ['#F1DB94', '#CBACB1', '#8A74C1', '#7C63B9', '#8A74C1']

// The strip is duplicated so the -50% translate loops seamlessly.
const Run: React.FC = () => (
    <span className={styles.run}>
        {marqueeWords.map((word, index) => (
            <React.Fragment key={word}>
                <span className={styles.word}>{word}</span>
                <span
                    className={styles.sparkle}
                    style={{ color: sparkleColours[index] }}
                >
                    ✦
                </span>
            </React.Fragment>
        ))}
    </span>
)

/** Scrolling band of disciplines that separates the hero from the page. */
export const Marquee: React.FC = () => (
    <div
        className={styles.marquee}
        aria-hidden="true"
    >
        <div className={styles.track}>
            <Run />
            <Run />
        </div>
    </div>
)
