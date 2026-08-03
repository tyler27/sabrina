import React from 'react'
import { PinCard } from '../../../components/PinCard/PinCard'
import { pinboardOrder } from '../../../data/projects'
import styles from './Pinboard.module.scss'

/** Per-card angles and tape, keyed to the order in `pinboardOrder`. */
const pins = [
    { rotate: 2, tape: { align: 'right', angle: 7, colour: 'rgba(177,144,157,.6)', width: 60 } },
    { rotate: 1.5, tape: { align: 'left', angle: -8, colour: 'rgba(165,156,207,.6)', width: 60 } },
    { rotate: -1, tape: { align: 'right', angle: 7, colour: 'rgba(203,172,177,.6)', width: 62 } },
    { rotate: -2, tape: { align: 'center', angle: -5, colour: 'rgba(165,156,207,.6)', width: 66 } },
    { rotate: 1, tape: { align: 'left', angle: -6, colour: 'rgba(203,172,177,.6)', width: 60 } },
    { rotate: -2.5, tape: { align: 'left', angle: -8, colour: 'rgba(177,144,157,.6)', width: 62 } },
    { rotate: -1.5, tape: { align: 'right', angle: 6, colour: 'rgba(124,99,185,.55)', width: 64 } },
    { rotate: 2.5, tape: { align: 'right', angle: 8, colour: 'rgba(124,99,185,.6)', width: 60 } }
] as const

export const Pinboard: React.FC = () => (
    <section
        id="gallery"
        className={styles.board}
    >
        <div
            aria-hidden="true"
            className={styles.dots}
        />

        <div className={styles.inner}>
            <div
                data-reveal
                className={styles.header}
            >
                <div>
                    <div className={styles.kicker}>( The bulletin board )</div>
                    <h2 className={styles.title}>Selected work</h2>
                </div>
                <p className={styles.lede}>A wall of recent illustration, branding &amp; digital art.</p>
            </div>

            <div className={styles.wall}>
                {pinboardOrder.map((project, index) => {
                    const pin = pins[index % pins.length]
                    return (
                        <div
                            key={project.slug}
                            className={styles.slot}
                        >
                            <PinCard
                                project={project}
                                rotate={pin.rotate}
                                tape={pin.tape}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
)
