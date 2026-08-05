import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

import { useClock } from '../../hooks/useClock'
import { site } from '../../data/site'
import styles from './MenuBar.module.scss'

interface NavItem {
    label: string
    to: string
    /** Set for destinations off the site, which open in a new tab. */
    external?: boolean
}

const items: NavItem[] = [
    { label: 'About', to: '/#about' },
    { label: 'Work', to: '/#work' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact', to: '/#contact' },
    { label: 'Shop', to: site.etsy, external: true }
]

/**
 * The fixed system menu bar that frames every page.
 *
 * Below the `narrow` breakpoint the links collapse behind a toggle — the design
 * only ever described the desktop-width bar, and five inline links plus a clock
 * cannot share a phone's status strip.
 */
export const MenuBar: React.FC = () => {
    const time = useClock()
    const location = useLocation()
    const [open, setOpen] = useState(false)
    const navRef = useRef<HTMLDivElement | null>(null)

    // Close the collapsed menu whenever navigation happens.
    useEffect(() => setOpen(false), [location.pathname, location.hash])

    useEffect(() => {
        if (!open) return
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setOpen(false)
        }
        const onClick = (event: MouseEvent) => {
            if (!navRef.current?.contains(event.target as Node)) setOpen(false)
        }
        document.addEventListener('keydown', onKey)
        document.addEventListener('mousedown', onClick)
        return () => {
            document.removeEventListener('keydown', onKey)
            document.removeEventListener('mousedown', onClick)
        }
    }, [open])

    const isGallery = location.pathname.startsWith('/gallery')

    return (
        <header className={styles.bar}>
            <div
                className={styles.left}
                ref={navRef}
            >
                <span
                    className={styles.glyph}
                    aria-hidden="true"
                >
                    🎨
                </span>

                <Link
                    to="/"
                    className={styles.brand}
                >
                    {site.name}
                </Link>

                <button
                    type="button"
                    className={styles.toggle}
                    aria-expanded={open}
                    aria-controls="menubar-nav"
                    onClick={() => setOpen((value) => !value)}
                >
                    <span aria-hidden="true">{open ? '✕' : '≡'}</span>
                    <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
                </button>

                <nav
                    id="menubar-nav"
                    className={classNames(styles.links, { [styles.open]: open })}
                    aria-label="Primary"
                >
                    {items.map((item) =>
                        item.external ? (
                            <a
                                key={item.to}
                                href={item.to}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <Link
                                key={item.to}
                                to={item.to}
                                className={classNames(styles.link, {
                                    [styles.active]: item.to === '/gallery' && isGallery
                                })}
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                </nav>
            </div>

            <div className={styles.right}>
                <span className={styles.place}>{site.location}</span>
                <span
                    className={styles.sun}
                    aria-hidden="true"
                >
                    ☀
                </span>
                <span className={styles.clock}>{time}</span>
            </div>
        </header>
    )
}
