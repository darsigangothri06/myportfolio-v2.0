import {
  AIMLSkillsTree,
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
          <ul className={styles.skillsTree} data-aos="fade-up">
            <li data-aos="fade-up">
              <span className={styles.skillsTreeRoot} data-aos="fade-up">
                AI / ML
              </span>

              <AIMLSkillsTree />
            </li>
          </ul>

          <ul className={styles.skillsTree} data-aos="fade-up">
            <li data-aos="fade-up">
              <span className={styles.skillsTreeRoot} data-aos="fade-up">
                Development
              </span>

              <DevelopmentSkillsTree />
            </li>
          </ul>
          
          <ul className={styles.skillsTree} data-aos="fade-up">
            <li data-aos="fade-up">
              <span className={styles.skillsTreeRoot} data-aos="fade-up">
                DSA
              </span>

              <ToolSkillsTree />
            </li>
          </ul>

          <ul className={styles.skillsTree} data-aos="fade-up">
            <li data-aos="fade-up">
              <span className={styles.skillsTreeRoot} data-aos="fade-up">
                Languages &amp; Tools
              </span>

              <LanguageSkillsTree />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
