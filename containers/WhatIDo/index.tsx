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
            Learn&nbsp;•&nbsp;Code&nbsp;•&nbsp;Develop
            {/* <br />
            Better Experience */}
          </h1>
          <p className={styles.description} data-aos="fade-up">
            I can build logics for user functionalities using my backend skills. I
            have experience of solving problems with efficient code using data structures and algorithms and also
            building web applications.
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
