import React from 'react'
import { SiteFooter } from '../../../components/SiteFooter/SiteFooter'
import { site } from '../../../data/site'
import styles from './Contact.module.scss'

export const Contact: React.FC = () => (
    <section
        id="contact"
        className={styles.contact}
    >
        <div
            data-px="0.16"
            aria-hidden="true"
            className={styles.sparkleA}
        >
            ✳
        </div>
        <div
            data-px="-0.2"
            aria-hidden="true"
            className={styles.sparkleB}
        >
            ✧
        </div>

        <div className={styles.inner}>
            <div
                data-reveal
                className={styles.kicker}
            >
                let’s make something
            </div>
            <h2
                data-reveal
                className={styles.title}
            >
                together
            </h2>

            <p
                data-reveal
                className={styles.lede}
            >
                Have a project in mind, or just want to say hi? Drop a note — I’d love to hear what you’re dreaming up.
            </p>

            <div
                data-reveal
                className={styles.actions}
            >
                <a
                    className={styles.primary}
                    href={`mailto:${site.email}`}
                >
                    {'{ Email }'}
                </a>
                <a
                    className={styles.secondary}
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {'{ Instagram }'}
                </a>
                <a
                    className={styles.secondary}
                    href={site.etsy}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {'{ Etsy }'}
                </a>
                {/* Not in the redesign, but the previous site linked a résumé and
                    losing it would be a regression for anyone hiring her. */}
                <a
                    className={styles.secondary}
                    href={site.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {'{ Resume }'}
                </a>
            </div>

            <SiteFooter />
        </div>
    </section>
)
