import React, { useState } from 'react';
import Viewer from 'react-viewer';
import styles from './Gallery.module.scss';
import appStyles from '../../App.module.scss';
const emptyTestimonials = [];
export const GalleryProject = ({ title, subTitle, description, images, testimonials = emptyTestimonials }) => {
    const [visible, setVisible] = React.useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    return (React.createElement("div", { className: styles.project },
        React.createElement("h1", null, title),
        subTitle && React.createElement("h2", null, subTitle),
        React.createElement("h3", null, description),
        React.createElement("ul", { className: styles.imageGallery }, images.map((image, index) => {
            return (React.createElement("li", { key: image.src, onClick: () => {
                    setActiveIndex(index);
                    setVisible(true);
                }, className: styles.cardItem },
                React.createElement("img", { src: image.src, alt: image.alt })));
        })),
        React.createElement(Viewer, { drag: false, loop: true, rotatable: false, scalable: false, visible: visible, activeIndex: activeIndex, onClose: () => {
                setVisible(false);
            }, images: images }),
        testimonials.length > 0 && (testimonials?.map(t => {
            return (React.createElement(React.Fragment, null,
                React.createElement("p", { className: styles.testimonial },
                    "\"",
                    t?.text,
                    "\""),
                React.createElement("p", null,
                    "-",
                    t?.author)));
        }))));
};
const projects = [
    {
        title: 'Coffee Zen',
        description: 'Figma: Desktop, UX, Logo & Packaging Design',
        testimonials: [],
        images: [
            {
                src: '/public/assets/coffee_zen_branding.png',
                alt: 'Coffee Zen Figma: Desktop, UX, Logo & Packaging Design'
            },
            {
                src: '/public/assets/coffee_zen_login.png',
                alt: 'Coffee Zen Figma: Desktop, UX, Logo & Packaging Design'
            },
            {
                src: '/public/assets/coffee_zen_home.png',
                alt: 'Coffee Zen Figma: Desktop, UX, Logo & Packaging Design'
            },
            {
                src: '/public/assets/coffee_zen_cart.png',
                alt: 'Coffee Zen Figma: Desktop, UX, Logo & Packaging Design'
            },
            {
                src: '/public/assets/coffee_zen_product.png',
                alt: 'Coffee Zen Figma: Desktop, UX, Logo & Packaging Design'
            }
        ]
    },
    {
        title: "Sulley's Sweets",
        description: 'Figma: Mobile, UX & Logo Design',
        testimonials: [],
        images: [
            {
                src: '/public/assets/sulley_sweets_branding.png',
                alt: "Sulley's Sweets Zen Figma: Mobile, UX & Logo Design"
            },
            {
                src: '/public/assets/sulley_sweets_login.png',
                alt: "Sulley's Sweets Zen Figma: Mobile, UX & Logo Design"
            },
            {
                src: '/public/assets/sulley_sweets_home.png',
                alt: "Sulley's Sweets Zen Figma: Mobile, UX & Logo Design"
            },
            {
                src: '/public/assets/sulley_sweets_cart.png',
                alt: "Sulley's Sweets Zen Figma: Mobile, UX & Logo Design"
            },
            {
                src: '/public/assets/sulley_sweets_product.png',
                alt: "Sulley's Sweets Zen Figma: Mobile, UX & Logo Design"
            }
        ]
    },
    {
        title: "Heaven's Bell: Available in Barnes & Noble",
        description: 'Procreate: Digital Illustration & Cover Art',
        testimonials: [{
                text: "Having worked with Sabrina on my book Heaven's Bell in 2020, I was impressed with her professionalism, artistic abilities and genuine teamwork in the overall success of our publication and production.",
                author: 'Sherrie Barch'
            }],
        images: [
            {
                src: '/public/assets/sabrina_book_art.png',
                alt: "Heaven's Bell Procreate: Digital Illustration & Cover Art"
            },
            {
                src: '/public/assets/sabrina_book_art_page_1.png',
                alt: "Heaven's Bell Procreate: Digital Illustration & Cover Art"
            },
            {
                src: '/public/assets/sabrina_book_signing.png',
                alt: "Heaven's Bell Procreate: Digital Illustration & Cover Art"
            },
            {
                src: '/public/assets/sabrina_book_art_page_2.png',
                alt: "Heaven's Bell Procreate: Digital Illustration & Cover Art"
            },
            {
                src: '/public/assets/sabrina_book_art_page_3.png',
                alt: "Heaven's Bell Procreate: Digital Illustration & Cover Art"
            },
            {
                src: '/public/assets/sabrina_book_art_page_4.png',
                alt: "Heaven's Bell Procreate: Digital Illustration & Cover Art"
            }
        ]
    },
    {
        title: 'Personal Portfolio',
        description: 'Procreate: Digital Art',
        testimonials: [{
                text: "This is incredible",
                author: 'Four Walls Whisky'
            },
            {
                text: "This is incredible",
                author: 'Four Walls Whisky'
            }],
        images: [
            {
                src: '/public/assets/wedding_picture_tyler_sabrina.jpg',
                alt: "Our wedding drawing"
            },
            {
                src: '/public/assets/chapel_roan.jpg',
                alt: "Chapel roan"
            },
            {
                src: '/public/assets/golden_god.jpg',
                alt: "Golden god"
            },
            {
                src: '/public/assets/other_mommy.jpg',
                alt: "Other mommy"
            }
        ]
    },
    {
        title: '2024 FASTA Exhibition',
        description: 'Featured artwork exhibition',
        testimonials: [],
        images: [
            {
                src: '/public/assets/parents_art.jpg',
                alt: "My parents"
            },
            {
                src: '/public/assets/me_fastfa.jpg',
                alt: "Parents with art at FASTA Exhibition"
            }
        ]
    },
    {
        title: "2023 & 2024 HCC Student Juried Art Exhibition",
        description: 'Selected artwork',
        testimonials: [],
        images: [
            {
                src: '/public/assets/sabrina_moms_room_page_1.png',
                alt: "Art exhibition piece"
            },
            {
                src: '/public/assets/sabrina_moms_room_page_2.png',
                alt: "Art exhibition piece"
            },
            {
                src: '/public/assets/sabrina_moms_room_page_3.png',
                alt: "Art exhibition piece"
            },
            {
                src: '/public/assets/sabrina_moms_room_page_4.png',
                alt: "Art exhibition piece"
            },
            {
                src: '/public/assets/profile_picture.jpg',
                alt: "Me with artwork at exhibition"
            },
            {
                src: '/public/assets/sometimes_dead_is_better.png',
                alt: 'Sometimes Dead Is Better Illustrator'
            },
            {
                src: '/public/assets/wedding_sunset.png',
                alt: 'Wedding Sunset Photoshop project'
            }
        ]
    },
    {
        title: 'Horror Movie Posters',
        description: 'Illustrator: Digital Art',
        testimonials: [],
        images: [
            {
                src: '/public/assets/sabrina_movie_poster_1.jpg',
                alt: 'Illustrator project for school'
            },
            {
                src: '/public/assets/sabrina_movie_poster_2.png',
                alt: 'Illustrator project for school'
            },
            {
                src: '/public/assets/sabrina_pet_semetary.png',
                alt: 'Illustrator project for school'
            },
            {
                src: '/public/assets/sometimes_dead_is_better_2.png',
                alt: 'Illustrator project for school'
            },
            {
                src: '/public/assets/sabrina_pumpkins.png',
                alt: 'Illustrator project for school'
            }
        ]
    },
    {
        title: 'STKS',
        description: 'Photoshop: Graphic Design & Trade Show Display',
        testimonials: [],
        images: [
            {
                src: '/public/assets/sabrina_stks_art_1.png',
                alt: 'Photoshop trade show project for school'
            },
            {
                src: '/public/assets/sabrina_stks_art_2.jpg',
                alt: 'Photoshop trade show project for school'
            },
            {
                src: '/public/assets/sabrina_stks_art_3.png',
                alt: 'Photoshop trade show project for school'
            },
            {
                src: '/public/assets/sabrina_stks_art_4.png',
                alt: 'Photoshop trade show project for school'
            }
        ]
    },
    {
        title: 'Art Ascent Magazine Artists of Abstract | 2020 August edition',
        description: 'Procreate: Digital Art',
        testimonials: [],
        images: [
            {
                src: '/public/assets/sabrina_art_ascent_publication.png',
                alt: 'Procreate Art Magazine entry'
            }
        ]
    },
    {
        title: 'Paintings',
        description: 'Acrylic on canvas',
        testimonials: [],
        images: [
            {
                src: '/public/assets/sabrina_super_natural.png',
                alt: 'Acrylic Painting on Canvas'
            },
            {
                src: '/public/assets/sabrina_haunted_house.png',
                alt: 'Acrylic Painting on Canvas'
            },
            {
                src: '/public/assets/sabrina_rick_and_morty.png',
                alt: 'Acrylic Painting on Canvas'
            },
            {
                src: '/public/assets/sabrina_haunted_house_2.png',
                alt: 'Acrylic Painting on Canvas'
            },
            {
                src: '/public/assets/sabrina_it_painting.png',
                alt: 'Acrylic Painting on Canvas'
            },
            {
                src: '/public/assets/sabrina_snoopy_painting.png',
                alt: 'Acrylic Painting on Canvas'
            },
            {
                src: '/public/assets/sabrina_grinch_painting.png',
                alt: 'Acrylic Painting on Canvas'
            },
            {
                src: '/public/assets/sabrina_cat_and_the_hat.png',
                alt: 'Acrylic Painting on Canvas'
            }
        ]
    }
];
export const Gallery = () => {
    return (React.createElement("div", { className: styles.gallery }, projects.map((project, index) => {
        return (React.createElement(React.Fragment, { key: index },
            React.createElement(GalleryProject, { ...project }),
            index !== projects.length - 1 && React.createElement("div", { className: appStyles.hr })));
    })));
};
//# sourceMappingURL=Gallery.js.map