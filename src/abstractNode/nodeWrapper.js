import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

export default function NodeWrapper({ id, data, label, fields, sourceHandles, targetHandles }) {

    const [state, setState] = useState(data);

    const handleChange = (field) => (e) => {
        setState((prevState) => ({
            ...prevState,
            [field]: e.target.value,
        }));
    };

    useState(() => {
        setState((prevState) => ({
            ...prevState,
            inputName: data?.inputName || id.replace('customInput-', 'input_'),
            outputName: data?.outputName || id.replace('customOutput-', 'output_'),
            text: data?.text || '{{input}}',
        }));
    }, []);

    return (
        <div className='main-node-container'>
            <div className='node-title-style'>
                <span>{label}</span>
            </div>
            <div className='input-area-container'>
                {fields.map(({ label, type, field }) => (
                    <label key={field}>
                        {label}:
                        {type === 'select' ? (
                            <select value={state[field]} onChange={handleChange(field)} className="nodrag">
                                {field === 'inputType' && (
                                    <>
                                        <option value="Text">Text</option>
                                        <option value="File">File</option>
                                    </>
                                )}
                                {field === 'outputType' && (
                                    <>
                                        <option value="Text">Text</option>
                                        <option value="Image">Image</option>
                                    </>
                                )}
                            </select>
                        ) : (
                            <input
                                className="nodrag"
                                type="text"
                                value={state[field]}
                                onChange={handleChange(field)}
                            />
                        )}
                    </label>
                ))}
            </div>
            {sourceHandles.map(({ id, position, style }) => (
                <Handle key={id} type="source" position={Position[position]} id={id} style={style} />
            ))}
            {targetHandles.map(({ id, position, style }) => (
                <Handle key={id} type="target" position={Position[position]} id={id} style={style} />
            ))}
        </div>
    );
};