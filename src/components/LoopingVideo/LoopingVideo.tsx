import React, { useEffect, useRef } from 'react'

interface LoopingVideoProps {
    src: string
    /** Used as the accessible label for the clip. */
    caption: string
    className?: string
}

/**
 * A silent looping clip that only plays while it is on screen.
 *
 * The design autoplays every video as soon as the page loads; a project page
 * carries several megabytes of them, which is a poor trade on a metered static
 * host — and iOS declines to autoplay off-screen video anyway. Only the metadata
 * is fetched up front (enough to reserve the right aspect ratio and avoid a
 * layout shift); the body downloads when the clip scrolls into view.
 */
export const LoopingVideo: React.FC<LoopingVideoProps> = ({ src, caption, className }) => {
    const ref = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                // play() rejects when the browser blocks autoplay; nothing to do.
                if (entry.isIntersecting) void el.play().catch(() => undefined)
                else el.pause()
            },
            { rootMargin: '200px 0px' }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    return (
        <video
            ref={ref}
            className={className}
            src={src}
            aria-label={caption}
            muted
            loop
            playsInline
            preload="metadata"
        />
    )
}
