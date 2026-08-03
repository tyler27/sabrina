import React, { useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

interface HashLinkProps {
    /** A route with a fragment, e.g. `/#work`. */
    to: string
    className?: string
    children: React.ReactNode
}

export const scrollToHash = (hash: string): boolean => {
    const id = hash.replace(/^#/, '')
    if (!id) return false
    const target = document.getElementById(id)
    if (!target) return false
    target.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start'
    })
    return true
}

/**
 * Router link that also honours the fragment.
 *
 * React Router deliberately leaves `#anchor` scrolling alone, so a plain `Link`
 * to `/#work` from the home page updates the URL and does nothing visible. This
 * scrolls in place when already on the target route and defers to the app-level
 * scroll manager when a navigation is needed.
 */
export const HashLink: React.FC<HashLinkProps> = ({ to, className, children }) => {
    const location = useLocation()
    const navigate = useNavigate()

    const [pathname, hash] = to.split('#')
    const targetPath = pathname || '/'

    const onClick = useCallback(
        (event: React.MouseEvent<HTMLAnchorElement>) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return
            if (location.pathname !== targetPath) return // let the router navigate

            event.preventDefault()
            if (scrollToHash(hash)) {
                navigate({ pathname: targetPath, hash: `#${hash}` }, { replace: true })
            }
        },
        [hash, location.pathname, navigate, targetPath]
    )

    return (
        <Link
            to={to}
            className={className}
            onClick={onClick}
        >
            {children}
        </Link>
    )
}
