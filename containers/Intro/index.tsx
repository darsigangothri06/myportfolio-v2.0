import { BsMouse } from "react-icons/bs";
import { Button } from "@/components";
import Image from "next/image";
import React from "react";
import { StatsCardProps } from "@/@types";
import styles from "@/styles/containers/intro.module.scss";

function Intro() {
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.content}>
            <p className={styles.greeting}>Hi There, I am -&gt;</p>
            <h1 className={styles.name}>Gangothri Darsi.</h1>
            <h3 className={styles.subtitle}>
              AI Engineer • Production LLM Systems &amp; Full-Stack
            </h3>
            <p className={styles.description}>
              AI Engineer building production LLM systems that serve real users. Built an AI tutoring platform serving 15,000+ students across 120+ schools, including Socratic tutoring agents, RAG pipelines, multi-agent orchestration, and voice AI. Full-stack: Python, Django, Flutter, LangChain, LangGraph.
            </p>
          </div>
          <div className={styles.stats}>
            <StatsCard count="1K" description="Daily Active Users" />
            <StatsCard count="15K" description="Students Impacted" />
            <StatsCard count="120" description="Schools Served" />
            <StatsCard count="3" description="AI Projects (OSS)" />
          </div>
          <a href="/files/DarsiGangothriResume.pdf" target="_blank">
            <Button size="large">Download Resume</Button>
          </a>
        </div>
        <div className={styles.right}>
          <Image
            alt="header image"
            src={"/assets/header.png"}
            width={418}
            height={305}
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;

function StatsCard({ count, description }: StatsCardProps) {
  return (
    <div className={styles.statsCard}>
      <h1>{count}+</h1>
      <p>{description}</p>
    </div>
  );
}
