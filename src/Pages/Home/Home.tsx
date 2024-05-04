import React from 'react'

import { ProjectGallery } from './ProjectGallery'
import { ContactMe } from './ContactMe'
import { SkillsAndRewardsComponent } from './SkillsAndRewardsComponent'
import { InfoComponent } from './InfoComponent'

import 'react-image-gallery/styles/css/image-gallery.css'
import styles from './Home.module.scss'

import appStyles from '../../App.module.scss'

const Home = () => (
    <div className={styles.home}>
        <InfoComponent />
        <div className={appStyles.hr} />
        <SkillsAndRewardsComponent />
        <div className={appStyles.hr} />
        <ProjectGallery />
        <div className={appStyles.hr} />
        <ContactMe />
    </div>
)

export default Home
