import React, { useState } from 'react'
import Viewer from 'react-viewer'
import styles from './Gallery.module.scss'
import appStyles from '../../App.module.scss'

export interface GalleryProject {
    title: string;
    subTitle?: string;
    description: string;
    testimonial?: {
        text: string;
        author: string;
    }
    images: {
        src: string;
        alt: string;
    }[]
}

export const GalleryProject = ({ title, subTitle, description, images, testimonial }: GalleryProject) => {
    const [visible, setVisible] = React.useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className={styles.project}>
            <h1>{title}</h1>
            { subTitle && <h2>{subTitle}</h2> }
            <h3>{description}</h3>
            <ul className={styles.imageGallery}>
                {images.map((image, index) => {
                    return (
                        <li
                            onClick={() => {
                                setActiveIndex(index)
                                setVisible(true)
                            }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                            />
                        </li>
                    )
                })}
            </ul>
            <Viewer
                drag={false}
                loop={true}
                rotatable={false}
                scalable={false}
                visible={visible}
                activeIndex={activeIndex}
                onClose={() => {
                    setVisible(false)
                }}
                images={images}
            />
            {testimonial && (
                <>
                    <p className={styles.testimonial}>"{testimonial?.text}"</p>
                    <p>-{testimonial?.author}</p>
                </>
            )}
        </div>
    )
}

const projects: GalleryProject[] = [
    {
        title: 'Coffee Zen',
        description: 'Figma: Desktop, UX, Logo & Packaging Design',
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
        title: 'Heaven’s Bell: Available in Barnes & Noble',
        description: 'Procreate: Digital Illustration & Cover Art',
        testimonial: {
            text: "Having worked with Sabrina on my book Heaven's Bell in 2020, I was impressed with her professionalism, artistic abilities and genuine teamwork in the overall success of our publication and production.",
            author: 'Sherrie Barch'
        },
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
        title: "49th & 50th Annual HCC Student Juried Art Exhibition",
        subTitle: 'Moms Room',
        description: 'Illustrator',
        images: [
            {
                src: '/public/assets/sabrina_moms_room_page_1.png',
                alt: "Mom's Room: Illustrator"
            },
            {
                src: '/public/assets/sabrina_moms_room_page_2.png',
                alt: "Mom's Room: Illustrator"
            },
            {
                src: '/public/assets/sabrina_moms_room_page_3.png',
                alt: "Mom's Room: Illustrator"
            },
            {
                src: '/public/assets/sabrina_moms_room_page_4.png',
                alt: "Mom's Room: Illustrator"
            }
        ]
    },
    {
        title: 'Sometimes Dead Is Better',
        description: 'Illustrator',
        images: [
            {
                src: '/public/assets/sometimes_dead_is_better.png',
                alt: 'Sometimes Dead Is Better Illustrator'
            }
        ]
    },
    {
        title: 'Roaches',
        description: 'Photography',
        images: [
            {
                src: '/public/assets/roaches.png',
                alt: 'Photography photo for school'
            }
        ]
    },
    {
        title: 'Wedding Sunset',
        description: 'Photoshop',
        images: [
            {
                src: '/public/assets/wedding_sunset.png',
                alt: 'Photoshop project for school'
            }
        ]
    },
    {
        title: 'Horror Movie Posters',
        description: 'Illustrator: Digital Art',
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
]

export const Gallery = () => {
    return (
        <div className={styles.gallery}>
            {projects.map((project: GalleryProject, index) => {
                return (
                    <>
                        <GalleryProject
                            key={index}
                            {...project}
                        />
                        {index !== projects.length - 1 && <div className={appStyles.hr} />}
                    </>
                )
            })}
        </div>
    )
}
