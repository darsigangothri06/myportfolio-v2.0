import {
  DevelopmentSkillsTree,
  LanguageSkillsTree,
  ToolSkillsTree,
} from "@/components";

import React from "react";
import styles from "@/styles/containers/skills.module.scss";

export default function SkillsSection() {
  return (
    <div className={`${styles.skillsContainer} container`}>
      <div className={styles.skillsWrapper}>

        <div className={styles.skillsContent} data-aos="fade-up">
          {/* this tree is for the develpment/techstack related skills */}
          <ul className={styles.skillsTree} data-aos="fade-up">
            <li data-aos="fade-up">
              <span className={styles.skillsTreeRoot} data-aos="fade-up">
                Web Development
              </span>

              <DevelopmentSkillsTree />
            </li>
          </ul>
          
          {/* this tree will show what tools I use */}
          <ul className={styles.skillsTree} data-aos="fade-up">
            <li data-aos="fade-up">
              <span className={styles.skillsTreeRoot} data-aos="fade-up">
                Data Structures and Algorithms
              </span>

              <ToolSkillsTree />
            </li>
          </ul>

          {/* tree will display what languages I know */}
          <ul className={styles.skillsTree} data-aos="fade-up">
            <li data-aos="fade-up">
              <span className={styles.skillsTreeRoot} data-aos="fade-up">
                Tools and Languages
              </span>

              <LanguageSkillsTree />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
