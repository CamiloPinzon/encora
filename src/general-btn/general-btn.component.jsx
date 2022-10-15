const GeneralBtn = ({ children, onClickHandler }) => {
  return <button onClick={onClickHandler}>{children}</button>;
};

export default GeneralBtn;
