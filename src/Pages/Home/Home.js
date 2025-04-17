import React from 'react';
import { ProjectGallery } from './ProjectGallery';
import { ContactMe } from './ContactMe';
import { SkillsAndRewardsComponent } from './SkillsAndRewardsComponent';
import { InfoComponent } from './InfoComponent';
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from './Home.module.scss';
import appStyles from '../../App.module.scss';
const Home = () => (React.createElement("div", { className: styles.home },
    React.createElement(InfoComponent, null),
    React.createElement("div", { className: appStyles.hr }),
    React.createElement(SkillsAndRewardsComponent, null),
    React.createElement("div", { className: appStyles.hr }),
    React.createElement(ProjectGallery, null),
    React.createElement("div", { className: appStyles.hr }),
    React.createElement(ContactMe, null)));
export default Home;
//# sourceMappingURL=Home.js.map