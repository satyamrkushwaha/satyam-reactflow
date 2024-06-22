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
    return (
        <div style={{ width: 200, height: 80, border: '1px solid black'}}>
            <div>
                <span>{label}</span>
            </div>
            <div>
                {fields.map(({ label, type, field }) => (
                    <label key={field}>
                        {label}:
                        {type === 'select' ? (
                            <select value={state[field]} onChange={handleChange(field)}>
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