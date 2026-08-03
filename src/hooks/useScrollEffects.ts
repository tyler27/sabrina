import { useEffect } from 'react'

const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Drives the two scroll behaviours the design relies on:
 *
 *  - `[data-reveal]` elements fade in once they enter the viewport.
 *  - `[data-px="0.22"]` elements drift vertically at a fraction of scroll speed.
 *
 * Both are wired from a single controller rather than per-component observers so
 * that a page's worth of decorations costs one scroll listener. Pass `deps` so
 * the controller re-scans after a route change or async content swap.
 */
export const useScrollEffects = (deps: unknown[] = []): void => {
    useEffect(() => {
        const reduced = prefersReducedMotion()
        const root = document.documentElement

        // ---- reveal ----
        const revealEls = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
        root.classList.add('sda-reveal-ready')

        let observer: IntersectionObserver | undefined
        if (reduced) {
            revealEls.forEach((el) => el.classList.add('is-revealed'))
        } else {
            observer = new IntersectionObserver(
                (entries) => {
                    for (const entry of entries) {
                        if (!entry.isIntersecting) continue
                        entry.target.classList.add('is-revealed')
                        observer?.unobserve(entry.target)
                    }
                },
                { rootMargin: '0px 0px -8% 0px', threshold: 0.01 }
            )
            revealEls.forEach((el) => {
                el.classList.remove('is-revealed')
                observer?.observe(el)
            })
        }

        // Belt and braces: never leave content stuck at opacity 0 if the
        // observer misses an element (e.g. it is laid out off-screen).
        const safety = window.setTimeout(() => {
            revealEls.forEach((el) => el.classList.add('is-revealed'))
        }, 2500)

        // ---- parallax ----
        const pxEls = Array.from(document.querySelectorAll<HTMLElement>('[data-px]'))
        const bases = new WeakMap<HTMLElement, number>()

        const measure = () => {
            for (const el of pxEls) {
                const previous = el.style.transform
                el.style.transform = 'none'
                const rect = el.getBoundingClientRect()
                bases.set(el, rect.top + window.scrollY + el.offsetHeight / 2)
                el.style.transform = previous
            }
        }

        const update = () => {
            ticking = false
            const viewportCentre = window.scrollY + window.innerHeight / 2
            for (const el of pxEls) {
                const speed = parseFloat(el.dataset.px || '0')
                const offset = ((bases.get(el) || 0) - viewportCentre) * speed
                const rotation = el.style.getPropertyValue('--r')
                el.style.transform =
                    `translate3d(0, ${offset.toFixed(1)}px, 0)` + (rotation ? ` rotate(${rotation})` : '')
            }
        }

        let ticking = false
        const onScroll = () => {
            if (ticking) return
            ticking = true
            requestAnimationFrame(update)
        }
        const onResize = () => {
            measure()
            onScroll()
        }

        if (!reduced && pxEls.length) {
            measure()
            window.addEventListener('scroll', onScroll, { passive: true })
            window.addEventListener('resize', onResize)
            requestAnimationFrame(() => requestAnimationFrame(update))
        }

        return () => {
            window.clearTimeout(safety)
            observer?.disconnect()
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onResize)
        }
        // `deps` is the caller's re-scan trigger, intentionally spread as-is.
    }, deps)
}
