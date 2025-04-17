import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';
import classNames from 'classnames';
import { IoMenu } from 'react-icons/io5';
import { ContactIconSVG, ResumeIconSVG } from './ContactIcon';
const links = [
    {
        to: '/',
        label: 'Home'
    },
    {
        to: '/gallery',
        label: 'Gallery',
        onClick: () => {
            window.scrollTo(0, 0);
        },
    },
    {
        to: '/',
        label: 'Logo'
    },
    {
        label: 'Contact',
        to: '/',
        onClick: () => {
            window.scrollTo(0, document.body.scrollHeight);
        },
        icon: React.createElement(ContactIconSVG, null)
    },
    {
        to: '/public/assets/sabrina_resume_2025.pdf',
        label: 'Resume',
        icon: React.createElement(ResumeIconSVG, null),
        download: true
    }
];
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const isMobile = width <= 1150;
    const closeMenuOnMobile = () => isMobile && setShowMenu(false);
    return (React.createElement("header", { className: styles.header },
        React.createElement("nav", { className: styles.nav },
            isMobile && (React.createElement(NavLink, { to: '/', className: classNames([styles.nav__logo]), onClick: closeMenuOnMobile },
                React.createElement("img", { src: '/public/assets/logo.png', alt: "Sabrina Delila Art's Logo" }))),
            React.createElement("div", { className: classNames(styles.nav__menu, {
                    [styles['show-menu']]: showMenu
                }), id: "nav-menu", "aria-expanded": showMenu, "aria-controls": "nav-menu" },
                React.createElement("div", { className: styles.nav__list }, links.map((link) => {
                    const isLogoLink = link.label.indexOf('Logo') != -1;
                    if (isLogoLink && !isMobile && link.to) {
                        return (React.createElement(NavLink, { to: link.to, className: classNames([styles.nav__logo]), onClick: closeMenuOnMobile },
                            React.createElement("img", { src: '/public/assets/logo.png', alt: "Sabrina Delila Art's Logo" })));
                    }
                    if (isLogoLink)
                        return React.createElement(React.Fragment, null);
                    return (React.createElement("div", { className: styles.nav__link },
                        React.createElement(NavLink, { to: link.to || '#', download: link.download, target: link?.download ? '_blank' : '', onClick: () => {
                                if (link.onClick)
                                    link.onClick();
                                closeMenuOnMobile();
                            } },
                            link.label,
                            "\u00A0",
                            link?.icon != null && link.icon)));
                }))),
            React.createElement("div", { className: styles.nav__toggle, id: "nav-toggle", onClick: toggleMenu, "aria-expanded": showMenu, "aria-controls": "nav-menu" },
                React.createElement(IoMenu, null)))));
};
export default Navbar;
//# sourceMappingURL=Navbar.js.map