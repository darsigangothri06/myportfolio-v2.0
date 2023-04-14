/**
 * @description Provides development skill tree
 * @author @sobhanbera
 */

import React from "react";
import TreeBranch from "./TreeBranch";
import TreeLeaf from "./TreeLeaf";

export default function DevelopmentSkillsTree() {
  return (
    <ul data-aos="fade-up">
      {/* web development skills */}

      {/* <TreeBranch title="Website">
        <TreeBranch title="Frontend">
          <TreeLeaf title="Next" />
          <TreeLeaf title="React" />
        </TreeBranch>

        <TreeBranch title="Backend">
          <TreeLeaf title="Express" />
        </TreeBranch>
      </TreeBranch> */}

      <TreeBranch title="Python">

        <TreeBranch title="Frontend">
          <TreeLeaf title="HTML" />
          <TreeLeaf title="CSS" />
          <TreeLeaf title="JS" />
        </TreeBranch>

        <TreeBranch title="Backend">
          <TreeLeaf title="Python" />
        </TreeBranch>

        <TreeBranch title="Database">
          <TreeLeaf title="SQLite" />
        </TreeBranch>

        <TreeBranch title="Framework">
          <TreeLeaf title="Django" />
        </TreeBranch>
      </TreeBranch>

      <TreeBranch title="JavaScript">
        <TreeBranch title="Frontend">
          <TreeLeaf title="React" />
          <TreeLeaf title="CSS" />
        </TreeBranch>

        <TreeBranch title="Backend">
          <TreeLeaf title="Node" />
        </TreeBranch>

        <TreeBranch title="Database">
          <TreeLeaf title="MongoDB" />
        </TreeBranch>
        
        <TreeBranch title="Framework">
            <TreeLeaf title="Express" />
        </TreeBranch>
      </TreeBranch>

      {/* deployment related tools */}
      <TreeBranch title="Deployment">
        <TreeLeaf title="Vercel" />
        <TreeLeaf title="Render" />
      </TreeBranch>

      
    </ul>
  );
}
