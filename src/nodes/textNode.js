// textNode.js

import { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';
export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const [variables, setVariables] = useState([]);

  const extractVariables = (text) => {
    const regex = /{{\s*(\w+)\s*}}/g;
    const matches = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1]);
    }
    return matches;
  };

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    setVariables(extractVariables(currText));
  }, [currText]);

  return (
    <div className='main-node-container'>
      <div className='node-title-style'>
        <span >Text</span>
      </div>
      <div className='text-area-container'>
        <label>
          Text:
          <textarea className='text-area nodrag'
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
      {variables.map((variable, index) => (
        <Handle
          key={`${id}-${variable}-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{
            top: `${((index + 1) / (variables.length + 1)) * 100}%`,
          }}
        />
      ))}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
}
