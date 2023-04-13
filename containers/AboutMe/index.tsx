import "aos/dist/aos.css";

import { EMAIL_ID_REDIRECT_URL, RESUME_LOCAL_URL } from "@/constants";

import { Button } from "@/components";
import Image from "next/image";
import React from "react";
import styles from "@/styles/containers/aboutme.module.scss";

function AboutMe() {
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.container}>
        <div className={styles.left}>
          {/* <h1 className={styles.title} data-aos="fade-up">
            I can give the Best that you always wanted.
          </h1> */}
          <p className={styles.description} data-aos="fade-up">
            An optimistic developer who loves to work with several 
            new technologies and tools. A logical problem solver with strong competency skills 
            on Python. I love to stay consistent, self learn things and constantly push
            myself beyond conventional patterns. I am the person who strongly believes and keep track of 3Cs(Consistency, Collaboration, Contribution) in life.
          </p>
          <div className={styles.qualities}>
            <ul>
              <li data-aos="fade-up">Problem Solving</li>
              <li data-aos="fade-up">Highly Motivated</li>
            </ul>
            <ul>
              <li data-aos="fade-up">Efficient Code</li>
              <li data-aos="fade-up">High Quality</li>
            </ul>
          </div>
          <div className={styles.btn_grp} data-aos="fade-up">
            <a href={EMAIL_ID_REDIRECT_URL} target="_blank">
              <Button variant="secondary" size="large">
                Hire me
              </Button>
            </a>

            <a href={RESUME_LOCAL_URL} target="_blank">
              <Button size="large">Download Resume</Button>
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
