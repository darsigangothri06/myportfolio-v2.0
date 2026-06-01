import React from "react";
import TreeBranch from "./TreeBranch";
import TreeLeaf from "./TreeLeaf";

export default function DevelopmentSkillsTree() {
  return (
    <ul data-aos="fade-up">
      <TreeBranch title="Mobile">
        <TreeLeaf title="Flutter" />
        <TreeLeaf title="Riverpod" />
        <TreeLeaf title="Hive" />
      </TreeBranch>

      <TreeBranch title="Backend">
        <TreeLeaf title="Django" />
        <TreeLeaf title="Node.js" />
        <TreeLeaf title="FastAPI" />
      </TreeBranch>

      <TreeBranch title="Cloud">
        <TreeLeaf title="Firebase" />
        <TreeLeaf title="GCP" />
        <TreeLeaf title="AWS S3" />
      </TreeBranch>
    </ul>
  );
}
