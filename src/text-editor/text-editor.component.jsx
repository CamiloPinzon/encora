import { useState, useEffect } from "react";

import TextArea from "../text-area/text-area.component";
import GeneralBtn from "../general-btn/general-btn.component";

import './text-editor.styles.scss';

let stack = [];
let removed = [];

const TextEditor = () => {
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    stack = textValue.split("");
  }, [textValue]);

  const onChangeHandler = (e) => {
    setTextValue(e.target.value);
    removed = [];
  };

  const undoHandler = () => {
    if (stack.length > 0) {
      removed.push(stack.pop());
      setTextValue(stack.join(""));
    }
  };

  const redoHandler = () => {
    if (removed.length > 0) {
      stack.push(removed.pop());
      setTextValue(stack.join(""));
    }
  };

  return (
    <div className="text-editor-container">
      <TextArea onchangeHandler={onChangeHandler} textValue={textValue} />
      <div className="buttons-container">
        <GeneralBtn onClickHandler={undoHandler}>Undo</GeneralBtn>
        <GeneralBtn onClickHandler={redoHandler}>Redo</GeneralBtn>
      </div>
    </div>
  );
};

export default TextEditor;
