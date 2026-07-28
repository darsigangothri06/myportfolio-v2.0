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
            I build and ship production AI systems end-to-end. At Bryt, I built an AI tutoring platform serving 15,000+ students: Socratic tutoring agents with multi-model LLM fallback (GPT-4o, Gemini, Claude), voice AI (STT/TTS), offline hint generation for 10,000+ questions, and adaptive learning pipelines. I also build open-source AI tools: multi-agent research systems (LangGraph), RAG knowledge assistants (ChromaDB), and code root-cause analyzers (Tree-sitter + LLM).
          </p>
          <div className={styles.qualities}>
            <ul>
              <li data-aos="fade-up">Production LLM Systems</li>
              <li data-aos="fade-up">RAG &amp; Multi-Agent AI</li>
            </ul>
            <ul>
              <li data-aos="fade-up">Full-Stack Delivery</li>
              <li data-aos="fade-up">AI Architecture</li>
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
