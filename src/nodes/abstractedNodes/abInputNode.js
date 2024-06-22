import React from 'react'
import NodeWrapper from '../../abstractNode/nodeWrapper'

export const abInputNode = (props) => {
    const fields = [
      { label: 'Name', type: 'text', field: 'inputName' },
      { label: 'Type', type: 'select', field: 'inputType' },
    ];
    const sourceHandles = [{ id: `${props.id}-value`, position:'Right' }];
    const targetHandles = [];
  
    return (
      <NodeWrapper
        {...props}
        label="Abstracted Input"
        fields={fields}
        sourceHandles={sourceHandles}
        targetHandles={targetHandles}
      />
    );
  };