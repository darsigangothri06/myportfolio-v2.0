import { CODING_PROFILES } from "@/constants/codingProfiles";
import CodingProfileCard from "@/components/CodingProfileCard";
import React from "react";
import styles from "@/styles/containers/codingProfiles.module.scss";

function CodingProfiles() {
  return (
    <div className={`container ${styles.container}`}>
      <div className="grid_container_for_cards ">
        {CODING_PROFILES.map((profile) => (
          <CodingProfileCard key={profile.id} {...profile} />
        ))}
      </div>
    </div>
  );
}

export default CodingProfiles;
