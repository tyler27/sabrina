import React from 'react'

import styles from './Footer.module.scss'
import { ResumeIconSVG } from '../Nav/ContactIcon'
import { Link } from 'react-router-dom'

const links = [
    {
        to: '/',
        label: 'Home',
        onClick: () => {
            window.scrollTo(0, 0)
        }
    },
    {
        to: '/gallery',
        label: 'Gallery'
    },
    {
        to: '/public/assets/sabrina_resume_2024.png',
        label: 'Resume',
        icon: <ResumeIconSVG />,
        download: true
    }
]

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                {links.map((link) => {
                    return (
                        <Link
                            download={link.download}
                            target={link?.download ? '_blank' : ''}
                            onClick={link.onClick}
                            to={link.to}
                        >
                            {link.label}
                            &nbsp;
                            {link?.icon != null && link.icon}
                        </Link>
                    )
                })}
            </div>
        </footer>
    )
}
