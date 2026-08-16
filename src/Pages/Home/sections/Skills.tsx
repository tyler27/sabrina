import React from 'react'
import styles from './Skills.module.scss'

interface Note {
    heading: string
    items: string[]
    /** Paper colour and pin colour for this sticky. */
    paper: string
    pin: string
    ink?: string
    rotate: number
    /** Longer entries get a roomier line height. */
    roomy?: boolean
}

const notes: Note[] = [
    {
        heading: 'Main Skills',
        items: ['Graphic Design', 'Illustration', 'UI & UX Design', 'Digital Art'],
        paper: '#D8C9EC',
        pin: '#8A74C1',
        rotate: -2
    },
    {
        heading: 'Software',
        items: ['Figma', 'Illustrator', 'Photoshop', 'InDesign', 'Canva', 'Procreate'],
        paper: '#C9BCDD',
        pin: '#7C63B9',
        rotate: 1.5
    },
    {
        heading: 'Roles',
        items: [
            'President, HCC Art Club (2023)',
            'PTK Honors Society, 4.0 GPA',
            'PTK All Florida Academic Team (2023)'
        ],
        paper: '#D9C2D0',
        pin: '#8A74C1',
        ink: '#5D4D94',
        rotate: -1,
        roomy: true
    },
    {
        heading: 'Awards',
        items: [
            '2025 TRIAD Magazine: Featured Comic',
            '2024 FASTA Exhibition',
            '2023 & 2024 HCC Juried Art Exhibition',
            'Art Ascent Mag: Artist of Abstract, 2020'
        ],
        paper: '#B7AECB',
        pin: '#A59CCF',
        rotate: 2,
        roomy: true
    }
]

export const Skills: React.FC = () => (
    <section className={styles.skills}>
        <div className={styles.inner}>
            <h2
                data-reveal
                className={styles.title}
            >
                A few things pinned to the corkboard
            </h2>

            <div className={styles.grid}>
                {notes.map((note) => (
                    <div
                        key={note.heading}
                        data-reveal
                        className={styles.note}
                        style={{
                            background: note.paper,
                            color: note.ink ?? '#463473',
                            transform: `rotate(${note.rotate}deg)`
                        }}
                    >
                        <span
                            aria-hidden="true"
                            className={styles.pin}
                            style={{ background: note.pin }}
                        />
                        <h3
                            className={styles.heading}
                            style={{ color: note.ink ?? '#463473' }}
                        >
                            {note.heading}
                        </h3>
                        <ul className={note.roomy ? `${styles.list} ${styles.roomy}` : styles.list}>
                            {note.items.map((item) => (
                                <li key={item}>
                                    <span
                                        aria-hidden="true"
                                        className={styles.bullet}
                                    >
                                        *
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
)
