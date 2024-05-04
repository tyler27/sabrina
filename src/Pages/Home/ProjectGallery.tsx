import styles from './Home.module.scss'
import ImageGallery from 'react-image-gallery'
import React from 'react'

const images = [
    {
        original: '/public/assets/sabrina_arts_branding.png',
        description: 'Figma: Branding Guide'
    },
    {
        original: '/public/assets/sabrina_arts_home.png',
        description: 'Figma: Desktop, Logo & UI/UX Design'
    },
    {
        original: '/public/assets/coffee_zen_login.png',
        description: 'Figma: Desktop, UX, Logo & Packaging Design'
    },
    {
        original: '/public/assets/coffee_zen_home.png',
        description: 'Figma: Desktop, UX, Logo & Packaging Design'
    },
    {
        original: '/public/assets/coffee_zen_branding.png',
        description: 'Figma: Branding Guide'
    },
    {
        original: '/public/assets/coffee_zen_product.png',
        description: 'Figma: Desktop, UX, Logo & Packaging Design'
    },
    {
        original: '/public/assets/coffee_zen_cart.png',
        description: 'Figma: Desktop, UX, Logo & Packaging Design'
    },
    {
        original: '/public/assets/sulley_sweets_branding.png',
        description: 'Figma: Branding Guide'
    },
    {
        original: '/public/assets/sulley_sweets_login.png',
        description: 'Figma: Mobile, UX/UI Design'
    },
    {
        original: '/public/assets/sulley_sweets_home.png',
        description: 'Figma: Mobile, UX/UI Design'
    },
    {
        original: '/public/assets/sulley_sweets_product.png',
        description: 'Figma: Mobile, UX/UI Design'
    },
    {
        original: '/public/assets/sulley_sweets_cart.png',
        description: 'Figma: Mobile, UX/UI Design'
    },
    {
        original: '/public/assets/sabrina_book_art.png',
        description: 'Procreate Digital Art: Illustrations'
    },
    {
        original: '/public/assets/sabrina_book_art_page_1.png',
        description: 'Procreate Digital Art: Illustrations'
    },
    {
        original: '/public/assets/sabrina_stks_art_2.jpg',
        description: 'Photoshop / Marketing Material'
    },
    {
        original: '/public/assets/sabrina_movie_poster_1.jpg',
        description: 'Illustrator / Marketing Material'
    },
    {
        original: '/public/assets/sabrina_haunted_house.png',
        description: 'Acrylic Painting'
    },
    {
        original: '/public/assets/sabrina_art_ascent_publication.png',
        description: 'Procreate Digital Art: Art Ascent Magazine Artists of Abstract | 2020 August edition'
    },
    {
        original: '/public/assets/sabrina_moms_room_page_1.png',
        description: 'Illustrator Digital Art: 50th Annual HCC Student Juried Art Exhibition '
    }
]

export const ProjectGallery = () => {
    return (
        <div className={styles.projectGallery}>
            <h1>Showcase</h1>
            <ImageGallery
                items={images}
                autoPlay={true}
                slideDuration={2000}
                slideInterval={5000}
                showThumbnails={false}
                showBullets={true}
            />
        </div>
    )
}
