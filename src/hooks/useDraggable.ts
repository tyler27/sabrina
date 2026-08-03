import { useCallback, useEffect, useRef } from 'react'

// Shared so the most recently grabbed scrap always lands on top of the pile.
let topLayer = 50

/**
 * Makes an absolutely-positioned scrapbook element draggable, as in the design's
 * `[data-drag]` behaviour: pick it up, move it, and it stays where you drop it.
 *
 * Dragging is enabled for fine pointers only. On touch screens the original
 * implementation swallowed touchmove to drag, which traps the page scroll under
 * a finger — there the scraps stay pinned where they were laid out.
 */
export const useDraggable = <T extends HTMLElement>() => {
    const ref = useRef<T | null>(null)
    const enabled = useRef(false)

    useEffect(() => {
        enabled.current =
            window.matchMedia('(pointer: fine)').matches &&
            !window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const el = ref.current
        if (el && enabled.current) el.style.cursor = 'grab'
    }, [])

    const onPointerDown = useCallback((event: React.PointerEvent<T>) => {
        const el = ref.current
        if (!el || !enabled.current || event.button !== 0) return

        // Freeze the laid-out position as explicit left/top before moving, so the
        // first drag doesn't jump when the element was placed with right/bottom.
        const startLeft = parseFloat(el.style.left) || el.offsetLeft
        const startTop = parseFloat(el.style.top) || el.offsetTop
        el.style.left = `${startLeft}px`
        el.style.top = `${startTop}px`
        el.style.right = 'auto'
        el.style.bottom = 'auto'
        el.style.zIndex = String(++topLayer)
        el.style.cursor = 'grabbing'

        const originX = event.clientX
        const originY = event.clientY

        const onMove = (move: PointerEvent) => {
            el.style.left = `${startLeft + move.clientX - originX}px`
            el.style.top = `${startTop + move.clientY - originY}px`
        }

        const onUp = () => {
            el.style.cursor = 'grab'
            window.removeEventListener('pointermove', onMove)
            window.removeEventListener('pointerup', onUp)
            window.removeEventListener('pointercancel', onUp)
        }

        window.addEventListener('pointermove', onMove)
        window.addEventListener('pointerup', onUp)
        window.addEventListener('pointercancel', onUp)
        event.preventDefault()
    }, [])

    return { ref, onPointerDown }
}
