type ModelViewerJSX = {
    src: string
    poster?: string
    autoplay?: boolean
    // ... others
}

declare module '*.css'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': ModelViewerJSX & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
        }
    }
}

export {}
