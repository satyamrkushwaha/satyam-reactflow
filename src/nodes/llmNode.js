// llmNode.js

import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {

  return (
    <div className='main-node-container'>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{top: `${100/3}%`}}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{top: `${200/3}%`}}
      />
      <div className='node-title-style'>
        <span>LLM</span>
      </div>
      <div className='input-area-container'>
        <span>This is a LLM.</span>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </div>
  );
}
