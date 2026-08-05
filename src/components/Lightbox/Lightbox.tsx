import React, { useCallback, useEffect, useRef } from 'react'
import styles from './Lightbox.module.scss'

export interface LightboxImage {
    src: string
    caption: string
}

interface LightboxProps {
    images: LightboxImage[]
    /** Index of the image on show, or `null` while the viewer is closed. */
    index: number | null
    onClose: () => void
    onNavigate: (index: number) => void
}

/**
 * Full-screen viewer for the artwork on a project page.
 *
 * Closes on Escape or a click outside the picture and steps through the page's
 * stills with the arrow keys. Focus moves into the dialog on open and returns to
 * whichever thumbnail launched it on close, so the viewer is usable without a
 * pointer.
 */
export const Lightbox: React.FC<LightboxProps> = ({ images, index, onClose, onNavigate }) => {
    const open = index !== null
    const dialogRef = useRef<HTMLDivElement | null>(null)
    const opener = useRef<HTMLElement | null>(null)

    const step = useCallback(
        (delta: number) => {
            if (index === null || images.length < 2) return
            onNavigate((index + delta + images.length) % images.length)
        },
        [index, images.length, onNavigate]
    )

    // Hand focus to the dialog, and give it back to the thumbnail on close.
    useEffect(() => {
        if (!open) return undefined
        opener.current = document.activeElement as HTMLElement | null
        dialogRef.current?.focus()
        return () => opener.current?.focus()
    }, [open])

    // The page behind must not scroll while the viewer covers it.
    useEffect(() => {
        if (!open) return undefined
        const previous = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = previous
        }
    }, [open])

    useEffect(() => {
        if (!open) return undefined
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose()
            else if (event.key === 'ArrowRight') step(1)
            else if (event.key === 'ArrowLeft') step(-1)
        }
        document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [open, onClose, step])

    if (index === null) return null

    const image = images[index]
    if (!image) return null

    return (
        <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={image.caption}
            tabIndex={-1}
            className={styles.backdrop}
            onClick={onClose}
        >
            <button
                type="button"
                className={styles.close}
                onClick={onClose}
            >
                <span aria-hidden="true">✕</span>
                <span className="sr-only">Close</span>
            </button>

            {images.length > 1 && (
                <button
                    type="button"
                    className={`${styles.arrow} ${styles.prev}`}
                    onClick={(event) => {
                        event.stopPropagation()
                        step(-1)
                    }}
                >
                    <span aria-hidden="true">←</span>
                    <span className="sr-only">Previous image</span>
                </button>
            )}

            {/* Clicks land on the backdrop to dismiss; the picture itself keeps them. */}
            <figure
                className={styles.figure}
                onClick={(event) => event.stopPropagation()}
            >
                <img
                    src={image.src}
                    alt={image.caption}
                    className={styles.image}
                />
                <figcaption className={styles.caption}>
                    <span>{image.caption}</span>
                    {images.length > 1 && (
                        <span className={styles.counter}>
                            {index + 1} / {images.length}
                        </span>
                    )}
                </figcaption>
            </figure>

            {images.length > 1 && (
                <button
                    type="button"
                    className={`${styles.arrow} ${styles.next}`}
                    onClick={(event) => {
                        event.stopPropagation()
                        step(1)
                    }}
                >
                    <span aria-hidden="true">→</span>
                    <span className="sr-only">Next image</span>
                </button>
            )}
        </div>
    )
}
