import styles from './Home.module.scss'
import React from 'react'

export const SkillsAndRewardsComponent = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.col}>
                <h1>Skills & Expertise</h1>

                <div className={styles.row}>
                    <ul className={styles.list}>
                        <h2>Main Skills</h2>
                        <li>Graphic Design</li>
                        <li>Illustration</li>
                        <li>UI & UX Design</li>
                        <li>Acrylic Painting</li>
                    </ul>

                    <ul className={styles.list}>
                        <h2>Main Software</h2>
                        <li>Figma</li>
                        <li>Illustrator</li>
                        <li>Photoshop</li>
                        <li>Procreate</li>
                    </ul>
                </div>
            </div>
            <div className={styles.col}>
                <h1>Roles & Awards</h1>

                <div className={styles.row}>
                    <ul className={styles.list}>
                        <h2>Roles</h2>
                        <li>President of the HCC Art Club (2023)</li>
                        <li>PTK Honors Society with a 4.0 GPA</li>
                    </ul>

                    <ul className={styles.list}>
                        <h2>Awards</h2>
                        <li>PTK All Florida Academic Team (2023)</li>
                        <li>
                            4 pieces total selected for the 49th & 50th Annual HCC Student Jurried Art Exhibition (2023
                            & 2024)
                        </li>
                        <li>Art Ascent Magazine: Artist of Abstract | 2020 August Edition</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
