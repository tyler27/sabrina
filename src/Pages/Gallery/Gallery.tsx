import React, { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import classNames from 'classnames'

import { PinCard } from '../../components/PinCard/PinCard'
import { ContactCta } from '../../components/ContactCta/ContactCta'
import { SiteFooter } from '../../components/SiteFooter/SiteFooter'
import { Asterisk, Flower } from '../../components/Decor/Decor'
import { useScrollEffects } from '../../hooks/useScrollEffects'
import { usePageChrome } from '../../hooks/usePageChrome'
import { categories, galleryOrder, resolveCategory } from '../../data/projects'
import styles from './Gallery.module.scss'

/** Angle and tape for each card, keyed to `galleryOrder`. */
const pins = [
    { rotate: -5.5, tape: { align: 'right', angle: 6, colour: 'rgba(124,99,185,.6)', width: 60 } },
    { rotate: 4, tape: { align: 'left', angle: -8, colour: 'rgba(165,156,207,.6)', width: 60 } },
    { rotate: 3.5, tape: { align: 'left', angle: -7, colour: 'rgba(165,156,207,.6)', width: 60 } },
    { rotate: 2.5, tape: { align: 'center', angle: -4, colour: 'rgba(165,156,207,.6)', width: 66 } },
    { rotate: -3, tape: { align: 'right', angle: 7, colour: 'rgba(203,172,177,.6)', width: 62 } },
    { rotate: -5, tape: { align: 'center', angle: -5, colour: 'rgba(165,156,207,.6)', width: 66 } },
    { rotate: 5, tape: { align: 'left', angle: -8, colour: 'rgba(177,144,157,.6)', width: 62 } },
    { rotate: 3, tape: { align: 'left', angle: -6, colour: 'rgba(203,172,177,.6)', width: 60 } },
    { rotate: -2, tape: { align: 'right', angle: 6, colour: 'rgba(124,99,185,.55)', width: 64 } },
    { rotate: -3.5, tape: { align: 'right', angle: 7, colour: 'rgba(203,172,177,.6)', width: 60 } },
    { rotate: -6, tape: { align: 'left', angle: -8, colour: 'rgba(177,144,157,.6)', width: 62 } },
    { rotate: -4.5, tape: { align: 'right', angle: 6, colour: 'rgba(124,99,185,.55)', width: 64 } }
] as const

export const Gallery: React.FC = () => {
    const [params, setParams] = useSearchParams()
    const active = resolveCategory(params.get('cat'))

    usePageChrome({
        title: 'Gallery',
        description:
            'A wall of selected illustration, brand identity, digital art, animation and exhibition work by Sabrina Delila Telis.',
        theme: 'dark'
    })

    const visible = useMemo(
        () =>
            galleryOrder
                .map((project, index) => ({ project, pin: pins[index % pins.length] }))
                .filter(({ project }) => active === 'all' || project.filter === active),
        [active]
    )

    // Re-scan once the filter has swapped the cards on screen.
    useScrollEffects([active])

    const select = (slug: string) => {
        setParams(slug === 'all' ? {} : { cat: slug }, { replace: true })
    }

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div
                    data-px="0.24"
                    aria-hidden="true"
                    className={styles.flower}
                >
                    <Flower
                        petal="#ECE4E4"
                        outline="#241B45"
                    />
                </div>
                <div
                    data-px="-0.3"
                    aria-hidden="true"
                    className={styles.sparkle}
                >
                    <Asterisk />
                </div>

                <div className={styles.headerInner}>
                    <div
                        data-reveal
                        className={styles.kicker}
                    >
                        ( The bulletin board )
                    </div>
                    <h1
                        data-reveal
                        className={styles.title}
                    >
                        Gallery
                    </h1>
                </div>
            </header>

            <div
                data-reveal
                className={styles.filterWrap}
            >
                <div
                    className={styles.filters}
                    role="group"
                    aria-label="Filter work by category"
                >
                    <button
                        type="button"
                        onClick={() => select('all')}
                        aria-pressed={active === 'all'}
                        className={classNames(styles.chip, { [styles.chipOn]: active === 'all' })}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.slug}
                            type="button"
                            onClick={() => select(category.slug)}
                            aria-pressed={active === category.slug}
                            className={classNames(styles.chip, {
                                [styles.chipOn]: active === category.slug
                            })}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>

            <section className={styles.wallSection}>
                {visible.length > 0 ? (
                    <div className={styles.wall}>
                        {visible.map(({ project, pin }, index) => (
                            <div
                                key={project.slug}
                                className={styles.slot}
                            >
                                <PinCard
                                    project={project}
                                    rotate={pin.rotate}
                                    tape={pin.tape}
                                    eager={index < 4}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className={styles.empty}>No pieces in this category yet — check back soon *</p>
                )}
            </section>

            <section className={styles.cta}>
                <ContactCta secondary={{ label: '← Back home', to: '/' }} />
                <SiteFooter bordered={false} />
            </section>
        </div>
    )
}

export default Gallery
