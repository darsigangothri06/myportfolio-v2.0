import {
  EMAIL_ID_REDIRECT_URL,
  FB_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LEETCODE_URL,
  LINKEDIN_URL,
  MY_EMAIL_ID,
  TOPMATE_URL,
} from "@/constants";
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import React, { useEffect } from "react";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { BiUser } from "react-icons/bi";
import styles from "@/styles/components/fixedSocials.module.scss";

function FixedSocials() {
  const [isCloseToFooter, setIsCloseToFooter] = React.useState(false);

  useEffect(() => {
    function checkIfCloseToFooter() {
      if (window.scrollY > 5000) setIsCloseToFooter(true);
      else setIsCloseToFooter(false);
    }

    window.addEventListener("scroll", checkIfCloseToFooter);

    return () => {
      window.removeEventListener("scroll", checkIfCloseToFooter);
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <a href={TOPMATE_URL} title="Book a 1:1 session on Topmate">
          <BiUser size={20} />
        </a>
        <a href={LEETCODE_URL}>
          <SiLeetcode size={20} />
        </a>
        <a href={GITHUB_URL}>
          <FiGithub size={20} />
        </a>
        <a href={EMAIL_ID_REDIRECT_URL}>
          <MdOutlineAlternateEmail size={20} />
        </a>
        <a href={LINKEDIN_URL}>
          <FiLinkedin size={20} />
        </a>
        <a href={INSTAGRAM_URL}>
          <FiInstagram size={20} />
        </a>
      </div>

      <div
        className={`${styles.line} ${isCloseToFooter ? null : styles.active}`}
      ></div>
    </div>
  );
}

export default FixedSocials;
