/**
 * Portfolio content, ported from the Claude Design `Project.dc.html` data map.
 *
 * `slug` values match the design's `?p=` keys so any link already shared in the
 * wild keeps resolving.
 */

export const asset = (file: string): string => `/public/assets/redesign/${file}`

/** Gallery filter buckets. */
export type CategorySlug = 'illustration' | 'branding' | 'digital-art' | 'animation' | 'exhibitions'

export interface Category {
    slug: CategorySlug
    /** Label shown on the gallery chips and Finder folders. */
    label: string
    /** Legacy `?cat=` values from the design, still honoured on inbound links. */
    aliases: string[]
}

export const categories: Category[] = [
    { slug: 'illustration', label: 'Illustration', aliases: [] },
    { slug: 'branding', label: 'Brand Identity', aliases: [] },
    { slug: 'digital-art', label: 'Digital Art', aliases: ['editorial'] },
    { slug: 'animation', label: 'Animation', aliases: ['painting'] },
    { slug: 'exhibitions', label: 'Exhibitions', aliases: ['uiux'] }
]

/** Resolves a `?cat=` value (current or legacy) to a category slug. */
export const resolveCategory = (value: string | null): CategorySlug | 'all' => {
    if (!value) return 'all'
    const wanted = value.toLowerCase()
    if (wanted === 'all') return 'all'
    const match = categories.find((category) => category.slug === wanted || category.aliases.includes(wanted))
    return match ? match.slug : 'all'
}

export interface MediaItem {
    src: string
    caption: string
    /** Rendered as an autoplaying muted loop rather than an image. */
    video?: boolean
}

export type HeroLayout =
    | { kind: 'cover'; src: string; position?: string }
    | { kind: 'contain'; src: string; background: string; position?: string }
    /** Un-cropped image sitting in the paper frame, sized to its own aspect. */
    | { kind: 'natural'; src: string }
    /** Four stacked finals instead of a single hero. */
    | { kind: 'grid'; images: string[] }

export type GalleryLayout =
    /** Masonry columns — the default scrapbook wall. */
    | { kind: 'columns' }
    /** Even grid, for series where each piece should read at the same size. */
    | { kind: 'grid'; columns: number }
    /** Centred row of fixed-width cards, for a handful of phone screens. */
    | { kind: 'centered' }

export interface Project {
    slug: string
    title: string
    /** Short kicker above the title. */
    tag: string
    year: string
    /** Descriptive category shown in the details card. */
    category: string
    /** Which gallery filter this project sits in. */
    filter: CategorySlug
    role: string
    tools: string
    blurb: string
    /** Paragraphs; may contain inline links. */
    description: string[]
    hero: HeroLayout
    gallery: GalleryLayout
    images: MediaItem[]
    /** Optional downloadable brand guidelines. */
    pdf?: { href: string; title: string; note: string }
    /** Card art and caption used on the pinboard and gallery wall. */
    card: {
        image: string
        label: string
        title: string
        aspect: '1' | '3/4' | '4/5'
        /** background-position for the card crop. */
        position?: string
        /** Placeholder colour behind the crop while the image loads. */
        tint: string
    }
}

