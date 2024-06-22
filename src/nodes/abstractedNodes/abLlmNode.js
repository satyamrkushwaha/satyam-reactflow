import React from 'react'
import NodeWrapper from '../../abstractNode/nodeWrapper'

export const abLlmNode = (props) => {
    const fields = [];
    const sourceHandles = [{ id: `${props.id}-response`, position:'Right' }];
    const targetHandles = [
      { id: `${props.id}-system`, position: 'Left', style: { top: `${100/3}%` } },
      { id: `${props.id}-prompt`, position: 'Left', style: { top: `${200/3}%` } },
    ];
  
    return (
      <NodeWrapper
        {...props}
        label="Abstrated LLM"
        fields={fields}
        sourceHandles={sourceHandles}
        targetHandles={targetHandles}
      />
    );
  };