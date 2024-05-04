import React, { ReactElement, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.scss'
import classNames from 'classnames'
import { IoMenu } from 'react-icons/io5'
import { ContactIconSVG, ResumeIconSVG } from './ContactIcon'

interface NavbarProps {}

interface NavLink {
    to?: string
    label: string
    icon?: ReactElement
    onClick?: () => void
    download?: boolean
}

interface NavbarProps {}

const links: NavLink[] = [
    {
        to: '/',
        label: 'Home'
    },
    {
        to: '/gallery',
        label: 'Gallery',
        onClick: () => {
            window.scrollTo(0, 0)
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
            window.scrollTo(0, document.body.scrollHeight)
        },
        icon: <ContactIconSVG />
    },
    {
        to: '/public/assets/sabrina_resume_2024.pdf',
        label: 'Resume',
        icon: <ResumeIconSVG />,
        download: true
    }
]

const Navbar: React.FC<NavbarProps> = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [width, setWidth] = useState<number>(window.innerWidth)

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const isMobile = width <= 1150

    const closeMenuOnMobile = () => isMobile && setShowMenu(false)

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                {isMobile && (
                    <NavLink
                        to={'/'}
                        className={classNames([styles.nav__logo])}
                        onClick={closeMenuOnMobile}
                    >
                        <img
                            src={'/public/assets/logo.png'}
                            alt={"Sabrina Delila Art's Logo"}
                        />
                    </NavLink>
                )}

                <div
                    className={classNames(styles.nav__menu, {
                        [styles['show-menu']]: showMenu
                    })}
                    id="nav-menu"
                    aria-expanded={showMenu}
                    aria-controls="nav-menu"
                >
                    <div className={styles.nav__list}>
                        {links.map((link) => {
                            const isLogoLink = link.label.indexOf('Logo') != -1

                            if (isLogoLink && !isMobile && link.to) {
                                return (
                                    <NavLink
                                        to={link.to}
                                        className={classNames([styles.nav__logo])}
                                        onClick={closeMenuOnMobile}
                                    >
                                        <img
                                            src={'/public/assets/logo.png'}
                                            alt={"Sabrina Delila Art's Logo"}
                                        />
                                    </NavLink>
                                )
                            }

                            if (isLogoLink) return <></>

                            return (
                                <div className={styles.nav__link}>
                                    <NavLink
                                        to={link.to || '#'}
                                        download={link.download}
                                        target={link?.download ? '_blank' : ''}
                                        onClick={() => {
                                            if (link.onClick) link.onClick()

                                            closeMenuOnMobile()
                                        }}
                                    >
                                        {link.label}
                                        &nbsp;
                                        {link?.icon != null && link.icon}
                                    </NavLink>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div
                    className={styles.nav__toggle}
                    id="nav-toggle"
                    onClick={toggleMenu}
                    aria-expanded={showMenu}
                    aria-controls="nav-menu"
                >
                    <IoMenu />
                </div>
            </nav>
        </header>
    )
}

export default Navbar
