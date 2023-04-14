import { PROJECTS } from "@/constants";
import React from "react";
import { Tabs } from "@/components";
import styles from "@/styles/containers/projects.module.scss";

function Projects() {
  return (
    <div className={`container grid_container_for_cards ${styles.wrapper}`}>
      <Tabs tabs={["Web Apps", "Web Pages", "Games", "Command Line"]} data={PROJECTS} />
    </div>
  );
}

export default Projects;
