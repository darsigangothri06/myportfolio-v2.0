import React from "react";
import TreeBranch from "./TreeBranch";
import TreeLeaf from "./TreeLeaf";

export default function AIMLSkillsTree() {
  return (
    <ul data-aos="fade-up">
      <TreeBranch title="LLM">
        <TreeLeaf title="Gemini" />
        <TreeLeaf title="OpenAI" />
        <TreeLeaf title="LiteLLM" />
      </TreeBranch>

      <TreeBranch title="Frameworks">
        <TreeLeaf title="LangChain" />
        <TreeLeaf title="LangGraph" />
        <TreeLeaf title="MCP" />
      </TreeBranch>

      <TreeBranch title="Techniques">
        <TreeLeaf title="RAG" />
        <TreeLeaf title="Multi-Agent" />
        <TreeLeaf title="TTS / STT" />
      </TreeBranch>
    </ul>
  );
}
