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
              An Enthusiastic Programmer.
            </h3>
            <p className={styles.description}>
              I&apos;m a Full Stack developer, Competitive Programmer with strong competency&nbsp;skills on Python. Currently, upskilling myself in Data&nbsp;Structures&nbsp;and&nbsp;Algorithms. I love to guide and support others.
            </p>
          </div>
          <div className={styles.stats}>
            {/* <BsMouse className={styles.mouse} color="var(--tertiary-text)" size={20} /> */}
            <StatsCard count="750" description="Problems Solved" />
            <StatsCard count="10" description="Projects Completed" />
            <StatsCard count="3" description="Certifications Completed" />
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
