import React from 'react'
import { Asterisk } from '../../../components/Decor/Decor'
import { useDraggable } from '../../../hooks/useDraggable'
import { currentAge } from '../../../data/site'
import { asset } from '../../../data/projects'
import styles from './About.module.scss'

/** Built per render so the age is right whenever the page is opened. */
const buildNote = (age: number) => [
    `Hi! I’m a ${age} year old artist with`,
    'a love for visual storytelling',
    'and a flair for horror. ☀',
    '',
    'On a cozy rainy day you’ll find',
    'me sketching in my art studio.',
    '',
    '— With love, Sabrina Delila ❤'
]

const pills = ['6+ yrs freelance', '4.0 GPA · PTK', 'Art Club President']

export const About: React.FC = () => {
    const sticky = useDraggable<HTMLDivElement>()
    const polaroid = useDraggable<HTMLDivElement>()
    const noteLines = buildNote(currentAge())

    return (
        <section
            id="about"
            className={styles.about}
        >
            <div
                data-px="0.2"
                aria-hidden="true"
                className={styles.sparkle}
            >
                <Asterisk />
            </div>

            <div className={styles.grid}>
                <div
                    data-reveal
                    className={styles.papers}
                >
                    <span
                        aria-hidden="true"
                        className={styles.tape}
                    />

                    <div className={styles.paper}>
                        <span
                            aria-hidden="true"
                            className={styles.margin}
                        />
                        <div className={styles.handwriting}>
                            <div className={styles.heading}>about me ✧</div>
                            {noteLines.map((line, index) => (
                                <div key={index}>{line || ' '}</div>
                            ))}
                        </div>
                    </div>

                    <div
                        ref={sticky.ref}
                        onPointerDown={sticky.onPointerDown}
                        className={styles.sticky}
                    >
                        A.A. Fine Art
                        <br />
                        + GD Cert,
                        <br />
                        Honors 2023 ⭐
                    </div>

                    <div
                        ref={polaroid.ref}
                        onPointerDown={polaroid.onPointerDown}
                        className={styles.gradPolaroid}
                    >
                        <span
                            aria-hidden="true"
                            className={styles.gradTape}
                        />
                        <img
                            src={asset('graduation.webp')}
                            alt="Sabrina at her 2023 graduation"
                            className={styles.gradImage}
                            loading="lazy"
                            decoding="async"
                        />
                        <span className={styles.gradCaption}>grad 2023 🎓</span>
                    </div>
                </div>

                <div>
                    <div
                        data-reveal
                        className={styles.kicker}
                    >
                        ( Meet Sabrina )
                    </div>
                    <h2
                        data-reveal
                        className={styles.title}
                    >
                        A little
                        <br />
                        about <span className={styles.accent}>me.</span>
                    </h2>
                    <p
                        data-reveal
                        className={styles.body}
                    >
                        I’m a freelance graphic designer based in Apollo Beach, Florida, with a passion for visual
                        storytelling.
                    </p>
                    <p
                        data-reveal
                        className={styles.body}
                    >
                        Over the past six years I’ve created illustrations for books, magazines, and marketing
                        campaigns. In 2023 I earned my Associate of Arts in Fine Art along with a Graphic Design
                        Certification — with Honors. Take a look around and explore my work!
                    </p>

                    <div
                        data-reveal
                        className={styles.pills}
                    >
                        {pills.map((pill) => (
                            <span
                                key={pill}
                                className={styles.pill}
                            >
                                {pill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
