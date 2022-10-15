const TextArea = ({ onchangeHandler, textValue }) => {
  return <textarea onChange={onchangeHandler} value={textValue} />;
};

export default TextArea;
