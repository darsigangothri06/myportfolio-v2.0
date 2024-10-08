import Image from "next/image";
import { RxExternalLink } from "react-icons/rx";

import Bullet from "@/public/assets/Bullet";
import Button from "@/components/Button";
import { EXPERIENCE } from "@/constants";
import styles from "@/styles/containers/experience.module.scss";
import { stringShortner } from "@/utils";

function Experience() {
  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.timeline}>
        {EXPERIENCE.map(
          (
            {
              company,
              description,
              from,
              id,
              link,
              title,
              to,
              certificate,
              logo,
            },
            index
          ) => {
            return (
              <div
                key={id}
                className={`${styles.container} ${
                  index & 1 ? styles.left_container : styles.right_container
                }`}
              >
                <Bullet />
                <div className={`${styles.text_box}`}>
                  <span
                    className={
                      index & 1 ? styles.left_arrow : styles.right_arrow
                    }
                  ></span>
                  <div className={styles.text_box_top}>
                    <h1 className={styles.title}>
                      {title} @{company}
                    </h1>
                    <Image
                      src={`/assets/${logo}`}
                      width={45}
                      height={38}
                      alt={logo}
                      style={{
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <small className={styles.duration}>
                    {from} - {to}
                  </small>
                  <p className={styles.description}>
                    {stringShortner(description, 240)}
                  </p>
                  <div className={styles.btn_grp}>
                    {certificate && (
                      <a href={certificate} target="_blank">
                        <Button variant="secondary" size="small">
                          Certificate
                        </Button>
                      </a>
                    )}
                    <a href={link} target="_blank" title="visit the website">
                      <RxExternalLink
                        className={styles.redirect_icon}
                        size={25}
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Experience;
