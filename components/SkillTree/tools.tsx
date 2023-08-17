/**
 * @description Provides tools skill tree
 * @author @sobhanbera
 */

import React from "react";
import TreeBranch from "./TreeBranch";
import TreeLeaf from "./TreeLeaf";

export default function ToolSkillsTree() {
  return (
    <ul>
      {/* text editors I use */}
      <TreeBranch title="Arrays & Strings">
        <TreeLeaf title="Sorting" />
        <TreeLeaf title="Searching" />
        <TreeLeaf title="Heaps" />
      </TreeBranch>

      <TreeBranch title="Linked Lists">
        <TreeLeaf title="Fast & Slow" />
        <TreeLeaf title="Floyd's Cycle" />
      </TreeBranch>

      <TreeBranch title="Trees">
        <TreeBranch title="Traversals">
          <TreeLeaf title="BFS" />
          <TreeLeaf title="DFS" />
        </TreeBranch>
        <TreeLeaf title="Back Tracking" />
      </TreeBranch>
      <TreeBranch title="Graphs">
          <TreeBranch title="Matrix Traversals">
            <TreeLeaf title="BFS" />
            <TreeLeaf title="DFS" />
          </TreeBranch>
          <TreeLeaf title="Shortest Paths" />
      </TreeBranch>
      <TreeBranch title="Other Algorithms">
          <TreeLeaf title="Two Pointers" />
          <TreeLeaf title="Prefix Sum" />
      </TreeBranch>
    </ul>
  );
}
