import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { ContactCta } from '../../components/ContactCta/ContactCta'
import { LoopingVideo } from '../../components/LoopingVideo/LoopingVideo'
import { Flower } from '../../components/Decor/Decor'
import { HashLink } from '../../components/HashLink/HashLink'
import { useScrollEffects } from '../../hooks/useScrollEffects'
import { usePageChrome } from '../../hooks/usePageChrome'
import { getProject, HeroLayout, MediaItem, Project as ProjectData } from '../../data/projects'
import styles from './Project.module.scss'

const rotations = ['-2deg', '1.5deg', '-1deg', '2deg', '-1.5deg']

const Hero: React.FC<{ hero: HeroLayout; title: string }> = ({ hero, title }) => {
    if (hero.kind === 'grid') {
        return (
            <div className={styles.heroGrid}>
                {hero.images.map((src, index) => (
                    <div
                        key={src}
                        className={styles.heroGridCell}
                    >
                        <img
                            src={src}
                            alt={`${title} — panel ${index + 1}`}
                            decoding="async"
                        />
                    </div>
                ))}
            </div>
        )
    }

    if (hero.kind === 'natural') {
        return (
            <img
                src={hero.src}
                alt={title}
                className={styles.heroNatural}
                decoding="async"
            />
        )
    }

    return (
        <div
            className={styles.heroImage}
            role="img"
            aria-label={title}
            style={{
                backgroundImage: `url('${hero.src}')`,
                backgroundSize: hero.kind === 'contain' ? 'contain' : 'cover',
                backgroundColor: hero.kind === 'contain' ? hero.background : undefined,
                backgroundPosition: hero.position ?? 'center'
            }}
        />
    )
}

const GalleryItem: React.FC<{ item: MediaItem; index: number; fixedWidth: boolean }> = ({
    item,
    index,
    fixedWidth
}) => (
    <figure
        className={fixedWidth ? `${styles.plate} ${styles.plateFixed}` : styles.plate}
        style={{ transform: `rotate(${rotations[index % rotations.length]})` }}
        data-reveal
    >
        <span
            aria-hidden="true"
            className={styles.plateTape}
            style={{ transform: `translateX(-50%) rotate(${index % 2 ? 2 : -3}deg)` }}
        />
        <div className={styles.plateFrame}>
            {item.video ? (
                <LoopingVideo
                    src={item.src}
                    caption={item.caption}
                    className={styles.plateMedia}
                />
            ) : (
                <img
                    src={item.src}
                    alt={item.caption}
                    className={styles.plateMedia}
                    loading="lazy"
                    decoding="async"
                />
            )}
        </div>
        <figcaption className={styles.plateCaption}>{item.caption}</figcaption>
    </figure>
)

const NotFound: React.FC = () => {
    usePageChrome({ title: 'Project not found' })
    return (
        <div className={styles.notFound}>
            <h1 className={styles.notFoundTitle}>That project isn’t on the wall</h1>
            <p className={styles.notFoundBody}>The piece you’re looking for may have been renamed or taken down.</p>
            <Link
                to="/gallery"
                className={styles.notFoundLink}
            >
                View the gallery →
            </Link>
        </div>
    )
}

