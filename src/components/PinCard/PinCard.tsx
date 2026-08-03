import React from 'react'
import { Link } from 'react-router-dom'

import { Project } from '../../data/projects'
import styles from './PinCard.module.scss'

interface PinCardProps {
    project: Project
    /** Resting rotation in degrees — every card sits slightly askew. */
    rotate: number
    tape: {
        /** Where the tape strip crosses the top edge. */
        align: 'left' | 'right' | 'center'
        angle: number
        colour: string
        width?: number
    }
    /** Priority images (above the fold) skip lazy loading. */
    eager?: boolean
}

const aspectClass: Record<Project['card']['aspect'], string> = {
    '1': styles.square,
    '3/4': styles.portrait,
    '4/5': styles.tall
}

/**
 * A single piece pinned to the board: taped paper, a cropped photo with a
 * category chip, and a handwritten title. Shared by the home pinboard and the
 * gallery wall so both stay in step.
 */
export const PinCard: React.FC<PinCardProps> = ({ project, rotate, tape, eager }) => {
    const { card } = project

    return (
        <Link
            to={`/project/${project.slug}`}
            className={styles.card}
            style={{ ['--rot' as string]: `${rotate}deg` }}
            data-reveal
        >
            <span
                aria-hidden="true"
                className={`${styles.tape} ${styles[tape.align]}`}
                style={{
                    background: tape.colour,
                    width: `${tape.width ?? 62}px`,
                    ['--tape-rot' as string]: `${tape.angle}deg`
                }}
            />

            <div
                className={`${styles.crop} ${aspectClass[card.aspect]}`}
                style={{ background: card.tint }}
            >
                <img
                    src={card.image}
                    alt={`${project.title} — ${project.blurb}`}
                    className={styles.image}
                    style={{ objectPosition: card.position ?? 'center' }}
                    loading={eager ? 'eager' : 'lazy'}
                    decoding="async"
                />
                <span className={styles.chip}>{card.label}</span>
            </div>

            <span className={styles.title}>{card.title}</span>
        </Link>
    )
}
