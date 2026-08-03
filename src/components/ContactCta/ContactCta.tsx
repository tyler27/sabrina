import React from 'react'
import { Link } from 'react-router-dom'

import { site } from '../../data/site'
import styles from './ContactCta.module.scss'

interface ContactCtaProps {
    /** The secondary action next to "Email me". */
    secondary: { label: string; to: string }
}

/** Closing call to action shared by the Gallery and Project pages. */
export const ContactCta: React.FC<ContactCtaProps> = ({ secondary }) => (
    <>
        <div
            className={styles.kicker}
            data-reveal
        >
            like what you see?
        </div>
        <h2
            className={styles.heading}
            data-reveal
        >
            Let’s work together
        </h2>
        <div
            className={styles.actions}
            data-reveal
        >
            <a
                className={styles.primary}
                href={`mailto:${site.email}`}
            >
                {'{ Email me }'}
            </a>
            <Link
                className={styles.secondary}
                to={secondary.to}
            >
                {secondary.label}
            </Link>
        </div>
    </>
)
