// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />

                {/* // New Nodes Using Node Abstraction */}
                <DraggableNode type='AbCustomInput' label='AbInput' />
                <DraggableNode type='Abllm' label='AbLLM' />
                <DraggableNode type='AbCustomOutput' label='AbOutput' />
                <DraggableNode type='AbText' label='AbText' />
            </div>
        </div>
    );
};
