// draggableNode.js

import { MdInput, MdOutput, MdOutlineTextSnippet, } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";

const typeToIcon = {
  customInput: MdInput,
  llm: FaCirclePlay,
  customOutput: MdOutput,
  text: MdOutlineTextSnippet,


  AbCustomInput: MdInput,
  Abllm: FaCirclePlay,
  AbCustomOutput: MdOutput,
  AbText: MdOutlineTextSnippet,

};

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  const IconComponent = typeToIcon[type];

  let bgColor = "#1C2536";
  if (type.startsWith("Ab")) {
    bgColor = 'rgba(28, 37, 54, 0.6)';
  }

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        minWidth: '80px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '8px',
        backgroundColor: bgColor,
        justifyContent: 'center',
        flexDirection: 'column'
      }}
      draggable
    >
      <div style={{ color: '#fff' }} className="draggable-node">{IconComponent && <IconComponent size={24} />}
        <span>{label}</span>
      </div>
    </div>
  );
};
