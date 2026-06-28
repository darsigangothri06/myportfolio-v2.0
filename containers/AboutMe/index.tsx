import "aos/dist/aos.css";

import { EMAIL_ID_REDIRECT_URL, PROJECTS_TAG } from "@/constants";

import { Button } from "@/components";
import Image from "next/image";
import React from "react";
import styles from "@/styles/containers/aboutme.module.scss";

function AboutMe() {
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.description} data-aos="fade-up">
            I own and ship production products end-to-end - from ideation to deployment. At Bryt, I built Tutor.ai from the ground up: an AI-powered app serving 15,000+ students with LLM tutoring agents, voice interaction, adaptive learning, and offline-first sync. Outside work, I build AI/ML tools like multi-agent research systems and RAG knowledge assistants.
          </p>
          <div className={styles.qualities}>
            <ul>
              <li data-aos="fade-up">Ship End-to-End</li>
              <li data-aos="fade-up">AI/LLM Products</li>
            </ul>
            <ul>
              <li data-aos="fade-up">Scalable Architecture</li>
              <li data-aos="fade-up">Team Mentorship</li>
            </ul>
          </div>
          <div className={styles.btn_grp} data-aos="fade-up">
            <a href={EMAIL_ID_REDIRECT_URL} target="_blank">
              <Button variant="secondary" size="large">
                Hire me
              </Button>
            </a>

            <a href={PROJECTS_TAG}>
              <Button size="large">View Projects</Button>
            </a>
          </div>
        </div>
        <div className={styles.right} data-aos="fade-up">
          <Image
            className={styles.img}
            alt="my profile image"
            width={350}
            height={352}
            src="/assets/gangothri.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
