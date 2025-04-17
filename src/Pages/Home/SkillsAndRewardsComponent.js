import styles from './Home.module.scss';
import React from 'react';
export const SkillsAndRewardsComponent = () => {
    return (React.createElement("div", { className: styles.skills },
        React.createElement("div", { className: styles.col },
            React.createElement("h1", null, "Skills & Expertise"),
            React.createElement("div", { className: styles.row },
                React.createElement("ul", { className: styles.list },
                    React.createElement("h2", null, "Main Skills"),
                    React.createElement("li", null, "Graphic Design"),
                    React.createElement("li", null, "Illustration"),
                    React.createElement("li", null, "UI & UX Design"),
                    React.createElement("li", null, "Acrylic Painting")),
                React.createElement("ul", { className: styles.list },
                    React.createElement("h2", null, "Main Software"),
                    React.createElement("li", null, "Figma"),
                    React.createElement("li", null, "Illustrator"),
                    React.createElement("li", null, "Photoshop"),
                    React.createElement("li", null, "Procreate")))),
        React.createElement("div", { className: styles.col },
            React.createElement("h1", null, "Roles & Awards"),
            React.createElement("div", { className: styles.row },
                React.createElement("ul", { className: styles.list },
                    React.createElement("h2", null, "Roles"),
                    React.createElement("li", null, "President of the HCC Art Club (2023)"),
                    React.createElement("li", null, "PTK Honors Society with a 4.0 GPA"),
                    React.createElement("li", null, "PTK All Florida Academic Team (2023)")),
                React.createElement("ul", { className: styles.list },
                    React.createElement("h2", null, "Awards"),
                    React.createElement("li", null, "Artwork selected for 2024 FASTA Exhibition"),
                    React.createElement("li", null, "Artwork selected for the 2023 & 2024 HCC Student Juried Art Exhibition"),
                    React.createElement("li", null, "Art Ascent Magazine: Artist of Abstract | 2020 August Edition"))))));
};
//# sourceMappingURL=SkillsAndRewardsComponent.js.map