export const projects: Project[] = [
    {
        slug: 'galleryshow',
        title: 'Custom Portraits',
        tag: 'Portrait commissions',
        year: '2026',
        category: 'Digital Art',
        filter: 'illustration',
        role: 'Portrait Illustrator',
        tools: 'Procreate, Photoshop',
        blurb: 'Custom hand-drawn artwork celebrating love, life & special moments.',
        description: [
            'I specialize in creating hand-drawn digital portraits that celebrate life’s most meaningful moments: from loved ones and family bonds, to weddings, anniversaries, and special occasions.',
            'Every portrait is carefully drawn by hand on a digital canvas, capturing personality, warmth, and emotion. Once complete, you can choose from museum-quality poster prints or UV-printed hardboard secured to beautifully ornate frames, turning your portrait into a lasting keepsake.',
            'You can commission your own custom portrait through my Etsy shop, <a href="https://www.etsy.com/shop/SabrinaDelilaArts" target="_blank" rel="noopener noreferrer">SabrinaDelilaArts</a>.'
        ],
        hero: { kind: 'cover', src: asset('img-1508.webp'), position: 'center 20%' },
        gallery: { kind: 'columns' },
        images: [
            { src: asset('wedding-sketch.webp'), caption: 'Line Art portrait' },
            { src: asset('img-1486.webp'), caption: 'Pet Portrait' },
            { src: asset('img-1504-2.webp'), caption: 'Mother & Child' },
            { src: asset('img-1505.webp'), caption: 'Engagement portrait' },
            { src: asset('untitled-artwork-33.webp'), caption: 'Chappell Roan portrait' },
            { src: asset('img-1506.webp'), caption: 'Family pet portrait' },
            { src: asset('selling-prints.webp'), caption: 'Selling prints at a festival' }
        ],
        card: {
            image: asset('img-1508.webp'),
            label: 'Digital art',
            title: 'Custom portraits',
            aspect: '3/4',
            position: 'center top',
            tint: '#8A74C1'
        }
    },
    {
        slug: 'children',
        title: 'Heaven’s Bell',
        tag: 'Book cover & interiors',
        year: '2020',
        category: 'Illustration',
        filter: 'illustration',
        role: 'Illustrator',
        tools: 'Procreate',
        blurb: 'Cover art, chapter illustrations, and marketing material for Heaven’s Bell.',
        description: [
            'I illustrated the cover and chapter art for Sherrie Barch’s children’s book Heaven’s Bell, plus her marketing material and book signing signage.',
            'Heaven’s Bell was written to create a safe space for families to have a conversation about death and dying in a natural and productive way, one that creates feelings of joy, inspiration, and gratitude for life. The book is available at Barnes & Noble and Amazon.',
            '“Having worked with Sabrina on my book Heaven’s Bell in 2020, I was impressed with her professionalism, artistic abilities and genuine teamwork in the overall success of our publication and production.” (Sherrie Barch)'
        ],
        hero: {
            kind: 'contain',
            src: asset('heavens-bell-hero.webp'),
            background: '#ffffff',
            position: 'center center'
        },
        gallery: { kind: 'grid', columns: 3 },
        images: [
            { src: asset('original-sketch-ch-1-2.webp'), caption: 'Ch. 1 original sketch' },
            { src: asset('heavens-bell-ch1-final.webp'), caption: 'Ch. 1 final artwork' },
            { src: asset('chapter-image-in-book.webp'), caption: 'Under the Stars: chapter spread' },
            { src: asset('heavens-bell-grandmother.webp'), caption: 'Grandmother embrace' },
            { src: asset('heavens-bell-cathedral.webp'), caption: 'Cathedral interior' },
            { src: asset('original-sketch-ch-10-pt-1-2.webp'), caption: 'Ch. 10 original sketch' }
        ],
        card: {
            image: asset('heavens-bell-card.webp'),
            label: 'Cover & illustrations',
            title: 'Heaven’s Bell',
            aspect: '1',
            position: 'left center',
            tint: '#A59CCF'
        }
    },
    {
        slug: 'cafe',
        title: 'Coffee Zen',
        tag: 'Brand identity',
        year: '2023',
        category: 'Branding',
        filter: 'branding',
        role: 'Brand & Visual Designer',
        tools: 'Illustrator, Figma, Photoshop',
        blurb: 'A calm, welcoming brand identity and storefront for a neighbourhood café.',
        description: [
            'Coffee Zen is a full brand identity and e-commerce concept for a neighborhood café, built around one feeling: the quiet calm of a slow morning with a good cup of coffee. I developed the logo, color palette, typography, and supporting graphics to carry that unhurried, welcoming tone across every touchpoint.',
            'The mark pairs a hand-drawn meditating figure with soft, earthy letterforms and a warm palette (terracotta, sage green, cream, and black), so it reads as approachable and grounded rather than corporate. It holds up small on an app icon and large on a storefront sign alike.',
            'From there I designed the digital experience: a welcoming homepage, a product page with playful specialty-blend packaging, and a clean cart and checkout flow, keeping spacing, color, and voice consistent so the brand feels like one cohesive place whether you meet it on the street or on your phone.'
        ],
        hero: { kind: 'cover', src: asset('coffee-zen-hero.webp') },
        gallery: { kind: 'grid', columns: 2 },
        pdf: {
            href: asset('coffee-zen-brand-guide.pdf'),
            title: 'Brand guidelines (PDF)',
            note: 'Logo usage, palette, and typography in one document.'
        },
        images: [
            { src: asset('coffee-zen-cart.webp'), caption: 'Cart & checkout' },
            { src: asset('coffee-zen-product.webp'), caption: 'Product page' },
            { src: asset('coffee-zen-guidelines-cover.webp'), caption: 'Brand guidelines cover' },
            { src: asset('coffee-zen-homepage.webp'), caption: 'Homepage' },
            { src: asset('img-3503.webp'), caption: 'Better Than Blood packaging' },
            { src: asset('img-1080.webp'), caption: 'Day Tripper Coffee packaging' }
        ],
        card: {
            image: asset('coffee-zen-hero.webp'),
            label: 'brand identity',
            title: 'Café visual system',
            aspect: '4/5',
            tint: '#CBACB1'
        }
    },
    {
        slug: 'triad',
        title: 'Mom’s Room',
        tag: 'Featured comic',
        year: '2025',
        category: 'Digital Art',
        filter: 'digital-art',
        role: 'Writer & Illustrator',
        tools: 'Photoshop',
        blurb: 'A short horror comic, featured in TRIAD Magazine 2025.',
        description: [
            'Mom’s Room is a short horror comic about my biggest fear as a child. I would wake up afraid and alone and traverse my dark house to my mom’s room for comfort. But one night when I peeked in her room, it wasn’t her.',
            'Nightmares and sleepless nights plagued my childhood, so I turned it into a spooky comic for all to get a shiver. It was selected for feature in TRIAD Magazine’s 2025 issue.',
            'I wrote, illustrated, and hand-lettered the full page, using a stark black-and-red palette to build tension panel by panel and let the final reveal land with a jolt.'
        ],
        hero: {
            kind: 'grid',
            images: [
                asset('moms-room-final-1.webp'),
                asset('moms-room-final-2.webp'),
                asset('moms-room-final-3.webp'),
                asset('moms-room-final-4.webp')
            ]
        },
        gallery: { kind: 'columns' },
        images: [
            { src: asset('moms-room-sketch-final.webp'), caption: 'Original thumbnail sketch' },
            { src: asset('moms-room-comic-page-final.webp'), caption: 'Final printed page' },
            { src: asset('me-holding-hcc-magazine.webp'), caption: 'Holding the printed issue' }
        ],
        card: {
            image: asset('moms-room-card.webp'),
            label: 'featured comic',
            title: 'TRIAD Magazine 2025',
            aspect: '3/4',
            tint: '#F1DB94'
        }
    },
    {
        slug: 'app',
        title: 'Sulley’s Sweets',
        tag: 'UI / UX concept',
        year: '2023',
        category: 'UI & UX',
        filter: 'branding',
        role: 'Product & UI Designer',
        tools: 'Figma',
        blurb: 'A mobile ordering concept for a playful dessert shop.',
        description: [
            'Sulley’s Sweets is a mobile app concept for browsing and ordering desserts, designed to feel as sweet and inviting as the products themselves.',
            'I designed the full flow (from menu browsing to checkout), focusing on big, tappable cards, clear pricing, and a cheerful, candy-bright interface.'
        ],
        pdf: {
            href: asset('sulleys-sweets-brand-guide.pdf'),
            title: 'Brand guidelines (PDF)',
            note: 'Logo usage, palette, and typography in one document.'
        },
        hero: {
            kind: 'contain',
            src: asset('sulleys-sweets-hero.webp'),
            background: '#7FC5E8',
            position: 'center center'
        },
        gallery: { kind: 'centered' },
        images: [
            { src: asset('sulleys-sweets-app-screens.webp'), caption: 'App screens' },
            { src: asset('sulleys-sweets-login.webp'), caption: 'Login screen' },
            { src: asset('sulleys-sweets-cart.webp'), caption: 'Cart & checkout' },
            { src: asset('sulleys-sweets-product.webp'), caption: 'Product detail' }
        ],
        card: {
            image: asset('sulleys-sweets-app-screens.webp'),
            label: 'ui / ux concept',
            title: 'Mobile app concept',
            aspect: '4/5',
            position: 'center top',
            tint: '#A59CCF'
        }
    },
    {
        slug: 'book',
        title: 'Incidents Around the House',
        tag: 'Horror genre illustration',
        year: '2026',
        category: 'Illustration',
        filter: 'illustration',
        role: 'Cover Illustrator',
        tools: 'Procreate, Photoshop',
        blurb: 'A moody, atmospheric book-cover concept for a horror novel.',
        description: [
            'Josh Malerman’s Incidents Around the House reignited my love for horror. His description of “Other Mommy” was so frightening I had to see what she looked like, so I drew her: so unnervingly tall she has to bend down inside Bela’s bedroom, her face constantly morphing like it’s made of liquid.',
            'When I posted my fan art on Instagram I was shocked when the author himself commented: “This is incredible. Gonna share it tomorrow. Thank you for this.”',
            'Later, when I discovered my favorite horror novel had been adapted into a theatrical play, I had to go see it. I flew to Connecticut to watch Josh Malerman and his acting group Hello Wow Town perform their musical version of Incidents Around the House at the Westport Library. It was just as scary as the book, with a giant horrifying Other Mommy puppet created by his wife Allison Laakko.',
            'After the play, I gifted him a print of my Other Mommy artwork. He said “Yes, you’re the one with the amazing artwork!” and signed my book “Sabrina, brilliant art.” It was one of the most validating experiences of my art career. That spark of inspiration led to an amazing experience I will never forget.'
        ],
        hero: { kind: 'cover', src: asset('incidents-jacket.webp'), position: 'center 42%' },
        gallery: { kind: 'columns' },
        images: [
            { src: asset('incidents-sketch.webp'), caption: 'First draft' },
            { src: asset('incidents-on-stage.webp'), caption: 'On the event stage' },
            { src: asset('incidents-2.webp'), caption: 'Cover art concept' },
            { src: asset('incidents-author.webp'), caption: 'With author Josh Malerman' },
            { src: asset('incidents-stage.webp'), caption: 'On stage at the book event' },
            { src: asset('authors-note.webp'), caption: 'Signed by Josh Malerman: “Brilliant art!”' }
        ],
        card: {
            image: asset('incidents-2.webp'),
            label: 'Horror genre illustration',
            title: 'Book cover concept art',
            aspect: '3/4',
            tint: '#F1DB94'
        }
    },
    {
        slug: 'trade',
        title: 'STKS: Give the Gift of Nostalgia',
        tag: 'Trade show display',
        year: '2024',
        category: 'Branding',
        filter: 'branding',
        role: 'Graphic Designer',
        tools: 'Photoshop, Illustrator',
        blurb: 'A retro ’90s-inspired promotional poster and trade-show display.',
        description: [
            'STKS is my mom’s ’90s passion project, revived: she created custom stick figure name signs and coloring pages, and I brought the whole thing back to life.',
            'For the brand I built a loud, nostalgic ’90s aesthetic (neon gradients, VHS textures, and pixel type) to sell the feeling of going back to a simpler time.',
            'In every STKS design there is a blue-eyed “Sabrina” stick person hidden to search for.',
            'The layout was designed to work as both a printed trade-show display and a scroll-stopping social graphic, with clear contact info anchored at the bottom.'
        ],
        hero: { kind: 'cover', src: asset('stks-hero.webp'), position: 'center 30%' },
        gallery: { kind: 'grid', columns: 3 },
        images: [
            { src: asset('stks-promotional-display.webp'), caption: 'Promotional display' },
            { src: asset('stks-tv-wall-poster.webp'), caption: 'TV wall poster' },
            { src: asset('stks-console-poster.webp'), caption: 'Console & cartridges poster' },
            { src: asset('img-2856-large.webp'), caption: 'Display table detail' },
            { src: asset('img-2858-large.webp'), caption: 'Brochures & name prints' }
        ],
        card: {
            image: asset('stks-promotional-display.webp'),
            label: 'poster design',
            title: 'Trade show display',
            aspect: '1',
            position: 'center top',
            tint: '#8A74C1'
        }
    },
    {
        slug: 'harvest',
        title: 'Spooky Posters',
        tag: 'Horror poster series',
        year: '2023–2026',
        category: 'Digital Art',
        filter: 'digital-art',
        role: 'Illustrator & Photo Editor',
        tools: 'Photoshop, Procreate',
        blurb: 'Horror and Halloween artwork made in Adobe Illustrator.',
        description: [
            'A collection of my horror and spooky artwork, made in Adobe Illustrator.',
            'I have always had a love for horror and Halloween, inspired by Stephen King books, horror movies, and all things that go bump in the night.',
            'Every year I go to a Halloween festival called Hulaween, and last year I decided to create a poster and tote bags to sell. Seeing my artwork carried around the festival by other Halloween lovers was easily the best part.'
        ],
        hero: {
            kind: 'contain',
            src: asset('spooky-posters-hero.webp'),
            background: '#1a0a1f',
            position: 'center center'
        },
        gallery: { kind: 'grid', columns: 3 },
        images: [
            { src: asset('hulaween-tote.webp'), caption: 'Hulaween tote bag' },
            { src: asset('img-7539-large.webp'), caption: 'Tote in hand' },
            { src: asset('strega-spell-in-sicily.webp'), caption: 'Strega: A Spell in Sicily' },
            { src: asset('img-3152-large.webp'), caption: 'Sometimes Dead is Better sketch' },
            { src: asset('img-4084-2.webp'), caption: 'Sometimes Dead is Better (color)' },
            { src: asset('spooky-final-composite.webp'), caption: 'Final composite' },
            { src: asset('img-4082-2.webp'), caption: 'Strega poster (green)' },
            { src: asset('img-4085-2.webp'), caption: 'Pet Sematary made entirely of text' },
            { src: asset('pet-sematary-text.webp'), caption: 'Pet Sematary made entirely of text' }
        ],
        card: {
            image: asset('spooky-posters-hero.webp'),
            label: 'Adobe Illustrator',
            title: 'Spooky Posters',
            aspect: '3/4',
            tint: '#F1DB94'
        }
    },
    {
        slug: 'campus',
        title: 'Children’s Book Sketches',
        tag: 'Ink sketches',
        year: '2024',
        category: 'Illustration',
        filter: 'illustration',
        role: 'Illustrator',
        tools: 'Ink, Procreate',
        blurb: 'Ink sketches for a children’s book set in a classroom.',
        description: [
            'A collection of ink sketches for a children’s book set in a classroom.',
            'These are the early observational drawings (kids at recess, desks, and school-day moments) that establish the characters and settings before anything gets colored.'
        ],
        hero: { kind: 'cover', src: asset('school-sketch.webp') },
        gallery: { kind: 'columns' },
        images: [
            { src: asset('recess-tug-of-war.webp'), caption: 'Recess: tug of war & jump rope' },
            { src: asset('untitled-artwork-34.webp'), caption: 'At the table' },
            { src: asset('untitled-artwork-35.webp'), caption: 'Story circle' },
            { src: asset('untitled-artwork-36.webp'), caption: 'Backpacks in profile' },
            { src: asset('untitled-artwork-37.webp'), caption: 'Heading to class' },
            { src: asset('untitled-artwork-38.webp'), caption: 'Waiting at the gate' }
        ],
        card: {
            image: asset('school-sketch.webp'),
            label: 'line drawing',
            title: 'Children’s Book sketches',
            aspect: '1',
            tint: '#FAF6FB'
        }
    },
    {
        slug: 'dreamtech',
        title: 'DJ Dreamtech',
        tag: 'Animation & merch',
        year: '2025',
        category: 'Animation',
        filter: 'animation',
        role: 'Illustrator, Animator & Merch Designer',
        tools: 'Procreate, After Effects',
        blurb: 'Animations and merchandise created for DJ Dreamtech.',
        description: [
            'DJ Dreamtech is an amazing artist (Also, my husband), and his sets are otherworldly. I animated an album cover and a sequence for a music video, both to express his psychedelic vibes.',
            'Every frame leans into the vibe he brings to the EDM community: warping checkerboards, saturated purples, and a cosmic logo pulsing overhead.',
            'The work spilled off screen too: I designed merch for his shows, including a pashmina that friends and fans can bring onto the dance floor.'
        ],
        hero: { kind: 'cover', src: asset('dj-dreamtech-still-frame-1.webp'), position: 'center bottom' },
        gallery: { kind: 'columns' },
        images: [
            { src: asset('dj-sketch-animation.mp4'), caption: 'DJ sketch animation', video: true },
            { src: asset('dreamtech-pash.webp'), caption: 'Dreamtech tapestry' },
            { src: asset('dj-set-animation.mp4'), caption: 'DJ set animation', video: true },
            { src: asset('dreamtech-album.mp4'), caption: 'Dreamtech album loop', video: true }
        ],
        card: {
            image: asset('dj-dreamtech-still-frame-1.webp'),
            label: 'animation still',
            title: 'DJ Animations',
            aspect: '1',
            tint: '#8A74C1'
        }
    },
    {
        slug: 'iceskater',
        title: 'Alysa Liu',
        tag: 'Olympic tribute',
        year: '2026',
        category: 'Animation',
        filter: 'animation',
        role: 'Illustrator & Animator',
        tools: 'Procreate, After Effects',
        blurb: 'An animated tribute to figure skater Alysa Liu’s 2026 Olympic gold.',
        description: [
            'I was so inspired by figure skater Alysa Liu winning gold for America in the 2026 Olympics.',
            'I wanted to capture her strength, beauty, and grace as she glided across the Olympic Rings on the ice, winning gold on her own terms, transcending the games for all future figure skaters.',
            'The videos on this page show her performance and the different stages of my animation process.'
        ],
        hero: { kind: 'cover', src: asset('ice-skater-still-frame.webp') },
        gallery: { kind: 'columns' },
        images: [
            { src: asset('ice-skating-video.mp4'), caption: 'Alysa Liu Gold Medal Performance', video: true },
            { src: asset('sketch-animation-ice.mp4'), caption: 'Sketch animation', video: true },
            { src: asset('sketch-background-animation.mp4'), caption: 'Background animation', video: true },
            { src: asset('final-ice-animation.mp4'), caption: 'Final animation', video: true }
        ],
        card: {
            image: asset('ice-skater-still-frame.webp'),
            label: 'animation still',
            title: 'Alysa Liu Animation',
            aspect: '1',
            tint: '#A59CCF'
        }
    },
    {
        slug: 'wedding',
        title: 'Exhibitions',
        tag: 'Juried & group shows',
        year: '2023–24',
        category: 'Awards',
        filter: 'exhibitions',
        role: 'Exhibiting Artist, HCC Art Club President',
        tools: 'Mixed media',
        blurb: 'A collection of my artwork on display in Hillsborough Community College gallery exhibitions.',
        description: [
            'A collection of photos from my artwork being displayed in galleries for Hillsborough Community College exhibitions: the 2024 FASTA HCC Faculty, Staff & Alumni Exhibition, the 2023 HCC Student Juried Art Exhibition, and the 2024 HCC Student Juried Art Exhibition.',
            'Alongside exhibiting, I served as President of the HCC Art Club, helping organize shows and bring student work onto the gallery walls.'
        ],
        hero: { kind: 'cover', src: asset('exhibitions-hero.webp') },
        gallery: { kind: 'grid', columns: 3 },
        images: [
            { src: asset('exhibition-at-the-show.webp'), caption: 'At the exhibition' },
            { src: asset('hcc-juried-2023.webp'), caption: '2023 HCC Student Juried Art Exhibition' },
            { src: asset('parent-portrait.webp'), caption: '2024 FASTA Exhibition' },
            { src: asset('hcc-juried-2024.webp'), caption: '2024 HCC Student Juried Art Exhibition' },
            { src: asset('roaches-gallery.webp'), caption: 'Photography 2023' },
            { src: asset('artascent-feature.webp'), caption: 'ArtAscent Magazine feature' }
        ],
        card: {
            image: asset('exhibitions-hero.webp'),
            label: 'Selected Artwork',
            title: 'Exhibitions',
            aspect: '4/5',
            tint: '#CBACB1'
        }
    },
    {
        slug: 'artascent',
        title: 'I Know Too Much',
        tag: 'Featured art',
        year: '2020',
        category: 'Digital Art',
        filter: 'digital-art',
        role: 'Artist',
        tools: 'Procreate',
        blurb: 'A painterly digital piece featured in ArtAscent Magazine, 2020.',
        description: [
            'I Know Too Much is a digital painting exploring the weight of awareness: a single, expressive eye rendered in loose, painterly strokes. It was selected as a Distinguished Artist feature in ArtAscent Magazine.',
            'The piece pairs a warm, saturated palette with rough brushwork to keep the image raw and emotional rather than polished.'
        ],
        hero: { kind: 'natural', src: asset('i-know-too-much.webp') },
        gallery: { kind: 'columns' },
        images: [],
        card: {
            image: asset('i-know-too-much.webp'),
            label: 'featured art',
            title: 'I Know Too Much',
            aspect: '1',
            tint: '#8A74C1'
        }
    },
    {
        slug: 'digitalart',
        title: 'Digital Art',
        tag: 'Illustrator',
        year: '2024',
        category: 'Digital Art',
        filter: 'digital-art',
        role: 'Illustrator',
        tools: 'Adobe Illustrator, Procreate',
        blurb: 'A selection of vector and digital illustration work.',
        description: [
            'This piece is part of my ongoing digital illustration practice, exploring color, shape, and character through vector and painterly tools.',
            'I use these studies to push my style in new directions, experimenting with palette and composition outside of client constraints.'
        ],
        hero: { kind: 'cover', src: asset('img-1287.webp') },
        gallery: { kind: 'columns' },
        images: [{ src: asset('img-1287.webp'), caption: 'Digital illustration' }],
        card: {
            image: asset('img-1287.webp'),
            label: 'digital art',
            title: 'Digital Art',
            aspect: '1',
            tint: '#A59CCF'
        }
    }
]

export const projectsBySlug = new Map(projects.map((project) => [project.slug, project]))

export const getProject = (slug?: string): Project | undefined => (slug ? projectsBySlug.get(slug) : undefined)

/**
 * The wall order used by the Gallery page, matching the design's column layout.
 * `artascent` and `digitalart` are reachable from project links but are not
 * pinned to the wall, exactly as in the design.
 */
export const galleryOrder: Project[] = [
    'galleryshow',
    'children',
    'harvest',
    'wedding',
    'cafe',
    'triad',
    'dreamtech',
    'app',
    'book',
    'iceskater',
    'trade',
    'campus'
]
    .map((slug) => projectsBySlug.get(slug))
    .filter((project): project is Project => Boolean(project))

/** How many pieces sit behind each Finder folder / gallery chip. */
export const countByCategory = (slug: CategorySlug): number =>
    galleryOrder.filter((project) => project.filter === slug).length

/** The eight pieces pinned to the home page's "Selected work" board. */
export const pinboardOrder: Project[] = [
    'galleryshow',
    'children',
    'cafe',
    'triad',
    'app',
    'dreamtech',
    'book',
    'wedding'
]
    .map((slug) => projectsBySlug.get(slug))
    .filter((project): project is Project => Boolean(project))
