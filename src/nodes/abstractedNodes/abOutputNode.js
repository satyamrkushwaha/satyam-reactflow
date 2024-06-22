import React from 'react'
import NodeWrapper from '../../abstractNode/nodeWrapper'

export const AbOutputNode = (props) => {
    const fields = [
      { label: 'Name', type: 'text', field: 'outputName' },
      { label: 'Type', type: 'select', field: 'outputType' },
    ];
    const sourceHandles = [];
    const targetHandles = [{ id: `${props.id}-value`, position: 'Left' }];
  
    return (
      <NodeWrapper
        {...props}
        label="Abstracted Output"
        fields={fields}
        sourceHandles={sourceHandles}
        targetHandles={targetHandles}
      />
    );
  };
  