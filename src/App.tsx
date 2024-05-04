import React from 'react'

import Navbar from './Nav/Navbar'
import Home from './Pages/Home/Home'
import { Footer } from './Footer/Footer'

import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import { Gallery } from './Pages/Gallery/Gallery'

const App = () => (
    <>
        <Navbar />
        <main className={styles.pageContainer}>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/gallery"
                    element={<Gallery />}
                />
            </Routes>
        </main>
        <Footer />
    </>
)

export default App
