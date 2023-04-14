/**
 * @description Provides languages skill tree
 * @author @sobhanbera
 */

import React from "react";
import TreeBranch from "./TreeBranch";
import TreeLeaf from "./TreeLeaf";

export default function LanguageSkillsTree() {
  return (
    <ul data-aos="fade-up">
  
      {/* languages I use for competitive programming */}
      <TreeBranch title="Databases">
          <TreeLeaf title="MySQL" />
          <TreeLeaf title="MongoDB" />
      </TreeBranch>

      {/* integrated development environment tools */}
      <TreeBranch title="IDE">
        <TreeLeaf title="VS Code" />
      </TreeBranch>

      <TreeBranch title="Version Control">
          <TreeLeaf title="Git" />
          <TreeLeaf title="GitHub" />
      </TreeBranch>

      {/* operating systems */}
      <TreeBranch title="OS">
        <TreeLeaf title="Linux" />
      </TreeBranch>

      {/* languages I use for competitive programming */}
      <TreeBranch title="Languages">
        <TreeLeaf title="C" />
        <TreeLeaf title="Python" />
      </TreeBranch>

      <TreeBranch title="Competitive Programming">
          <TreeLeaf title="Leetcode" />
          <TreeLeaf title="Geeks For Geeks" />
          <TreeLeaf title="HackerRank" />
      </TreeBranch>
    </ul>
  );
}
