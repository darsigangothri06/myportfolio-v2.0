import React from "react";
import TreeBranch from "./TreeBranch";
import TreeLeaf from "./TreeLeaf";

export default function LanguageSkillsTree() {
  return (
    <ul data-aos="fade-up">
      <TreeBranch title="Languages">
        <TreeLeaf title="Python" />
        <TreeLeaf title="Dart" />
        <TreeLeaf title="JavaScript" />
        <TreeLeaf title="C" />
      </TreeBranch>

      <TreeBranch title="Databases">
        <TreeLeaf title="PostgreSQL" />
        <TreeLeaf title="MongoDB" />
        <TreeLeaf title="ChromaDB" />
      </TreeBranch>

      <TreeBranch title="Tools">
        <TreeLeaf title="Git" />
        <TreeLeaf title="Cursor AI" />
        <TreeLeaf title="Postman" />
      </TreeBranch>
    </ul>
  );
}
