import React from 'react'
import NodeWrapper from '../../abstractNode/nodeWrapper'
export const TextNode = ({ id, data }) => {
    const defaultState = {
      text: data?.text || '{{input}}',
    };
  
    const fields = [{ label: 'Text', type: 'text', field: 'text' }];
    const sourceHandles = [{ id: `${id}-output`, position: 'Right' }];
    const targetHandles = [];
  
    return (
      <NodeWrapper
        id={id}
        label="Text"
        defaultState={defaultState}
        fields={fields}
        sourceHandles={sourceHandles}
        targetHandles={targetHandles}
      />
    );
  };