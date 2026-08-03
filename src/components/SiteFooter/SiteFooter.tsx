import React from 'react'
import { site } from '../../data/site'
import styles from './SiteFooter.module.scss'

/** The three-column colophon that closes every page. */
export const SiteFooter: React.FC<{ bordered?: boolean }> = ({ bordered = true }) => (
    <div className={bordered ? `${styles.footer} ${styles.bordered}` : styles.footer}>
        <span>
            © {new Date().getFullYear()} {site.name}
        </span>
        <span>Made with ♡ in {site.location}</span>
        <span>{site.role}</span>
    </div>
)
