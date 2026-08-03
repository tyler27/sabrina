import { useEffect } from 'react'

type Theme = 'paper' | 'dark'

interface PageChrome {
    /** Document title; " — Sabrina Delila Telis" is appended automatically. */
    title?: string
    /** Meta description for this route. */
    description?: string
    /** Which background the page sits on. */
    theme?: Theme
}

const SITE = 'Sabrina Delila Telis'

const setMeta = (name: string, content: string) => {
    let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
    if (!tag) {
        tag = document.createElement('meta')
        tag.name = name
        document.head.appendChild(tag)
    }
    tag.content = content
}

/**
 * Per-route document title, description and background theme. Small enough that
 * it isn't worth pulling react-helmet in for — this is a static site with no SSR,
 * so the tags only ever need to be right at runtime.
 */
export const usePageChrome = ({ title, description, theme = 'paper' }: PageChrome): void => {
    useEffect(() => {
        document.title = title ? `${title} — ${SITE}` : `${SITE} — Graphic Designer & Illustrator`
    }, [title])

    useEffect(() => {
        if (description) setMeta('description', description)
    }, [description])

    useEffect(() => {
        const root = document.documentElement
        root.dataset.theme = theme
        const themeColour = theme === 'dark' ? '#463473' : '#ECE4E4'
        setMeta('theme-color', themeColour)
        return () => {
            delete root.dataset.theme
        }
    }, [theme])
}
