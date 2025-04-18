import React, { ReactElement } from 'react'

import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
import { InstagramIcon } from './InstagramIcon'


interface FooterLink {
    to: string;
    label: string;
    onClick?: () => void;
    icon?: ReactElement;
    download?: boolean;
}

const links: FooterLink[] = [
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
        to: '/public/assets/sabrina_resume_2025.png',
        label: 'Resume',
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
                <div className={styles.instagram} onClick={ () => window.open('https://instagram.com/sabrinadelilaarts')}>
                    <InstagramIcon />
                </div>
            </div>
        </footer>
    )
}
