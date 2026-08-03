import React, { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { MenuBar } from './components/MenuBar/MenuBar'
import { Grain } from './components/Decor/Decor'
import { scrollToHash } from './components/HashLink/HashLink'
import Home from './Pages/Home/Home'

import './styles/global.scss'

// Home is the landing route so it ships in the main bundle; the rest split out.
const Gallery = lazy(() => import('./Pages/Gallery/Gallery'))
const Project = lazy(() => import('./Pages/Project/Project'))

/**
 * Restores scroll position across navigations and honours `#anchor` targets,
 * neither of which React Router does on its own.
 */
const ScrollManager: React.FC = () => {
    const { pathname, hash, key } = useLocation()

    useEffect(() => {
        if (hash) {
            // Wait for the incoming route to paint before looking for the target.
            const frame = requestAnimationFrame(() => scrollToHash(hash))
            return () => cancelAnimationFrame(frame)
        }
        window.scrollTo(0, 0)
        return undefined
    }, [pathname, hash, key])

    return null
}

const App: React.FC = () => (
    <>
        <Grain />
        <MenuBar />
        <ScrollManager />
        <main>
            <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/gallery"
                        element={<Gallery />}
                    />
                    <Route
                        path="/project/:slug"
                        element={<Project />}
                    />
                    {/* Unknown paths land on the home page rather than a dead end. */}
                    <Route
                        path="*"
                        element={<Home />}
                    />
                </Routes>
            </Suspense>
        </main>
    </>
)

export default App
