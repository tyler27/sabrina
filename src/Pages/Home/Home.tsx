import React from 'react'

import { Marquee } from '../../components/Marquee/Marquee'
import { useScrollEffects } from '../../hooks/useScrollEffects'
import { usePageChrome } from '../../hooks/usePageChrome'

import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Work } from './sections/Work'
import { Pinboard } from './sections/Pinboard'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'

const Home: React.FC = () => {
    usePageChrome({
        description:
            'Sabrina Delila Telis is a freelance graphic designer and illustrator in Apollo Beach, Florida, working across illustration, brand identity, editorial and digital art.'
    })
    useScrollEffects()

    return (
        <>
            <Hero />
            <Marquee />
            <About />
            <Work />
            <Pinboard />
            <Skills />
            <Contact />
        </>
    )
}

export default Home
