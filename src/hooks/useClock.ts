import { useEffect, useState } from 'react'

const format = (date: Date): string => {
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const suffix = date.getHours() >= 12 ? 'PM' : 'AM'
    const hours = date.getHours() % 12 || 12
    return `${hours}:${minutes} ${suffix}`
}

/** Local wall-clock time for the menu bar, refreshed every 10s. */
export const useClock = (): string => {
    const [time, setTime] = useState(() => format(new Date()))

    useEffect(() => {
        const tick = () => setTime(format(new Date()))
        tick()
        const id = window.setInterval(tick, 10_000)
        return () => window.clearInterval(id)
    }, [])

    return time
}
