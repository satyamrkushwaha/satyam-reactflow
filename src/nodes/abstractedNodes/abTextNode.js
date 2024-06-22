import React from 'react'
import NodeWrapper from '../../abstractNode/nodeWrapper'
export const AbTextNode = (props) => {
    const fields = [{ label: 'Text', type: 'text', field: 'text' }];
    const sourceHandles = [{ id: `${props.id}-output`, position: 'Right' }];
    const targetHandles = [];
  
    return (
      <NodeWrapper
        {...props}
        label="Text"
        fields={fields}
        sourceHandles={sourceHandles}
        targetHandles={targetHandles}
      />
    );
  };