// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { MdOutlineTextSnippet } from "react-icons/md";


export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div className='main-node-container'>
      <div className='node-title-style'>
        <span >Text</span>
      </div>
      <div className='text-area-container'>
        <label>
          Text:
          <textarea className='text-area'
            value={currText}
            onChange={(e) => {
              handleTextChange(e);
              e.target.style.height = 'auto';
              e.target.style.height = e.target.scrollHeight + 'px';
            }}
            rows="1"
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
}
