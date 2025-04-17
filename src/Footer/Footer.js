import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { InstagramIcon } from './InstagramIcon';
const links = [
    {
        to: '/',
        label: 'Home',
        onClick: () => {
            window.scrollTo(0, 0);
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
];
export const Footer = () => {
    return (React.createElement("footer", { className: styles.footer },
        React.createElement("div", { className: styles.links },
            links.map((link) => {
                return (React.createElement(Link, { download: link.download, target: link?.download ? '_blank' : '', onClick: link.onClick, to: link.to },
                    link.label,
                    "\u00A0",
                    link?.icon != null && link.icon));
            }),
            React.createElement("div", { className: styles.instagram, onClick: () => window.open('https://instagram.com/sabrinadelilaarts') },
                React.createElement(InstagramIcon, null)))));
};
//# sourceMappingURL=Footer.js.map