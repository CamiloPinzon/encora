import './text-area.styles.scss'

const TextArea = ({ onchangeHandler, textValue }) => {
  return <textarea className="text-area" onChange={onchangeHandler} value={textValue} />;
};

export default TextArea;
