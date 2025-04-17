import styles from './Home.module.scss';
import ImageGallery from 'react-image-gallery';
import React from 'react';
const images = [
    {
        original: '/public/assets/wedding_picture_tyler_sabrina.jpg',
        description: 'Procreate Digital Art: Our Wedding Drawing'
    },
    {
        original: '/public/assets/chapel_roan.jpg',
        description: 'Procreate Digital Art: Chapel Roan'
    },
    {
        original: '/public/assets/golden_god.jpg',
        description: 'Procreate Digital Art: Golden God'
    },
    {
        original: '/public/assets/other_mommy.jpg',
        description: 'Procreate Digital Art: Other Mommy'
    },
    {
        original: '/public/assets/sabrina_art_ascent_publication.png',
        description: 'Procreate Digital Art: Art Ascent Magazine Artists of Abstract | 2020 August edition'
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
        original: '/public/assets/coffee_zen_branding.png',
        description: 'Figma: Branding Guide'
    },
    {
        original: '/public/assets/coffee_zen_product.png',
        description: 'Figma: Desktop, UX, Logo & Packaging Design'
    },
    {
        original: '/public/assets/sulley_sweets_branding.png',
        description: 'Figma: Branding Guide'
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
        original: '/public/assets/sabrina_moms_room_page_1.png',
        description: 'Illustrator Digital Art: 50th Annual HCC Student Juried Art Exhibition '
    }
];
export const ProjectGallery = () => {
    return (React.createElement("div", { className: styles.projectGallery },
        React.createElement("h1", null, "Showcase"),
        React.createElement(ImageGallery, { items: images, autoPlay: true, slideDuration: 2000, slideInterval: 5000, showThumbnails: false, showBullets: true })));
};
//# sourceMappingURL=ProjectGallery.js.map