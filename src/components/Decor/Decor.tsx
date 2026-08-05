import React from 'react'
import styles from './Decor.module.scss'

/**
 * The daisy head sits this far off-axis. Kept on the artwork rather than on each
 * placement so every daisy on the site shares one tilt.
 */
const daisyTilt = 20

/**
 * The floating paper flower that recurs across the design. Purely decorative, so
 * it is hidden from assistive tech.
 */
export const Flower: React.FC<{ petal?: string; outline?: string; centre?: string }> = ({
    petal = '#FAF6FB',
    outline = '#463473',
    centre = '#F1DB94'
}) => (
    <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        className={styles.flower}
        aria-hidden="true"
    >
        <g
            fill={petal}
            stroke={outline}
            strokeWidth="3.4"
        >
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <g
                    key={angle}
                    transform={`rotate(${angle + daisyTilt} 50 50)`}
                >
                    <ellipse
                        cx="50"
                        cy="25"
                        rx="10.5"
                        ry="19"
                    />
                </g>
            ))}
        </g>
        <circle
            cx="50"
            cy="50"
            r="11.5"
            fill={centre}
            stroke={outline}
            strokeWidth="3.4"
        />
    </svg>
)

/**
 * The decorative asterisk scattered across the pages.
 *
 * A plain `*` rather than a dingbat: `✳` (U+2733) carries an emoji presentation
 * on iOS and Android, so phones drew it as a green emoji glyph instead of
 * picking up the surrounding colour.
 *
 * The glyph is drawn up near the cap height rather than centred in its line box,
 * so the wrapper collapses the leading and nudges the character back down —
 * without that the spinning floaters orbit a point below themselves instead of
 * turning on the spot.
 */
export const Asterisk: React.FC = () => (
    <span
        className={styles.asterisk}
        aria-hidden="true"
    >
        *
    </span>
)

/** The manila folder icon used by the Finder window. */
export const FolderIcon: React.FC = () => (
    <svg
        width="80"
        height="64"
        viewBox="0 0 72 58"
        fill="none"
        className={styles.folder}
        aria-hidden="true"
    >
        <path
            d="M4 17 Q4 9.5 11.5 9.5 H25 L30 16.5 H60.5 Q68 16.5 68 24 V46.5 Q68 54 60.5 54 H11.5 Q4 54 4 46.5 Z"
            fill="#DCD4FA"
            stroke="#463473"
            strokeWidth="3"
            strokeLinejoin="round"
        />
        <path
            d="M5 22 H67"
            stroke="#463473"
            strokeWidth="2"
        />
    </svg>
)

/** Film-grain wash laid over the whole viewport. */
export const Grain: React.FC = () => (
    <div
        aria-hidden="true"
        className={styles.grain}
    />
)
