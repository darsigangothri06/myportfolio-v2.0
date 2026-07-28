import { Button } from "@/components";
import { EMAIL_ID_REDIRECT_URL } from "@/constants";
import React from "react";
import WhatIDoSvg from "@/public/assets/WhatIDoSvg";
import styles from "@/styles/containers/whatIDo.module.scss";

function WhatIDo() {
  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.container}>
        <div className={styles.left} data-aos="fade-up">
          <WhatIDoSvg />
        </div>
        <div className={styles.right}>
          <h1 className={styles.title} data-aos="fade-up">
            Build&nbsp;•&nbsp;Ship&nbsp;•&nbsp;Scale
          </h1>
          <p className={styles.description} data-aos="fade-up">
            I build production AI systems: LLM tutoring agents with multi-model fallback, RAG pipelines with evaluation frameworks, multi-agent research systems with LangGraph, and voice AI (STT/TTS). I ship full-stack: Python/Django backends, Flutter mobile apps, and cloud infrastructure on Firebase, GCP &amp; AWS.
          </p>
          <a href={EMAIL_ID_REDIRECT_URL} target="_blank">
            <Button data-aos="fade-up" size="large" variant="secondary">
              Hire Me
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
