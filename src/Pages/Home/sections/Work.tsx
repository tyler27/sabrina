import React from 'react'
import { Link } from 'react-router-dom'

import { FolderIcon } from '../../../components/Decor/Decor'
import { categories, countByCategory } from '../../../data/projects'
import styles from './Work.module.scss'

export const Work: React.FC = () => (
    <section
        id="work"
        className={styles.work}
    >
        <div className={styles.inner}>
            <div
                data-reveal
                className={styles.header}
            >
                <div className={styles.path}>~/sabrina/work</div>
                <h2 className={styles.title}>
                    What I <span className={styles.accent}>make</span>
                </h2>
            </div>

            <div
                data-reveal
                className={styles.window}
            >
                <div className={styles.titleBar}>
                    <span className={styles.windowName}>Portfolio</span>
                    <div
                        className={styles.windowButtons}
                        aria-hidden="true"
                    >
                        <span className={styles.button}>−</span>
                        <span className={styles.button}>▢</span>
                        <span className={`${styles.button} ${styles.close}`}>✕</span>
                    </div>
                </div>

                <div
                    className={styles.menuRow}
                    aria-hidden="true"
                >
                    <span>File</span>
                    <span className={styles.divider}>|</span>
                    <span>Property</span>
                    <span className={styles.divider}>|</span>
                    <span>Show</span>
                    <span className={styles.divider}>|</span>
                    <span>Setting</span>
                </div>

                <div
                    className={styles.addressRow}
                    aria-hidden="true"
                >
                    <div className={styles.address}>
                        <span>D:/Portfolio</span>
                        <span className={styles.caret}>▾</span>
                    </div>
                    <div className={styles.search}>
                        <span className={styles.searchLabel}>Search</span>
                        <span className={styles.searchIcon}>⚲</span>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.pane}>
                        <nav
                            className={styles.folders}
                            aria-label="Browse work by category"
                        >
                            {categories.map((category) => {
                                const count = countByCategory(category.slug)
                                return (
                                    <Link
                                        key={category.slug}
                                        to={`/gallery?cat=${category.slug}`}
                                        className={styles.folder}
                                        data-reveal
                                    >
                                        <FolderIcon />
                                        <span className={styles.folderName}>{category.label}</span>
                                        <span className={styles.folderCount}>
                                            {count} {count === 1 ? 'item' : 'items'}
                                        </span>
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>

                    <div
                        className={styles.scrollbar}
                        aria-hidden="true"
                    >
                        <div className={styles.thumb} />
                    </div>
                </div>

                <div
                    className={styles.statusBar}
                    aria-hidden="true"
                >
                    <div className={styles.progressTrack}>
                        <div className={styles.progressFill} />
                    </div>
                </div>
            </div>
        </div>
    </section>
)
