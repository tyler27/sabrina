import React from 'react'
import { HashLink } from '../../../components/HashLink/HashLink'
import { Flower } from '../../../components/Decor/Decor'
import { useDraggable } from '../../../hooks/useDraggable'
import { asset } from '../../../data/projects'
import styles from './Hero.module.scss'

/** One admission ticket; the hero stacks four at increasing angles. */
const Ticket: React.FC = () => (
    <div className={styles.ticket}>
        <div className={styles.ticketInner}>
            <div className={styles.stub}>
                <span
                    aria-hidden="true"
                    className={styles.perforation}
                />
                <span className={styles.stubText}>ADMIT ONE</span>
            </div>
            <div className={styles.ticketBody}>
                <div className={styles.ticketTitle}>
                    Sabrina
                    <br />
                    Delila Arts
                </div>
                <div
                    aria-hidden="true"
                    className={styles.ticketRule}
                />
                <div className={styles.ticketMeta}>
                    <span className={styles.star}>★</span>
                    EST·2023 — HONORS
                    <span className={styles.star}>★</span>
                </div>
            </div>
        </div>
    </div>
)

export const Hero: React.FC = () => {
    const polaroid = useDraggable<HTMLDivElement>()
    const sticky = useDraggable<HTMLDivElement>()

    return (
        <header
            id="top"
            className={styles.hero}
        >
            {/* decorative floaters */}
            <div
                data-px="0.22"
                aria-hidden="true"
                className={`${styles.floater} ${styles.sparkleA}`}
            >
                ✳
            </div>
            <div
                data-px="0.34"
                aria-hidden="true"
                className={`${styles.floater} ${styles.sparkleB}`}
            >
                ✧
            </div>
            <div
                data-px="-0.28"
                aria-hidden="true"
                className={`${styles.floater} ${styles.sparkleC}`}
            >
                ✽
            </div>
            <div
                data-px="0.18"
                aria-hidden="true"
                className={`${styles.floater} ${styles.flowerA}`}
            >
                <Flower />
            </div>
            <div
                data-px="0.26"
                aria-hidden="true"
                className={`${styles.floater} ${styles.flowerB}`}
            >
                <Flower />
            </div>

            <div className={styles.inner}>
                <div className={styles.grid}>
                    <div className={styles.intro}>
                        <div
                            data-reveal
                            className={styles.greeting}
                        >
                            hi, I’m
                        </div>

                        <h1
                            data-reveal
                            className={styles.name}
                        >
                            <span>Sabrina</span>
                            <span className={styles.nameAccent}>Delila</span>
                            <span>Telis</span>
                        </h1>

                        <div
                            data-reveal
                            className={styles.role}
                        >
                            Graphic Designer &amp; Illustrator
                        </div>

                        <p
                            data-reveal
                            className={styles.tagline}
                        >
                            Love illustrating, <span className={styles.lilac}>sketching</span>, storytelling, and visual{' '}
                            <span className={styles.gold}>arts</span>.
                        </p>

                        <div
                            data-reveal
                            className={styles.actions}
                        >
                            <HashLink
                                to="/#work"
                                className={styles.primary}
                            >
                                View work →
                            </HashLink>
                            <HashLink
                                to="/#contact"
                                className={styles.secondary}
                            >
                                Say hello
                            </HashLink>
                        </div>
                    </div>

                    <div className={styles.scrapbook}>
                        <div
                            ref={polaroid.ref}
                            onPointerDown={polaroid.onPointerDown}
                            className={styles.polaroid}
                        >
                            <span
                                aria-hidden="true"
                                className={styles.polaroidTape}
                            />
                            <img
                                src={asset('polaroid-hero.webp')}
                                alt="Sabrina Delila Telis"
                                className={styles.polaroidImage}
                                width={620}
                                height={752}
                            />
                            <span className={styles.polaroidCaption}>Sabrina Delila ♡</span>
                        </div>

                        <div
                            ref={sticky.ref}
                            onPointerDown={sticky.onPointerDown}
                            className={styles.sticky}
                        >
                            Currently:
                            <br />
                            drawing custom
                            <br />
                            portraits on my
                            <br />
                            Etsy ✳
                        </div>

                        <div
                            data-px="-0.16"
                            className={styles.ticketStack}
                        >
                            <div className={styles.ticketLayers}>
                                <div
                                    aria-hidden="true"
                                    className={`${styles.layer} ${styles.layer1}`}
                                >
                                    <Ticket />
                                </div>
                                <div
                                    aria-hidden="true"
                                    className={`${styles.layer} ${styles.layer2}`}
                                >
                                    <Ticket />
                                </div>
                                <div
                                    aria-hidden="true"
                                    className={`${styles.layer} ${styles.layer3}`}
                                >
                                    <Ticket />
                                </div>
                                <div className={styles.layerFront}>
                                    <Ticket />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    data-reveal
                    className={styles.scrollHint}
                    aria-hidden="true"
                >
                    <span>scroll</span>
                    <span className={styles.arrow}>↓</span>
                </div>
            </div>
        </header>
    )
}