const Detail: React.FC<{ project: ProjectData }> = ({ project }) => {
    usePageChrome({ title: project.title, description: project.blurb })
    useScrollEffects([project.slug])

    const galleryClass =
        project.gallery.kind === 'grid'
            ? `${styles.gallery} ${styles.galleryGrid}`
            : project.gallery.kind === 'centered'
              ? `${styles.gallery} ${styles.galleryCentered}`
              : `${styles.gallery} ${styles.galleryColumns}`

    return (
        <div>
            <header className={styles.header}>
                <div
                    data-px="0.22"
                    aria-hidden="true"
                    className={styles.sparkle}
                >
                    ✳
                </div>
                <div
                    data-px="0.3"
                    aria-hidden="true"
                    className={styles.flower}
                >
                    <Flower petal="#ECE4E4" />
                </div>

                <div className={styles.headerInner}>
                    <HashLink
                        to="/#work"
                        className={styles.back}
                    >
                        ← Back to work
                    </HashLink>
                    <div
                        data-reveal
                        className={styles.kicker}
                    >
                        {project.tag} · {project.year}
                    </div>
                    <h1
                        data-reveal
                        className={styles.title}
                    >
                        {project.title}
                    </h1>
                    <p
                        data-reveal
                        className={styles.blurb}
                    >
                        {project.blurb}
                    </p>
                </div>
            </header>

            <section className={styles.heroSection}>
                <div
                    data-reveal
                    className={styles.heroInner}
                >
                    <div className={styles.heroFrame}>
                        <span
                            aria-hidden="true"
                            className={styles.heroTape}
                        />
                        <Hero
                            hero={project.hero}
                            title={project.title}
                        />
                    </div>
                </div>
            </section>

            <section className={styles.body}>
                <div className={styles.bodyInner}>
                    <aside
                        data-reveal
                        className={styles.details}
                    >
                        <span
                            aria-hidden="true"
                            className={styles.pin}
                        />
                        <h2 className={styles.detailsTitle}>The details</h2>
                        <dl className={styles.detailsList}>
                            <div>
                                <dt>Role</dt>
                                <dd>{project.role}</dd>
                            </div>
                            <div>
                                <dt>Tools</dt>
                                <dd>{project.tools}</dd>
                            </div>
                            <div>
                                <dt>Year</dt>
                                <dd>{project.year}</dd>
                            </div>
                            <div>
                                <dt>Category</dt>
                                <dd>{project.category}</dd>
                            </div>
                        </dl>
                    </aside>

                    <div className={styles.copy}>
                        <div
                            data-reveal
                            className={styles.copyKicker}
                        >
                            ( About this project )
                        </div>
                        <div
                            data-reveal
                            className={styles.prose}
                        >
                            {project.description.map((paragraph, index) => (
                                // Copy is authored in-repo and only ever carries a
                                // link or two, so the markup is trusted.
                                <p
                                    key={index}
                                    dangerouslySetInnerHTML={{ __html: paragraph }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {project.pdf && (
                <section className={styles.pdfSection}>
                    <div className={styles.pdfInner}>
                        <a
                            data-reveal
                            className={styles.pdfLink}
                            href={project.pdf.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span
                                aria-hidden="true"
                                className={styles.pdfIcon}
                            >
                                <span className={styles.pdfFold} />
                                <span className={styles.pdfLabel}>PDF</span>
                            </span>
                            <span className={styles.pdfText}>
                                <span className={styles.pdfKicker}>Download</span>
                                <span className={styles.pdfTitle}>{project.pdf.title}</span>
                                <span className={styles.pdfNote}>{project.pdf.note}</span>
                            </span>
                            <span
                                aria-hidden="true"
                                className={styles.pdfArrow}
                            >
                                →
                            </span>
                        </a>
                    </div>
                </section>
            )}

            {project.images.length > 0 && (
                <section className={styles.gallerySection}>
                    <div className={styles.galleryInner}>
                        <h2
                            data-reveal
                            className={styles.galleryTitle}
                        >
                            More from this project
                        </h2>
                        <div
                            className={galleryClass}
                            style={
                                project.gallery.kind === 'grid'
                                    ? {
                                          gridTemplateColumns: `repeat(${project.gallery.columns}, minmax(0, 1fr))`
                                      }
                                    : undefined
                            }
                        >
                            {project.images.map((item, index) => (
                                <GalleryItem
                                    key={item.src}
                                    item={item}
                                    index={index}
                                    fixedWidth={project.gallery.kind === 'centered'}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className={styles.cta}>
                <div
                    data-px="-0.2"
                    aria-hidden="true"
                    className={styles.ctaSparkle}
                >
                    ✳
                </div>
                <div className={styles.ctaInner}>
                    <ContactCta secondary={{ label: 'View gallery →', to: '/gallery' }} />
                </div>
            </section>
        </div>
    )
}

export const Project: React.FC = () => {
    const { slug } = useParams<{ slug: string }>()
    const project = getProject(slug)
    return project ? <Detail project={project} /> : <NotFound />
}

export default Project
