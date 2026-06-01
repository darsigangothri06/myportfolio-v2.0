import React from "react";
import TreeBranch from "./TreeBranch";
import TreeLeaf from "./TreeLeaf";

export default function ToolSkillsTree() {
  return (
    <ul data-aos="fade-up">
      <TreeBranch title="Arrays">
        <TreeLeaf title="Sorting" />
        <TreeLeaf title="Sliding Window" />
        <TreeLeaf title="Heaps" />
      </TreeBranch>

      <TreeBranch title="Trees & Graphs">
        <TreeLeaf title="BFS / DFS" />
        <TreeLeaf title="Backtracking" />
        <TreeLeaf title="Shortest Paths" />
      </TreeBranch>

      <TreeBranch title="DP & Greedy">
        <TreeLeaf title="Memoization" />
        <TreeLeaf title="Two Pointers" />
        <TreeLeaf title="Binary Search" />
      </TreeBranch>
    </ul>
  );
}
